import { Logistics } from "./Logistics";
import { Transport } from "./Transport";
import { Ship } from "./Ship";

/**
 * SeaLogistics - Concrete Creator
 * Creates ships for sea delivery
 */
export class SeaLogistics extends Logistics {
  // Implementation of factory method
  createTransport(): Transport {
    return new Ship();
  }
}
