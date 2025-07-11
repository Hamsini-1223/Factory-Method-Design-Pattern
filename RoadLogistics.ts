import { Logistics } from "./Logistics";
import { Transport } from "./Transport";
import { Truck } from "./Truck";

/**
 * RoadLogistics - Concrete Creator
 * Creates trucks for road delivery
 */
export class RoadLogistics extends Logistics {
  // Implementation of factory method
  createTransport(): Transport {
    return new Truck();
  }
}
