import Component from "./component";
import Image from "./image";

type ByteModeType = "Int" | "Hex";
type ModeType = "US-ASCII" | "UTF-8" | "UTF-16LE" | "UTF-16BE" | "UTF-16";

export default class NetClient extends Component {
  constructor(id: string) {
    super(id);
  }

  autoReceive(server: string, port: number, mode?: string): string {
    return prompt(this.id, `Net.AutoReceive(${server}\f${port}\f${mode}`);
  }

  clear(): void {
    prompt(this.id, "Net.Clear(");
  }

  close(): void {
    prompt(this.id, "Net.Disconnect(");
  }

  connect(address: string, port: number): boolean {
    return prompt(this.id, `Net.Connect(${address}\f${port}`) === "true";
  }

  disconnect(): void {
    prompt(this.id, "Net.Disconnect(");
  }

  downloadFile(file: string): string {
    return prompt(this.id, `Net.DownloadFile(${file}`);
  }

  getBroadcastAddress(): string {
    return prompt(this.id, "Net.GetBroadcastAddress(");
  }

  getType(): string {
    return "NetClient";
  }

  isConnected(): boolean {
    return prompt(this.id, "Net.IsConnected(") === "true";
  }

  receiveBytes(mode: ByteModeType): string {
    return JSON.parse(prompt(this.id, `Net.ReceiveBytes(\f${mode}`));
  }

  receiveDatagram(mode: ModeType, port: number, timeout: number): string {
    return prompt(this.id, `Net.ReceiveDatagram(${mode}\f${port}\f${timeout}`);
  }

  receiveDatagrams(port, mode: ModeType): void {
    prompt(this.id, `Net.ReceiveDatagrams(\f${port}\f${mode}`);
  }

  receiveFile(file: string, wait: number): string {
    return prompt(this.id, `Net.ReceiveFile(${file}\f${wait}`);
  }

  receiveText(mode: ModeType): string {
    return prompt(this.id, `Net.ReceiveText(${mode}`);
  }

  receiveVideoStream(port: number, img: Image): void {
    prompt(this.id, `Net.ReceiveVideoStream(\f${port}\f${img ? img.id : null}`);
  }

  sendBytes(data: string, mode: ByteModeType): void {
    prompt(this.id, `Net.SendBytes(\f${data}\f${mode}`);
  }

  sendData(text: string, encoding: ModeType): void {
    prompt(this.id, `Net.SendData(\f${text}\f${encoding}`);
  }

  sendDatagram(
    data: string,
    mode: ModeType,
    address: string,
    port: number,
    options?: "Text" | "Hex" | "Bytes"
  ): void {
    prompt(
      this.id,
      `Net.SendDatagram(\f${data}\f${mode}\f${address}\f${port}\f${options}`
    );
  }

  sendText(text: string, mode: ModeType): void {
    prompt(this.id, `Net.SendText(${text}\f${mode}`);
  }

  setDataMode(mode: string): NetClient {
    prompt(this.id, `Net.SetDataMode(\f${mode}`);
    return this;
  }

  setOnConnect(callback: Function): NetClient {
    prompt(this.id, `Net.SetOnConnect(${_Cbm(callback)}`);
    return this;
  }

  setOnDownload(callback: Function): NetClient {
    prompt(this.id, `Net.SetOnDownload(${_Cbm(callback)}`);
    return this;
  }

  setOnReceive(callback: Function): NetClient {
    prompt(this.id, `Net.SetOnReceive(${_Cbm(callback)}`);
    return this;
  }

  setSplitMode(
    mode: "End" | "Start-End" | "Size",
    p2: number | string,
    p3: number | string
  ): NetClient {
    prompt(this.id, `Net.SetSplitMode(\f${mode}\f${p2}\f${p3}`);
    return this;
  }

  setTimeout(secs: number): NetClient {
    prompt(this.id, `Net.SetTimeout(${secs}`);
    return this;
  }

  wakeOnLan(ip: string, mac: string): void {
    prompt(this.id, `Net.WakeOnLan(\f${ip}\f${mac}`);
  }
}
