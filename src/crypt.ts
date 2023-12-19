import Component from "./component";

export default class Crypt extends Component {
  constructor(id: string) {
    super(id);
  }
  decrypt(text: string, password?: string): string {
    return prompt(this.id, `Crp.Decrypt\f${text}\f${password}`);
  }

  encrypt(text: string, password?: string): string {
    return prompt(this.id, `Crp.Encrypt\f${text}\f${password}`);
  }

  getType(): string {
    return "Crypt";
  }

  hash(text: string, mode?: string, options?: string): string {
    return prompt(this.id, `Crp.Hash\f${text}\f${mode}\f${options}`);
  }
}
