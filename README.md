# Simple Factory Method Pattern - Logistics System

A clean and simple TypeScript implementation of the Factory Method design pattern using a logistics delivery system.

## Overview

The Factory Method pattern provides an interface for creating objects without specifying their exact class. This implementation demonstrates the pattern through a logistics management system that supports different transportation methods.

## Pattern Structure

- **Product Interface**: `Transport` - defines the common interface for all transport types
- **Concrete Products**: `Truck`, `Ship` - specific implementations of transport
- **Abstract Creator**: `Logistics` - declares the factory method
- **Concrete Creators**: `RoadLogistics`, `SeaLogistics` - implement the factory method
- **Client**: `LogisticsApp` - uses the factory pattern

## Project Structure

```
src/
├── models/
│   ├── transport.ts          # Transport interface
│   ├── truck.ts             # Road transport implementation
│   └── ship.ts              # Sea transport implementation
├── factories/
│   ├── logistics.ts         # Abstract logistics base class
│   ├── roadLogistics.ts     # Road logistics factory
│   └── seaLogistics.ts      # Sea logistics factory
├── logisticsApp.ts          # Interactive console application
└── main.ts                  # Entry point
package.json                 # Project configuration
tsconfig.json               # TypeScript configuration
```

## UML Class Diagram

![Government Singleton UML Diagram](Factory_Pattern.png)

## Installation

1. Clone or download the project files

2. Install dependencies
   ```bash
   npm install
   ```

## Usage

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm run build
npm start
```

## How It Works

1. The application presents a simple menu for delivery planning
2. User selects what to deliver and transportation method
3. The appropriate logistics company creates the correct transport vehicle
4. The vehicle executes the delivery using its specific method

### Code Flow Example

```typescript
// User selects road delivery
const company = new RoadLogistics();

// Factory method in action
const result = company.planDelivery("Pizza");

// Behind the scenes:
// 1. planDelivery() calls createTransport()
// 2. RoadLogistics.createTransport() returns new Truck()
// 3. Truck.deliver() executes and returns delivery message
```

## Sample Output

```
🏭 Factory Method Logistics
🚛 Road and Sea Delivery 🚢

What would you like to do?
1. Plan delivery
2. Exit

Choose (1-2): 1

📦 What do you want to deliver?
Item: Pizza

How to deliver Pizza?
1. 🚛 Road
2. 🚢 Sea
3. Back

Choose (1-3): 1

Processing...
✅ 🚛 Truck delivers Pizza by road
Factory method created the right vehicle!

Another delivery? (y/n): n

What would you like to do?
1. Plan delivery
2. Exit

Choose (1-2): 2

Thanks for using Factory Method Logistics! 👋
```

## Key Features

- **Simple Design**: Clean, easy-to-understand implementation
- **Error Handling**: Basic validation and error management
- **Extensible**: Easy to add new transport types
- **Type Safe**: Full TypeScript support with strict typing
- **Interactive**: Console-based user interface

## Key Benefits

- **Loose Coupling**: Client code doesn't depend on concrete classes
- **Extensibility**: Easy to add new transport types without changing existing code
- **Single Responsibility**: Each class has a focused purpose
- **Maintainable**: Clean separation of concerns

## Extending the System

To add a new transport type (e.g., Air transport):

1. Create `plane.ts` in the `models` folder:

```typescript
import { Transport } from "./transport";

export class Plane implements Transport {
  deliver(item: string): string {
    if (!item || item.trim().length === 0) {
      throw new Error("Invalid item for delivery");
    }
    return `✈️ Plane delivers ${item.trim()} by air`;
  }
}
```

2. Create `airLogistics.ts` in the `factories` folder:

```typescript
import { Logistics } from "./logistics";
import { Transport } from "../models/transport";
import { Plane } from "../models/plane";

export class AirLogistics extends Logistics {
  createTransport(): Transport {
    return new Plane();
  }
}
```

3. Update `logisticsApp.ts` to include the new option in the menu and choice handling.

## Dependencies

- Node.js (≥14.0.0)
- TypeScript (≥5.0.0)
- ts-node (for development)

## Development Dependencies

- `@types/node` - Node.js type definitions
- `typescript` - TypeScript compiler
- `ts-node` - TypeScript execution for Node.js

## Scripts

- `npm run dev` - Run in development mode with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled JavaScript

## Built By

Ms Hamsini S
