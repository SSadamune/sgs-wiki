export const joinStrings = (toJoin: string | string[]) =>
  Array.isArray(toJoin) ? toJoin.join("&") : toJoin;
