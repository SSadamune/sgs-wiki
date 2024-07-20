import { VersionId } from "./Version";

export type MilitaryOrder = {
  id: number;
  description: string;
  name?: string;
  reverseDescription?: string;
};

export type MilitaryOrderPack = {
  id: PackId;
  name: string;
  size: number;
  militaryOrders: MilitaryOrder[];
};

export type PackId = VersionId;
