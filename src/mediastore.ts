import Component from "./component";
import Image from "./image";

export default class MediaStore extends Component {
  constructor(id: string) {
    super(id);
  }

  getAlbumArt(img: Image, id: string, options?: string): boolean {
    return (
      prompt(
        this.id,
        `Med.GetAlbumArt(\f${img ? img.id : null}\f${id}\f${options}`
      ) === "true"
    );
  }

  getSongArt(img: Image, id: string, options?: string): boolean {
    return (
      prompt(
        this.id,
        `Med.GetSongArt(\f${img ? img.id : null}\f${id}\f${options}`
      ) === "true"
    );
  }

  getType(): string {
    return "MediaStore";
  }

  queryAlbums(filter: string, sort?: string, options?: string): void {
    prompt(this.id, `Med.QueryAlbums(\f${filter}\f${sort}\f${options}`);
  }

  queryArtists(filter: string, sort?: string, options?: string): void {
    prompt(this.id, `Med.QueryArtists(\f${filter}\f${sort}\f${options}`);
  }

  queryMedia(filter: string, sort?: string, options?: string): void {
    prompt(this.id, `Med.QueryMedia(\f${filter}\f${sort}\f${options}`);
  }

  setOnAlbumsResult(callback: Function): void {
    prompt(this.id, `Med.SetOnAlbumsResult(\f${_Cbm(callback)}`);
  }

  setOnArtistsResult(callback: Function): void {
    prompt(this.id, `Med.SetOnArtistsResult(\f${_Cbm(callback)}`);
  }

  setOnMediaResult(callback: Function): void {
    prompt(this.id, `Med.SetOnMediaResult(\f${_Cbm(callback)}`);
  }
}
