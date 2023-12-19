import View from "./view";
import DSObject from "./dsobject";

export default class Layout extends View {
  constructor(id: string) {
    super(id);
  }

  addChild(child: View, order?: number): Layout {
    prompt(this.id, `Lay.AddChild(\f${child ? child.id : null}\f${order}`);
    if (child) {
      child._parent = this;
    }
    return this;
  }

  childToFront(child: DSObject): void {
    prompt(this.id, `Lay.ChildToFront(${child ? child.id : null}`);
  }

  destroyChild(child: View): void {
    prompt(this.id, `Lay.DestroyChild(${child ? child.id : null}`);
    if (child) {
      child._parent = null;
    }
  }

  getChildOrder(child: DSObject): number {
    return parseInt(
      prompt(this.id, `Lay.GetChildOrder(\f${child ? child.id : null}`)
    );
  }

  getType(): string {
    return "Layout";
  }

  removeChild(child: View): void {
    prompt(this.id, `Lay.RemoveChild(${child ? child.id : null}`);
    if (child) {
      child._parent = null;
    }
  }

  setCornerRadius(radius: number): Layout {
    prompt(this.id, `Lay.SetCornerRadius(\f${radius}`);
    return this;
  }

  setElevation(elevation: number): Layout {
    prompt(this.id, `Lay.SetElevation(\f${elevation}`);
    return this;
  }

  setGravity(gravity: string): Layout {
    prompt(this.id, `Lay.SetGravity(\f${gravity}`);
    return this;
  }

  setOnChildChange(callback: Function): Layout {
    prompt(this.id, `Lay.SetOnChildChange(\f${_Cbm(callback)}`);
    return this;
  }

  setOnLongTouch(callback: Function): Layout {
    prompt(this.id, `Lay.SetOnLongTouch(\f${_Cbm(callback)}`);
    return this;
  }

  setOnTouch(callback: Function): Layout {
    prompt(this.id, `Lay.SetOnTouch(\f${_Cbm(callback)}`);
    return this;
  }

  setOnTouchDown(callback: Function): Layout {
    prompt(this.id, `Lay.SetOnTouchDown(\f${_Cbm(callback)}`);
    return this;
  }

  setOnTouchMove(callback: Function): Layout {
    prompt(this.id, `Lay.SetOnTouchMove(\f${_Cbm(callback)}`);
    return this;
  }

  setOnTouchUp(callback: Function): Layout {
    prompt(this.id, `Lay.SetOnTouchUp(\f${_Cbm(callback)}`);
    return this;
  }

  setOrientation(orientation: string): Layout {
    prompt(this.id, `Lay.SetOrientation(\f${orientation}`);
    return this;
  }

  setTouchThrough(through: boolean): Layout {
    prompt(this.id, `Lay.SetTouchThrough(\f${through}`);
    return this;
  }

  setTouchable(touchable: boolean): Layout {
    prompt(this.id, `Lay.SetTouchable(\f${touchable}`);
    return this;
  }
}
