import Dialog from "./dialog";
import { alt } from "./index";
import List from "./list";

export class WifiScan {
  tProg: number;
  tScan: number;
  dlgScan: Dialog;
  dlgList: List;
  filter: string;
  list: string;
  onSelect: Function;
  options: string;
  title1: string;
  title2: string;
  prog: number;
  name: string;
  address: string;
  extra: string;
  constructor(
    title1 = "Scanning",
    title2 = "Select WiFi",
    callback = null,
    options = "",
    extra?: string
  ) {
    this.onSelect = callback;
    this.prog = 0;
    this.name = "";
    this.address = "";
    this.filter = null;
    this.list = "";
    this.options = options;
    this.title1 = title1;
    this.title2 = title2;
    this.extra = extra;
  }
  onCancel(): void {
    window.clearTimeout(this.tScan);
    window.clearInterval(this.tProg);
    this.dlgScan.dismiss();
  }
  onChoose(title, body): void {
    alt.setDebugEnabled(false);

    this.address = body;
    this.name = title;
    window.clearTimeout(this.tScan);

    if (this.onSelect) {
      this.onSelect(this.name, this.address);
    }
    this.dlgScan.dismiss();
    alt.setDebugEnabled(true);
  }
  onDevice(ssids): void {
    alt.setDebugEnabled(false);

    if (this.extra) {
      this.extra.split("|").forEach((item) => {
        this.dlgList.addItem(item);
      });
    }

    ssids = ssids.split("|");
    for (const ssid in ssids) {
      const id = ssids[ssid];
      if (this.filter == null || id.indexOf(this.filter) > -1) {
        if (this.list.indexOf(id) < 0) {
          this.dlgList.addItem(id);
          this.list += id + "|";
        }
      }
    }

    clearInterval(this.tProg);
    this.dlgScan.setTitle(this.title2);
    alt.setDebugEnabled(true);
  }
  select(filt): void {
    alt.setDebugEnabled(false);
    this.filter = filt;
    this.list = "";

    //Create dialog window and layout.
    const ops = /force/i.test(this.options) ? "NoCancel" : "AutoCancel";
    this.dlgScan = alt.createDialog(this.title1, ops);
    this.dlgScan.setOnCancel(this.onCancel);
    const lay = alt.createLayout("Linear", "vertical,fillxy");

    //Create list.
    this.dlgList = alt
      .createList("", 0.7, 0.5)
      .setMargins(0.04, 0.02, 0.04, 0.02);
    if (/large/i.test(this.options)) {
      this.dlgList.setTextMargins(0, 0.02, 0, 0.02);
    }
    this.dlgList.setOnTouch(this.onChoose);
    lay.addChild(this.dlgList);

    //Add dialog layout and show dialog.
    this.dlgScan.addLayout(lay);
    this.dlgScan.show();

    //Start scanning.
    alt.wifiScan(this.onDevice);

    //tScan = setTimeout( StopScan, 30000 );
    this.tProg = window.setInterval(this.showProgress, 500);

    alt.setDebugEnabled(true);
  }
  showProgress(): void {
    alt.setDebugEnabled(false);
    let dots = "";
    for (let i = 0; i < this.prog; i++) {
      dots += ".";
    }
    if (this.prog++ === 5) {
      this.prog = 0;
    }
    this.dlgScan.setTitle(this.title1 + dots);
    alt.setDebugEnabled(true);
  }
}

/*
//Wifi scanning object.
function _WifiScan(title1, title2, callback, options, extra) {
  const self = this;
  const ctrl = null,
    onSelect = callback;
  let dlgScan,
    dlgLst,
    tScan,
    tProg,
    prog = 0,
    name = "",
    address = "",
    filter = null;
  let list = "";

  this.Select = function (filt) {
    app.SetDebugEnabled(false);
    filter = filt;
    list = "";

    //Get options and default params.
    if (options) {
      options = options.toLowerCase();
    } else {
      options = "";
    }
    if (!title1) {
      title1 = "Scanning";
    }
    if (!title2) {
      title2 = "Select WiFi";
    }

    //Create dialog window and layout.
    const ops = options.indexOf("force") > -1 ? "NoCancel" : "AutoCancel";
    dlgScan = app.CreateDialog(title1, ops);
    dlgScan.SetOnCancel(self.OnCancel);
    const lay = app.CreateLayout("linear", "vertical,fillxy");
    //lay.SetPadding( 0.04, 0.02, 0.04, 0.02 );

    //Create list.
    dlgLst = app.CreateList("", 0.7, 0.5);
    dlgLst.SetMargins(0.04, 0.02, 0.04, 0.02);
    if (options.indexOf("large") > -1) {
      dlgLst.SetTextMargins(0, 0.02, 0, 0.02);
    }
    dlgLst.SetOnTouch(self.OnChoose);
    lay.AddChild(dlgLst);

    //Add dialog layout and show dialog.
    dlgScan.AddLayout(lay);
    dlgScan.Show();

    //Start scanning.
    app.WifiScan(this.OnDevice);

    //tScan = setTimeout( StopScan, 30000 );
    tProg = setInterval(this.ShowProgress, 500);

    app.SetDebugEnabled(true);
  };

  this.OnDevice = function (ssids) {
    app.SetDebugEnabled(false);

    if (extra) {
      const ext = extra.split("|");
      for (let i = 0; i < ext.length; i++) {
        dlgLst.AddItem(ext[i]);
      }
    }

    ssids = ssids.split("|");
    for (const ssid in ssids) {
      const id = ssids[ssid];
      if (filter == null || id.indexOf(filter) > -1) {
        if (list.indexOf(id) < 0) {
          dlgLst.AddItem(id);
          list += id + "|";
        }
      }
    }

    clearInterval(tProg);
    dlgScan.SetTitle(title2);
    app.SetDebugEnabled(true);
  };

  this.ShowProgress = function () {
    app.SetDebugEnabled(false);
    let dots = "";
    for (let i = 0; i < prog; i++) {
      dots += ".";
    }
    if (prog++ == 5) {
      prog = 0;
    }
    dlgScan.SetTitle(title1 + dots);
    app.SetDebugEnabled(true);
  };

  this.OnChoose = function (title, body) {
    app.SetDebugEnabled(false);

    address = body;
    name = title;
    clearTimeout(tScan);

    if (onSelect) {
      onSelect(name, address);
    }
    dlgScan.Dismiss();
    app.SetDebugEnabled(true);
  };

  this.OnCancel = function () {
    clearTimeout(tScan);
    clearInterval(tProg);
    dlgScan.Dismiss();
  };
}
*/
