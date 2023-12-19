import View from "./view";

type PaintStyleType = "Fill" | "Line";
type PixelColorType = [number, number, number];
type PixelDataFormatType = "rawbase64" | "pngbase64" | "jpgbase64";
type PixelDataType =
  | "<rawbase64>"
  | "data:image/jpg;base64,<jpgbase64>"
  | "data:image/png;base64,<pngbase64>";

export default class Image extends View {
  _auto: boolean;
  _gfb: string;
  constructor(id: string) {
    super(id);
  }

  clear(): void {
    if (this._auto) {
      prompt(this.id, "Img.Clear(");
    } else {
      this.draw("c");
    }
  }

  draw(
    func: string,
    p1?: number | string,
    p2?: number | number[],
    p3?: number,
    p4?: number,
    p5?: number,
    p6?: number,
    p7?: number | string
  ): void {
    if (this._gfb.length > 2) {
      this._gfb += "\f";
    }
    this._gfb += `${func}~${p1}~${p2}~${p3}~${p4}~${p5}~${p6}~${p7}`;
  }

  drawArc(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    start: number,
    sweep: number
  ): void {
    if (this._auto) {
      prompt(
        this.id,
        `Img.DrawArc(${x1}\f${y1}\f${x2}\f${y2}\f${start}\f${sweep}`
      );
    } else {
      this.draw("a", null, x1, y1, x2, y2, start, sweep);
    }
  }

  drawCircle(x: number, y: number, radius: number): void {
    if (this._auto) {
      prompt(this.id, `Img.DrawCircle(${x}\f${y}\f${radius}`);
    } else {
      this.draw("e", null, x, y, radius);
    }
  }

  drawFrame(ms: number): void {
    prompt(this.id, `Img.DrawFrame\f${ms}`);
  }

  drawImage(
    image: Image,
    x: number,
    y: number,
    w: number,
    h: number,
    angle: number,
    mode: string
  ): void {
    if (this._auto) {
      prompt(
        this.id,
        `Img.DrawImage\f${
          image ? image.id : null
        }\f${x}\f${y}\f${w}\f${h}\f${angle}\f${mode}`
      );
    } else {
      this.draw(
        "i",
        image ? image.id : null,
        x,
        y,
        w ? w : -1,
        h ? h : -1,
        angle,
        mode
      );
    }
  }

  drawImageMtx(
    image: Image,
    matrix: [number, number, number, number, number, number]
  ): void {
    if (this._auto) {
      prompt(
        this.id,
        `Img.DrawImageMtx\f${image ? image.id : null}\f${matrix}`
      );
    } else {
      this.draw("m", image ? image.id : null, matrix);
    }
  }

  drawLine(x1, y1, x2, y2): void {
    if (this._auto) {
      prompt(this.id, `Img.DrawLine(${x1}\f${y1}\f${x2}\f${y2}`);
    } else {
      this.draw("l", null, x1, y1, x2, y2);
    }
  }

  drawPoint(x, y): void {
    if (this._auto) {
      prompt(this.id, `Img.DrawPoint(${x}\f${y}`);
    } else {
      this.draw("p", null, x, y);
    }
  }

  drawRectangle(x1, y1, x2, y2): void {
    if (this._auto) {
      prompt(this.id, `Img.DrawRect(${x1}\f${y1}\f${x2}\f${y2}`);
    } else {
      this.draw("r", null, x1, y1, x2, y2);
    }
  }

  drawSamples(data, range): void {
    if (this._auto) {
      prompt(this.id, `Img.DrawSamples(\f${data}\f${range}`);
    } else {
      this.draw("g", data, range, 0, 0, 0, 0);
    }
  }

  drawText(txt, x, y): void {
    if (this._auto) {
      prompt(this.id, `Img.DrawText(${txt}\f${x}\f${y}`);
    } else {
      this.draw("t", txt, x, y, 0, 0, 0);
    }
  }

  flatten(): void {
    prompt(this.id, "Img.Flatten(");
  }

  getName(): string {
    return prompt(this.id, "Img.GetName(");
  }

  getPixelColor(x: number, y: number): PixelColorType {
    return JSON.parse(prompt(this.id, `Img.GetPixelColor(\f${x}\f${y}`));
  }

  getPixelData(
    format: PixelDataFormatType,
    left: number,
    top: number,
    width: number,
    height: number
  ): string {
    return prompt(
      this.id,
      `Img.GetPixelData(\f${format}\f${left}\f${top}\f${width}\f${height}`
    );
  }

  getType(): string {
    return "Image";
  }

  measureText(text: string): { width: number; height: number } {
    return JSON.parse(prompt(this.id, `Img.MeasureText(\f${text}`));
  }

  move(x: number, y: number): void {
    prompt(this.id, `Img.Move(${x}\f${y}`);
  }

