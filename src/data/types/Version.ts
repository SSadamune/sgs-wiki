export type VersionId =
  | "official"
  | "half-official"
  | "half-official-other"
  | "official-online"
  | "official-online-new"
  | "official-mobile"
  | "official-oversea"
  | "official-old-version"
  | "qSanguosha"
  | "zixing-DIY"
  | "xiliang-DIY"
  | "dou-DIY"
  | "fan-made";

export type Version = {
  id: VersionId;
  name: string;
  shortName: string;
};
