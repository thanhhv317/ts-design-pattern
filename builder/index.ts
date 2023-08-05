import { Car } from "./base/car";
import { CardBuilder } from "./base/car-builder";
import { Engine } from "./car-parts/engine";

console.log("Create object without pattern ===");

const car = new Car(4, "blue", 2, new Engine("Mecserdec 4.0"));
console.log(car);

console.log("Create object with builder pattern ====");

const car2 = new CardBuilder()
  .addWheels(4)
  .addColor("blue")
  .addWindow(2)
  .addEngine(new Engine("Toyota 1472 C97"));
console.log(car2);
