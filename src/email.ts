import Component from "./component";

export default class Email extends Component {
  constructor(id: string) {
    super(id);
  }

  getType(): string {
    return "Email";
  }

  receive(folder: string, maxCount: number, filter: string): void {
    prompt(this.id, `EML.Receive(${folder}\f${maxCount}\f${filter}`);
  }

  send(
    subject: string,
    body: string,
    sender: string,
    recipients: string,
    attach: string
  ): void {
    prompt(
      this.id,
      `EML.Send(\f${subject}\f${body}\f${sender}\f${recipients}\f${attach}`
    );
  }

  setIMAP(server: string, port: number): Email {
    prompt(this.id, `EML.SetIMAP(${server}\f${port}`);
    return this;
  }

  setOnMessage(callback: Function): Email {
    prompt(this.id, `EML.SetOnMessage(${_Cbm(callback)}`);
    return this;
  }

  setOnStatus(callback: Function): Email {
    prompt(this.id, `EML.SetOnStatus(${_Cbm(callback)}`);
    return this;
  }

  setSMTP(server: string, port: number): Email {
    prompt(this.id, `EML.SetSMTP(${server}\f${port}`);
    return this;
  }
}
