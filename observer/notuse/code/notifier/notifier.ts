export interface INotifier {
  Notify(title: string, description: string, fileName: string): void;
}
