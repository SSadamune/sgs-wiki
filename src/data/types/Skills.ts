import { Index } from "@/utils/type";

export type Skill = {
  name: string;
  description: string;
  // 标准化描述
  standardizedSkill?: StandardizedSkill | StandardizedSkillChild[];
  // 衍生类技能
  isConditional?: boolean;
  // 关于此技能的各种备注
  memo?: string;
  // TODO: keywords
  keywords?: string[];
  label?: SkillLabel | SkillLabel[];
};

export type StandardizedSkill = {
  description: string;
  isConditional?: boolean;
  timing: string | string[] | null;
};

export type StandardizedSkillChild = StandardizedSkill & {
  index: Index;
};

type SkillLabel =
  | "锁定技"
  | "限定技"
  | "轮次技"
  | "主将技"
  | "副将技"
  | "阵法技<队列>"
  | "阵法技<围攻>"
  | "转换技";
