import Component from "./component";
export default class SMS extends Component {
  constructor(id: string) {
    super(id);
  }

  getType(): string {
    return "SMS";
  }
  send(number: string, msg: string, options?: string): void {
    prompt(this.id, `SMS.Send(\f${number}\f${msg}\f${options}`);
  }
  setOnStatus(callback: Function): SMS {
    prompt(this.id, `SMS.SetOnStatus(${_Cbm(callback)}`);
    return this;
  }
  setOnMessage(callback: Function): SMS {
    prompt(this.id, `SMS.SetOnMessage(${_Cbm(callback)}`);
    return this;
  }
}
