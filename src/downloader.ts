import Component from "./component";

export default class Downloader extends Component {
  constructor(id: string) {
    super(id);
  }

  download(url: string, folder: string, name: string, headers: string): void {
    prompt(this.id, `Dwn.Download(\f${url}\f${folder}\f${name}\f${headers}`);
  }

  getProgress(): number {
    return parseFloat(prompt(this.id, "Dwn.GetProgress("));
  }

  getSize(): number {
    return parseFloat(prompt(this.id, "Dwn.GetSize("));
  }

  getType(): string {
    return "Downloader";
  }

  isComplete(): boolean {
    return prompt(this.id, "Dwn.IsComplete(") === "true";
  }

  setOnCancel(callback: Function): Downloader {
    prompt(this.id, `Dwn.SetOnCancel(\f${_Cbm(callback)}`);
    return this;
  }

  setOnComplete(callback: Function): Downloader {
    prompt(this.id, `Dwn.SetOnComplete(\f${_Cbm(callback)}`);
    return this;
  }

  setOnDownload(callback: Function): Downloader {
    prompt(this.id, `Dwn.SetOnDownload(\f${_Cbm(callback)}`);
    return this;
  }

  setOnError(callback: Function): Downloader {
    prompt(this.id, `Dwn.SetOnError(\f${_Cbm(callback)}`);
    return this;
  }
}
