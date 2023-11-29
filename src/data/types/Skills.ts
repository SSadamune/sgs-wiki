export type Skill = {
  name: string;
  description: string;
  // 标准化描述
  standardizedDescription?: StandardizedDescription[];
  label?: SkillLabel[];
};

type StandardizedDescription = {
  name: string;
  description: string;
  // 关于此技能的各种备注
  memo?: string;
  // TODO: keywords
  keywords?: string[];
} & (
  | {
      type: "Trigger";
      // TODO: Timing type
      timing: string;
    }
  | {
      type: "State";
    }
);

type SkillLabel =
  | "锁定技"
  | "限定技"
  | "主将技"
  | "副将技"
  | "阵法技"
  | "转换技";
