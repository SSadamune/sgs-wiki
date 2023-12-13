import { ensureArray } from "./array";
import { Index } from "./type";

export const joinStrings = (toJoin: string | string[]) =>
  ensureArray(toJoin).join("&");

export const circledNumber = (number: Index): string =>
  ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"][number - 1];
