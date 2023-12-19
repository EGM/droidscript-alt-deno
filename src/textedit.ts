import View from "./view";

export default class TextEdit extends View {
  constructor(id: string) {
    super(id);
  }

  clearHistory(): void {
    prompt(this.id, "Txe.ClearHistory(");
  }

  getCursorLine(): number {
    return parseInt(prompt(this.id, "Txe.GetCursorLine("));
  }

  getCursorPos(): number {
    return parseInt(prompt(this.id, "Txe.GetCursorPos("));
  }

  getHtml(): string {
    return prompt(this.id, "Txe.GetHtml(");
  }

  getLineCount(): number {
    return parseInt(prompt(this.id, "Txe.GetLineCount("));
  }

  getLineStart(line: number): number {
    return parseInt(prompt(this.id, `Txe.GetLineStart(${line}`));
  }

  getLineTop(line: number): number {
    return parseFloat(prompt(this.id, `Txe.GetLineTop(${line}`));
  }

  getMaxLines(): number {
    return parseInt(prompt(this.id, "Txe.GetMaxLines("));
  }

  getSelectedText(): string {
    return prompt(this.id, "Txe.GetSelectedText(");
  }

  getSelectionEnd(): number {
    return parseInt(prompt(this.id, "Txe.GetSelectionEnd("));
  }

  getSelectionStart(): number {
    return parseInt(prompt(this.id, "Txe.GetSelectionStart("));
  }

  getText(): string {
    return prompt(this.id, "Txe.GetText(");
  }

  getTextSize(mode?: string): number {
    return parseFloat(prompt(this.id, `Txe.GetTextSize(\f${mode}`));
  }

  getType(): string {
    return "TextEdit";
  }

  insertText(text: number, start: number): void {
    prompt(this.id, `Txe.InsertText(\f${text}\f${start}`);
  }

  redo(): void {
    prompt(this.id, "Txe.Redo(");
  }

  replaceText(text: string, start: number, end: number): void {
    prompt(this.id, `Txe.ReplaceText(\f${text}\f${start}\f${end}`);
  }

  setCursorColor(color: string): TextEdit {
    prompt(this.id, `Txe.SetCursorColor(\f${color}`);
    return this;
  }

  setCursorPos(position: number): TextEdit {
    prompt(this.id, `Txe.SetCursorPos(${position}`);
    return this;
  }

  setHint(text: string): TextEdit {
    prompt(this.id, `Txe.SetHint(${text}`);
    return this;
  }

  setHtml(html: string): TextEdit {
    prompt(this.id, `Txe.SetHtml(${html}`);
    return this;
  }

  setOnChange(callback: Function): TextEdit {
    prompt(this.id, `Txe.SetOnChange(\f${_Cbm(callback)}`);
    return this;
  }

  setOnEnter(callback: Function): TextEdit {
    prompt(this.id, `Txe.SetOnEnter(\f${_Cbm(callback)}`);
    return this;
  }

  setOnFocus(callback: Function): TextEdit {
    prompt(this.id, `Txe.SetOnFocus(\f${_Cbm(callback)}`);
    return this;
  }

  setOnTouch(callback: Function): TextEdit {
    prompt(this.id, `Txe.SetOnTouch(\f${_Cbm(callback)}`);
    return this;
  }

  setSelection(start: number, stop: number): TextEdit {
    prompt(this.id, `Txe.SetSelection(\f${start}\f${stop}`);
    return this;
  }

  setText(txt: string): TextEdit {
    prompt(this.id, `Txe.SetText(${txt}`);
    return this;
  }

  setTextColor(color: string): TextEdit {
    prompt(this.id, `Txe.SetTextColor(${color}`);
    return this;
  }

  setTextSize(size: number, mode?: string): TextEdit {
    prompt(this.id, `Txe.SetTextSize(\f${size}\f${mode}`);
    return this;
  }

  undo(): void {
    prompt(this.id, "Txe.Undo(");
  }
}
