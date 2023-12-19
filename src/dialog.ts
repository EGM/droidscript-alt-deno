import View from "./view";
import Layout from "./layout";

export default class Dialog extends View {
  _tm: number;
  constructor(id: string) {
    super(id);
    this._tm = null;
  }

  addLayout(layout: Layout): Dialog {
    prompt(this.id, `Dlg.AddLayout(${layout.id}`);
    return this;
  }

  dismiss(): void {
    prompt(this.id, "Dlg.Dismiss(");
  }

  enableBackKey(enable: boolean): void {
    prompt(this.id, `Dlg.EnableBackKey(\f${enable}`);
  }

  getType(): string {
    return "Dialog";
  }

  removeLayout(layout: Layout): void {
    prompt(this.id, `Dlg.RemoveLayout(${layout.id}`);
  }

  setOnBack(callback: Function): Dialog {
    prompt(this.id, `Dlg.SetOnBack(\f${_Cbm(callback)}`);
    return this;
  }

  setOnCancel(callback: Function): Dialog {
    prompt(this.id, `Dlg.SetOnCancel(\f${_Cbm(callback)}`);
    return this;
  }

  setOnTouch(callback: Function): Dialog {
    prompt(this.id, `Dlg.SetOnClick(${_Cbm(callback)}`);
    return this;
  }

  setTitle(title: string, options?: string): Dialog {
    prompt(this.id, `Dlg.SetTitle(\f${title}\f${options}`);
    return this;
  }

  setTitleColor(color: string): Dialog {
    prompt(this.id, `Dlg.SetTitleColor(\f${color}`);
    return this;
  }

  setTitleDividerColor(color: string): Dialog {
    prompt(this.id, `Dlg.SetTitleDividerColor(\f${color}`);
    return this;
  }

  setTitleDividerHeight(height: number, options?: string): Dialog {
    prompt(this.id, `Dlg.SetTitleDividerHeight(\f${height}\f${options}`);
    return this;
  }

  setTitleHeight(height: number, options?: string): Dialog {
    prompt(this.id, `Dlg.SetTitleHeight(\f${height}\f${options}`);
    return this;
  }

  setTitleTextSize(height: number, options?: string): Dialog {
    prompt(this.id, `Dlg.SetTitleTextSize(\f${height}\f${options}`);
    return this;
  }
}
