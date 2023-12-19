import View from "./view";

export default class Spinner extends View {
  constructor(id: string) {
    super(id);
  }

  getText(): string {
    return prompt(this.id, "Spn.GetText(");
  }

  getTextSize(mode?: string): number {
    return parseFloat(prompt(this.id, `Spn.GetTextSize(\f${mode}`));
  }

  getType(): string {
    return "Spinner";
  }

  selectItem(item: string): void {
    prompt(this.id, `Spn.SetText(${item}`);
  }

  setList(list: string, delim?: string): Spinner {
    prompt(this.id, `Spn.SetList(\f${list}\f${delim}`);
    return this;
  }

  setOnChange(callback: Function): Spinner {
    prompt(this.id, `Spn.SetOnClick(${_Cbm(callback)}`);
    return this;
  }

  setOnTouch(callback: Function): Spinner {
    prompt(this.id, `Spn.SetOnClick(${_Cbm(callback)}`);
    return this;
  }

  setText(text: string): Spinner {
    prompt(this.id, `Spn.SetText(${text}`);
    return this;
  }

  setTextColor(color: string): Spinner {
    prompt(this.id, `Spn.SetTextColor(${color}`);
    return this;
  }

  setTextSize(size: number, mode?: string): Spinner {
    prompt(this.id, `Spn.SetTextSize(\f${size}\f${mode}`);
    return this;
  }
}
