import Component from "./component";

export default class File extends Component {
  constructor(id: string) {
    super(id);
  }

  close(): void {
    prompt(this.id, "Fil.Close(");
  }

  getLength(): number {
    return parseInt(prompt(this.id, "Fil.GetLength("));
  }

  getPointer(): number {
    return parseInt(prompt(this.id, "Fil.GetPointer("));
  }

  getType(): string {
    return "File";
  }

  // eslint-disable-next-line
  readData(len: number, mode: "Hex" | "Int" | "Text"): any {
    return JSON.parse(prompt(this.id, `Fil.ReadData(\f${len}\f${mode}`));
  }

  readNumber(type: string): number {
    return parseFloat(prompt(this.id, `Fil.ReadNumber(\f${type}`));
  }

  readText(type: string): string {
    return prompt(this.id, `Fil.ReadText(\f${type}`);
  }

  readTextAsync(type: string, callback: Function): string {
    return prompt(this.id, `Fil.ReadTextAsync(\f${type}\f${_Cbm(callback)}`);
  }

  seek(offset: number): File {
    prompt(this.id, `Fil.Seek(\f${offset}`);
    return this;
  }

  setLength(len: number): File {
    prompt(this.id, `Fil.SetLength(\f${len}`);
    return this;
  }

  skip(bytes: number): File {
    prompt(this.id, `Fil.Skip(\f${bytes}`);
    return this;
  }

  writeData(data: string, mode: string): File {
    prompt(this.id, `Fil.WriteData(\f${data}\f${mode}`);
    return this;
  }

  writeNumber(data: number, type: string): File {
    prompt(this.id, `Fil.WriteNumber(\f${data}\f${type}`);
    return this;
  }

  writeText(data: string, type: string): File {
    prompt(this.id, `Fil.WriteText(\f${data}\f${type}`);
    return this;
  }
}
