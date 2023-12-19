import Component from "./component";

export default class SysProc extends Component {
  constructor(id: string) {
    super(id);
  }

  destroy(): void {
    prompt(this.id, "Sys.Destroy(");
    _map[this.id] = null;
  }
  err(maxLines: number, options?: string): string {
    return prompt(this.id, `Sys.Err(\f${maxLines}\f${options}`);
  }
  getType(): string {
    return "SysProc";
  }
  in(maxLines: number, options?: string): string {
    return prompt(this.id, `Sys.In(\f${maxLines}\f${options}`);
  }
  out(cmd: string): void {
    prompt(this.id, `Sys.Out(\f${cmd}`);
  }
  readFileAsByte(file: string): number {
    return parseInt(prompt(this.id, `Sys.ReadFileAsByte(\f${file}`));
  }
  setOnError(callback: Function): SysProc {
    prompt(this.id, `Sys.SetOnError(\f${_Cbm(callback)}`);
    return this;
  }
  setOnInput(callback: Function): SysProc {
    prompt(this.id, `Sys.SetOnInput(\f${_Cbm(callback)}`);
    return this;
  }
  writeToFile(file: string, data: string): void {
    prompt(this.id, `Sys.WriteToFile(\f${file}\f${data}`);
  }
}
