import Component from "./component";

export default class CloudStore extends Component {
  constructor(id: string) {
    super(id);
  }

  delete(file: string, callback: Function): void {
    prompt(this.id, `Cld.Delete(\f${file}\f${_Cbm(callback)}`);
  }
  getType(): string {
    return "CloudStore";
  }
  list(filter: string, callback: Function): void {
    prompt(this.id, `Cld.List(\f${filter}\f${_Cbm(callback)}`);
  }
  load(file: string, callback: Function, options?: string): void {
    prompt(this.id, `Cld.Load(\f${file}\f${_Cbm(callback)}\f${options}`);
  }
  merge(file: string, data: string, callback: Function): void {
    prompt(
      this.id,
      `Cld.Merge(\f${file}\f${JSON.stringify(data)}\f${_Cbm(callback)}`
    );
  }
  save(file: string, data: string, callback: Function, options?: string): void {
    prompt(
      this.id,
      `Cld.Save(\f${file}\f${JSON.stringify(data)}\f${_Cbm(
        callback
      )}\f${options}`
    );
  }
}
