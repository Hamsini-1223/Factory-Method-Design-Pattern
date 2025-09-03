import { Transport } from "../models/transport";

export abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery(item: string): string {
    try {
      const transport = this.createTransport();
      return transport.deliver(item);
    } catch (error) {
      throw new Error(
        `Delivery failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }
}
