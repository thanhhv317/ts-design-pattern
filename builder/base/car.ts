import { Engine } from "../car-parts/engine";

export class Car {
  public numberOfWheels: number;
  public color: string;
  public numberOfWindow: number;
  public engine: Engine;

  constructor(
    numberOfWheels: number,
    color: string,
    numberOfWindow: number,
    engine: Engine
  ) {
    this.numberOfWheels = numberOfWheels;
    this.color = color;
    this.numberOfWheels = numberOfWheels;
    this.engine = engine;
  }
}
