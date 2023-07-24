import { Subject } from "./subject";

export abstract class Observer {
  protected subject: Subject;
  abstract notify(subject: Subject, arg: any): void;
}
