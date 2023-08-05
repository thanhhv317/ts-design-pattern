import { IMilkTea } from "../base/imilktea";
import { MilkTeaDecorator } from "../base/milktea-decorator";

export class Bubble extends MilkTeaDecorator {
  constructor(inner: IMilkTea) {
    super(inner);
  }

  override Cost(): number {
    return 1 + this.milkTea.Cost();
  }
}
