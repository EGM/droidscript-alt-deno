import View from "./view.ts";

export default class Seekbar extends View {
  constructor(id: string) {
    super(id);
  }

  getType(): string {
    return "SeekBar";
  }

  getValue(): number {
    return parseFloat(prompt(this.id, "Skb.GetValue("));
  }

  setMaxRate(rate: number): Seekbar {
    prompt(this.id, `Skb.SetMaxRate(${rate}`);
    return this;
  }

  setOnChange(callback: Function): Seekbar {
    prompt(this.id, `Skb.SetOnClick(${_Cbm(callback)}`);
    return this;
  }

  setOnTouch(callback: Function): Seekbar {
    prompt(this.id, `Skb.SetOnClick(${_Cbm(callback)}`);
    return this;
  }

  setRange(range: number): Seekbar {
    prompt(this.id, `Skb.SetRange(${range}`);
    return this;
  }

  setValue(val: number): Seekbar {
    prompt(this.id, `Skb.SetValue(${val}`);
    return this;
  }
}
