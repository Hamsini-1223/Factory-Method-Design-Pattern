import { Transport } from "./Transport";

/**
 * Ship - Concrete Product
 * Delivers items by sea
 */
export class Ship implements Transport {
  deliver(item: string): string {
    return `🚢 Ship delivers ${item} by sea`;
  }
}
