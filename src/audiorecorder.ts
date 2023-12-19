import Component from "./component";

export default class AudioRecorder extends Component {
  constructor(id: string) {
    super(id);
  }

  // eslint-disable-next-line
  getData(): any { return JSON.parse(prompt(this.id, "Rec.GetData(")); }

  getPeak(): number {
    return parseFloat(prompt(this.id, "Rec.GetPeak("));
  }

  getRMS(): number {
    return parseFloat(prompt(this.id, "Rec.GetRMS("));
  }

  getType(): string {
    return "AudioRecorder";
  }

  pause(): void {
    prompt(this.id, "Rec.Pause(");
  }

  setFile(file: string): AudioRecorder {
    prompt(this.id, `Rec.SetFile(${file}`);
    return this;
  }

  setFrequency(frequency: number): AudioRecorder {
    prompt(this.id, `Rec.SetFrequency(\f${frequency}`);
    return this;
  }

  setSource(src: string): AudioRecorder {
    prompt(this.id, `Rec.SetSource(\f${src}`);
    return this;
  }

  start(): void {
    prompt(this.id, "Rec.Start(");
  }

  stop(): void {
    prompt(this.id, "Rec.Stop(");
  }
}
