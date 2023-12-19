import { alt } from "./index";
import Dialog from "./dialog";
import List from "./list";

type ListItem = { title: string; check: boolean };

//Convert array to | separated list.
function toList(data: string | ListItem[], options = ""): string {
  let list =
    typeof data !== "string"
      ? data.map((title, check) => `${title}::${check}`).join(",")
      : data;

  if (/sun-moon/i.test(options)) {
    list = list.replace(/:true/g, ":[fa-sun-o]");
    list = list.replace(/:false/g, ":[fa-moon-o]");
  } else {
    list = list.replace(/:false/g, ":[fa-square-o]");
    list = list.replace(/:true/g, ":[fa-check-square-o]");
  }
  return list;
}

export class CheckList {
  dlg: Dialog;
  lst1: List;
  onFinish: Function;
  options: string;
  constructor(title, list, callback, width, height, options = "") {
    alt.setDebugEnabled(false);

    //const self = this;
    this.options = options;
    this.onFinish = callback;

    //Create dialog window and layout.
    this.dlg = alt.createDialog(title, options).setTitleHeight(42);

    const w = width > -1 ? width : 0.75;
    const h = height > -1 ? height : 0.75;
    const lay = alt
      .createLayout("Linear", "vertical,fillxy,Center")
      .setPadding(4, 4, 4, 4, "dip");
    const layHoriz = alt.addLayout(lay, "Linear", "Horizontal");

    //Create list.
    const orient = alt.getOrientation();
    const minW = orient === "Landscape" ? 0.1 : 0.2;
    const btnWidth = w / 3 > minW ? w / 3 : minW;
    const btnHeight = orient === "Landscape" ? 0.08 : 0.08;
    this.lst1 = alt
      .createList(
        toList(list, options),
        w,
        h - btnHeight - 42,
        "Horiz,ShowScroll"
      )
      .setIconMargins(8, 2, 0, 0, "dip")
      .setIconSize(22, "dip");
    if (/compact/i.test(options)) {
      this.lst1.setDivider(-0.007, "#00000000");
    } else {
      this.lst1.setDivider(0, "#00000000");
    }
    this.lst1.setOnTouch(this.onChoose);
    layHoriz.addChild(this.lst1);

    const largeFont = /largefont/i.test(options);
    const layBtns = alt.createLayout("Linear", "horizontal,center");
    alt
      .addButton(layBtns, "Cancel", btnWidth, btnHeight, "")
      .setOnTouch(this.onCancel)
      .setTextSize(largeFont ? 18 : 12);
    alt
      .addButton(layBtns, "OK", btnWidth, btnHeight, "")
      .setOnTouch(this.onOk)
      .setTextSize(largeFont ? 18 : 12);
    lay.AddChild(layBtns);

    //Add dialog layout and show dialog.
    this.dlg.addLayout(lay);
    this.dlg.show();

    alt.setDebugEnabled(true);
  }
  //Handle user selection
  onChoose(title, body, icon, index): void {
    if (/sun-moon/i.test(this.options)) {
      this.lst1.setItemByIndex(
        index,
        null,
        null,
        icon === "\uf185" ? "[fa-moon-o]" : "[fa-sun-o]"
      );
    } else {
      this.lst1.setItemByIndex(
        index,
        null,
        null,
        icon === "\uf046" ? "[fa-square-o]" : "[fa-check-square-o]"
      );
    }
  }

  //Handle OK button
  onOk(): void {
    const list = this.lst1.getList().map((d) => ({
      title: d.title,
      check: /sun-moon/i.test(this.options)
        ? d.image === "\uf185"
          ? true
          : false
        : d.image === "\uf046"
        ? true
        : false,
    }));

    if (this.onFinish) {
      this.onFinish(list);
    }
    this.dlg.dismiss();
  }

  //Handle cancel button.
  onCancel(): void {
    this.dlg.dismiss();
    if (this.onFinish) {
      this.onFinish(null);
    }
  }
  setList(): CheckList {
    return this;
  }
  show(): void {
    this.dlg.show();
  }
}

