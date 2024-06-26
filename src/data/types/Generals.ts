import { VersionId } from "./Version";
import { Skill } from "./Skills";

export type General = {
  id: string;
  // 武将姓名
  name: string;
  // 势力
  faction: Faction | Faction[];
  // 体力
  health: number;
  // 作为副将时的体力
  healthSub?: number;
  // 默认版本
  defaultVersion: VersionId;
  // 武将的不同版本
  versions: GeneralVersion[];
  // 珠联璧合的武将姓名
  // TODO: string 类型改为 general id
  relatedGenerals?: string[];
  // 所属扩展包
  expansionPack: ExpansionName;
};

export type GeneralVersion = {
  versionId: VersionId;
  generalId?: string;
  avatarId?: string;
  // 武将技能
  skills: Skill[];
  faction?: Faction | Faction[];
  // 作为客将时的势力，及其客将版本的编号（对于客将，则是其非客将的版本的编号）
  hiredFaction?: HiredFaction;
  health?: number;
  healthSub?: number;
  expansionPack?: ExpansionName;
  // TODO: string 类型改为 general id
  relatedGenerals?: string[];
  references?: { title: string; url: string }[];
};

export const ExpansionName = [
  "标准",
  "阵",
  "势",
  "变",
  "权",
  "不臣",
  "SP",
  "纵横捭阖",
  "海外专属",
  "DIY",
  "DIY客将",
  "其它",
] as const;

export type ExpansionName = (typeof ExpansionName)[number];

export const Faction = ["魏", "蜀", "吴", "群", "汉", "晋", "野心家"] as const;

export type Faction = (typeof Faction)[number];

// TODO: string 类型改为 general id
export type HiredFaction = Partial<Record<Faction, string | "self">>;
