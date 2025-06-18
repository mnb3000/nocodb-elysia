import { Static, t } from "elysia";
import { LABEL_STATUS, STATUS, WEBHOOK_TYPES } from "./types";

export const attachmentSchema = t.Object({
  id: t.String(),
  url: t.String({ format: "uri" }),
  title: t.Optional(t.String()),
  mimetype: t.Optional(t.String()),
  size: t.Optional(t.Number()),
  icon: t.Optional(t.String({ format: "uri" })),
  width: t.Optional(t.Number()),
  height: t.Optional(t.Number()),
  signedUrl: t.Optional(t.String()),
});

export const userDisplaySchema = t.Nullable(
  t.Object({
    id: t.String(),
    email: t.String({ format: "email" }),
    display_name: t.String(),
    meta: t.Nullable(t.Unknown()),
  }),
);

export type Attachment = Static<typeof attachmentSchema>;

export const inventoryStatusSchema = t.Enum(STATUS);

export const inventoryLabelStatusSchema = t.Enum(LABEL_STATUS);

export type InventoryStatus = Static<typeof inventoryStatusSchema>;

export const inventoryWebhookRowSchema = t.Optional(
  t.Object({
    Id: t.Optional(t.Integer()),
    Name: t.Nullable(t.String()),
    "Connector Types": t.Nullable(t.String()),
    Tags: t.Nullable(t.String()),
    Connectors: t.Nullable(t.String()),
    Manufacturer: t.Nullable(t.String()),
    Description: t.Nullable(t.String()),
    Photo: t.Array(attachmentSchema),
    Status: inventoryStatusSchema,
    // "QR Code": t.Optional(t.String()),
    CreatedAt: t.Date(),
    UpdatedAt: t.Date(),
    "Created time": t.Date(),
    "Last modified time": t.Date(),
    "Last modified by": userDisplaySchema,
    "Created by": userDisplaySchema,
    "Print Label": t.Unknown(),
    "Asset ID": t.Nullable(t.String()),
    "Asset URL": t.Nullable(t.String({ format: "uri" })),
    "QR Code": t.Nullable(t.String({ format: "uri" })),
    "Room Number": t.Nullable(t.Number()),
    Room: t.Nullable(
      t.Object({
        Id: t.Number(),
        Name: t.String(),
      }),
    ),
    Owners: t.Nullable(t.Number()),
    "Owner Users": t.Array(t.String()),
    "Related Assets": t.Nullable(t.Number()),
    Inventories: t.Nullable(t.Number()),
    nc_order: t.Optional(t.Unknown()),
  }),
);

export type InventoryWebhookRow = Static<typeof inventoryWebhookRowSchema>;

export const inventoryWebhookResponseSchema = t.Object({
  type: t.Enum(WEBHOOK_TYPES),
  id: t.String(),
  data: t.Object({
    table_id: t.String(),
    table_name: t.String(),
    rows: t.Array(inventoryWebhookRowSchema),
  }),
});

export const nocoDbWebhookHeadersSchema = t.Object({
  "user-agent": t.String(),
});
