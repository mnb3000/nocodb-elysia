import Elysia from "elysia";
import receiptio from "receiptio";
import { InventoryWebhookRow } from "../schema";
import { labelTemplate } from "../printTemplates";

export type PrintItem = Pick<
  InventoryWebhookRow,
  | "Name"
  | "Asset ID"
  | "Asset URL"
  | "Owner Users"
  | "Tags"
  | "Room"
  | "Id"
  | "Storage"
>;

// const labelTemplate = (
//   item: PrintItem,
// ) => eta.render();

class PrinterService {
  async print(item: PrintItem) {
    console.log("printing");
    await receiptio.print(
      labelTemplate(item),
      " -d 100.96.0.2 -p escpos -n -c 32",
    );
  }
}

export const printerService = new Elysia({ name: "Services.Printer" }).decorate(
  "printerService",
  new PrinterService(),
);
