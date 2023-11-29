import { VersionId } from "./Version";
import { Skill } from "./Skills";

export type General = {
  id: string;
  // 武将姓名
  name: string;
  // 势力
  faction: Faction[];
  // 体力
  health: number;
  // 作为副将时的体力
  healthSub?: number;
  // 默认版本
  defaultVersion: VersionId;
  // 武将的不同版本
  versions: GeneralVersion[];
  // 珠联璧合的武将姓名
  relatedGenerals: string[];
  // 所属扩展包
  expansionPack: ExpansionName;
};

export type GeneralVersion = {
  id: VersionId;
  // 武将技能
  skills: Skill[];
  faction?: string[];
  health?: number;
  healthSub?: number;
  expansionPack?: string;
};

export type ExpansionName =
  | "标准"
  | "阵"
  | "势"
  | "变"
  | "权"
  | "不臣"
  | "SP"
  | "纵横捭阖"
  | "海外专属"
  | "其它";

export type Faction = "魏" | "蜀" | "吴" | "群" | "汉" | "晋";
