import View from "./view";

export default class WebView extends View {
  constructor(id: string) {
    super(id);
  }

  back(): void {
    prompt(this.id, "Web.Back(");
  }

  canGoBack(): boolean {
    return prompt(this.id, "Web.CanGoBack(") === "true";
  }

  canGoForward(): boolean {
    return prompt(this.id, "Web.CanGoForward(") === "true";
  }

  capture(file: string): void {
    prompt(this.id, `Web.Capture(\f${file}`);
  }

  clearHistory(): void {
    prompt(this.id, "Web.ClearHistory(");
  }

  execute(code: string, callback?: Function): void {
    prompt(this.id, `Web.Execute(\f${code}\f${_Cbm(callback)}`);
  }

  forward(): void {
    prompt(this.id, "Web.Forward(");
  }

  getTitle(): string {
    return prompt(this.id, "Web.GetTitle(");
  }

  getType(): string {
    return "WebView";
  }

  getUrl(): string {
    return prompt(this.id, "Web.GetUrl(");
  }

  loadHtml(html: string, baseFolder?: string, options?: string): void {
    prompt(this.id, `Web.LoadHtml(\f${html}\f${baseFolder}\f${options}`);
  }

  loadUrl(url: string, options?: string): void {
    prompt(this.id, `Web.LoadUrl(\f${url}\f${options}`);
  }

  print(): void {
    prompt(this.id, "Web.Print(\f");
  }

  reload(): void {
    prompt(this.id, "Web.Reload(");
  }

  setOnConsole(callback: Function): WebView {
    prompt(this.id, `Web.SetOnConsole(\f${_Cbm(callback)}`);
    return this;
  }

  setOnError(callback: Function): WebView {
    prompt(this.id, `Web.SetOnError(\f${_Cbm(callback)}`);
    return this;
  }

  setOnProgress(callback: Function): WebView {
    prompt(this.id, `Web.SetOnProgress(${_Cbm(callback)}`);
    return this;
  }

  setOnTouch(callback: Function): WebView {
    prompt(this.id, `Web.SetOnTouch(\f${_Cbm(callback)}`);
    return this;
  }

  setRedirect(urlFrom: string, urlTo: string): WebView {
    prompt(this.id, `Web.SetRedirect(\f${urlFrom}\f${urlTo}`);
    return this;
  }

  setTextZoom(zoom: number): WebView {
    prompt(this.id, `Web.SetTextZoom(\f${zoom}`);
    return this;
  }

  setTouchMode(mode: string): WebView {
    prompt(this.id, `Web.SetTouchMode(\f${mode}`);
    return this;
  }

  setUserAgent(agent: string): WebView {
    prompt(this.id, `Web.SetUserAgent(\f${agent}`);
    return this;
  }

  setUserCreds(name: string, password: string): WebView {
    prompt(this.id, `Web.SetUserCreds(\f${name}\f${password}`);
    return this;
  }

  setZoom(zoom: number): WebView {
    prompt(this.id, `Web.SetZoom(\f${zoom}`);
    return this;
  }

  simulateKey(keyName: string, modifiers?: string, pause?: number): WebView {
    prompt(this.id, `Web.SimulateKey(\f${keyName}\f${modifiers}\f${pause}`);
    return this;
  }
}
