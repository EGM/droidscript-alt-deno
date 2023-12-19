import View from "./view";
import Image from "./image";

export default class CameraView extends View {
  constructor(id: string) {
    super(id);
  }

  autoCapture(path: string, file: string, maxCount: number): void {
    prompt(this.id, `Cam.AutoCapture(${path}\f${file}\f${maxCount}`);
  }

  findFaces(max: number): void {
    return JSON.parse(prompt(this.id, `Cam.FindFaces(\f${max}`));
  }

  getCameraCount(): number {
    return parseInt(prompt(this.id, `Cam.GetCameraCount(`));
  }

  getColorEffects(): string {
    return prompt(this.id, `Cam.GetColorEffects(`);
  }

  getImageHeight(): number {
    return parseInt(prompt(this.id, `Cam.GetImageHeight(`));
  }

  getImageWidth(): number {
    return parseInt(prompt(this.id, `Cam.GetImageWidth(`));
  }

  getMaxZoom(): number {
    return parseInt(prompt(this.id, `Cam.GetMaxZoom(`));
  }

  getParameters(): string {
    return prompt(this.id, `Cam.GetParams(\f`);
  }

  getPictureSizes(): string {
    return prompt(this.id, `Cam.GetPictureSizes(`);
  }

  getPixelData(
    format: string,
    left: number,
    top: number,
    width: number,
    height: number
  ): string {
    return prompt(
      this.id,
      `Cam.GetPixelData(\f${format}\f${left}\f${top}\f${width}\f${height}`
    );
  }

  getType(): string {
    return "CameraView";
  }

  getZoom(): number {
    return parseInt(prompt(this.id, `Cam.GetZoom(`));
  }

  hasFlash(): boolean {
    return prompt(this.id, `Cam.HasFlash(`) === "true";
  }

  isRecording(): boolean {
    return prompt(this.id, `Cam.IsRecording(`) === "true";
  }

  motionMosaic(
    xtiles: number,
    ytiles: number,
    sensitivity: number,
    minPeriod: number,
    img: Image
  ): void {
    prompt(
      this.id,
      `Cam.MotionMosaic(${xtiles}\f${ytiles}\f${sensitivity}\f${minPeriod}\f${
        img ? img.id : null
      }`
    );
  }

  record(file: string, seconds?: string): void {
    prompt(this.id, `Cam.Record(\f${file}\f${seconds}`);
  }

  reportColors(
    list: string,
    callback: Function,
    sampSize: number,
    maxRate: number
  ): void {
    prompt(
      this.id,
      `Cam.ReportColors(\f${list}\f${_Cbm(callback)}\f${sampSize}\f${maxRate}`
    );
  }

  setColorEffect(effect: string): CameraView {
    prompt(this.id, `Cam.SetColorEffect(\f${effect}`);
    return this;
  }

  setDuplicateImage(img1: Image, img2: Image): CameraView {
    prompt(
      this.id,
      `Cam.SetDuplicateImage(\f${img1 ? img1.id : null}\f${
        img2 ? img2.id : null
      }`
    );
    return this;
  }

  setFlash(onoff: boolean): CameraView {
    prompt(this.id, `Cam.SetFlash(${onoff}`);
    return this;
  }

  setFocusMode(mode: string): CameraView {
    prompt(this.id, `Cam.SetFocusMode(\f${mode}`);
    return this;
  }

  setOnFocus(callback: Function): CameraView {
    prompt(this.id, `Cam.SetOnFocus\f${_Cbm(callback)}`);
    return this;
  }

  setOnMotion(callback: Function): CameraView {
    prompt(this.id, `Cam.SetOnMotion(${_Cbm(callback)}`);
    return this;
  }

  setOnPicture(callback: Function): CameraView {
    prompt(this.id, `Cam.SetOnPicture\f${_Cbm(callback)}`);
    return this;
  }

  setOnReady(callback: Function): CameraView {
    prompt(this.id, `Cam.SetOnReady(${_Cbm(callback)}`);
    return this;
  }

  setOrientation(angle: number): CameraView {
    prompt(this.id, `Cam.SetOrientation(\f${angle}`);
    return this;
  }

  setParameter(name: string, value: string | number): CameraView {
    if (typeof value === "string") {
      prompt(this.id, `Cam.SetParam(\f${name}\f${value}`);
    } else {
      prompt(this.id, `Cam.SetParamNum(\f${name}\f${value}`);
    }
    return this;
  }

  setPictureSize(width: number, height: number): CameraView {
    prompt(this.id, `Cam.SetPictureSize(\f${width}\f${height}`);
    return this;
  }

  setPostRotation(angle: number): CameraView {
    prompt(this.id, `Cam.SetPostRotation(\f${angle}`);
    return this;
  }

  setPreviewImage(img: Image): CameraView {
    prompt(this.id, `Cam.SetPreviewImage(${img ? img.id : null}`);
    return this;
  }

  setSound(onoff: boolean): CameraView {
    prompt(this.id, `Cam.SetSound(${onoff}`);
    return this;
  }

  setVideoSize(width: number, height: number): CameraView {
    prompt(this.id, `Cam.SetVideoSize(\f${width}\f${height}`);
    return this;
  }

  setZoom(level: number): CameraView {
    prompt(this.id, `Cam.SetZoom(\f${level}`);
    return this;
  }

  startPreview(): void {
    prompt(this.id, `Cam.StartPreview(`);
  }

  stop(): void {
    prompt(this.id, `Cam.Stop(`);
  }

  stopPreview(): void {
    prompt(this.id, `Cam.StopPreview(`);
  }

  stream(
    ip: string,
    port: number,
    quality: string,
    fps: number,
    mtu: string
  ): void {
    prompt(this.id, `Cam.Stream(${ip}\f${port}\f${quality}\f${fps}\f${mtu}`);
  }

  takePicture(file: string): void {
    prompt(this.id, `Cam.TakePicture(${file}`);
  }
}
