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
  id: "xiliang",
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
  id: "dou",
  name: "豆的军令包",
  size: 10,
  militaryOrders: [
    {
      id: 1,
      description:
        "将一张手牌当作无距离限制的雷【杀】对你指定的一名除其以外的角色使用。",
      reverseDescription:
        "令：将一张手牌当作无距离限制的雷【杀】对{我指定的一名除你以外的角色}使用。",
    },
    {
      id: 2,
      description: "摸一张牌，然后依次交给你两张牌。",
      reverseDescription: "令：摸一张牌，然后依次交给我两张牌。",
    },
    {
      id: 3,
      description: "失去1点体力。",
      reverseDescription: "令：失去1点体力。",
    },
    {
      id: 4,
      description:
        "你选择一项：1.其本回合内不能使用或打出手牌；2.其本回合内所有非锁定技失效。",
      reverseDescription:
        "令：{你本回合内不能使用或打出手牌}或{你本回合内所有非锁定技失效}。",
    },
    {
      id: 5,
      description: "将武将牌叠置，摸两张牌。",
      reverseDescription: "令：将武将牌叠置，摸两张牌。",
    },
    {
      id: 6,
      description: "保留一张手牌和一张装备区里的牌，然后弃置其余的牌。",
      reverseDescription:
        "令：保留一张手牌和一张装备区里的牌，然后弃置其余的牌。",
    },
    {
      id: 7,
      description: "重铸所有手牌（至多五张），然后展示所有手牌。",
      reverseDescription: "令：重铸所有手牌（至多五张），然后展示所有手牌。",
    },
    {
      id: 8,
      description:
        "与你指定的一名除其以外的角色各摸一张牌，然后拼点：没赢的一方受到另一方造成的1点伤害。",
      reverseDescription:
        "令：与{我指定的一名角色}各摸一张牌，然后与其拼点：没赢的一方受到另一方造成的1点伤害。",
    },
    {
      id: 9,
      description: "横置副将，若已横置则改为你弃置其两张牌。",
      reverseDescription: "令：横置副将，若已横置则改为我弃置你两张牌。",
    },
    {
      id: 10,
      description:
        "选择三张手牌（不足则改为全部手牌）令你观看，然后你可以使用或弃置其中一张。",
      reverseDescription:
        "令：选择三张手牌（不足则改为全部手牌）令我观看，然后我可以使用或弃置其中一张。",
    },
  ],
};
