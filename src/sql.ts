import { cordova } from "./cordova-plugin";

// eslint-disable-next-line
const root = this;

const READ_ONLY_REGEX = /^\s*(?:drop|delete|insert|update|create)\s/i;

const txLocks = {};

const nextTick =
  window.setImmediate ||
  function (fun): void {
    window.setTimeout(fun, 0);
  };

/*
Transaction batching object:
 */

class SQLitePluginTransaction {
  db;
  fn;
  error;
  success;
  txlock;
  readOnly;
  executes;
  finalized;
  constructor(db, fn, error, success, txlock, readOnly) {
    if (typeof fn !== "function") {
      /*
      This is consistent with the implementation in Chrome -- it
      throws if you pass anything other than a function. This also
      prevents us from stalling our txQueue if somebody passes a
      false value for fn.
       */
      throw new Error("transaction expected a function");
    }
    this.db = db;
    this.fn = fn;
    this.error = error;
    this.success = success;
    this.txlock = txlock;
    this.readOnly = readOnly;
    this.executes = [];
    if (txlock) {
      this.executeSql("BEGIN", [], null, function (tx, err) {
        throw new Error("unable to begin transaction: " + err.message);
      });
    }
  }

  start(): void {
    let err;
    try {
      this.fn(this);
      this.run();
    } catch (_error) {
      err = _error;

      /*
      If "fn" throws, we must report the whole transaction as failed.
       */
      txLocks[this.db.dbname].inProgress = false;
      this.db.startNextTransaction();
      if (this.error) {
        this.error(err);
      }
    }
  }

  executeSql(sql, values, success, error): void {
    if (this.readOnly && READ_ONLY_REGEX.test(sql)) {
      this.handleStatementFailure(error, {
        message: "invalid sql for a read-only transaction",
      });
      return;
    }
    const qid = this.executes.length;
    this.executes.push({
      success: success,
      error: error,
      qid: qid,
      sql: sql,
      params: values || [],
    });
  }

  handleStatementSuccess(handler, response): void {
    //let payload, rows;
    if (!handler) {
      return;
    }
    const rows = response.rows || [];
    const payload = {
      rows: {
        // eslint-disable-next-line
        item: function (i): any {
          return rows[i];
        },
        length: rows.length,
      },
      rowsAffected: response.rowsAffected || 0,
      insertId: response.insertId || void 0,
    };
    handler(this, payload);
  }

  handleStatementFailure(handler, response): void {
    if (!handler) {
      throw new Error(
        "a statement with no error handler failed: " + response.message
      );
    }
    if (handler(this, response)) {
      throw new Error("a statement error callback did not return false");
    }
  }

  run(): void {
    let i, qid, request, txFailure, waiting;
    txFailure = null;
    const tropts = [];
    const batchExecutes = this.executes;
    waiting = batchExecutes.length;
    this.executes = [];
    // eslint-disable-next-line
    const tx = this;
    const handlerFor = function (index, didSucceed): Function {
      return function (response): void {
        let err;
        try {
          if (didSucceed) {
            tx.handleStatementSuccess(batchExecutes[index].success, response);
          } else {
            tx.handleStatementFailure(batchExecutes[index].error, response);
          }
        } catch (_error) {
          err = _error;
          if (!txFailure) {
            txFailure = err;
          }
        }
        if (--waiting === 0) {
          if (txFailure) {
            tx.abort(txFailure);
          } else if (tx.executes.length > 0) {
            /*
            new requests have been issued by the callback
            handlers, so run another batch.
             */
            tx.run();
          } else {
            tx.finish();
          }
        }
      };
    };
    i = 0;
    const mycbmap = {};
    while (i < batchExecutes.length) {
      request = batchExecutes[i];
      qid = request.qid;
      mycbmap[qid] = {
        success: handlerFor(i, true),
        error: handlerFor(i, false),
      };
      tropts.push({
        qid: qid,
        sql: request.sql,
        params: request.params,
      });
      i++;
    }
    const mycb = function (result): void {
      let q, r, res, type, _i, _len;
      for (_i = 0, _len = result.length; _i < _len; _i++) {
        r = result[_i];
        type = r.type;
        qid = r.qid;
        res = r.result;
        q = mycbmap[qid];
        if (q) {
          if (q[type]) {
            q[type](res);
          }
        }
      }
    };
    cordova.exec(mycb, null, "SQLitePlugin", "backgroundExecuteSqlBatch", [
      {
        dbargs: {
          dbname: this.db.dbname,
        },
        executes: tropts,
      },
    ]);
  }

