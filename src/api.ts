import Elysia from "elysia";
import {
  inventoryWebhookResponseSchema,
  nocoDbWebhookHeadersSchema,
} from "./schema";
import { printerService } from "./printer";

export const apiRouter = new Elysia({ name: "api", prefix: "/api" })
  .use(printerService)
  .post(
    "/print",
    async ({ status, headers, body, printerService }) => {
      if (headers["user-agent"] !== "nocodb") {
        status("Unauthorized");
      }
      console.log(body.data.rows);
      const rows = body.data.rows ?? [];

      printerService.print(rows[0]);

      status(200);
    },
    {
      headers: nocoDbWebhookHeadersSchema,
      body: inventoryWebhookResponseSchema,
    },
  )
  .onError(({ code, error }) => {
    if (code === "VALIDATION") return error.message;
  });
