import { PrintItem } from "../services";
import { mapUserIdToName } from "../utils";

export const labelTemplate = (
  item: PrintItem,
) => `{code:${item["Asset URL"]};option:qrcode,6,Q}
\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-
^^^"${item["Asset ID"]}
\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-
=
\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-
{w:6,*}
| "Name:|"${item.Name}|
| "Tags:|${item.Tags}|
| "Room:|${item.Room?.Name}|
| "Owner:|${mapUserIdToName(item["Owner Users"][0])}|
| "Store:|${item.Storage?.Title}|
{w:*}
\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-
`;
