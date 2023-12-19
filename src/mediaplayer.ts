import Component from "./component";

export default class MediaPlayer extends Component {
  constructor(id: string) {
    super(id);
  }

  close(): void {
    prompt(this.id, "Aud.Close(");
  }

  getDuration(): number {
    return parseFloat(prompt(this.id, "Aud.GetDuration("));
  }

  getType(): string {
    return "MediaPlayer";
  }

  isLooping(): boolean {
    return prompt(this.id, "Aud.IsLooping(") === "true";
  }

  isPlaying(): boolean {
    return prompt(this.id, "Aud.IsPlaying(") === "true";
  }

  isReady(): boolean {
    return prompt(this.id, "Aud.IsReady(") === "true";
  }

  pause(): void {
    prompt(this.id, "Aud.Pause(");
  }

  play(from: number): void {
    prompt(this.id, `Aud.Play(\f${from}`);
  }

  seekTo(time: number): void {
    prompt(this.id, `Aud.SeekTo(${time}`);
  }

  setFile(file: string): MediaPlayer {
    prompt(this.id, `Aud.SetFile(${file}`);
    return this;
  }

  setLooping(loop: boolean): MediaPlayer {
    prompt(this.id, `Aud.SetLooping(\f${loop}`);
    return this;
  }

  setOnComplete(callback: Function): MediaPlayer {
    prompt(this.id, `Aud.SetOnComplete(${_Cbm(callback)}`);
    return this;
  }

  setOnReady(callback: Function): MediaPlayer {
    prompt(this.id, `Aud.SetOnReady(${_Cbm(callback)}`);
    return this;
  }

  setOnSeekDone(callback: Function): MediaPlayer {
    prompt(this.id, `Aud.SetOnSeekDone(${_Cbm(callback)}`);
    return this;
  }

  setVolume(left: number, right: number): MediaPlayer {
    prompt(this.id, `Aud.SetVolume(${left}\f${right}`);
    return this;
  }

  stop(): void {
    prompt(this.id, "Aud.Stop(");
  }
}
