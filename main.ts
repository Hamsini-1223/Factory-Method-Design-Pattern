import * as readline from "readline";
import { RoadLogistics } from "./RoadLogistics";
import { SeaLogistics } from "./SeaLogistics";
import { Logistics } from "./Logistics";

/**
 * Interactive Console Application
 * Demonstrates Factory Method Pattern with user interaction
 */
class LogisticsApp {
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

  start() {
    console.clear();
    console.log("🏭 Welcome to Factory Method Logistics!");
    console.log("=".repeat(40));
    console.log("🚛 We deliver by road and sea 🚢");
    console.log();

    this.showMainMenu();
  }

  showMainMenu() {
    console.log("📋 What would you like to do?");
    console.log("1. Plan a delivery");
    console.log("2. See our transport options");
    console.log("3. Exit");
    console.log();

    this.rl.question("Choose an option (1-3): ", (choice) => {
      switch (choice.trim()) {
        case "1":
          this.planDelivery();
          break;
        case "2":
          this.showTransportOptions();
          break;
        case "3":
          this.exit();
          break;
        default:
          console.log("❌ Invalid choice. Please try again.\n");
          this.showMainMenu();
      }
    });
  }

  planDelivery() {
    console.log("\n📦 Plan Your Delivery");
    console.log("-".repeat(20));

    this.rl.question("What do you want to deliver? ", (item) => {
      if (!item.trim()) {
        console.log("❌ Please enter a valid item.\n");
        this.planDelivery();
        return;
      }

      this.chooseTransport(item.trim());
    });
  }

  chooseTransport(item: string) {
    console.log(`\n🚚 How should we deliver your ${item}?`);
    console.log("1. 🚛 By road (fast for nearby locations)");
    console.log("2. 🚢 By sea (cost-effective for far locations)");
    console.log("3. 🔙 Back to main menu");
    console.log();

    this.rl.question("Choose transport method (1-3): ", (choice) => {
      let company: Logistics;
      let transportType: string;

      switch (choice.trim()) {
        case "1":
          company = this.roadCompany;
          transportType = "road";
          break;
        case "2":
          company = this.seaCompany;
          transportType = "sea";
          break;
        case "3":
          console.log();
          this.showMainMenu();
          return;
        default:
          console.log("❌ Invalid choice. Please try again.\n");
          this.chooseTransport(item);
          return;
      }

      this.executeDelivery(company, item, transportType);
    });
  }

  executeDelivery(company: Logistics, item: string, transportType: string) {
    console.log("\n⚡ Processing your delivery...");
    console.log("-".repeat(30));

    // This demonstrates the Factory Method pattern in action
    const result = company.planDelivery(item);

    console.log("✅ " + result);
    console.log(`💡 Note: We used ${transportType} logistics company`);
    console.log(
      "   The factory method created the right vehicle automatically!"
    );

    this.askForAnother();
  }

  showTransportOptions() {
    console.log("\n🚚 Our Transport Options");
    console.log("=".repeat(25));
    console.log();
    console.log("🚛 Road Transport:");
    console.log("   • Fast delivery for nearby locations");
    console.log("   • Door-to-door service");
    console.log("   • Perfect for: Electronics, Food, Books");
    console.log();
    console.log("🚢 Sea Transport:");
    console.log("   • Cost-effective for long distances");
    console.log("   • Large cargo capacity");
    console.log("   • Perfect for: Cars, Furniture, Bulk goods");
    console.log();
    console.log("💡 Our system automatically creates the right vehicle");
    console.log("   using the Factory Method pattern!");

    this.askToContinue();
  }

  askForAnother() {
    console.log();
    this.rl.question("🔄 Plan another delivery? (y/n): ", (answer) => {
      if (answer.toLowerCase().startsWith("y")) {
        console.log();
        this.planDelivery();
      } else {
        console.log();
        this.showMainMenu();
      }
    });
  }

  askToContinue() {
    console.log();
    this.rl.question("Press Enter to continue...", () => {
      console.log();
      this.showMainMenu();
    });
  }

  exit() {
    console.log("\n🎉 Thank you for using Factory Method Logistics!");
    console.log("📚 You've seen the Factory Method pattern in action:");
    console.log("   • Same delivery planning process");
    console.log("   • Different vehicles created automatically");
    console.log("   • Easy to add new transport types");
    console.log("\nGoodbye! 👋");

    this.rl.close();
  }
}

// Run the interactive application
const app = new LogisticsApp();
app.start();
