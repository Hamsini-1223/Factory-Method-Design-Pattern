import * as readline from "readline";
import { RoadLogistics } from "./factories/roadLogistics";
import { SeaLogistics } from "./factories/seaLogistics";
import { Logistics } from "./factories/logistics";

export class LogisticsApp {
  private rl: readline.Interface;
  private roadCompany: RoadLogistics;
  private seaCompany: SeaLogistics;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.roadCompany = new RoadLogistics();
    this.seaCompany = new SeaLogistics();
  }

  start(): void {
    console.clear();
    console.log("🏭 Factory Method Logistics");
    console.log("🚛 Road and Sea Delivery 🚢\n");
    this.showMenu();
  }

  private showMenu(): void {
    console.log("What would you like to do?");
    console.log("1. Plan delivery");
    console.log("2. Exit\n");

    this.rl.question("Choose (1-2): ", (choice) => {
      this.handleChoice(choice.trim());
    });
  }

  private handleChoice(choice: string): void {
    switch (choice) {
      case "1":
        this.planDelivery();
        break;
      case "2":
        this.exit();
        break;
      default:
        console.log("Invalid choice. Try again.\n");
        this.showMenu();
    }
  }

  private planDelivery(): void {
    console.log("\n📦 What do you want to deliver?");

    this.rl.question("Item: ", (item) => {
      if (!this.isValidItem(item)) {
        console.log("Please enter a valid item.\n");
        this.planDelivery();
        return;
      }
      this.chooseTransport(item.trim());
    });
  }

  private chooseTransport(item: string): void {
    console.log(`\nHow to deliver ${item}?`);
    console.log("1. 🚛 Road");
    console.log("2. 🚢 Sea");
    console.log("3. Back\n");

    this.rl.question("Choose (1-3): ", (choice) => {
      this.handleTransportChoice(choice.trim(), item);
    });
  }

  private handleTransportChoice(choice: string, item: string): void {
    let company: Logistics | null = null;

    switch (choice) {
      case "1":
        company = this.roadCompany;
        break;
      case "2":
        company = this.seaCompany;
        break;
      case "3":
        console.log();
        this.showMenu();
        return;
      default:
        console.log("Invalid choice. Try again.\n");
        this.chooseTransport(item);
        return;
    }

    this.executeDelivery(company, item);
  }

  private executeDelivery(company: Logistics, item: string): void {
    try {
      console.log("\nProcessing...");
      const result = company.planDelivery(item);
      console.log(`✅ ${result}`);
      console.log("Factory method created the right vehicle!\n");
    } catch (error) {
      console.log(
        `❌ ${error instanceof Error ? error.message : "Delivery failed"}\n`
      );
    }

    this.askContinue();
  }

  private askContinue(): void {
    this.rl.question("Another delivery? (y/n): ", (answer) => {
      if (answer.toLowerCase().startsWith("y")) {
        this.planDelivery();
      } else {
        console.log();
        this.showMenu();
      }
    });
  }

  private isValidItem(item: string): boolean {
    if (!item) return false;
    const trimmed = item.trim();
    return trimmed.length > 0 && trimmed.length <= 50;
  }

  private exit(): void {
    console.log("\nThanks for using Factory Method Logistics! 👋");
    this.rl.close();
  }
}
