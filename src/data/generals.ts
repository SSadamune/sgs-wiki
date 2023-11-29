import { General } from "./types/Generals";

export const generals: Record<string, General> = {
  WEI001: {
    id: "WEI001",
    name: "曹操",
    faction: ["魏"],
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
    faction: ["魏"],
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
    faction: ["魏"],
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
              "当你受到伤害后，你可以判定，然后令伤害来源选择：1.弃置两张与判定结果花色不同的牌；2.受到你造成的1点伤害。",
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
    faction: ["魏"],
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
    faction: ["魏"],
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
    faction: ["魏"],
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
    relatedGenerals: [],
    expansionPack: "标准",
  },
  WEI007: {
    id: "WEI007",
    name: "甄姬",
    faction: ["魏"],
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
    faction: ["魏"],
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
    id: "WEI010",
    name: "徐晃",
    faction: ["魏"],
    health: 2,
    defaultVersion: "dou-DIY",
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
        id: "dou-DIY",
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
    relatedGenerals: [],
    expansionPack: "标准",
  },
};
