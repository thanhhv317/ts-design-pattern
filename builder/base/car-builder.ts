import { Engine } from "../car-parts/engine";
import { ICarBuilder } from "./icar-builder";

export class CardBuilder implements ICarBuilder {
  public numberOfWheels: number;
  public color: string;
  public numberOfWindow: number;
  public engine: Engine;

  addWheels(numberOfWheels: number) {
    this.numberOfWheels = numberOfWheels;
    return this;
  }
  addColor(color: string) {
    this.color = color;
    return this;
  }
  addWindow(numberOfWindow: number) {
    this.numberOfWindow = numberOfWindow;
    return this;
  }
  addEngine(engine: Engine) {
    this.engine = engine;
    return this;
  }
}
