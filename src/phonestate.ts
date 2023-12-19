import Component from "./component";

export default class PhoneState extends Component {
  constructor(id: string) {
    super(id);
  }

  getType(): string {
    return "PhoneState";
  }

  setOnChange(callback: Function): PhoneState {
    prompt(this.id, `Pst.SetOnChange(${_Cbm(callback)}`);
    return this;
  }

  start(): void {
    prompt(this.id, "Pst.Start(");
  }

  stop(): void {
    prompt(this.id, "Pst.Stop(");
  }
}