/*
//Checklist dialog class.
function _CheckList(title, list, callback, width, height, options) {
    var self = this;
    var dlg, onFinish = callback;
    var lst1//,lst2,lst3;

    this.Show = function (filt) {
        app.SetDebugEnabled(false);

        //Get options and default params.
        if (options) options = options.toLowerCase();
        else options = "";

        //Create dialog window and layout.
        //var ops = (options.indexOf("force")>-1?"NoCancel":"AutoCancel");
        dlg = app.CreateDialog(title, options)//options+"Kiosk" );
        dlg.SetTitleHeight(42);

        var w = width > -1 ? width : 0.75;
        var h = height > -1 ? height : 0.75;
        var lay = app.CreateLayout("linear", "vertical,fillxy,Center");
        lay.SetPadding(4, 4, 4, 4, "dip")
        var layHoriz = app.CreateLayout("linear", "Horizontal");
        lay.AddChild(layHoriz)

        //Create first list.
        var orient = app.GetOrientation()
        var minW = (orient == "Landscape" ? 0.1 : 0.2)
        var btnWidth = (w / 3 > minW ? w / 3 : minW);
        var btnHeight = (orient == "Landscape" ? 0.08 : 0.08)
        lst1 = app.CreateList(toList(list), w, h - btnHeight - 42, "Horiz,ShowScroll");
        //lst1.SetTextMargins( 0,0,0,0 )
        //lst1.SetTextSize( 15 )
        lst1.SetIconMargins(8, 2, 0, 0, "dip")
        lst1.SetIconSize(22, "dip")
        if (options.indexOf("compact") > -1) lst1.SetDivider(-0.007, "#00000000")
        else lst1.SetDivider(0, "#00000000")
        lst1.SetOnTouch(self.OnChoose);
        layHoriz.AddChild(lst1);

        //Create OK and Cancel buttons.
        var orient = app.GetOrientation();
        //var textWidth = (orient=="Portrait" ? 0.8 : 0.5 );
        var largeFont = (options.indexOf("largefont") > -1);
        //var btnWidth = -1
        var layBtns = app.CreateLayout("linear", "horizontal,center");
        //layBtns.SetMargins( 0, 0.02, 0, 0.01 );
        var btnTxtCancel = app.CreateButton("Cancel", btnWidth, btnHeight, "");
        btnTxtCancel.SetOnTouch(self.OnCancel);
        btnTxtCancel.SetTextSize(largeFont ? 18 : 12);
        layBtns.AddChild(btnTxtCancel);
        var btnTxtOK = app.CreateButton("OK", btnWidth, btnHeight, "");
        btnTxtOK.SetOnTouch(self.OnOk);
        btnTxtOK.SetTextSize(largeFont ? 18 : 12);
        layBtns.AddChild(btnTxtOK);
        lay.AddChild(layBtns);

        //Add dialog layout and show dialog.
        dlg.AddLayout(lay);
        dlg.Show();

        app.SetDebugEnabled(true);
    }

    //Handle user selection
    this.OnChoose = function (title, body, icon, index) {
        //app.SetDebugEnabled( false );

        if (options.indexOf("sun-moon") > -1)
            lst1.SetItemByIndex(index, null, null, (icon == "\uf185" ? "[fa-moon-o]" : "[fa-sun-o]"))
        else
            lst1.SetItemByIndex(index, null, null, (icon == "\uf046" ? "[fa-square-o]" : "[fa-check-square-o]"))
    }

    //Handle OK button
    this.OnOk = function () {
        var out = []
        var data = lst1.GetList()
        for (var d in data) {
            var check = false
            if (options.indexOf("sun-moon") > -1) check = (data[d].image == "\uf185" ? true : false)
            else check = (data[d].image == "\uf046" ? true : false)
            out.push({ title: data[d].title, check: check })
        }
        if (onFinish) onFinish(out);
        dlg.Dismiss();
    }

    //Handle cancel button.
    this.OnCancel = function () {
        dlg.Dismiss()
        if (onFinish) onFinish(null);
    }

    //Convert array to | separated list.
    var toList = function (data) {
        var list = "";

        if (typeof data == "object") {
            for (var d in data)
                list += (list ? "," : "") + (data[d].title + "::" + data[d].check)
        }
        else list = data

        if (options.indexOf("sun-moon") > -1) {
            list = list.replace(/:true/g, ":[fa-sun-o]");
            list = list.replace(/:false/g, ":[fa-moon-o]");
        }
        else {
            list = list.replace(/:false/g, ":[fa-square-o]");
            list = list.replace(/:true/g, ":[fa-check-square-o]");
        }
        //alert( "tolist:" + list )
        return list;
    }

    //Set the check list items.
    this.SetList = function (data) {
        lst1.SetList(toList(data), ",")
    }

    //Show the dialog.
    self.Show();
}
*/
