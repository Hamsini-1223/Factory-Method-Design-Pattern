/**
 * Transport Interface
 * Defines what all delivery vehicles must be able to do
 */
export interface Transport {
  deliver(item: string): string;
}
