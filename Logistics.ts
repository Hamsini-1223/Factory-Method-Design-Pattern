import { Transport } from "./Transport";

/**
 * Logistics - Abstract Creator
 * Base class for all logistics companies
 */
export abstract class Logistics {
  // Factory Method - subclasses will implement this
  abstract createTransport(): Transport;

  // Business logic - same for all companies
  planDelivery(item: string): string {
    // Call factory method to create transport
    const transport = this.createTransport();

    // Use the transport to deliver
    return transport.deliver(item);
  }
}
