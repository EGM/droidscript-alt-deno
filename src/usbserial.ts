import Component from "./component";

export default class USBSerial extends Component {
  constructor(id: string) {
    super(id);
  }

  getType(): string {
    return "USBSerial";
  }
  isConnected(): boolean {
    return prompt(this.id, "Usb.IsConnected(") === "true";
  }
  start(): void {
    prompt(this.id, "Usb.Start(");
  }
  stop(): void {
    prompt(this.id, "Usb.Stop(");
  }
  setOnReceive(callback: Function): USBSerial {
    prompt(this.id, `Usb.SetOnReceive(${_Cbm(callback)}`);
    return this;
  }
  setDTR(onOff: boolean): USBSerial {
    prompt(this.id, `Usb.SetDTR(\f${onOff}`);
    return this;
  }
  setRTS(onOff: boolean): USBSerial {
    prompt(this.id, `Usb.SetRTS(\f${onOff}`);
    return this;
  }
  setMaxRead(bytes: number): USBSerial {
    prompt(this.id, `Usb.SetMaxRead(\f${bytes}`);
    return this;
  }
  setMaxWrite(bytes: number): USBSerial {
    prompt(this.id, `Usb.SetMaxWrite(\f${bytes}`);
    return this;
  }
  setTimeout(ms: number): USBSerial {
    prompt(this.id, `Usb.SetTimeout(\f${ms}`);
    return this;
  }
  setDataMode(mode: string): USBSerial {
    prompt(this.id, `Usb.SetDataMode(\f${mode}`);
    return this;
  }
  setSplitMode(mode: string, p2?: string, p3?: string): USBSerial {
    prompt(this.id, `Usb.SetSplitMode(\f${mode}\f${p2}\f${p3}`);
    return this;
  }
  write(text: string, encoding?: string): void {
    prompt(this.id, `Usb.Write(\f${text}\f${encoding}`);
  }
}
