import { Observer } from "../base/observer";
import { Subject } from "../base/subject";
import { VideoData } from "../video-data";

export class EmailNotifier extends Observer {
  constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.attachObserver(this);
  }

  notify(subject: Subject, arg: any): void {
    if (subject instanceof VideoData) {
      console.log(`Notify all subscribers via EMAIL with new data
        Name: ${subject.getTitle()}
        Description: ${subject.getDescription()}
        File Name: ${subject.getFileName()}
      `);
    }
  }
}
