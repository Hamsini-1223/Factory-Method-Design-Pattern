import { Logistics } from "./logistics";
import { Transport } from "../models/transport";
import { Ship } from "../models/ship";

export class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}
