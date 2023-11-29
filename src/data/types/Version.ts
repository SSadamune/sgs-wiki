export type VersionId =
  | "official"
  | "half-official"
  | "official-online"
  | "official-mobile"
  | "official-oversea"
  | "zixing-DIY"
  | "xiliang-DIY"
  | "dou-DIY"
  | "fan-made";

export type Version = {
  id: VersionId;
  name: string;
};
