import { Version, VersionId } from "./types/Version";

export const versions: Record<VersionId, Version> = {
  official: {
    id: "official",
    // 官正线下最新版本
    name: "2022国战/十年心",
  },
  "half-official": {
    id: "half-official",
    name: "官盗线下（十年经典）",
  },
  "official-online": {
    id: "official-online",
    name: "三国杀online",
  },
  "official-mobile": {
    id: "official-mobile",
    name: "三国杀移动版",
  },
  "official-oversea": {
    id: "official-oversea",
    name: "三国杀海外版",
  },
  "zixing-DIY": {
    id: "zixing-DIY",
    name: "紫星DIY",
  },
  "xiliang-DIY": {
    id: "xiliang-DIY",
    name: "西凉DIY",
  },
  "dou-DIY": {
    id: "dou-DIY",
    name: "豆的DIY",
  },
  // 各种民间DIY，或者基于西凉/紫星作品的微调版本
  "fan-made": {
    id: "fan-made",
    name: "其他DIY",
  },
};
