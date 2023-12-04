export type Skill = {
  name: string;
  description: string;
  // 标准化描述
  standardizedDescription?: StandardizedDescription | StandardizedDescription[];
  // 衍生类技能
  isConditional?: boolean;
  // TODO: keywords
  keywords?: string[];
  label?: SkillLabel | SkillLabel[];
};

type StandardizedDescription = {
  name?: string;
  description: string;
  // 关于此技能的各种备注
  memo?: string;
  isConditional?: boolean;
} & (
  | {
      type: "Trigger";
      // TODO: Timing type
      timing: string | string[];
    }
  | {
      type: "State";
    }
);

type SkillLabel =
  | "锁定技"
  | "限定技"
  | "轮次技"
  | "主将技"
  | "副将技"
  | "阵法技"
  | "转换技";
