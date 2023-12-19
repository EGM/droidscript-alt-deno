import View from "./view";
import DSObject from "./dsobject";

export default class Scroller extends View {
  constructor(id: string) {
    super(id);
  }

  addChild(child: DSObject): Scroller {
    prompt(this.id, `Scr.AddChild(\f${child ? child.id : null}`);
    return this;
  }

  destroyChild(child: DSObject): void {
    prompt(this.id, `Scr.DestroyChild(\f${child ? child.id : null}`);
  }

  getScrollX(): number {
    return parseFloat(prompt(this.id, "Scr.GetScrollX("));
  }

  getScrollY(): number {
    return parseFloat(prompt(this.id, "Scr.GetScrollY("));
  }

  getType(): string {
    return "Scroller";
  }

  removeChild(child: DSObject): void {
    prompt(this.id, `Scr.RemoveChild(\f${child ? child.id : null}`);
  }

  scrollBy(x: number, y: number): void {
    prompt(this.id, `Scr.ScrollBy\f${x}\f${y}`);
  }

  scrollTo(x: number, y: number): void {
    prompt(this.id, `Scr.ScrollTo\f${x}\f${y}`);
  }
}
