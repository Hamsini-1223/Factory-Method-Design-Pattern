import { Transport } from "./transport";

export class Ship implements Transport {
  deliver(item: string): string {
    if (!item || item.trim().length === 0) {
      throw new Error("Invalid item for delivery");
    }
    return `🚢 Ship delivers ${item.trim()} by sea`;
  }
}
