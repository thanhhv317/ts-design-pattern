import { IMilkTea } from "../base/imilktea";
import { MilkTeaDecorator } from "../base/milktea-decorator";

export class EggPudding extends MilkTeaDecorator {
  constructor(inner: IMilkTea) {
    super(inner);
  }

  override Cost(): number {
    return 3  + this.milkTea.Cost();
  }
}
