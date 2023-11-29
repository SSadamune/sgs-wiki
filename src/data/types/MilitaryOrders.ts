export type MilitaryOrder = {
  id: number;
  description: string;
  reverseDescription?: string;
};

export type MilitaryOrderPack = {
  id: PackId;
  name: string;
  size: number;
  militaryOrders: MilitaryOrder[];
};

export type PackId = "official" | "xiliang" | "dou" | "other";
