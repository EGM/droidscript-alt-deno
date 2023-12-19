import Component from "./component";
import Layout from "./layout";

export default class Overlay extends Component {
  constructor(id: string) {
    super(id);
  }

  getType(): string {
    return "Overlay";
  }
  addLayout(
    layout: Layout,
    left?: number,
    top?: number,
    options?: string
  ): Overlay {
    prompt(
      this.id,
      `Ovl.AddLayout(\f${
        layout ? layout.id : null
      }\f${left}\f${top}\f${options}`
    );
    return this;
  }
  removeLayout(layout: Layout): void {
    prompt(this.id, `Ovl.RemoveLayout(\f${layout ? layout.id : null}`);
  }
  setPosition(
    layout: Layout,
    left?: number,
    top?: number,
    options?: string
  ): Overlay {
    prompt(
      this.id,
      `Ovl.SetPosition(\f${
        layout ? layout.id : null
      }\f${left}\f${top}\f${options}`
    );
    return this;
  }
}
