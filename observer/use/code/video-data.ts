import { Subject } from "./base/subject";

export class VideoData extends Subject {
  //#region Private Properties
  private title: string;
  private description: string;
  private fileName: string;
  //#endregion

  //#region GetSetProperties
  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
    this.videoDataChanged();
  }

  public getDescription(): string {
    return this.title;
  }

  public setDescription(description: string): void {
    this.description = description;
    this.videoDataChanged();
  }

  public getFileName(): string {
    return this.title;
  }

  public setFileName(fileName: string): void {
    this.fileName = fileName;
    this.videoDataChanged();
  }
  //#endregion

  private videoDataChanged(): void {
    this.notifyObservers(this, null);
  }
}
