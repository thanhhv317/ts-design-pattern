import { IMilkTea } from "../base/imilktea";
import { MilkTeaDecorator } from "../base/milktea-decorator";

export class BlackSugger extends MilkTeaDecorator {
    constructor(inner: IMilkTea) {
        super(inner)
    }

    override Cost(): number {
        return 2 + this.milkTea.Cost();
    }
}