  abort(txFailure): void {
    if (this.finalized) {
      return;
    }
    // eslint-disable-next-line
    const tx = this;
    const succeeded = function (tx): void {
      txLocks[tx.db.dbname].inProgress = false;
      tx.db.startNextTransaction();
      if (tx.error) {
        tx.error(txFailure);
      }
    };
    const failed = function (tx, err): void {
      txLocks[tx.db.dbname].inProgress = false;
      tx.db.startNextTransaction();
      if (tx.error) {
        tx.error(new Error("error while trying to roll back: " + err.message));
      }
    };
    this.finalized = true;
    if (this.txlock) {
      this.executeSql("ROLLBACK", [], succeeded, failed);

      this.run();
    } else {
      succeeded(tx);
    }
  }

  finish(): void {
    if (this.finalized) {
      return;
    }
    // eslint-disable-next-line
    const tx = this;
    const succeeded = function (tx): void {
      txLocks[tx.db.dbname].inProgress = false;
      tx.db.startNextTransaction();
      if (tx.success) {
        tx.success();
      }
    };
    const failed = function (tx, err): void {
      txLocks[tx.db.dbname].inProgress = false;
      tx.db.startNextTransaction();
      if (tx.error) {
        tx.error(new Error("error while trying to commit: " + err.message));
      }
    };
    this.finalized = true;
    if (this.txlock) {
      this.executeSql("COMMIT", [], succeeded, failed);
      this.run();
    } else {
      succeeded(tx);
    }
  }
}

class SQLitePlugin {
  openDBs = {};
  static databaseFeatures = { isSQLitePluginDatabase: true };
  openargs;
  dbname;
  openSuccess;
  openError;
  constructor(openargs, openSuccess, openError) {
    console.log("SQLitePlugin openargs: " + JSON.stringify(openargs));
    if (!(openargs && openargs["name"])) {
      throw new Error(
        "Cannot create a SQLitePlugin instance without a db name"
      );
    }
    const dbname = openargs.name;
    this.openargs = openargs;
    this.dbname = dbname;
    this.openSuccess = openSuccess;
    this.openError = openError;
    this.openSuccess ||
      (this.openSuccess = function (): void {
        console.log("DB opened: " + dbname);
      });
    this.openError ||
      (this.openError = function (e): void {
        console.log(e.message);
      });
    this.open(this.openSuccess, this.openError);
  }
  addTransaction(t): void {
    if (!txLocks[this.dbname]) {
      txLocks[this.dbname] = {
        queue: [],
        inProgress: false,
      };
    }
    txLocks[this.dbname].queue.push(t);
    this.startNextTransaction();
  }
  transaction(fn, error, success): void {
    if (!this.openDBs[this.dbname]) {
      error("database not open");
      return;
    }
    this.addTransaction(
      new SQLitePluginTransaction(this, fn, error, success, true, false)
    );
  }
  readTransaction(fn, error, success): void {
    if (!this.openDBs[this.dbname]) {
      error("database not open");
      return;
    }
    this.addTransaction(
      new SQLitePluginTransaction(this, fn, error, success, true, true)
    );
  }
  startNextTransaction(): void {
    // eslint-disable-next-line
    const self = this;
    nextTick(function () {
      const txLock = txLocks[self.dbname];
      if (txLock.queue.length > 0 && !txLock.inProgress) {
        txLock.inProgress = true;
        txLock.queue.shift().start();
      }
    });
  }
  // eslint-disable-next-line
  open(success, error): any {
    const onSuccess = (function (_this) {
      // eslint-disable-next-line
      return function (): any {
        return success(_this);
      };
    })(this);
    if (!(this.dbname in this.openDBs)) {
      this.openDBs[this.dbname] = true;
      cordova.exec(onSuccess, error, "SQLitePlugin", "open", [this.openargs]);
    } else {
      /*
      for a re-open run onSuccess async so that the openDatabase return value
      can be used in the success handler as an alternative to the handler's
      db argument
       */
      nextTick(function () {
        return onSuccess();
      });
    }
  }

