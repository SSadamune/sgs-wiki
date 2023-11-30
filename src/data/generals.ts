import { General } from "./types/Generals";

export const generals: Record<string, General> = {
  WEI001: {
    id: "WEI001",
    name: "曹操",
    faction: "魏",
    health: 2,
    defaultVersion: "fan-made",
    versions: [
      {
        id: "official",
        skills: [
          {
            name: "奸雄",
            description: "当你受到伤害后，你可以获得对你造成伤害的牌。",
          },
        ],
      },
      {
        id: "half-official",
        skills: [
          {
            name: "奸雄",
            description:
              "当你受到伤害后，你可以选择一项：1.获得造成此伤害的牌；2.摸一张牌。",
          },
        ],
      },
      {
        id: "fan-made",
        skills: [
          {
            name: "奸雄",
            description:
              "当你受到伤害后，你可以摸一张牌。然后你可以弃一张牌，并获得造成此伤害的牌。",
          },
        ],
      },
    ],
    relatedGenerals: ["典韦", "许褚"],
    expansionPack: "标准",
  },
  WEI002: {
    id: "WEI002",
    name: "司马懿",
    faction: "魏",
    health: 1.5,
    defaultVersion: "official",
    versions: [
      {
        id: "official",
        skills: [
          {
            name: "反馈",
            description: "当你受到伤害后，你可以获得对你造成伤害的牌。",
          },
          {
            name: "鬼才",
            description: "当一名角色的判定牌生效前，你可以打出一张牌代替之。",
          },
        ],
      },
    ],
    relatedGenerals: ["司马昭"],
    expansionPack: "标准",
  },
  WEI003: {
    id: "WEI003",
    name: "夏侯惇",
    faction: "魏",
    health: 2,
    defaultVersion: "fan-made",
    versions: [
      {
        id: "official",
        skills: [
          {
            name: "刚烈",
            description:
              "当你受到伤害后，你可以判定，若为：红色，你对伤害来源造成1点伤害；黑色，你弃置伤害来源的一张牌。",
          },
        ],
      },
      {
        id: "official-mobile",
        skills: [
          {
            name: "刚烈",
            description:
              "当你受到1点伤害后，你可以判定，若为：红色，你对伤害来源造成1点伤害；黑色，你弃置伤害来源的一张牌。",
          },
        ],
      },
      {
        id: "official-oversea",
        skills: [
          {
            name: "刚烈",
            description:
              "当你受到伤害后，你可以判定，若为：红色，你对伤害来源造成1点伤害；黑色，你弃置伤害来源的一张牌。",
          },
        ],
        health: 2.5,
      },
      {
        id: "fan-made",
        skills: [
          {
            name: "刚烈",
            description:
              "当你受到伤害后，你可以判定，然后令伤害来源选择：1.弃置两张与判定结果颜色不同的手牌；2.受到你造成的1点伤害。",
          },
        ],
      },
    ],
    relatedGenerals: ["夏侯渊", "于禁"],
    expansionPack: "标准",
  },
  WEI004: {
    id: "WEI004",
    name: "张辽",
    faction: "魏",
    health: 2,
    defaultVersion: "official",
    versions: [
      {
        id: "official",
        skills: [
          {
            name: "突袭",
            description:
              "摸牌阶段，你可以少摸任意张牌并选择等量的其它角色，然后获得这些角色的各一张手牌。",
          },
        ],
      },
    ],
    relatedGenerals: ["臧霸"],
    expansionPack: "标准",
  },
  WEI005: {
    id: "WEI005",
    name: "许褚",
    faction: "魏",
    health: 2,
    defaultVersion: "official",
    versions: [
      {
        id: "official",
        skills: [
          {
            name: "裸衣",
            description:
              "摸牌阶段结束时，你可以弃置一张牌，然后本回合你使用【杀】或【决斗】造成的伤害+1。",
          },
        ],
      },
    ],
    relatedGenerals: ["曹操"],
    expansionPack: "标准",
  },
  WEI006: {
    id: "WEI006",
    name: "郭嘉",
    faction: "魏",
    health: 1.5,
    defaultVersion: "official",
    versions: [
      {
        id: "official",
        skills: [
          {
            name: "天妒",
            description: "当你的判定牌生效后，你可以获得此牌。",
          },
          {
            name: "遗计",
            description:
              "当你受到伤害后，你可以观看牌堆顶两张牌，将其中一至两张交给一名角色，然后将其余的牌交给一名角色。",
          },
        ],
      },
      {
        id: "official-online",
        skills: [
          {
            name: "天妒",
            description: "当你的判定牌生效后，你可以获得此牌。",
          },
          {
            name: "遗计",
            description:
              "当你受到1点伤害后，你可以观看牌堆顶两张牌，将其中一至两张交给一名角色，然后将其余的牌交给一名角色。",
          },
        ],
      },
    ],
    expansionPack: "标准",
  },
  WEI007: {
    id: "WEI007",
    name: "甄姬",
    faction: "魏",
    health: 1.5,
    defaultVersion: "official",
    versions: [
      {
        id: "official",
        skills: [
          {
            name: "倾国",
            description: "你可以将一张黑色手牌当【闪】使用或打出。",
          },
          {
            name: "洛神",
            description:
              "准备阶段，你可以判定，若结果为黑色，你可以重复此流程，直到判定结果为红色，然后你获得所有黑色的判定牌。",
          },
        ],
      },
    ],
    relatedGenerals: ["曹丕"],
    expansionPack: "标准",
  },
  WEI008: {
    id: "WEI008",
    name: "夏侯渊",
    faction: "魏",
    health: 2.5,
    defaultVersion: "official",
    versions: [
      {
        id: "official",
        skills: [
          {
            name: "神速",
            description:
              "你可以选择以下任意项：1.跳过判定阶段和摸牌阶段；2.跳过出牌阶段并弃置一张装备牌；3.跳过弃牌阶段并失去1点体力。每执行一项，你视为使用一张无距离限制的【杀】。",
          },
        ],
      },
      {
        id: "half-official",
        skills: [
          {
            name: "神速",
            description:
              "你可以选择以下任意项：1.跳过判定阶段和摸牌阶段；2.跳过出牌阶段并弃置一张装备牌；3.跳过弃牌阶段并失去1点体力。每执行一项，你视为使用一张无距离限制的【杀】。",
          },
        ],
        health: 2,
      },
    ],
    relatedGenerals: ["夏侯惇"],
    expansionPack: "标准",
  },
  WEI009: {
    id: "WEI009",
    name: "张郃",
    faction: "魏",
    health: 2,
    defaultVersion: "official",
    versions: [
      {
        id: "official",
        skills: [
          {
            name: "巧变",
            description:
              "你可以弃置一张手牌并跳过你的一个阶段（准备阶段和结束阶段除外），若你以此法跳过摸牌阶段，你可以获得至多两名其他角色各一张手牌；若你以此法跳过出牌阶段，你可以移动场上的一张牌。",
          },
        ],
      },
    ],
    expansionPack: "标准",
  },
  WEI010: {
    id: "WEI010",
    name: "徐晃",
    faction: "魏",
    health: 2,
    defaultVersion: "fan-made",
    versions: [
      {
        id: "official",
        skills: [
          {
            name: "断粮",
            description:
              "出牌阶段，你可以将一张黑色基本牌或装备牌当一张无视距离的【兵粮寸断】使用。若你对距离大于2的角色使用【兵粮寸断】，则本回合不能再发动“断粮”。",
          },
        ],
      },
      {
        id: "official-online",
        skills: [
          {
            name: "断粮",
            description:
              "出牌阶段，你可以将一张黑色基本牌或装备牌当一张无视距离的【兵粮寸断】使用。你可以对距离2以内的其他角色使用【兵粮寸断】。",
          },
        ],
      },
      {
        id: "fan-made",
        skills: [
          {
            name: "断粮",
            description:
              "你可以将一张黑色基本牌或装备牌当一张无视距离的【兵粮寸断】对其它角色使用，然后若你至其距离大于2，本阶段此技能失效。",
          },
          {
            name: "截辎",
            description: "当一名其他角色跳过一个阶段后，你可以摸一张牌。",
          },
        ],
      },
    ],
    expansionPack: "标准",
  },

  // TODO: WEI011

  WEI012: {
    id: "WEI012",
    name: "典韦",
    faction: "魏",
    health: 2,
    defaultVersion: "fan-made",
    versions: [
      {
        id: "official",
        skills: [
          {
            name: "强袭",
            description:
              "出牌阶段限一次，你可以失去1点体力或弃置一张武器牌，对一名其他角色造成1点伤害。",
          },
        ],
      },
      {
        id: "half-official",
        skills: [
          {
            name: "强袭",
            description:
              "出牌阶段每名角色限一次，你可以失去1点体力或弃置一张武器牌，对你攻击范围内的一名其他角色造成1点伤害。",
          },
        ],
        health: 2.5,
      },
      {
        id: "fan-made",
        skills: [
          {
            name: "强袭",
            description:
              "出牌阶段每名角色限一次，你可以对你攻击范围内的一名其他角色造成1点伤害，然后你选择：1.受到其造成的1点伤害，若其已死亡，改为受到1点无来源伤害；2.弃置一张武器牌。",
          },
        ],
      },
    ],
    relatedGenerals: ["曹操"],
    expansionPack: "标准",
  },

  // TODO: WEI013~

  WEI016: {
    id: "WEI016",
    name: "乐进",
    faction: "魏",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        id: "official",
        skills: [
          {
            name: "骁果",
            description:
              "其他角色的结束阶段，你可以弃置一张基本牌，令其选择一项：1.弃置一张装备牌；2.受到你造成的1点伤害。",
          },
        ],
      },
      {
        id: "half-official",
        skills: [
          {
            name: "骁果",
            description:
              "其他角色的准备阶段，你可以弃置任意张基本牌，然后弃置其装备区等量的牌（不足全弃，无牌不弃），若你以此法弃置的基本牌多于装备牌，你摸一张牌并对其造成1点伤害。",
          },
        ],
      },
      {
        id: "official-oversea",
        skills: [
          {
            name: "骁果",
            description:
              "其他角色的结束阶段，你可以弃置一张基本牌，令其选择一项：1.弃置一张装备牌，令你摸一张牌；2.受到你造成的1点伤害。",
          },
        ],
      },
      {
        id: "dou-DIY",
        skills: [
          {
            name: "骁果",
            description:
              "其他角色的准备阶段，你可以弃置任意张基本牌，令其选择一项：1.弃置X张装备牌；2.受到你造成的1点伤害，然后令你摸X-1张牌。（X为你以此法弃置的牌数）",
          },
        ],
      },
    ],
    relatedGenerals: ["李典"],
    expansionPack: "标准",
  },

  // TODO: WEI017~

  WEI023: {
    id: "WEI023",
    name: "臧霸",
    faction: "魏",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        id: "official",
        skills: [
          {
            name: "横江",
            description:
              "当你受到1点伤害后，若当前回合角色的手牌上限大于0，你可以令其本回合手牌上限-1。此回合结束时，若其未于弃牌阶段弃置牌，你摸X张牌（X为你本回合发动此技能的次数）。",
          },
        ],
      },
      {
        id: "dou-DIY",
        skills: [
          {
            name: "横江",
            description:
              "当你受到1点伤害后，你可以令当前回合角色本回合手牌上限-1或+1。此回合弃牌阶段结束时，若其于此阶段弃置牌，你获得其中的至多X张牌，否则你摸X张牌（X为你本回合发动此技能的次数）。",
          },
        ],
      },
    ],
    relatedGenerals: ["张辽"],
    expansionPack: "势",
  },

  // TODO: other WEI
  // TODO: other SHU
  SHU015: {
    id: "SHU015",
    name: "祝融",
    faction: "蜀",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        id: "official",
        skills: [
          {
            name: "巨象",
            description:
              "锁定技，【南蛮入侵】对你无效；当其他角色使用的【南蛮入侵】结算结束后，你获得之。",
            label: ["锁定技"],
          },
          {
            name: "烈刃",
            description:
              "当你使用【杀】对一个目标造成伤害后，你可以与该角色拼点，若你赢，你获得其一张牌。",
          },
        ],
      },
      {
        id: "dou-DIY",
        skills: [
          {
            name: "巨象",
            description:
              "锁定技，【南蛮入侵】对你无效。【南蛮入侵】在其他角色的回合内进入弃牌堆后，你获得之。",
            label: ["锁定技"],
          },
          {
            name: "烈刃",
            description:
              "你使用的【杀】对目标造成伤害后，你可以与其拼点，若你：赢，你获得其一张牌；没赢，你与其获得对方拼点的牌。",
          },
        ],
      },
    ],
    relatedGenerals: ["孟获"],
    expansionPack: "标准",
  },

  //

  DOU005: {
    id: "DOU005",
    name: "雪瘾者",
    faction: ["魏", "蜀", "吴", "群"],
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        id: "dou-DIY",
        skills: [
          {
            name: "速降",
            description:
              "锁定技，你/其他角色沿逆时针计算至其他角色/你的距离-1/+1。",
            label: ["锁定技"],
          },
          {
            name: "立刃",
            description:
              "出牌阶段开始时，你可以横置或重置。你横置/重置后，可以将“板”标记移动到你上家的左边/下家的右边，你视为位于此位置（不改变回合顺序）。",
            standardizedDescription: [
              {
                name: "立刃①",
                description: "出牌阶段开始时，你可以横置或重置。",
                type: "Trigger",
                timing: "出牌阶段开始时",
              },
              {
                name: "立刃②",
                description:
                  "你横置/重置后，（若你没有“板”，你获得一枚“板”）你可以将“板”移动到你上家的左边/下家的右边。在距离、座次和阵法的计算中，你视为处于“板”所在的位置。",
                type: "Trigger",
                timing: ["横置后", "重置后"],
              },
            ],
          },
          {
            name: "嗜雪",
            description:
              "你对攻击范围内没有你的角色造成伤害时，或受到其造成的伤害时，视为冰属性伤害。当你受到冰属性伤害时，你可以弃置一张红色手牌取消此伤害。",
          },
        ],
      },
    ],
    expansionPack: "DIY",
  },

  DOU011: {
    id: "DOU011",
    name: "金牌狼王",
    faction: ["魏", "蜀", "吴", "群"],
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        id: "dou-DIY",
        skills: [
          {
            name: "倒钩",
            description:
              "你或与你势力相同的角色受到对方造成的伤害后，你可以令伤害来源摸一张牌，或受伤角色摸两张牌。你与其击杀对方的奖惩均改为摸两张牌。",
            standardizedDescription: [
              {
                name: "倒钩①",
                description:
                  "与你势力相同的其他角色受到伤害后，若伤害来源是你，你可以摸一张牌或令其摸两张牌。",
                type: "Trigger",
                timing: "受到伤害后",
              },
              {
                name: "倒钩②",
                description:
                  "你受到伤害后，若伤害来源与你势力相同，你可以摸两张牌或令其摸一张牌。",
                type: "Trigger",
                timing: "受到伤害后",
                isConditional: true,
              },
              {
                name: "倒钩③",
                description:
                  "你/与你势力相同的角色死亡时，若杀死其的角色是与你势力相同的角色/你，奖惩改为“摸两张牌”。",
                type: "Trigger",
                timing: "死亡时",
              },
            ],
          },
          {
            name: "悍跳",
            description:
              "主将技，转换技，阳：回合开始时或明置此武将牌时，若你未确定势力，你可以声明任意势力并视为此势力角色（直到你死亡），然后移除、变更副将。阴：若其他角色的势力均与你相同或均与你不同，你以暗置状态恢复初始副将，你视为未确定势力。",
            label: ["主将技", "转换技"],
            standardizedDescription: [
              {
                name: "悍跳①",
                description:
                  "回合开始时或你明置此武将牌时，若你未确定势力，你可以不公开你的真实势力。然后你声明任意势力并视为此势力角色，你变更副将，你因此失去副将牌被称为“初始副将”，“初始副将”不需要明置。直到你即将进行死亡结算，你视为此势力角色。然后你失去此技能并获得“悍跳②”",
                type: "Trigger",
                timing: ["回合开始时", "明置武将牌时"],
              },
              {
                name: "悍跳②",
                description:
                  "任意势力的角色数变化后，若其他角色的势力均与你相同或均与你不同，你将你的副将变更为“初始副将”，以此法变更的武将牌暗置。直到你明置副将武将牌，你视为未确定势力。然后你失去此技能并获得“悍跳①”",
                type: "Trigger",
                timing: "DIY时机",
              },
            ],
          },
        ],
      },
    ],
    relatedGenerals: ["孙策"],
    expansionPack: "DIY",
  },
};
