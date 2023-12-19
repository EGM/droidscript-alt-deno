import Dialog from "./dialog";
import { alt } from "./index";
import Layout from "./layout";
import Button from "./button";

export class Wizard {
  buttons: Button[];
  callback: Function;
  curPage: number;
  dlg: Dialog;
  layDlg: Layout;
  layContent: Layout;
  layHoriz: Layout;
  onTouch: Function;
  constructor(title, width, height, callback, options) {
    this.curPage = 0;
    this.callback = callback;

    // Create dialog window.
    this.dlg = alt
      .createDialog(title, options + "nocancel") //eg. nofocus
      .setTitle(title, "center");
    this.layDlg = alt
      .createLayout("Linear", "vertical,fillxy")
      .setSize(width, height);

    //Create content layout.
    this.layContent = alt
      .addLayout(this.layDlg, "Linear", "VCenter")
      .setSize(width * 0.9, height * 0.8);

    //Create layout.
    this.layHoriz = alt.addLayout(this.layDlg, "Linear", "Horizontal");

    //Create an array of icon buttons. //"[fa-home]"
    const titles = ["[fa-times]", "[fa-arrow-left]", "[fa-arrow-right]"];
    for (let i = 0; i < titles.length; i++) {
      const btn: Button = alt
        .createButton(titles[i], width / 4, height / 8, "FontAwesome")
        .setMargins(0.01, 0, 0.01, 0)
        .setTextSize(18)
        .setTextColor("#555555");
      btn.data = Object.defineProperty(btn.data, "wizard", { value: this });
      if (i === 1) {
        btn.setEnabled(false);
      }
      this.layHoriz.addChild(btn);
      this.buttons[i] = btn;
    }

    //Handle button presses.
    this.onTouch = function (): void {
      const w = this.data.wizard;
      switch (this.getText().charCodeAt(0)) {
        //case "[fa-home]": web.LoadUrl( url ); break;
        case 61536: //"[fa-arrow-left]":
          if (--w.curPage > 0) {
            callback(w.layContent, w.curPage);
          }
          w.buttons[2].setText("[fa-arrow-right]");
          break;
        case 61537: //"[fa-arrow-right]":
          callback(w.layContent, ++w.curPage);
          break;
        case 61453: //"[fa-times]":
          this.dlg.dismiss();
          callback(w.layContent, -1);
          break;
      }

      w.buttons[1].SetEnabled(w.curPage > 1);
    };

    //Set callbacks.
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].setOnTouch(this.onTouch);
    }

    //Add dialog layout and show dialog.
    this.dlg.addLayout(this.layDlg);
  }
  dismiss(): void {
    this.dlg.dismiss();
    this.curPage = 0;
  }
  finish(): void {
    this.buttons[2].setText("[fa-check]");
  }
  getButtons(): Button[] {
    return this.buttons;
  }
  getDialog(): Dialog {
    return this.dlg;
  }
  getLayout(): Layout {
    return this.layContent;
  }
  getType(): string {
    return "Wizard";
  }
  hide(): void {
    this.dlg.hide();
  }
  isVisible(): boolean {
    return this.dlg.isVisible();
  }
  // Show/start the wizard.
  show(): void {
    this.dlg.show();

    //Fire callback for page setup and first page.
    this.callback(this.layContent, this.curPage);
    this.callback(this.layContent, ++this.curPage);
  }
}

//%%%%%%//%%%%%%//%%%%%%//

/*
//Generic wizard dialog.
function _Wizard(title, width, height, callback, options) {
    var curPage = 0;

    //Check for premium
    if (!app.IsPremium()) {
        console.log("WARNING: CreateWizard is a Premium feature!");
        return;
    }
    //Create dialog window.
    var dlg = app.CreateDialog(title, options + "nocancel"); //eg. nofocus
    dlg.SetTitle(title, "center");
    var layDlg = app.CreateLayout("linear", "vertical,fillxy");
    layDlg.SetSize(width, height);
    //layDlg.SetPadding( 0.04, 0.02, 0.04, 0 );

    //Create content layout.
    var layContent = app.CreateLayout("Linear", "VCenter");
    layContent.SetSize(width * 0.9, height * 0.8);
    layDlg.AddChild(layContent);

    //Create layout.
    var layHoriz = app.CreateLayout("Linear", "Horizontal");
    layDlg.AddChild(layHoriz);

    //Create an array of icon buttons. //"[fa-home]"
    var btns = ["[fa-times]", "[fa-arrow-left]", "[fa-arrow-right]"];
    for (var i = 0; i < btns.length; i++) {
        var btn = app.CreateButton(btns[i], width / 4, height / 8, "FontAwesome");
        btn.SetMargins(0.01, 0, 0.01, 0);
        btn.icon = btns[i];
        btn.SetTextSize(18);
        btn.SetTextColor("#555555");
        if (i == 1) btn.SetEnabled(false);
        layHoriz.AddChild(btn);
        btns[i] = btn;
    }

    //Show/start the wizard.
    this.Show = function () {
        dlg.Show();

        //Fire callback for page setup and first page.
        callback(layContent, curPage);
        callback(layContent, ++curPage);
    }

    //General methods.
    this.GetType = function () { return "Wizard" }
    this.Dismiss = function () { dlg.Dismiss(); curPage = 0 }
    this.Hide = function () { dlg.Hide() }
    this.Finish = function () { btns[2].SetText("[fa-check]") }
    this.GetDialog = function () { return dlg }
    this.GetLayout = function () { return layContent }
    this.GetButtons = function () { return btns }
    this.IsVisible = function () { return dlg.IsVisible() }

    //Handle button presses.
    dlg.btns_OnTouch = function () {
        switch (this.icon) {
            //case "[fa-home]": web.LoadUrl( url ); break;
            case "[fa-arrow-left]":
                if (--curPage > 0) callback(layContent, curPage);
                btns[2].SetText("[fa-arrow-right]");
                break;
            case "[fa-arrow-right]":
                callback(layContent, ++curPage);
                break;
            case "[fa-times]":
                dlg.Dismiss();
                callback(layContent, -1);
                break;
        }

        btns[1].SetEnabled(curPage > 1);
    }

    //Set callbacks.
    for (var i = 0; i < btns.length; i++)
        btns[i].SetOnTouch(dlg.btns_OnTouch);

    //Add dialog layout and show dialog.
    dlg.AddLayout(layDlg);
}
*/
