import { Transport } from "./transport";

export class Truck implements Transport {
  deliver(item: string): string {
    if (!item || item.trim().length === 0) {
      throw new Error("Invalid item for delivery");
    }
    return `🚛 Truck delivers ${item.trim()} by road`;
  }
}
