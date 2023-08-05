import { MilkTea } from "./base/milktea";
import { BlackSugger } from "./decorators/black-sugger";
import { Bubble } from "./decorators/bubble";
import { EggPudding } from "./decorators/egg-pudding";
import {FruitPudding} from "./decorators/fruit-pudding";

const firstMilktea = new EggPudding(
    new FruitPudding(
        new Bubble(
            new BlackSugger(
                new MilkTea()
            )
        )
    )
)

const secondMilktea = new FruitPudding(
    new Bubble(
        new MilkTea()
    )
)

console.log("Milktea with topping: egg + buble + blacksugger has ", firstMilktea.Cost() + "$")
console.log("Milktea with topping: fruit + buble has ", secondMilktea.Cost() + "$")