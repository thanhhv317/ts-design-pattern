import { IMilkTea } from "./imilktea";

export abstract class MilkTeaDecorator implements IMilkTea {
  protected milkTea: IMilkTea;

  protected constructor(inner: IMilkTea) {
    this.milkTea = inner;
  }

  Cost(): number {
    return this.milkTea.Cost();
  }
}
