import View from "./view";

export default class AdView extends View {
  constructor(id: string) {
    super(id);
  }

  GetType(): string {
    return "AdView";
  }

  Load(): void {
    prompt(this.id, "Adv.Load(");
  }

  SetOnStatus(callback: Function): AdView {
    prompt(this.id, `Adv.SetOnStatus(\f${_Cbm(callback)}`);
    return this;
  }
}
