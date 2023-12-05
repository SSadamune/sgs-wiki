import { Index } from "@/utils/type";

export type Skill = {
  name: string;
  description: string;
  // 标准化描述
  standardizedSkill?: StandardizedSkill | StandardizedSkill[];
  // 衍生类技能
  isConditional?: boolean;
  // 关于此技能的各种备注
  memo?: string;
  references?: { name: string; url: string }[];
  // TODO: keywords
  keywords?: string[];
  label?: SkillLabel | SkillLabel[];
};

type StandardizedSkill = BaseSkill &
  (ChildSkill | SingleSkill) &
  (TriggerSkill | StateSkill);

type SkillLabel =
  | "锁定技"
  | "限定技"
  | "轮次技"
  | "主将技"
  | "副将技"
  | "阵法技"
  | "转换技";

type BaseSkill = {
  description: string;
  isConditional?: boolean;
};

type ChildSkill = {
  isChild: true;
  index: Index;
};

type SingleSkill = {
  isChild?: false;
  index?: undefined;
};

type TriggerSkill = {
  type: "Trigger";
  timing: string;
};

type StateSkill = {
  type: "State";
};
