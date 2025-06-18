const userIdToName: Record<string, string> = {
  uszorr6wxc07kn0h: "myk.",
};
export const mapUserIdToName = (id: string) => {
  const res = userIdToName[id];
  return res;
};
