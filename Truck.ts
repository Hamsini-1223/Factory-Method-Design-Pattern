import { Transport } from "./Transport";

/**
 * Truck - Concrete Product
 * Delivers items by road
 */
export class Truck implements Transport {
  deliver(item: string): string {
    return `🚛 Truck delivers ${item} by road`;
  }
}
