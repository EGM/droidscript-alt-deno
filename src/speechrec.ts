import Component from "./component";

export default class SpeechRec extends Component {
  constructor(id: string) {
    super(id);
  }

  cancel(): void {
    prompt(this.id, "Spr.Cancel(");
  }

  getRMS(): number {
    return parseFloat(prompt(this.id, "Spr.GetRMS("));
  }

  getType(): string {
    return "SpeechRec";
  }

  isListening(): boolean {
    return prompt(this.id, "Spr.IsListening(") === "true";
  }

  recognize(): string {
    return prompt(this.id, "Spr.Recognize(\f");
  }

  setOnError(callback: Function): SpeechRec {
    prompt(this.id, `Spr.SetOnError(\f${_Cbm(callback)}`);
    return this;
  }

  setOnReady(callback: Function): SpeechRec {
    prompt(this.id, `Spr.SetOnReady(\f${_Cbm(callback)}`);
    return this;
  }

  setOnResult(callback: Function): SpeechRec {
    prompt(this.id, `Spr.SetOnResult(\f${_Cbm(callback)}`);
    return this;
  }

  stop(): void {
    prompt(this.id, "Spr.Stop(");
  }
}
