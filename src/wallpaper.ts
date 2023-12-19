import Component from "./component";

export default class Wallpaper extends Component {
  constructor(id: string) {
    super(id);
  }

  getType(): string {
    return "Wallpaper";
  }

  isVisible(): boolean {
    return prompt(this.id, "Wpr.IsVisible\f") === "true";
  }
}
