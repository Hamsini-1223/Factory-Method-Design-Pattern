import { Logistics } from "./logistics";
import { Transport } from "../models/transport";
import { Truck } from "../models/truck";

export class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}
