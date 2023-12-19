import Component from "./component";

export default class Sensor extends Component {
  constructor(id: string) {
    super(id);
  }

  getAzimuth(): number {
    return parseFloat(prompt(this.id, "Sns.GetAzimuth("));
  }

  getNames(): string {
    return prompt(this.id, "Sns.GetNames(");
  }

  getPitch(): number {
    return parseFloat(prompt(this.id, "Sns.GetPitch("));
  }

  getRoll(): number {
    return parseFloat(prompt(this.id, "Sns.GetRoll("));
  }

  getType(): string {
    return "Sensor";
  }

  getValues(): number[] {
    return JSON.parse(prompt(this.id, "Sns.GetValues("));
  }

  setMaxRate(rate: number): Sensor {
    prompt(this.id, `Sns.SetMaxRate(\f${rate}`);
    return this;
  }

  setMinChange(min: number): Sensor {
    prompt(this.id, `Sns.SetMinChange(${min}`);
    return this;
  }

  setOnChange(callback: Function): Sensor {
    prompt(this.id, `Sns.SetOnChange(${_Cbm(callback)}`);
    return this;
  }

  start(): void {
    prompt(this.id, "Sns.Start(");
  }

  stop(): void {
    prompt(this.id, "Sns.Stop(");
  }
}
