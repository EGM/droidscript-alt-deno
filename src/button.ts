import View from "./view";

export default class Button extends View {
  constructor(id: string) {
    super(id);
  }

  getText(): string {
    return prompt(this.id, `Btn.GetText(`);
  }

  getTextSize(mode: string): number {
    return parseFloat(prompt(this.id, `Btn.GetTextSize(\f${mode}`));
  }

  getType(): string {
    return "Button";
  }

  setEllipsize(mode: string): Button {
    prompt(this.id, `Btn.SetEllipsize(\f${mode}`);
    return this;
  }

  setFontFile(file: string): Button {
    prompt(this.id, `Btn.SetFontFile(\f${file}`);
    return this;
  }

  setHtml(html: string): Button {
    prompt(this.id, `Btn.SetHtml(${html}`);
    return this;
  }

  setOnLongTouch(callback: Function): Button {
    prompt(this.id, `Btn.SetOnLongTouch(\f${_Cbm(callback)}`);
    return this;
  }

  setOnTouch(callback: Function): Button {
    prompt(this.id, `Btn.SetOnTouch(\f${_Cbm(callback)}`);
    return this;
  }

  setStyle(
    clr1: string,
    clr2: string,
    radius: number,
    strokeClr: string,
    strokeWidth: number,
    shadow: string
  ): Button {
    prompt(
      this.id,
      `Btn.SetStyle(\f${clr1}\f${clr2}\f${radius}\f${strokeClr}\f${strokeWidth}\f${shadow}`
    );
    return this;
  }

  setText(text: string): Button {
    prompt(this.id, `Btn.SetText(${text}`);
    return this;
  }

  setTextColor(clr: string): Button {
    prompt(this.id, `Btn.SetTextColor(${clr}`);
    return this;
  }

  setTextShadow(radius: string, dx: number, dy: number, color: string): Button {
    prompt(this.id, `Btn.SetTextShadow(\f${radius}\f${dx}\f${dy}\f${color}`);
    return this;
  }

  setTextSize(size: number, mode?: string): Button {
    prompt(this.id, `Btn.SetTextSize(\f${size}\f${mode}`);
    return this;
  }
}
