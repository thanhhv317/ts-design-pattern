import { Engine } from "../car-parts/engine";
import { CardBuilder } from "./car-builder";

export interface ICarBuilder {
  addWheels(numberOfWheels: number): CardBuilder;
  addColor(color: string): CardBuilder;
  addWindow(numberOfWindow: number): CardBuilder;
  addEngine(engine: Engine): CardBuilder;
}
