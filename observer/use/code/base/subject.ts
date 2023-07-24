import { Observer } from "./observer";

export class Subject {
  private observers = new Set<Observer>();

  public attachObserver(observer: Observer): void {
    this.observers.add(observer);
  }

  public detachObserver(observer: Observer): void {
    this.observers.delete(observer);
  }

  public notifyObservers(subject: Subject, arg: any): void {
    this.observers.forEach((observer) => observer.notify(subject, arg));
  }
}
