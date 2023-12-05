export type VersionId =
  | "official"
  | "half-official"
  | "official-online"
  | "official-online-new"
  | "official-mobile"
  | "official-oversea"
  | "QSanguosha"
  | "zixing-DIY"
  | "xiliang-DIY"
  | "dou-DIY"
  | "fan-made";

export type Version = {
  id: VersionId;
  name: string;
  shortName: string;
};
