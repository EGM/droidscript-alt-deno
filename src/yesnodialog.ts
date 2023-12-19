import Component from "./component";

export default class YesNoDialog extends Component {
  constructor(id: string) {
    super(id);
  }

  dismiss(): void {
    prompt(this.id, "Ynd.Dismiss(");
  }

  getType(): string {
    return "YesNoDialog";
  }

  setButtonText(yes: string, no: string): YesNoDialog {
    prompt(this.id, `Ynd.SetButtonText(\f${yes}\f${no}`);
    return this;
  }

  setOnTouch(callback: Function): YesNoDialog {
    prompt(this.id, `Ynd.SetOnClick(${_Cbm(callback)}`);
    return this;
  }
}
