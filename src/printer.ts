import Elysia from "elysia";
import receiptio from "receiptio";
import { InventoryWebhookRow } from "./schema";
import { mapUserIdToName } from "./utils";

type PrintItem = Pick<
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

const labelTemplate = (
  item: PrintItem,
) => `{code:${item["Asset URL"]};option:qrcode,8,M}
\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-
^^^"${item["Asset ID"]}
\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-
{w:8,*}
| "Name:|"${item.Name}|
| "Tags:|${item.Tags}|
| "Room:|${item.Room?.Name}|
| "Owner:|${mapUserIdToName(item["Owner Users"][0])}|
| "Storage:|${item.Storage?.Title}|
{w:*}
`;

class PrinterService {
  async print(item: PrintItem) {
    console.log("printing");
    await receiptio.print(
      labelTemplate(item),
      " -d 192.168.0.112 -p escpos -n -c 32",
    );
  }
}

export const printerService = new Elysia({ name: "Services.Printer" }).decorate(
  "printerService",
  new PrinterService(),
);
