import { PrintItem } from "../services";
import { mapUserIdToName } from "../utils";

export const labelTemplate = (
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
