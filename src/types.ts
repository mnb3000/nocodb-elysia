import { InventoryResponse } from "./client";

export const WEBHOOK_TYPES = {
  afterTrigger: "records.after.trigger",
  manualTrigger: "records.manual.trigger",
} as const;

export type WebhookType = (typeof WEBHOOK_TYPES)[keyof typeof WEBHOOK_TYPES];

export const STATUS = {
  inPlace: "In Place",
  missing: "Missing",
  borrowed: "Borrowed",
  returned: "Returned",
} as const;

export type Status = (typeof STATUS)[keyof typeof STATUS];

export const LABEL_STATUS = {
  labeled: "Labeled",
  notLabeled: "Not Labeled",
} as const;

export type LabelStatus = (typeof LABEL_STATUS)[keyof typeof LABEL_STATUS];

export type NocoDbWebhookPayload = {
  type: WebhookType;
  id: string;
  rows: InventoryResponse[];
};
