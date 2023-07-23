import { INotifier } from "./notifier";

export class YoutubeNotifier implements INotifier {
  Notify(title: string, description: string, fileName: string): void {
    throw new Error("Method not implemented.");
  }
}
