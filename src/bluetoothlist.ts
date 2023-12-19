import Component from "./component";

export default class BluetoothList extends Component {
  constructor(id: string) {
    super(id);
  }

  getType(): string {
    return "BluetoothList";
  }

  setOnTouch(callback: Function): BluetoothList {
    prompt(this.id, `Btl.SetOnClick(${_Cbm(callback)}`);
    return this;
  }

  setOnTouchEx(callback: Function): BluetoothList {
    prompt(this.id, `Btl.SetOnClick(${callback}`);
    return this;
  }
}
