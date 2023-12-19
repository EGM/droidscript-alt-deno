import DSObject from "./dsobject";

export default class View implements DSObject {
  // eslint-disable-next-line
  data: any;
  id: string;
  _left: number;
  _top: number;
  _parent: DSObject;
  constructor(id: string) {
    this.data = {};
    this.id = id;
    this._left = 0;
    this._top = 0;
    this._parent = null;
  }

  adjustColor(
    hue: number,
    saturation: number,
    brightness: number,
    contrast: number
  ): void {
    prompt(
      this.id,
      `Obj.AdjustColor(\f${hue}\f${saturation}\f${brightness}\f${contrast}`
    );
  }

  animate(type: string, callback: Function, time: number): void {
    prompt(this.id, `Obj.Animate(\f${type}\f${_Cbm(callback)}\f${time}`);
  }

  clearFocus(): void {
    prompt(this.id, `Obj.ClearFocus(\f`);
  }

  destroy(): void {
    prompt(this.id, `Obj.Release(`);
    _map[this.id] = null;
  }

  focus(): void {
    prompt(this.id, `Obj.Focus(\f`);
  }

  getAbsHeight(): number {
    return parseInt(prompt(this.id, `Obj.GetAbsHeight(`));
  }

  getAbsWidth(): number {
    return parseInt(prompt(this.id, `Obj.GetAbsWidth(`));
  }

  getHeight(options?: string): number {
    return parseFloat(prompt(this.id, `Obj.GetHeight(\f${options}`));
  }

  getLeft(options?: string): number {
    return parseFloat(prompt(this.id, `Obj.GetLeft(\f${options}`));
  }

  // eslint-disable-next-line
  getParent(): any {
    return this._parent;
  }

  getPosition(options?: string): { left; top; right; bottom } {
    return JSON.parse(prompt(this.id, `Obj.GetPosition(\f${options}`));
  }

  getTop(options?: string): number {
    return parseFloat(prompt(this.id, `Obj.GetTop(\f${options}`));
  }

  getVisibility(): string {
    return prompt(this.id, `Obj.GetVisibility(`);
  }

  getWidth(options?: string): number {
    return parseFloat(prompt(this.id, `Obj.GetWidth(\f${options}`));
  }

  gone(): void {
    prompt(this.id, `Obj.SetVisibility(Gone`);
  }

  hide(): void {
    prompt(this.id, `Obj.SetVisibility(Hide`);
  }

  isEnabled(): boolean {
    return prompt(this.id, `Obj.IsEnabled(`) === "true";
  }

  isVisible(): boolean {
    return prompt(this.id, `Obj.GetVisibility(`) === "Show";
  }

  /** *$ Premium* */
  method(
    name: string,
    types: string,
    p1: string,
    p2: string,
    p3: string,
    p4: string
  ): string {
    return prompt(
      this.id,
      `Obj.Method(\f${name}\f${types}\f${p1}\f${p2}\f${p3}\f${p4}`
    );
  }

  release(): void {
    prompt(this.id, `Obj.Release(`);
    _map[this.id] = null;
  }

  // eslint-disable-next-line
  setBackAlpha(alpha: number): any {
    prompt(this.id, `Obj.SetBackAlpha(\f${alpha}`);
    return this;
  }

  // eslint-disable-next-line
  setBackColor(color: string): any {
    prompt(this.id, `Obj.SetBackColor(\f${color}`);
    return this;
  }

  setBackGradient(
    color1: string,
    color2?: string,
    color3?: string,
    options?: string
    // eslint-disable-next-line
  ): any {
    prompt(
      this.id,
      `Obj.SetBackGradient(Linear\f${color1}\f${color2}\f${color3}\f${options}\f${null}\f${null}\f${null}`
    );
    return this;
  }

  setBackGradientRadial(
    x: number,
    y: number,
    radius: number,
    color1: number,
    color2?: number,
    color3?: number,
    options?: string
    // eslint-disable-next-line
  ): any {
    prompt(
      this.id,
      `Obj.SetBackGradient(Radial\f${x}\f${y}\f${radius}\f${color1}\f${color2}\f${color3}\f${options}`
    );
    return this;
  }

  // eslint-disable-next-line
  setBackground(file: string, options?: string): any {
    prompt(this.id, `Obj.SetBackground(${file}\f${options}`);
    return this;
  }

  // eslint-disable-next-line
  setColorFilter(color: string, mode?: string): any {
    prompt(this.id, `Obj.SetColorFilter(\f${color}\f${mode}`);
    return this;
  }

  // eslint-disable-next-line
  setEnabled(enable: boolean): any {
    prompt(this.id, `Obj.SetEnabled(\f${enable}`);
    return this;
  }

  setMargins(
    left: number,
    top: number,
    right: number,
    bottom: number,
    mode?: string
    // eslint-disable-next-line
  ): any {
    prompt(
      this.id,
      `Obj.SetMargins(\f${left}\f${top}\f${right}\f${bottom}\f${mode}`
    );
    return this;
  }

  setPadding(
    left: number,
    top: number,
    right: number,
    bottom: number,
    mode?: string
    // eslint-disable-next-line
  ): any {
    prompt(
      this.id,
      `Obj.SetPadding(\f${left}\f${top}\f${right}\f${bottom}\f${mode}`
    );
    return this;
  }

  setPosition(
    left: number,
    top: number,
    width?: number,
    height?: number,
    options?: string
    // eslint-disable-next-line
  ): any {
    prompt(
      this.id,
      `Obj.SetPosition(\f${left}\f${top}\f${width}\f${height}\f${options}`
    );
    this._left = left;
    this._top = top;
    return this;
  }

  // eslint-disable-next-line
  setScale(x: number, y: number): any {
    prompt(this.id, `Obj.SetScale(\f${x}\f${y}`);
    return this;
  }

  // eslint-disable-next-line
  setSize(width: number, height: number, options?: string): any {
    prompt(this.id, `Obj.SetSize(\f${width}\f${height}\f${options}`);
    return this;
  }

  // eslint-disable-next-line
  setVisibility(mode: string): any {
    prompt(this.id, `Obj.SetVisibility(${mode}`);
    return this;
  }

  show(): void {
    prompt(this.id, `Obj.SetVisibility(Show`);
  }

  tween(
    target: {
      x: number;
      y: number;
      w: number;
      h: number;
      sw: number;
      sh: number;
      rot: number;
    },
    duration: number,
    type: string,
    repeat: number,
    yoyo: boolean,
    callback: Function
  ): void {
    _Tween.apply(this, [target, duration, type, repeat, yoyo, callback]);
  }
}
