import Component from "./component";

export default class PlayStore extends Component {
  constructor(id: string) {
    super(id);
  }

  getBillingInfo(prodIDs: string, callback: Function, options?: string): void {
    prompt(
      this.id,
      `Ply.GetBillingInfo(\f${prodIDs}\f${_Cbm(callback)}\f${options}`
    );
  }

  getPurchases(callback: Function, options?: string): void {
    prompt(this.id, `Ply.GetPurchases(\f${_Cbm(callback)}\f${options}`);
  }

  getType(): string {
    return "PlayStore";
  }

  purchase(
    prodID: string,
    token: string,
    callback: Function,
    options?: string
  ): void {
    prompt(
      this.id,
      `Ply.Purchase(\f${prodID}\f${token}\f${_Cbm(callback)}\f${options}`
    );
  }
}