  play(ms: number): void {
    prompt(this.id, `Img.Play\f${ms}`);
  }

  reset(): void {
    prompt(this.id, "Img.Reset(");
  }

  rotate(angle: number, pivX: number, pivY: number): void {
    prompt(this.id, `Img.Rotate(${angle}\f${pivX}\f${pivY}`);
  }

  save(fileName: string, quality?: number): void {
    prompt(this.id, `Img.Save\f${fileName}\f${quality}`);
  }

  scale(x: number, y: number): void {
    prompt(this.id, `Img.Scale(${x}\f${y}`);
  }

  setAlpha(alpha: number): Image {
    if (this._auto) {
      prompt(this.id, `Img.SetAlpha(${alpha}`);
    } else {
      this.draw("k", null, alpha);
    }
    return this;
  }

  setAutoUpdate(onoff: boolean): Image {
    this._auto = onoff;
    prompt(this.id, `Img.SetAutoUpdate(\f${onoff}`);
    return this;
  }

  setColor(color: string): Image {
    if (this._auto) {
      prompt(this.id, `Img.SetColor(${color}`);
    } else {
      this.draw("o", color);
    }
    return this;
  }

  setFontFile(file: string): Image {
    if (this._auto) {
      prompt(this.id, `Img.SetFontFile(\f${file}`);
    } else {
      this.draw("f", file);
    }
    return this;
  }

  setImage(
    image: Image | string,
    width?: number,
    height?: number,
    options?: string
  ): Image {
    if (typeof image === "string") {
      prompt(
        this.id,
        `Img.LoadImage(\f${image}\f${width}\f${height}\f${options}`
      );
    } else {
      prompt(
        this.id,
        `Img.CopyImage(\f${
          image ? image.id : null
        }\f${width}\f${height}\f${options}`
      );
    }
    return this;
  }

  setLineWidth(width: number): Image {
    if (this._auto) {
      prompt(this.id, `Img.SetLineWidth(${width}`);
    } else {
      this.draw("w", null, width);
    }
    return this;
  }

  setMaxRate(ms: number): Image {
    prompt(this.id, `Img.SetMaxRate(${ms}`);
    return this;
  }

  setName(name: string): Image {
    prompt(this.id, `Img.SetName(${name}`);
    return this;
  }

  setOnLoad(callback: Function): Image {
    prompt(this.id, `Img.SetOnLoad\f${_Cbm(callback)}`);
    return this;
  }

  setOnLongTouch(callback: Function): Image {
    prompt(this.id, `Img.SetOnLongTouch(${_Cbm(callback)}`);
    return this;
  }

  setOnTouch(callback: Function): Image {
    prompt(this.id, `Img.SetOnTouch(${_Cbm(callback)}`);
    return this;
  }

  setOnTouchDown(callback: Function): Image {
    prompt(this.id, `Img.SetOnTouchDown(${_Cbm(callback)}`);
    return this;
  }

  setOnTouchMove(callback: Function): Image {
    prompt(this.id, `Img.SetOnTouchMove(${_Cbm(callback)}`);
    return this;
  }

  setOnTouchUp(callback: Function): Image {
    prompt(this.id, `Img.SetOnTouchUp(${_Cbm(callback)}`);
    return this;
  }

  setPaintColor(color: string): Image {
    if (this._auto) {
      prompt(this.id, `Img.SetPaintColor(${color}`);
    } else {
      this.draw("n", color);
    }
    return this;
  }

  setPaintStyle(style: PaintStyleType): Image {
    if (this._auto) {
      prompt(this.id, `Img.SetPaintStyle(${style}`);
    } else {
      this.draw("s", style);
    }
    return this;
  }

  setPixelData(
    data: PixelDataType,
    width?: number,
    height?: number,
    options?: string
  ): string {
    return prompt(
      this.id,
      `Img.SetPixelData(\f${data}\f${width}\f${height}\f${options}`
    );
  }

  setPixelMode(onoff: boolean): Image {
    prompt(this.id, `Img.SetPixelMode(\f${onoff}`);
    return this;
  }

  setTextSize(size: number): Image {
    if (this._auto) {
      prompt(this.id, `Img.SetTextSize(${size}`);
    } else {
      this.draw("x", null, size);
    }
    return this;
  }

  setTouchable(touchable: boolean): Image {
    prompt(this.id, `Img.SetTouchable(${touchable}`);
    return this;
  }

  skew(x: number, y: number): void {
    prompt(this.id, `Img.Skew(${x}\f${y}`);
  }

  transform(matrix: string): void {
    prompt(this.id, `Img.Transform(\f${matrix}`);
  }

  update(): void {
    if (this._auto) {
      prompt(this.id, "Img.Update(");
    } else {
      prompt(this.id, `Img.Batch(${this._gfb}`);
      this._gfb = "";
    }
  }
}
