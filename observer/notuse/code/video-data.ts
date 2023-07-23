import { EmailNotifier } from "./notifier/email-notifier";
import { PhoneNotifier } from "./notifier/phone-notifier";
import { YoutubeNotifier } from "./notifier/youtube-notifier";

export class VideoData {
  //#region Private Properties
  private title: string;
  private description: string;
  private fileName: string;
  private readonly emailNotifier: EmailNotifier;
  private readonly phoneNotifier: PhoneNotifier;
  private readonly youtubeNotifier: YoutubeNotifier;
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

  constructor() {
    this.emailNotifier = new YoutubeNotifier();
    this.phoneNotifier = new PhoneNotifier();
    this.youtubeNotifier = new YoutubeNotifier();
  }

  private videoDataChanged(): void {
    const title = this.getTitle();
    const description = this.getDescription();
    const fileName = this.getFileName();

    this.emailNotifier.Notify(title, description, fileName);
    this.phoneNotifier.Notify(title, description, fileName);
    this.youtubeNotifier.Notify(title, description, fileName);
  }
}
