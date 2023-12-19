import View from "./view";

export default class Text extends View {
  constructor(id: string) {
    super(id);
  }

  getHtml(): string {
    return prompt(this.id, "Txt.GetHtml(");
  }

  getLineCount(): number {
    return parseInt(prompt(this.id, "Txt.GetLineCount("));
  }

  getLineStart(line: number): number {
    return parseInt(prompt(this.id, `Txt.GetLineStart(${line}`));
  }

  getLineTop(line: number): number {
    return parseFloat(prompt(this.id, `Txt.GetLineTop(${line}`));
  }

  getMaxLines(): number {
    return parseInt(prompt(this.id, "Txt.GetMaxLines("));
  }

  getText(): string {
    return prompt(this.id, "Txt.GetText(");
  }

  getTextSize(mode?: string): number {
    return parseFloat(prompt(this.id, `Txt.GetTextSize(\f${mode}`));
  }

  getType(): string {
    return "Text";
  }

  log(message: string, options?: string): Text {
    prompt(this.id, `Txt.Log(\f${message}\f${options}`);
    return this;
  }

  setEllipsize(mode: string): Text {
    prompt(this.id, `Txt.SetEllipsize(\f${mode}`);
    return this;
  }

  setFontFile(file: string): Text {
    prompt(this.id, `Txt.SetFontFile(\f${file}`);
    return this;
  }

  setHtml(html: string): Text {
    prompt(this.id, `Txt.SetHtml(${html}`);
    return this;
  }

  setLog(maxLines: number): Text {
    prompt(this.id, `Txt.SetLog(\f${maxLines}`);
    return this;
  }

  setOnLongTouch(callback: Function): Text {
    prompt(this.id, `Txt.SetOnLongTouch(${_Cbm(callback)}`);
    return this;
  }

  setOnTouch(callback: Function): Text {
    prompt(this.id, `Txt.SetOnTouch(${_Cbm(callback)}`);
    return this;
  }

  setOnTouchDown(callback: Function): Text {
    prompt(this.id, `Txt.SetOnTouchDown(${_Cbm(callback)}`);
    return this;
  }

  setOnTouchMove(callback: Function): Text {
    prompt(this.id, `Txt.SetOnTouchMove(${_Cbm(callback)}`);
    return this;
  }

  setOnTouchUp(callback: Function): Text {
    prompt(this.id, `Txt.SetOnTouchUp(${_Cbm(callback)}`);
    return this;
  }

  setText(text: string): Text {
    prompt(this.id, `Txt.SetText(${text}`);
    return this;
  }

  setTextColor(color: string): Text {
    prompt(this.id, `Txt.SetTextColor(${color}`);
    return this;
  }

  setTextShadow(radius: number, dx: number, dy: number, color: string): Text {
    prompt(this.id, `Txt.SetTextShadow(\f${radius}\f${dx}\f${dy}\f${color}`);
    return this;
  }

  setTextSize(size: number, mode?: string): Text {
    prompt(this.id, `Txt.SetTextSize(\f${size}\f${mode}`);
    return this;
  }

  setTouchable(touchable: boolean): Text {
    prompt(this.id, `Txt.SetTouchable(${touchable}`);
    return this;
  }
}
