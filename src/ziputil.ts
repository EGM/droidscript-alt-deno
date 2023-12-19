import Component from "./component";

export default class ZipUtil extends Component {
  constructor(id: string) {
    super(id);
  }

  addFile(name: string, file: string): ZipUtil {
    prompt(this.id, `Zip.AddFile(\f${name}\f${file}`);
    return this;
  }

  addText(name: string, text: string): ZipUtil {
    prompt(this.id, `Zip.AddText(\f${name}\f${text}`);
    return this;
  }

  close(): void {
    prompt(this.id, "Zip.Close(");
  }

  create(file: string): ZipUtil {
    prompt(this.id, `Zip.Create(\f${file}`);
    return this;
  }

  createDebugKey(file: string): ZipUtil {
    prompt(this.id, `Zip.CreateDebugKey(\f${file}`);
    return this;
  }

  createKey(file: string, pass: string, name: string, org: string): ZipUtil {
    prompt(this.id, `Zip.CreateKey(\f${file}\f${pass}\f${name}\f${org}`);
    return this;
  }

  extract(name: string, file: string): ZipUtil {
    prompt(this.id, `Zip.Extract(\f${name}\f${file}`);
    return this;
  }

  getType(): string {
    return "ZipUtil";
  }

  list(path: string): string {
    return prompt(this.id, `Zip.List(\f${path}`);
  }

  open(file: string): void {
    prompt(this.id, `Zip.Open(\f${file}`);
  }

  sign(
    fileIn: string,
    fileOut: string,
    keyStore: string,
    pass: string
  ): boolean {
    return (
      prompt(
        this.id,
        `Zip.Sign(\f${fileIn}\f${fileOut}\f${keyStore}\f${pass}`
      ) === "true"
    );
  }

  updateManifest(
    fileIn: string,
    fileOut: string,
    packageName: string,
    appName: string,
    permissions: string,
    options?: string
  ): void {
    prompt(
      this.id,
      `Zip.UpdateManifest(\f${fileIn}\f${fileOut}\f${packageName}\f${appName}\f${permissions}\f${options}`
    );
  }
}
