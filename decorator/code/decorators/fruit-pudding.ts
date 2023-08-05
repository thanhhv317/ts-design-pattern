import { IMilkTea } from "../base/imilktea";
import { MilkTeaDecorator } from "../base/milktea-decorator";

export class FruitPudding extends MilkTeaDecorator {
  constructor(inner: IMilkTea) {
    super(inner);
  }

  override Cost(): number {
    return 4.5  + this.milkTea.Cost();
  }
}