  close(success, error): void {
    if (this.dbname in this.openDBs) {
      if (txLocks[this.dbname] && txLocks[this.dbname].inProgress) {
        error(
          new Error(
            "database cannot be closed while a transaction is in progress"
          )
        );
        return;
      }
      delete this.openDBs[this.dbname];
      cordova.exec(success, error, "SQLitePlugin", "close", [
        {
          path: this.dbname,
        },
      ]);
    }
  }

  executeSql(statement, params, success, error): void {
    //let myerror, myfn, mysuccess;
    // eslint-disable-next-line
    const mysuccess = function (t, r): any {
      if (success) {
        return success(r);
      }
    };
    // eslint-disable-next-line
    const myerror = function (t, e): any {
      if (error) {
        return error(e);
      }
    };
    const myfn = function (tx): void {
      tx.executeSql(statement, params, mysuccess, myerror);
    };
    this.addTransaction(
      new SQLitePluginTransaction(this, myfn, null, null, false, false)
    );
  }
}

const dblocations = ["docs", "libs", "nosync"];

const SQLiteFactory = {
  /*
  NOTE: this function should NOT be translated from Javascript
  back to CoffeeScript by js2coffee.
  If this function is edited in Javascript then someone will
  have to translate it back to CoffeeScript by hand.
   */
  // eslint-disable-next-line
  opendb: function (...args): any {
    let errorcb, okcb, openargs;
    if (args.length < 1) {
      return null;
    }
    const first = args[0];
    openargs = null;
    okcb = null;
    errorcb = null;
    if (first.constructor === String) {
      openargs = {
        name: first,
      };
      if (args.length >= 5) {
        okcb = args[4];
        if (args.length > 5) {
          errorcb = args[5];
        }
      }
    } else {
      openargs = first;
      if (args.length >= 2) {
        okcb = args[1];
        if (args.length > 2) {
          errorcb = args[2];
        }
      }
    }
    const dblocation = openargs.location
      ? dblocations[openargs.location]
      : null;
    openargs.dblocation = dblocation || dblocations[0];
    if (!!openargs.createFromLocation && openargs.createFromLocation === 1) {
      openargs.createFromResource = "1";
    }
    return new SQLitePlugin(openargs, okcb, errorcb);
  },
  deleteDb: function (first, success, error): void {
    let dblocation;
    const args = { path: "path", dblocation };
    if (first.constructor === String) {
      args.path = first;
      args.dblocation = dblocations[0];
    } else {
      if (!(first && first["name"])) {
        throw new Error("Please specify db name");
      }
      args.path = first.name;
      dblocation = first.location ? dblocations[first.location] : null;
      args.dblocation = dblocation || dblocations[0];
    }
    delete SQLitePlugin.prototype.openDBs[args.path];
    return cordova.exec(success, error, "SQLitePlugin", "delete", [args]);
  },
};

export const sqlitePlugin = {
  sqliteFeatures: {
    isSQLitePlugin: true,
  },
  openDatabase: SQLiteFactory.opendb,
  deleteDatabase: SQLiteFactory.deleteDb,
};
