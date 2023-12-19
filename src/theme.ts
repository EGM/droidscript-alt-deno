import Component from "./component";

export default class Theme extends Component {
  constructor(id: string) {
    super(id);
  }

  adjustColor(
    hue: number,
    saturation: number,
    brightness: number,
    contrast: number
  ): Theme {
    prompt(
      this.id,
      `Thm.AdjustColor(\f${hue}\f${saturation}\f${brightness}\f${contrast}`
    );
    return this;
  }
  getType(): string {
    return "Theme";
  }
  setBackColor(color: string): Theme {
    prompt(this.id, `Thm.SetBackColor(\f${color}`);
    return this;
  }
  setBackground(file: string, options?: string): Theme {
    prompt(this.id, `Thm.SetBackground(\f${file}\f${options}`);
    return this;
  }
  setButtonOptions(options: string): Theme {
    prompt(this.id, `Thm.SetButtonOptions(\f${options}`);
    return this;
  }
  setButtonStyle(
    color1: string,
    color2: string,
    radius: number,
    strokeColor: string,
    strokeWidth: number,
    shadow: string,
    checkColor: string
  ): Theme {
    prompt(
      this.id,
      `Thm.SetButtonStyle(\f${color1}\f${color2}\f${radius}\f${strokeColor}\f${strokeWidth}\f${shadow}\f${checkColor}`
    );
    return this;
  }
  setButtonTextColor(color: string): Theme {
    prompt(this.id, `Thm.SetBtnTextColor(\f${color}`);
    return this;
  }
  setCheckBoxOptions(options: string): Theme {
    prompt(this.id, `Thm.SetCheckBoxOptions(\f${options}`);
    return this;
  }
  setDialogColor(color: string): Theme {
    prompt(this.id, `Thm.SetDialogColor(\f${color}`);
    return this;
  }
  setDialogCornerRadius(radius: number): Theme {
    prompt(this.id, `Thm.SetDialogCornerRadius(\f${radius}`);
    return this;
  }
  setDialogButtonColor(color: string): Theme {
    prompt(this.id, `Thm.SetDialogBtnColor(\f${color}`);
    return this;
  }
  setDialogButtonTextColor(color: string): Theme {
    prompt(this.id, `Thm.SetDialogBtnTxtColor(\f${color}`);
    return this;
  }
  setDimBehind(dim: boolean): Theme {
    prompt(this.id, `Thm.SetDimBehind(\f${dim}`);
    return this;
  }
  setProgressBarOptions(options: string): Theme {
    prompt(this.id, `Thm.SetProgressBarOptions(\f${options}`);
    return this;
  }
  setProgressBackColor(color: string): Theme {
    prompt(this.id, `Thm.SetProgressBackColor(\f${color}`);
    return this;
  }
  setProgressTextColor(color: string): Theme {
    prompt(this.id, `Thm.SetProgressTextColor(\f${color}`);
    return this;
  }
  setTextColor(color: string): Theme {
    prompt(this.id, `Thm.SetTextColor(\f${color}`);
    return this;
  }
  setTextEditOptions(options: string): Theme {
    prompt(this.id, `Thm.SetTextEditOptions(\f${options}`);
    return this;
  }
  setTitleHeight(height: number, options?: string): Theme {
    prompt(this.id, `Thm.SetTitleHeight(\f${height}\f${options}`);
    return this;
  }
  setTitleColor(color: string): Theme {
    prompt(this.id, `Thm.SetTitleColor(\f${color}`);
    return this;
  }
  setTitleDividerColor(color: string): Theme {
    prompt(this.id, `Thm.SetTitleDividerColor(\f${color}`);
    return this;
  }
  setTitleDividerHeight(height: number, options?: string): Theme {
    prompt(this.id, `Thm.SetTitleDividerHeight(\f${height}\f${options}`);
    return this;
  }
}
