import type { MilitaryOrderPack } from "./types/MilitaryOrders";

export const Official: MilitaryOrderPack = {
  id: "official",
  name: "官方军令包",
  size: 6,
  militaryOrders: [
    {
      id: 1,
      description: "对发起者指定的一名角色造成一点伤害。",
    },
    {
      id: 2,
      description: "摸一张牌，然后依次交给发起者两张牌。",
    },
    {
      id: 3,
      description: "失去1点体力。",
    },
    {
      id: 4,
      description: "本回合不能使用或打出手牌且所有非锁定技失效。",
    },
    {
      id: 5,
      description: "将武将牌叠置，然后本回合不能回复体力。",
    },
    {
      id: 6,
      description: "保留一张手牌和一张装备区里的牌，然后弃置其余的牌。",
    },
  ],
};

export const Xiliang: MilitaryOrderPack = {
  id: "xiliang-DIY",
  name: "西凉军令包",
  size: 12,
  militaryOrders: [
    {
      id: 1,
      description: "对发起者指定的一名角色造成一点伤害。",
    },
    {
      id: 2,
      description: "摸一张牌，然后依次交给发起者两张牌。",
    },
    {
      id: 3,
      description: "失去1点体力。",
    },
    {
      id: 4,
      description: "本回合不能使用或打出手牌。",
    },
    {
      id: 5,
      description: "本回合所有非锁定技失效。",
    },
    {
      id: 6,
      description: "横置副将，若已横置则改为弃两张牌。",
    },
    {
      id: 7,
      description: "保留一张手牌和一张装备区里的牌，然后弃置其余的牌。",
    },
    {
      id: 8,
      description: "弃置一张锦囊牌或两张牌。",
    },
    {
      id: 9,
      description: "受到发起者造成的1点伤害。",
    },
    {
      id: 10,
      description: "展示所有手牌，发起者弃置其中一张。",
    },
    {
      id: 11,
      description: "重铸所有手牌（至多三张），然后弃一张牌。",
    },
    {
      id: 12,
      description: "将装备区所有牌收入手牌，发起者弃置执行者一张牌。",
    },
  ],
};

export const Dou: MilitaryOrderPack = {
  id: "dou-DIY",
  name: "豆的军令包",
  size: 10,
  militaryOrders: [
    {
      id: 1,
      name: "调兵",
      description: "摸一张牌，然后依次交给你两张牌。（不足则改为全部牌）。",
      reverseDescription:
        "令：摸一张牌，然后依次交给我两张牌（不足则改为全部牌）。",
    },
    {
      id: 2,
      name: "遣将",
      description:
        "变更副将，由你从备选武将牌中选择（若其执行过此军令则重抽军令）。",
      reverseDescription: "令：变更副将，由我从备选武将牌中选择。",
    },
    {
      id: 3,
      name: "坚守",
      description: "将武将牌叠置，摸两张牌。",
      reverseDescription: "令：将武将牌叠置，摸两张牌。",
    },
    {
      id: 4,
      name: "强攻",
      description:
        "失去1点体力或弃置一张装备牌，视为对你提前指定的除其外的一名角色使用【杀】。",
      reverseDescription:
        "令：失去1点体力或弃置一张装备牌，视为对{我指定的一名角色}使用【杀】。",
    },
    {
      id: 5,
      name: "噤声",
      description:
        "你提前选择一项：1.其本回合内不能使用或打出手牌；2.其本回合内所有非锁定技失效。",
      reverseDescription:
        "令：{你本回合内不能使用或打出手牌/你本回合内所有非锁定技失效}。",
    },
    {
      id: 6,
      name: "卸甲",
      description: "选择至多一张手牌和一张装备区里的牌，然后弃置其余的牌。",
      reverseDescription:
        "令：选择至多一张手牌和一张装备区里的牌，然后弃置其余的牌。",
    },
    {
      id: 7,
      name: "自肃",
      description: "失去1点体力。",
      reverseDescription: "令：失去1点体力。",
    },
    {
      id: 8,
      name: "缴械",
      description: "你移动其场上的一张牌（若其场上无牌则重抽军令）。",
      reverseDescription: "令：我移动你场上的一张牌。",
    },
    {
      id: 9,
      name: "扎营",
      description: "横置副将（若已横置则重抽军令）。",
      reverseDescription: "令：横置副将。",
    },
    {
      id: 10,
      name: "擢锐",
      description:
        "选择三张手牌令你观看（不足则改为全部手牌，无手牌则重抽军令），然后你使用或弃置其中一张。",
      reverseDescription:
        "令：你选择三张手牌令我观看（不足则改为全部手牌，无手牌则重抽军令），然后我使用或弃置其中一张。",
    },
  ],
};
