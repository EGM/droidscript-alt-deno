import View from "./view";

export default class CodeEdit extends View {
  constructor(id: string) {
    super(id);
  }

  clearHistory(): void {
    prompt(this.id, "Cde.ClearHistory(");
  }
  copy(): void {
    prompt(this.id, "Cde.Copy(");
  }
  cut(): void {
    prompt(this.id, "Cde.Cut(");
  }
  getCursorLine(): number {
    return parseInt(prompt(this.id, "Cde.GetCursorLine("));
  }
  getCursorPos(): number {
    return parseInt(prompt(this.id, "Cde.GetCursorPos("));
  }
  getLineStart(line): number {
    return parseInt(prompt(this.id, `Cde.GetLineStart(${line}`));
  }
  getSelectedText(): string {
    return prompt(this.id, "Cde.GetSelectedText(");
  }
  getSelectMode(): boolean {
    return prompt(this.id, "Cde.GetSelectMode(") === "true";
  }
  getText(): string {
    return prompt(this.id, "Cde.GetText(");
  }
  getType(): string {
    return "CodeEdit";
  }
  highlightLine(line): void {
    prompt(this.id, `Cde.HighlightLine(\f${line}`);
  }
  insertText(text, start): void {
    prompt(this.id, `Cde.InsertText(\f${text}\f${start}`);
  }
  paste(): void {
    prompt(this.id, "Cde.Paste(");
  }
  redo(): void {
    prompt(this.id, "Cde.Redo(");
  }
  replace(text: string): void {
    prompt(this.id, `Cde.Replace(\f${text}`);
  }
  replaceAll(
    text: string,
    newText: string,
    matchCase?: boolean,
    wholeWord?: boolean
  ): void {
    prompt(
      this.id,
      `Cde.ReplaceAll(\f${text}\f${newText}\f${matchCase}\f${wholeWord}`
    );
  }
  replaceText(text: string, start: number, end: number): void {
    prompt(this.id, `Cde.ReplaceText(\f${text}\f${start}\f${end}`);
  }
  search(
    text: string,
    direction?: string,
    matchCase?: boolean,
    wholeWord?: boolean
  ): void {
    prompt(
      this.id,
      `Cde.Search(\f${text}\f${direction}\f${matchCase}\f${wholeWord}`
    );
  }
  selectAll(): void {
    prompt(this.id, "Cde.SelectAll(");
  }
  setColorScheme(scheme: string): CodeEdit {
    prompt(this.id, `Cde.SetColorScheme(\f${scheme}`);
    return this;
  }
  setCursorPos(position: number): CodeEdit {
    prompt(this.id, `Cde.SetCursorPos(${position}`);
    return this;
  }
  setHtml(html: string): CodeEdit {
    prompt(this.id, `Cde.SetText(\f${html}`);
    return this;
  }
  setLanguage(ext: string): CodeEdit {
    prompt(this.id, `Cde.SetLanguage(\f${ext}`);
    return this;
  }
  setOnChange(callback: Function): CodeEdit {
    prompt(this.id, `Cde.SetOnChange(\f${_Cbm(callback)}`);
    return this;
  }
  setOnDoubleTap(callback: Function): CodeEdit {
    prompt(this.id, `Cde.SetOnDoubleTap(\f${_Cbm(callback)}`);
    return this;
  }
  setOnKey(callback: Function): CodeEdit {
    prompt(this.id, `Cde.SetOnKey(\f${_Cbm(callback)}`);
    return this;
  }
  setNavigationMethod(method: string): CodeEdit {
    prompt(this.id, `Cde.SetNavigationMethod(\f${method}`);
    return this;
  }
  setSelection(start: number, stop: number): CodeEdit {
    prompt(this.id, `Cde.SetSelection(\f${start}\f${stop}`);
    return this;
  }
  setText(text: string): CodeEdit {
    prompt(this.id, `Cde.SetText(\f${text}`);
    return this;
  }
  setTextColor(color: string): CodeEdit {
    prompt(this.id, `Cde.SetTextColor(\f${color}`);
    return this;
  }
  setTextSize(size: number, mode?: string): CodeEdit {
    prompt(this.id, `Cde.SetTextSize(\f${size}\f${mode}`);
    return this;
  }
  setUseKeyboard(onOff: boolean): CodeEdit {
    prompt(this.id, `Cde.SetUseKeyboard(\f${onOff}`);
    return this;
  }
  undo(): void {
    prompt(this.id, "Cde.Undo(");
  }
}
