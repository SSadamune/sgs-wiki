import { Version, VersionId } from "./types/Version";

export const versions: {
  [K in VersionId]: Version & { id: K };
} = {
  official: {
    id: "official",
    // 官正线下最新版本
    name: "23典藏/十年心",
    shortName: "官正",
  },
  "half-official": {
    id: "half-official",
    name: "官盗(十年经典)",
    shortName: "官盗",
  },
  "half-official-other": {
    id: "half-official-other",
    name: "其他官盗版本",
    shortName: "官盗2",
  },
  "official-online": {
    id: "official-online",
    name: "三国杀online",
    shortName: "线上",
  },
  "official-online-new": {
    id: "official-online-new",
    name: "三国杀十周年新服",
    shortName: "新服",
  },
  "official-mobile": {
    id: "official-mobile",
    name: "三国杀移动版",
    shortName: "手杀",
  },
  "official-oversea": {
    id: "official-oversea",
    name: "三国杀海外版",
    shortName: "海外",
  },
  "official-old-version": {
    id: "official-old-version",
    name: "官方旧版",
    shortName: "旧版",
  },
  qSanguosha: {
    id: "qSanguosha",
    name: "太阳神三国杀DIY",
    shortName: "神杀",
  },
  "zixing-DIY": {
    id: "zixing-DIY",
    name: "紫星DIY",
    shortName: "紫星",
  },
  "xiliang-DIY": {
    id: "xiliang-DIY",
    name: "西凉DIY",
    shortName: "西凉",
  },
  "dou-DIY": {
    id: "dou-DIY",
    name: "豆包DIY",
    shortName: "豆包",
  },
  // 各种民间DIY，或者基于西凉/紫星DIY作品的微调版本
  "fan-made": {
    id: "fan-made",
    name: "其他民间DIY",
    shortName: "民间",
  },
};
