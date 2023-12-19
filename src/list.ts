import View from "./view";

type Item = { title: string; body: string; image: string };

export default class List extends View {
  constructor(id: string) {
    super(id);
  }

  addItem(title: string, body?: string, image?: string): List {
    prompt(this.id, `Lst.AddItem(\f${title}\f${body}\f${image}`);
    return this;
  }

  getItem(title: string): Item {
    const p = `Lst.GetItem(\f${title}`;
    return JSON.parse(prompt(this.id, p));
  }

  getItemByIndex(index: number): Item {
    const p = `Lst.GetItemByIndex(\f${index}`;
    return JSON.parse(prompt(this.id, p));
  }

  getLength(): number {
    return parseInt(prompt(this.id, "Lst.GetLength("));
  }

  getList(delimiter?: string): Item[] {
    return JSON.parse(prompt(this.id, `Lst.GetList(${delimiter}`));
  }

  getTextSize(mode?: string): number {
    return parseFloat(prompt(this.id, `Lst.GetTextSize(\f${mode}`));
  }

  getType(): string {
    return "List";
  }

  insertItem(
    index: number,
    title: string,
    body?: string,
    image?: string
  ): void {
    prompt(this.id, `Lst.InsertItem(\f${index}\f${title}\f${body}\f${image}`);
  }

  removeAll(): void {
    prompt(this.id, "Lst.RemoveAll(");
  }

  removeItem(title: number): void {
    prompt(this.id, `Lst.RemoveItem(\f${title}`);
  }

  removeItemByIndex(index: number): void {
    prompt(this.id, `Lst.RemoveItemByIndex(\f${index}`);
  }

  scrollToItem(title: string, body?: string): void {
    const p = `Lst.ScrollToItem(\f${title}\f${body}`;
    prompt(this.id, p);
  }

  scrollToItemByIndex(index: number): void {
    const p = `Lst.ScrollToItemByIndex(\f${index}`;
    prompt(this.id, p);
  }

  selectItem(title: string, body?: string, scroll?: boolean): void {
    const p = `Lst.SelectItem(\f${title}\f${body}\f${scroll}`;
    prompt(this.id, p);
  }

  selectItemByIndex(index: number, scroll?: boolean): void {
    const p = `Lst.SelectItemByIndex(\f${index}\f${scroll}`;
    prompt(this.id, p);
  }

  setColumnWidths(
    icon: number,
    title: number,
    body: number,
    mode?: string
  ): List {
    prompt(
      this.id,
      `Lst.SetColumnWidths(\f${icon}\f${title}\f${body}\f${mode}`
    );
    return this;
  }

  setDivider(height: number, color?: string): List {
    prompt(this.id, `Lst.SetDivider(\f${height}\f${color}`);
    return this;
  }

  setEllipsize(mode: string): List {
    prompt(this.id, `Lst.SetEllipsize(\f${mode}`);
    return this;
  }

  setEllipsize1(mode: string): List {
    prompt(this.id, `Lst.SetEllipsize1(\f${mode}`);
    return this;
  }

  setEllipsize2(mode: string): List {
    prompt(this.id, `Lst.SetEllipsize2(\f${mode}`);
    return this;
  }

  setFontFile(file: string): List {
    prompt(this.id, `Lst.SetFontFile(\f${file}`);
    return this;
  }

  setHiTextColor1(color: string): List {
    prompt(this.id, `Lst.SetHiTextColor1(${color}`);
    return this;
  }

  setHiTextColor2(color: string): List {
    prompt(this.id, `Lst.SetHiTextColor2(${color}`);
    return this;
  }

  setIconMargins(
    left: number,
    top: number,
    right: number,
    bottom: number,
    mode: string
  ): List {
    prompt(
      this.id,
      `Lst.SetIconMargins(\f${left}\f${top}\f${right}\f${bottom}\f${mode}`
    );
    return this;
  }

  setIconSize(size: number, mode?: string): List {
    prompt(this.id, `Lst.SetIconSize(\f${size}\f${mode}`);
    return this;
  }

  setItem(
    title: string,
    newTitle: string,
    newBody?: string,
    newImage?: string
  ): List {
    prompt(
      this.id,
      `Lst.SetItem(\f${title}\f${newTitle}\f${newBody}\f${newImage}`
    );
    return this;
  }

  setItemByIndex(
    index: number,
    newTitle: string,
    newBody?: string,
    newImage?: string
  ): List {
    prompt(
      this.id,
      `Lst.SetItemByIndex(\f${index}\f${newTitle}\f${newBody}\f${newImage}`
    );
    return this;
  }

  setList(list: string, delimiter: string): List {
    prompt(this.id, `Lst.SetList(\f${list}\f${delimiter}`);
    return this;
  }

  setOnLongTouch(callback: Function): List {
    prompt(this.id, `Lst.SetOnLongClick(${_Cbm(callback)}`);
    return this;
  }

  setOnTouch(callback: Function): List {
    prompt(this.id, `Lst.SetOnClick(${_Cbm(callback)}`);
    return this;
  }

  setTextColor(color: string): List {
    prompt(this.id, `Lst.SetTextColor1(${color}`);
    return this;
  }

  setTextColor1(color: string): List {
    prompt(this.id, `Lst.SetTextColor1(${color}`);
    return this;
  }

  setTextColor2(color: string): List {
    prompt(this.id, `Lst.SetTextColor2(${color}`);
    return this;
  }

  setTextMargins(
    left: number,
    top: number,
    right: number,
    bottom: number,
    mode?: string,
    options?: string
  ): List {
    prompt(
      this.id,
      `Lst.SetTextMargins(\f${left}\f${top}\f${right}\f${bottom}\f${mode}\f${options}`
    );
    return this;
  }

  setTextShadow(radius: number, dx: number, dy: number, color: string): List {
    prompt(this.id, `Lst.SetTextShadow1(\f${radius}\f${dx}\f${dy}\f${color}`);
    return this;
  }

  setTextShadow1(radius: number, dx: number, dy: number, color: string): List {
    prompt(this.id, `Lst.SetTextShadow1(\f${radius}\f${dx}\f${dy}\f${color}`);
    return this;
  }

  setTextShadow2(radius: number, dx: number, dy: number, color: string): List {
    prompt(this.id, `Lst.SetTextShadow2(\f${radius}\f${dx}\f${dy}\f${color}`);
    return this;
  }

  setTextSize(size: number, mode?: string): List {
    prompt(this.id, `Lst.SetTextSize1(\f${size}\f${mode}`);
    return this;
  }

  setTextSize1(size: number, mode?: string): List {
    prompt(this.id, `Lst.SetTextSize1(\f${size}\f${mode}`);
    return this;
  }

  setTextSize2(size: number, mode?: string): List {
    prompt(this.id, `Lst.SetTextSize2(\f${size}\f${mode}`);
    return this;
  }
}
