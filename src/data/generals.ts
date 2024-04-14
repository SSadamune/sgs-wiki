import { General } from "./types/Generals";

export const generals: Record<string, General> = {
  // ============================== Faction WEI ==============================
  //
  // =========================================================================

  WEI001: {
    id: "WEI001",
    name: "曹操",
    faction: "魏",
    health: 2,
    defaultVersion: "fan-made",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "奸雄",
            description: "当你受到伤害后,你可以获得对你造成伤害的牌。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "奸雄",
            description:
              "当你受到伤害后,你可以选择一项:1.获得造成此伤害的牌；2.摸一张牌。",
          },
        ],
      },
      {
        versionId: "fan-made",
        skills: [
          {
            name: "奸雄",
            description:
              "当你受到1点伤害后,你可以摸一张牌。然后你可以弃一张牌,并获得造成此伤害的牌。",
          },
        ],
        hiredFaction: { 汉: "H_HAN404", 群: "self" },
      },
    ],
    relatedGenerals: ["典韦", "许褚", "卞夫人"],
    expansionPack: "标准",
  },
  H_HAN404: {
    id: "H_HAN404",
    name: "曹操",
    faction: "汉",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "能臣",
            description:
              "每回合限一次，当你造成伤害后，你可以摸一张牌，然后你可以弃置X张牌并获得此造成伤害的牌（X为受到过此牌伤害的角色数）。",
          },
        ],
        hiredFaction: { 魏: "WEI001" },
      },
    ],
    relatedGenerals: ["袁绍"],

    expansionPack: "DIY客将",
  },
  WEI002: {
    id: "WEI002",
    name: "司马懿",
    faction: "魏",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "反馈",
            description: "当你受到伤害后,你可以获得对你造成伤害的牌。",
          },
          {
            name: "鬼才",
            description: "当一名角色的判定牌生效前,你可以打出一张牌代替之。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "反馈",
            description: "当你受到1点伤害后,你可以获得对你造成伤害的牌。",
          },
          {
            name: "鬼才",
            description:
              "当一名角色的判定牌生效前,你可以打出一张颜色不同的牌代替之。",
          },
        ],
        hiredFaction: { 晋: "self" },
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
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "刚烈",
            description:
              "当你受到伤害后,你可以判定,若为:红色,你对伤害来源造成1点伤害；黑色,你弃置伤害来源的一张牌。",
          },
        ],
      },
      {
        versionId: "official-mobile",
        skills: [
          {
            name: "刚烈",
            description:
              "当你受到1点伤害后,你可以判定,若为:红色,你对伤害来源造成1点伤害；黑色,你弃置伤害来源的一张牌。",
          },
        ],
      },
      {
        versionId: "official-oversea",
        skills: [
          {
            name: "刚烈",
            description:
              "当你受到伤害后,你可以判定,若为:红色,你对伤害来源造成1点伤害；黑色,你弃置伤害来源的一张牌。",
          },
        ],
        health: 2.5,
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "刚烈",
            description:
              "当你受到伤害后,你可以判定,若为:红色,你对伤害来源造成1点伤害；黑色,你弃置伤害来源的一张牌。",
          },
          {
            name: "清俭",
            label: "副将技",
            description:
              "副将技(-0.5),每个回合结束时,你可以从弃牌堆选择一张此回合被你弃置的牌,令一名其他角色获得之。",
          },
        ],
        health: 2.5,
        healthSub: 2,
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
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "突袭",
            description:
              "摸牌阶段,你可以少摸任意张牌并选择等量的其它角色,然后获得这些角色的各一张手牌。",
          },
        ],
      },
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "突袭",
            description:
              "摸牌阶段,你可以少摸任意张牌并选择等量的其它角色,然后获得这些角色的各一张手牌。",
          },
        ],
        hiredFaction: { 群: "self" },
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
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "裸衣",
            description:
              "摸牌阶段结束时,你可以弃置一张牌,然后本回合你使用【杀】或【决斗】造成的伤害+1。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "裸衣",
            description:
              "摸牌阶段结束时,你可以弃置一张牌,然后直到你的下个回合开始时,你因【杀】或【决斗】的效果造成的伤害+1。",
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
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "天妒",
            description: "当你的判定牌生效后,你可以获得此牌。",
          },
          {
            name: "遗计",
            description:
              "当你受到伤害后,你可以观看牌堆顶两张牌,将其中一至两张交给一名角色,然后将其余的牌交给一名角色。",
          },
        ],
      },
      {
        versionId: "official-online",
        skills: [
          {
            name: "天妒",
            description: "当你的判定牌生效后,你可以获得此牌。",
          },
          {
            name: "遗计",
            description:
              "当你受到1点伤害后,你可以观看牌堆顶两张牌,将其中一至两张交给一名角色,然后将其余的牌交给一名角色。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "天妒",
            description:
              "当你的判定牌生效后,你可以获得此牌。当你于回合内明置此武将牌后,你须进行一次判定,若结果为♠,你受到一点伤害。",
          },
          {
            name: "遗计",
            description:
              "当你受到1点伤害后,你可以观看牌堆顶两张牌,将其中一至两张交给一名角色,然后将其余的牌交给一名角色。",
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
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "倾国",
            description: "你可以将一张黑色手牌当【闪】使用或打出。",
          },
          {
            name: "洛神",
            description:
              "准备阶段,你可以判定,若结果为黑色,你可以重复此流程,直到判定结果为红色,然后你获得所有黑色的判定牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "倾国",
            description:
              "你可以将一张黑色手牌当【闪】使用或打出。然后每回合限一次，若你的防具区里没有牌，你可以发动仅判定一次的“洛神”。",
          },
          {
            name: "洛神",
            description:
              "准备阶段,你可以判定,若结果为黑色,你可以重复此流程,直到判定结果为红色,然后你获得所有黑色的判定牌。",
          },
        ],
        hiredFaction: { 群: "QUN160" },
      },
    ],
    relatedGenerals: ["曹丕"],
    expansionPack: "标准",
  },
  QUN160: {
    id: "QUN160",
    name: "甄宓",
    faction: "群",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "惊鸿",
            description:
              "你明置此武将牌后，体力值为全场最大的所有其他角色选择一项：1.交给你一张红色牌；2.弃置两张牌。你首次濒死时暗置此武将牌。",
          },
          {
            name: "谦贤",
            description:
              "每回合限一次，你可以将牌的描述中合法目标仅包含你/仅包含其他角色的一张手牌当作【无懈可击】/【洞烛先机】使用。",
          },
        ],
        hiredFaction: { 魏: "WEI007" },
      },
    ],
    relatedGenerals: ["袁谭&袁尚&袁熙"],
    expansionPack: "DIY客将",
  },
  WEI008: {
    id: "WEI008",
    name: "夏侯渊",
    faction: "魏",
    health: 2.5,
    defaultVersion: "half-official",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "神速",
            description:
              "你可以选择以下任意项:1.跳过判定阶段和摸牌阶段；2.跳过出牌阶段并弃置一张装备牌；3.跳过弃牌阶段并失去1点体力。每执行一项,你视为使用一张无距离限制的【杀】。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "神速",
            description:
              "你可以选择以下任意项:1.跳过判定阶段和摸牌阶段；2.跳过出牌阶段并弃置一张装备牌；3.跳过弃牌阶段并失去1点体力。每执行一项,你视为使用一张无距离限制的【杀】。",
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
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "巧变",
            description:
              "你可以弃置一张手牌并跳过你的一个阶段(准备阶段和结束阶段除外),若你以此法跳过摸牌阶段,你可以获得至多两名其他角色各一张手牌；若你以此法跳过出牌阶段,你可以移动场上的一张牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "巧变",
            description:
              "你可以弃置一张手牌并跳过你的一个阶段(准备阶段和结束阶段除外)。若以此法:弃置装备牌,你可以使用之；跳过摸牌阶段,你可以获得至多两名角色各一张手牌；跳过出牌阶段,你可以移动场上的一张牌。",
          },
        ],
        relatedGenerals: ["郭淮"],
        hiredFaction: { 群: "self" },
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
        versionId: "official",
        skills: [
          {
            name: "断粮",
            description:
              "出牌阶段,你可以将一张黑色基本牌或装备牌当一张无视距离的【兵粮寸断】使用。若你对距离大于2的角色使用【兵粮寸断】,则本回合不能再发动“断粮”。",
          },
        ],
      },
      {
        versionId: "official-online",
        skills: [
          {
            name: "断粮",
            description:
              "出牌阶段,你可以将一张黑色基本牌或装备牌当一张无视距离的【兵粮寸断】使用。你可以对距离2以内的其他角色使用【兵粮寸断】。",
          },
        ],
      },
      {
        versionId: "fan-made",
        skills: [
          {
            name: "断粮",
            description:
              "你可以将一张黑色基本牌或装备牌当一张无视距离的【兵粮寸断】对其它角色使用,然后若你至其距离大于2,本阶段“断粮”失效。",
          },
          {
            name: "截辎",
            description: "一名角色跳过一个阶段后,你可以摸一张牌。",
          },
        ],
        hiredFaction: { 汉: "self" },
      },
    ],
    expansionPack: "标准",
  },

  WEI011: {
    id: "WEI011",
    name: "曹仁",
    faction: "魏",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "据守",
            description:
              "结束阶段,你可以摸X张牌 (X为势力数）,然后弃置一张手牌,若以此法弃置的牌为装备牌,则改为你使用之。若X大于2,则你将武将牌叠置。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "据守",
            description:
              "结束阶段,你可以摸X张牌（X为势力数）,弃置一张手牌或使用一张装备牌,然后若X大于2,你叠置。",
          },
          {
            name: "解围",
            description:
              "你可以将装备区里的一张牌当【无懈可击】使用。当你从叠置状态变为平置状态时,你可以弃置一张手牌,移动场上的一张牌。",
          },
        ],
      },
    ],
    expansionPack: "标准",
  },

  WEI012: {
    id: "WEI012",
    name: "典韦",
    faction: "魏",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "强袭",
            description:
              "出牌阶段限一次,你可以失去1点体力或弃置一张武器牌,对一名其他角色造成1点伤害。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "强袭",
            description:
              "出牌阶段每名角色限一次,你可以失去1点体力或弃置一张武器牌,对你攻击范围内的一名其他角色造成1点伤害。",
          },
        ],
        health: 2.5,
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "强袭",
            description:
              "出牌阶段每名角色限一次,你可以对你攻击范围内的一名其他角色造成1点伤害,然后你选择:1.受到1点无来源伤害；2.弃置一张武器牌。",
          },
          {
            name: "护卫",
            label: ["副将技", "轮次技"],
            description:
              "副将技(-0.5),轮次技,其他角色受到伤害时,你可以转移此伤害给你。",
            keywords: ["转移伤害"],
          },
        ],
        health: 2.5,
        healthSub: 2,
      },
    ],
    relatedGenerals: ["曹操"],
    expansionPack: "标准",
  },

  WEI013: {
    id: "WEI013",
    name: "荀彧",
    faction: "魏",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "驱虎",
            description:
              "出牌阶段限一次,你可以与一名体力值大于你的角色拼点,若你赢,该角色对其攻击范围内你选择的一名角色造成1点伤害；若你没赢,该角色对你造成1点伤害。",
          },
          {
            name: "节命",
            description:
              "当你受到伤害后,你可以令一名角色将手牌摸至X张（X为其体力上限且最多为5）。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "驱虎",
            description:
              "出牌阶段限一次,你可以与一名体力值大于你的角色拼点,若你赢,该角色对其攻击范围内你选择的一名角色造成1点伤害；若你没赢,该角色对你造成1点伤害。",
          },
          {
            name: "节命",
            description:
              "当你受到1点伤害后,你可以令一名角色将手牌摸至X张（X为其体力上限且最多为5）。",
          },
        ],
        relatedGenerals: ["荀攸"],
        hiredFaction: { 汉: "self" },
      },
    ],
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
        versionId: "official",
        skills: [
          {
            name: "骁果",
            description:
              "其他角色的结束阶段,你可以弃置一张基本牌,令其选择一项:1.弃置一张装备牌；2.受到你造成的1点伤害。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "骁果",
            description:
              "其他角色的准备阶段,你可以弃置任意张基本牌,然后弃置其装备区等量的牌(不足全弃,无牌不弃),若你以此法弃置的基本牌多于装备牌,你摸一张牌并对其造成1点伤害。",
          },
        ],
      },
      {
        versionId: "official-oversea",
        skills: [
          {
            name: "骁果",
            description:
              "其他角色的结束阶段,你可以弃置一张基本牌,令其选择一项:1.弃置一张装备牌,令你摸一张牌；2.受到你造成的1点伤害。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "骁果",
            description:
              "其他角色的准备阶段,你可以弃置任意张基本牌,令其选择一项:1.弃置等量装备牌；2.受到你造成的1点伤害,然后令你摸一张牌。",
          },
        ],
      },
    ],
    relatedGenerals: ["李典"],
    expansionPack: "标准",
  },

  // TODO: WEI017~

  WEI018: {
    id: "WEI018",
    name: "曹洪",
    faction: "魏",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "护援",
            description:
              "结束阶段,你可以选择一名其他角色并选择一项:1.交给其一张非装备牌；2.将一张装备牌置于其装备区,然后你可以弃置场上一张牌。",
          },
          {
            name: "鹤翼",
            description:
              "阵法技,与你处于同一队列的角色均拥有“飞影”(锁定技,其他角色计算与你的距离+1)。",
            label: "阵法技",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "护援",
            description:
              "你的回合内,当一张装备牌置入一名角色的装备区后,你可以弃置其距离1的另一名角色区域内的一张牌；结束阶段,你可以将一张装备牌置于一名角色的装备区。",
          },
          {
            name: "鹤翼",
            description:
              "阵法技,与你处于同一队列的角色均拥有“飞影”(锁定技,其他角色计算与你的距离+1)。",
            label: "阵法技",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "护援",
            description:
              "你的回合内,当一张装备牌置入一名角色的装备区后,你可以弃置其距离1的另一名角色区域内的一张牌；结束阶段,你可以将一张装备牌置于一名角色的装备区。",
          },
          {
            name: "鹤翼",
            description:
              "阵法技<队列>,队列角色均拥有“飞影”(锁定技,其他势力角色计算与你的距离+1)。",
            label: "阵法技<队列>",
          },
        ],
      },
    ],
    relatedGenerals: ["曹仁"],
    expansionPack: "阵",
  },

  // TODO: others

  WEI020: {
    id: "WEI020",
    name: "荀攸",
    faction: "魏",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "奇策",
            description:
              "出牌阶段限一次，你可以将所有手牌当任意一张普通锦囊牌使用，你不能以此法使用目标数大于X牌（X为你的手牌数），然后你可以变更一次副将。",
            keywords: ["变更"],
          },
          {
            name: "智愚",
            description:
              "当你受到伤害后，你可以摸一张牌，然后展示所有手牌，若颜色均相同，来源弃置一张手牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "奇策",
            description:
              "出牌阶段限一次，你可以将所有手牌当一张普通锦囊牌使用（不能为目标数大于手牌数的牌或【挟天子以令诸侯】），然后你可以变更。",
            keywords: ["变更"],
          },
          {
            name: "智愚",
            description:
              "当你受到伤害后，你可以摸一张牌并展示所有手牌，若颜色均相同，来源弃置一张手牌。",
          },
        ],
        relatedGenerals: ["荀彧", "伍琼&种辑"],
        hiredFaction: { 汉: "self" },
      },
    ],
    relatedGenerals: ["荀彧"],
    expansionPack: "变",
  },

  WEI022: {
    id: "WEI022",
    name: "卞夫人",
    faction: "魏",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "挽危",
            description:
              "当确定你因被其他角色弃置或获得而失去的牌时,你可以改为自己选择失去的牌。",
            standardizedSkill: {
              description:
                "当确定你因其他角色的弃置/获得而移动的牌时,若你的能被该角色弃置/获得的牌数大于X,你可将此次移动的牌改为你的X张牌(X为此次移动的牌数)。 ",
              timing: "确定移动的牌时",
            },
          },
          {
            name: "约俭",
            description:
              "锁定技,与你势力相同的角色的弃牌阶段开始时,若该角色本回合未使用牌指定过其他势力的角色为目标,则其本回合手牌上限等同于其体力上限。",
            standardizedSkill: {
              description:
                "锁定技,与你势力相同的角色的弃牌阶段开始时,若其处于明置状态时未使用牌指定过其他势力的角色为目标,则该角色本回合的手牌上限等于其体力上限。 ",
              timing: "移至目标区域后",
            },
            label: "锁定技",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "挽危",
            description:
              "每回合限一次,你的牌被其他角色弃置或获得后,你可以从弃牌堆获得一张同名牌(若没有同名牌或你失去多于一张牌,则改为摸一张牌)。",
          },
          {
            name: "约俭",
            description:
              "锁定技,与你势力相同的角色的弃牌阶段开始时,若该角色本回合未使用牌指定过其他势力的角色为目标,则其本回合手牌上限等同于其体力上限。",
            label: "锁定技",
          },
        ],
      },
      {
        versionId: "official-online",
        skills: [
          {
            name: "挽危",
            description:
              "每回合限一次,你的牌被其他角色弃置或获得后,你可以从牌堆获得一张同名牌(若没有同名牌或你失去多于一张牌,则改为摸一张牌)。",
          },
          {
            name: "约俭",
            description:
              "锁定技,与你势力相同的角色的弃牌阶段开始时,若该角色本回合未使用牌指定过其他势力的角色为目标,则其本回合手牌上限等同于其体力上限。",
            label: "锁定技",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "挽危",
            description:
              "当确定你被其他角色获得的牌时,你可以改为自己选择失去的牌。",
            standardizedSkill: {
              description:
                "当确定你因其他角色的获得而移动的牌时,若你的能被该角色获得的牌数大于X,你可将此次移动的牌改为你的X张牌(X为此次移动的牌数)。",
              timing: "确定移动的牌时",
            },
          },
          {
            name: "约俭",
            description:
              "每回合限一次,你或当前回合角色因弃置而失去牌后,若失去牌的角色的手牌数不大于你,你可以令其获得其中的一张。",
            standardizedSkill: {
              description:
                "每回合限一次,一名角色的牌因弃置而移至弃牌堆后,若该角色:为你,你可以获得此次被移动的牌中的一张；为当前回合角色,且其手牌数不大于你,你可以令其选择此次被移动的牌中的一张,其获得之。",

              timing: "移至目标区域后",
            },
          },
        ],
      },
    ],
    relatedGenerals: ["曹操"],
    expansionPack: "变",
  },

  WEI023: {
    id: "WEI023",
    name: "臧霸",
    faction: "魏",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "横江",
            description:
              "当你受到1点伤害后,若当前回合角色的手牌上限大于0,你可以令其本回合手牌上限-1。此回合结束时,若其未于弃牌阶段弃置牌,你摸X张牌(X为你本回合发动此技能的次数)。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "横江",
            description:
              "当你受到1点伤害后,你可以令当前回合角色本回合手牌上限-1或+1。此回合弃牌阶段结束时,若其于此阶段弃置牌,你获得其中的至多X张牌,否则你摸X张牌(X为你本回合发动此技能的次数)。",
          },
        ],
        hiredFaction: { 群: "self" },
      },
    ],
    relatedGenerals: ["张辽"],
    expansionPack: "势",
  },

  WEI032: {
    id: "WEI032",
    name: "郭淮",
    faction: "魏",
    health: 1.5,
    healthSub: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "half-official",
        skills: [
          {
            name: "断势",
            description:
              "主将技,锁定技,你计算体力上限减少1个单独的阴阳鱼。当一名角色因杀死与你势力相同的其他角色而摸牌时,其少摸一张牌,然后你摸一张牌。",
            label: "主将技",
          },
          {
            name: "精策",
            description:
              "回合结束时,若于本回合置入弃牌堆的牌数大于等于X,你可以执行一个额外的摸牌阶段,若你本回合使用过的牌数大于等于X,你可以执行一个额外的出牌阶段(X为你的体力值)。",
          },
        ],
      },
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "精策",
            description:
              "结束阶段,若你本回合使用的牌数:大于体力值,你可以摸一张牌；等于体力值,你可以摸两张牌。",
          },
          {
            name: "疲攻",
            description:
              "主将技,你计算体力上限减少1个单独的阴阳鱼。每回合限一次,当你使用基本牌时,你可以指定一名角色,与其势力相同的角色各交给其一张手牌。",
            label: "主将技",
          },
          {
            name: "屏御",
            description:
              "副将技,与你势力相同的其他角色需要使用【闪】时,其可以令你选择是否打出之,视为由其使用。",
            label: "副将技",
          },
        ],
        relatedGenerals: [],
        expansionPack: "阵",
      },
      {
        versionId: "xiliang-DIY",
        health: 2,
        skills: [
          {
            name: "精策",
            description:
              "当你于你的一个出牌阶段内使用第X张牌后(X为你当前体力值),你可以令一名与你势力不同的角色执行军令,若其不执行,你摸两张牌。",
          },
        ],
        relatedGenerals: ["张郃"],
        expansionPack: "DIY",
      },
      {
        versionId: "dou-DIY",
        health: 2,
        skills: [
          {
            name: "精策",
            description:
              "回合结束时,若你于本回合内使用过的牌数:大于体力值,你可以选择以下一项；等于体力值,你可以依次执行两项:1.获得一个额外的摸牌阶段；2.获得一个额外的出牌阶段。",
          },
        ],
      },
    ],
    relatedGenerals: ["张郃"],
    expansionPack: "SP",
  },

  WEI034: {
    id: "WEI034",
    name: "曹真",
    faction: "魏",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "qSanguosha",
        skills: [
          {
            name: "司敌",
            description:
              "与你势力相同的角色受到伤害后,其可将与所有“驭”类别均不同的一张牌置于你的武将牌上,称为“驭”。其他势力角色的回合开始时,你可以移去任意张“驭”,执行等量项:1.选择被移去的一张“驭”,其此回合内不能使用同类别的牌；2.选择其一个技能,于此回合内无效；3.令其选择的一名与你势力相同的其他角色回复１点体力。",
            standardizedSkill: [
              {
                index: 1,
                description:
                  "当一名角色受到伤害后,若其与你势力相同且有牌且你:有“驭”且“驭”的类别数<3,你可发动此技能▶其可将与所有“驭”类别均不同的一张牌置于你的武将牌上(称为“驭”)；没有“驭”,你可发动此技能▶其可将一张牌置于你的武将牌上(称为“驭”)。",
                timing: "受到伤害后",
              },
              {
                index: 2,
                description:
                  "其他势力角色的回合开始时,若其存活,你可将至多三张“驭”置入弃牌堆▶你选择等量的项:1.你选择一种与以此法置入弃牌堆的“驭”相同的类别,其于此回合内不能使用此类别的牌；2.你选择其的一个处于明置状态的武将牌上的技能,此技能于此回合内无效；3.令其选择一名与你势力相同的其他角色,该角色回复1点体力。 ",
                timing: "回合开始时",
              },
            ],
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "司敌",
            description:
              "与你势力相同的角色受到伤害后，若你没有司敌牌，其可以将一张牌置于你的武将牌上。其他角色的出牌阶段开始时，你可以移去司敌牌，令其此阶段不能使用此颜色的牌且一个你选择的非锁定技无效，若其此回合未造成过伤害，回合结束时，你视为对其使用【杀】。",
            standardizedSkill: [
              {
                index: 1,
                description:
                  "当一名角色受到伤害后,若其与你势力相同且有牌且你没有“驭”,你可发动此技能▶其可将一张牌置于你的武将牌上(称为“驭”)。",
                timing: "受到伤害后",
              },
              {
                index: 2,
                description:
                  "其他角色的出牌阶段开始时，若其存活，你可将“驭”置入弃牌堆▶其于此阶段内不能使用与此“驭”颜色相同的牌，且你可以选择其的一个处于明置状态的武将牌上的非锁定技，此技能于此阶段内无效。(→)此回合结束时，若其此回合未造成过伤害，你对其使用无实体牌的【杀】。",
                timing: "回合开始时",
              },
            ],
          },
        ],
      },
    ],
    relatedGenerals: ["曹丕"],
    expansionPack: "DIY",
  },

  "WEI&QUN048": {
    id: "WEI&QUN048",
    name: "张鲁",
    faction: ["魏", "群"],
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "布施",
            description:
              "当你受到1点伤害后,你可令一名与你势力相同的角色摸一张牌；当你对其他角色造成伤害后,你令一名与其势力相同的角色摸一张牌。",
          },
          {
            name: "米道",
            description:
              "与你势力相同的角色每回合限一次,其使用【杀】或伤害类锦囊牌指定目标时,其可以交给你一张手牌,你声明此牌的花色和伤害属性。",
            keywords: ["伤害类牌"],
          },
        ],
      },
      {
        versionId: "official-mobile",
        skills: [
          {
            name: "米道",
            description:
              "结束阶段,若你没有“米”,你可以摸两张牌并将两张牌置于武将牌上,称为“米”。当判定牌生效前,你可以打出一张“米”替换之。",
          },
          {
            name: "布施",
            description:
              "回合结束时,你获得等同于体力值的“义舍”标记。其他角色的准备阶段,你可以移去1枚“义舍”,交给其一张牌并摸两张牌。准备阶段,你弃置X张牌(X为角色数-你的体力值-2)。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "米道",
            description:
              "每个回合结束时,若你没有“米”,你摸两张牌并将两张牌置于武将牌上,称为“米”。当判定结果确定前,你可以打出一张“米”代替之。",
          },
          {
            name: "鬼卒",
            description:
              "与你势力相同的角色出牌阶段限一次,使用伤害类牌指定目标时,可以将一张手牌与一张“米”交换,令你声明此牌的花色和伤害属性。",
            keywords: ["伤害类牌"],
          },
          {
            name: "布施",
            description:
              "你造成伤害后或受到1点伤害后,受到伤害的角色可以获得一张“米”。",
          },
        ],
      },
    ],
    expansionPack: "不臣",
  },

  WEI053: {
    id: "WEI053",
    name: "王基",
    faction: "魏",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "half-official",
        skills: [
          {
            name: "奇制",
            description:
              "当你于回合内使用非装备牌时,你可以弃置不为此牌目标的一名角色的一张牌,令其摸一张牌,若你使用的牌带有强化且与弃置的牌花色相同,此牌无视条件触强化效果。",
          },
          {
            name: "进趋",
            description:
              "结束阶段,你可以摸两张牌,然后将手牌弃置至X张(X为本回合你发动“奇制”的次数)。",
          },
        ],
      },
      {
        versionId: "qiaoJian-DIY",
        generalId: "WEI&JIN053",
        skills: [
          {
            name: "奇制",
            description:
              "每回合限四次,当你使用基本牌或锦囊牌指定角色为目标后,你可以弃置不为此牌目标的一名角色的一张牌,然后其摸一张牌。",
          },
          {
            name: "进趋",
            description:
              "结束阶段,你可以摸两张牌,然后将手牌弃置至X张(X为本回合你发动“奇制”的次数)。",
          },
        ],
        faction: ["魏", "晋"],
      },
      {
        versionId: "dou-DIY",
        generalId: "WEI&JIN053",
        skills: [
          {
            name: "奇制",
            description:
              "每回合限四次,当你于回合内使用非装备牌时,你可以弃置不为此牌目标的角色一张牌,令其摸一张牌。若你使用的牌有应变强化且与弃置的牌花色相同,此牌无条件触发强化。",
          },
          {
            name: "进趋",
            description:
              "结束阶段,你可以摸两张牌,然后将手牌弃置至X张(X为本回合你发动“奇制”的次数)。",
          },
        ],
        faction: ["魏", "晋"],
      },
    ],
    expansionPack: "SP",
  },

  WEI060: {
    id: "WEI060",
    name: "朱灵",
    faction: "魏",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "决绝",
            description:
              "弃牌阶段开始时，你可失去1点体力，然后此阶段结束时若你弃置过手牌，其他角色各选择一项1.将X张手牌置入弃牌堆 (X为你此阶段弃牌数) ；2.你对其造成1点伤害。你杀死与你势力相同的角色不执行奖惩。",
          },
          {
            name: "方圆",
            description:
              "阵法技，若你是围攻角色，此围攻关系中的围攻角色的手牌上限+1且被围攻角色的手牌上限-1；结束阶段，若你是被围攻角色，你选择此围攻关系中的一名围攻角色，视为对其使用一张【杀】。",
            label: "阵法技",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "决绝",
            description:
              "弃牌阶段开始时，你可以失去1点体力，然后此阶段结束时，若你此阶段弃置过牌，你令其他角色各选择一项：1.弃置等量手牌；2.受到你造成的1点伤害。",
          },
          {
            name: "方圆",
            description:
              "阵法技<围攻/被围攻>，围攻角色的弃牌阶段结束时，你可以交给其此阶段被置入弃牌堆的一张牌，然后你可以视为对其使用【杀】。",
            label: ["阵法技<围攻>", "阵法技<被围攻>"],
          },
        ],
      },
    ],
    expansionPack: "不臣",
  },

  "WEI&WU072": {
    id: "WEI&WU072",
    name: "唐咨",
    faction: ["魏", "吴"],
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "兴棹",
            description:
              "锁定技，若场上有受伤角色的势力数为：1个或以上，你视为拥有技能“恂恂”；2个或以上，当你受到伤害后，你与来源之中手牌数较少的一名角色摸一张牌；3个或以上，你于回合内的手牌上限+4；4个或以上，你失去装备区的牌时摸一张牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "兴棹",
            description:
              "锁定技，若有受伤角色的势力数大于等于：1，你拥有“恂恂”；2，当你受到伤害后，弃置一张装备区里的牌；当你失去装备区里的牌时，摸一张牌；3，你于回合内的手牌上限+4，你视为装备着【飞云盖海】。",
            memo: "你的装备区不会因此【飞云盖海】的效果而无法置入坐骑牌，但被置入的坐骑牌技能无效。",
          },
        ],
      },
    ],
    expansionPack: "不臣",
  },

  // TODO: other WEI

  WEI084: {
    id: "WEI084",
    name: "华歆",
    faction: "魏",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "望归",
            description:
              "每回合限一次,当你造成或受到伤害后,若你:仅明置此武将牌,你可以对一名与你势力不同的角色造成1点伤害；武将牌均明置,你可以令与你势力相同的角色各摸一张牌。",
          },
          {
            name: "息兵",
            description:
              "手牌数小于体力值的其他角色于出牌阶段使用首张黑色【杀】或黑色普通锦囊牌指定唯一目标后,你可以令其将手牌摸至体力值(至多摸至五张)且本回合不能使用手牌,若你于其武将牌均明置,你可以暗置你与其各一张武将牌,本回合不能再明置。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "望归",
            description:
              "每回合限一次,当你造成或受到伤害后,若你:仅明置此武将牌,你可以对一名与你势力不同的角色造成1点伤害；武将牌均明置,你可以令与你势力相同的角色各摸一张牌。",
            standardizedSkill: {
              description:
                "当你造成或受到伤害后,若你于当前回合内未发动过此技能且此武将牌处于明置状态且你的另一张武将牌:处于明置状态,你可令与你势力相同的角色各摸一张牌；处于暗置状态,你可对与你势力不同的一名角色造成1点普通伤害。",

              timing: ["造成伤害后", "受到伤害后"],
            },
            memo: "不能通过发动“望归”明置此武将牌(暗置时不满足任何发动条件)。",
          },
          {
            name: "息兵",
            description:
              "其他角色于出牌阶段使用首张黑色【杀】或黑色普通锦囊牌指定唯一目标后,你可以令其将手牌摸至体力值且本回合不能使用手牌。若你与其武将牌均明置,你可以暗置你与其各一张武将牌且本回合不能再明置之。",
            standardizedSkill: {
              description:
                "当黑色【杀】或黑色普通锦囊牌于其他角色的出牌阶段内指定目标后,若使用者为该角色且其于此回合内于使用此牌之前未使用过黑色【杀】或黑色普通锦囊牌且目标对应的角色数为1,你可发动此技能▶{若其手牌数小于体力值,其将手牌补至X张(X为其体力值),其于此回合内不能使用对应的实体牌均是其手牌区的牌的牌}。若你与其所有武将牌均处于明置状态,你可暗置你的一张不为君主武将牌且不为士兵牌的武将牌▷其暗置你选择的其一张不为君主武将牌且不为士兵牌的武将牌,你与其于此回合内不能明置以此法暗置的武将牌。 ",

              timing: ["指定目标后"],
            },
            memo: "如果不满足‘手牌小于体力值’,则无法执行补牌和封出牌的效果；但如果双方均已明置武将牌,仍然可以执行暗置武将牌的操作。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "望归",
            description:
              // "每回合每项限一次，当你不以此法造成或受到伤害后，你可以明置此武将牌，对一名与你势力不同的角色造成1点伤害；或暗置此武将牌，令与你势力相同的角色各摸一张牌。",
              "每回合限一次，当你造成伤害后或受到伤害后，你可以明置此武将牌，对一名与你势力不同的角色造成1点伤害；或暗置此武将牌，令与你势力相同的角色各摸一张牌。",
          },
        ],
        hiredFaction: { 汉: "self", 吴: "self" },
      },
    ],
    expansionPack: "纵横捭阖",
  },

  // others

  // ============================== Faction SHU ==============================
  //
  // =========================================================================

  SHU001: {
    id: "SHU001",
    name: "刘备",
    faction: "蜀",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "仁德",
            description:
              "出牌阶段每名角色限一次，你可以将任意张手牌交给一名其他角色。当你以此法给出第二张牌时，你可以视为使用一张基本牌。",
          },
        ],
      },
      {
        versionId: "qiaoJian-DIY",
        health: 2,
        skills: [
          {
            name: "仁德",
            description:
              "出牌阶段每名角色限一次，你可以将任意张手牌交给一名其他角色。当你以此法给出第二张牌时，你可以视为使用一张基本牌。",
          },
        ],
        relatedGenerals: ["关羽", "张飞", "甘夫人", "法正", "公孙瓒"],
        hiredFaction: {
          汉: "self",
          魏: "self",
          吴: "self",
          群: "self",
        },
      },
    ],
    relatedGenerals: ["关羽", "张飞", "甘夫人", "法正"],
    expansionPack: "标准",
  },

  SHU002: {
    id: "SHU002",
    name: "关羽",
    faction: "蜀",
    health: 2.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "武圣",
            description:
              "你可以将一张红色牌当【杀】使用或打出；你使用♦【杀】无距离限制。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        health: 2,
        healthSub: 2.5,
        skills: [
          {
            name: "武圣",
            description:
              "你可以将一张红色牌当【杀】使用或打出；你使用♦【杀】无距离限制。",
          },
          {
            name: "水袭",
            description:
              "主将技(-0.5)，出牌阶段限一次,你可以失去1点体力,视为使用【水淹七军】,目标因此牌的效果而弃置装备区里的牌后,你获得其中一张；你因此牌的效果对目标造成伤害后,你令目标的一个非锁定技于本回合失效。",
          },
        ],
        relatedGenerals: ["刘备", "张飞"],
        hiredFaction: { 汉: "H_HAN&WEI048", 魏: "H_HAN&WEI048" },
      },
    ],
    relatedGenerals: ["刘备"],
    expansionPack: "标准",
  },

  "H_HAN&WEI048": {
    id: "H_HAN&WEI048",
    name: "关羽",
    faction: ["汉", "魏"],
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "武圣",
            description:
              "你可以将一张红色牌当【杀】使用或打出；你使用♦【杀】无距离限制。",
          },
          {
            name: "单骑",
            description:
              "锁定技，每回合前两次，当你使用伤害类牌指定唯一目标时，将其一张牌置于此武将牌上。每个回合结束时，若此武将牌上的牌不少于五张，你获得这些牌并移除此武将牌。",
          },
        ],
        hiredFaction: { 蜀: "SHU002" },
      },
    ],
    relatedGenerals: ["刘备", "张辽", "徐晃"],
    expansionPack: "DIY客将",
  },

  SHU007: {
    id: "SHU007",
    name: "黄月英",
    faction: "蜀",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "集智",
            description: "当你使用一张非转化的普通锦囊牌时，你可以摸一张牌。",
          },
          {
            name: "奇才",
            description: "锁定技，你使用锦囊牌无距离限制。",
            label: "锁定技",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "集智",
            description: "当你使用一张非转化的普通锦囊牌时，你可以摸一张牌。",
          },
          {
            name: "奇才",
            description:
              "锁定技，你使用锦囊牌无距离限制。每回合你使用的第一张带有应变效果的锦囊牌无视条件发动其应变效果。",
            label: "锁定技",
          },
        ],
      },
    ],
    relatedGenerals: ["诸葛亮<丞相>", "诸葛亮<卧龙>"],
    expansionPack: "标准",
  },

  // TODO: other SHU

  SHU012: {
    id: "SHU012",
    name: "姜维",
    faction: "蜀",
    health: 2,
    healthSub: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "挑衅",
            description:
              "出牌阶段限一次，你可以令攻击范围内有你的一名角色选择一项：1.对你使用一张【杀】；2.你弃置其一张牌。",
          },
          {
            name: "天覆",
            description:
              "主将技，阵法技，与你处于同一队列的角色的回合内，你拥有“看破”。",
            label: ["主将技", "阵法技"],
          },
          {
            name: "遗志",
            description:
              "副将技(-0.5)，若你的主将拥有“观星”，则将描述中的X改为5；否则你拥有“观星”。",
            label: "副将技",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "挑衅",
            description:
              "出牌阶段每名角色限一次，你可以令攻击范围内有你的一名角色选择一项：1.对你使用一张【杀】；2.你弃置其一张牌。",
          },
          {
            name: "遗志",
            description:
              "主将技(-0.5)，若你的主将拥有“观星”，则将描述中的X改为5；否则你拥有“观星”。",
            label: "主将技",
          },
          {
            name: "天覆",
            description:
              "副将技，阵法技<队列>，一名队列角色的回合内，你拥有“看破”。",
            label: ["副将技", "阵法技<队列>"],
          },
        ],
        hiredFaction: { 魏: "WEI051", 晋: "AM010", 野心家: "AM010" },
      },
    ],
    relatedGenerals: ["诸葛亮<丞相>", "夏侯霸", "钟会"],
    expansionPack: "标准",
  },

  // TODO: 姜维

  SHU015: {
    id: "SHU015",
    name: "祝融",
    faction: "蜀",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "巨象",
            description:
              "锁定技,【南蛮入侵】对你无效；当其他角色使用的【南蛮入侵】结算结束后,你获得之。",
            label: "锁定技",
          },
          {
            name: "烈刃",
            description:
              "当你使用【杀】对一个目标造成伤害后,你可以与该角色拼点,若你赢,你获得其一张牌。",
            keywords: ["拼点"],
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "巨象",
            description:
              "锁定技,【南蛮入侵】对你无效。【南蛮入侵】在其他角色的回合内进入弃牌堆后,你获得之。",
            label: "锁定技",
          },
          {
            name: "烈刃",
            description:
              "你使用的【杀】对目标造成伤害后,你可以与其拼点,若你:赢,你获得其一张牌；没赢,你与其获得对方拼点的牌。",
            keywords: ["拼点"],
          },
        ],
      },
    ],
    relatedGenerals: ["孟获"],
    expansionPack: "标准",
  },

  SHU016: {
    id: "SHU016",
    name: "甘夫人",
    faction: "蜀",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "神智",
            description: "当你回复1点体力后,你可以令一名其他角色摸一张牌。",
          },
          {
            name: "淑慎",
            description:
              "准备阶段开始时,你可以弃置所有手牌,若你以此法弃置的手牌数大于等于你的体力值,你回复1点体力。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "神智",
            description: "当你回复1点体力后,你可以令一名角色摸一张牌。",
          },
          {
            name: "淑慎",
            description:
              "准备阶段,若X不小于0(X为你的手牌数与体力值之差),你可以弃置所有手牌,然后回复1点体力,令至多X名其他角色各摸一张牌。",
          },
        ],
      },
    ],
    relatedGenerals: ["刘备"],
    expansionPack: "标准",
  },

  // TODO: others

  SHU020: {
    id: "SHU020",
    name: "沙摩柯",
    faction: "蜀",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "蒺藜",
            description:
              "当你于一回合内使用或打出第X张牌时,你可以摸X张牌(X为你的攻击范围)。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "蒺藜",
            description:
              "每回合限三次,当你于一回合内使用或打出第X张牌时,你可以摸X张牌(X为你的攻击范围且至多为5)。",
          },
        ],
      },
    ],
    expansionPack: "变",
  },

  SHU066: {
    id: "SHU066",
    name: "严颜",
    faction: "蜀",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "half-official",
        skills: [
          {
            name: "拒战",
            description:
              "转换技,阳：当你成为【杀】的目标后,你可以与使用者各摸X张牌,然后若其武将牌均明置,你可以暗置其一张武将牌,本回合不能再明置。阴：当你使用【杀】指定目标后,你可以获得其X张牌(X为此【杀】使用者已损失的体力值且至少为1),然后若你武将牌均明置,其可以暗置此武将牌,本回合不能再明置。",
            label: "转换技",
          },
        ],
      },
      {
        versionId: "qSanguosha",
        skills: [
          {
            name: "拒战",
            description:
              "当你成为【杀】的目标后,若你发动过此技能的次数为偶数,你可以与使用者各摸一张牌,然后若其武将牌均明置,你可以暗置其一张武将牌,本回合不能再明置。当你使用【杀】指定目标后,若你发动过此技能的次数为奇数,你可以获得其一张牌,然后你本回合不能对其使用牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        faction: ["蜀", "群"],
        skills: [
          {
            name: "拒战",
            description:
              "当你成为【杀】的目标后,你可以明置此武将牌并与使用者各摸一张牌,若其武将牌均明置,你可以暗置其一张武将牌且本回合不能明置。当你使用【杀】指定目标后,若你武将牌均明置,你可以暗置此武将牌并获得其一张牌,你本回合不能对其使用牌。",
          },
        ],
      },
    ],
    expansionPack: "SP",
  },

  "SHU&QUN072": {
    id: "SHU&QUN072",
    name: "彭羕",
    faction: ["蜀", "群"],
    health: 1.5,
    defaultVersion: "official-old-version",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "通令",
            description:
              "出牌阶段限一次,当你对与你势力不同的角色造成伤害后,你可以令一名与你势力相同的角色选择是否对其使用一张牌。此牌结算后,若此牌造成过伤害,则你与使用者各摸两张牌,否则受伤角色获得你对其造成伤害的牌。",
          },
          {
            name: "近陷",
            description:
              "当你明置此武将牌后,你选择距离1以内的所有角色,若其武将牌均明置,则其暗置一张武将牌,否则其弃置两张牌。",
          },
        ],
      },
      {
        versionId: "official-old-version",
        skills: [
          {
            name: "达命",
            description:
              "与你势力相同的角色出牌阶段开始时,你可以弃置一张锦囊牌,横置一名角色并摸X张牌(X为有横置角色的势力数),你选择一项:1.视为对当前回合角色使用一张【桃】；2.令当前回合角色视为对你选择的另一名角色使用一张雷【杀】。",
          },
          {
            name: "嚣逆",
            description:
              "锁定技,当你使用牌指定目标或成为其他角色使用牌的目标后,若场上有与你势力相同的其他角色且你在其中手牌最多,此目标角色不能响应此牌。",
            label: "锁定技",
          },
        ],
      },
    ],
    expansionPack: "不臣",
  },

  // TODO: others

  // ============================== Faction WU ==============================
  //
  // =========================================================================
  WU001: {
    id: "WU001",
    name: "孙权",
    faction: "吴",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "制衡",
            description:
              "出牌阶段限一次，你可以弃置至多X张牌并摸等量的牌（X为你的体力上限）。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "制衡",
            description:
              "出牌阶段限一次，你可以弃置至多X张牌并摸等量的牌（X为你的体力上限）。",
          },
        ],
        hiredFaction: { 魏: "H_WEI100K" },
      },
    ],
    relatedGenerals: ["周泰", "诸葛瑾"],
    expansionPack: "标准",
  },
  H_WEI100K: {
    id: "H_WEI100K",
    name: "孙权",
    faction: "魏",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        avatarId: "WU001",
        skills: [
          {
            name: "制衡",
            description:
              "出牌阶段限一次，你可以弃置至多X张牌并摸等量的牌（X为你的体力上限）。",
          },
          {
            name: "舍瓦",
            description:
              "你的回合结束时，若此回合你因“制衡”弃置过的牌数为0或不小于X，你暗置此武将牌。当你受到伤害后，你可以明置此武将牌并将至多X张牌交给一名其他角色，然后摸等量的牌（X为你的体力上限）。",
          },
        ],
        hiredFaction: { 吴: "WU001" },
      },
    ],
    expansionPack: "DIY客将",
  },
  WU002: {
    id: "WU002",
    name: "甘宁",
    faction: "吴",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "奇袭",
            description: "出牌阶段,你可以将一张黑色牌当【过河拆桥】使用。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "奇袭",
            description:
              "你可以将一张黑色牌当【过河拆桥】使用。每回合限一次，你使用【过河拆桥】弃置与其花色相同的牌后，你可以获得后者。",
          },
        ],
      },
    ],
    relatedGenerals: ["凌统", "苏飞"],
    expansionPack: "标准",
  },

  WU003: {
    id: "WU003",
    name: "吕蒙",
    faction: "吴",
    health: 2,
    defaultVersion: "fan-made",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "克己",
            description:
              "锁定技,若你未于出牌阶段内使用过颜色不同的牌,你本回合的手牌上限+4。",
            label: "锁定技",
          },
          {
            name: "谋断",
            description:
              "结束阶段,若你于出牌阶段内使用过四种花色或三种类别的牌,你可以移动场上的一张牌。",
          },
        ],
      },
      {
        versionId: "fan-made",
        skills: [
          {
            name: "克己",
            description:
              "锁定技,你本回合的手牌上限+X(X为你此回合未使用过的花色数)。",
            label: "锁定技",
          },
          {
            name: "谋断",
            description:
              "结束阶段,每满足以下一项,你可以移动场上的一张牌:①你本回合使用过四种花色的牌；②你本回合使用过三种类别的牌。",
          },
        ],
      },
    ],
    expansionPack: "标准",
  },

  // TODO: others

  WU007: {
    id: "WU007",
    name: "陆逊",
    faction: "吴",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "谦逊",
            description:
              "锁定技，你成为【顺手牵羊】或【乐不思蜀】的目标时，取消之。",
            label: "锁定技",
          },
          {
            name: "度势",
            description:
              "出牌阶段限四次，你可以将一张红色手牌当【以逸待劳】使用。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "谦逊",
            description:
              "锁定技，你成为【顺手牵羊】或【乐不思蜀】的目标时，取消之。",
            label: "锁定技",
          },
          {
            name: "度势",
            description:
              "每轮限一次，与你势力相同的角色出牌阶段，其可以将一张红色手牌当【以逸待劳】使用，然后若你为小势力角色，你可以令一名与你势力相同的角色将X张手牌当【火烧联营】使用(X为此牌的目标数)，此牌不能被响应。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "谦逊",
            description:
              "锁定技，当你成为【顺手牵羊】【乐不思蜀】或【逐近弃远】的目标时，取消之。",
            label: "锁定技",
          },
          {
            name: "度势",
            description:
              "出牌阶段限一次，你可以将一张红色手牌当作【以逸待劳】使用，然后若你为小势力角色，你可以令一名与你势力相同的角色将X张手牌当【火烧连营】使用（X为此牌的目标数）。",
          },
        ],
      },
    ],
    relatedGenerals: ["陆抗"],
    expansionPack: "标准",
  },
  WU008: {
    id: "WU008",
    name: "孙尚香",
    faction: "吴",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "结姻",
            description:
              "出牌阶段限一次，你可以弃置两张手牌并选择一名已受伤的其他男性角色，你与该角色各回复1点体力。",
          },
          {
            name: "枭姬",
            description:
              "当你失去装备区里的牌后，你可以摸一张牌。若此时在你的回合外，你多摸两张牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "枭姬",
            description: "当你失去装备区里的牌后，你可以摸两张牌。",
          },
          {
            name: "结姻",
            description:
              "出牌阶段限一次，你可以弃置两张手牌并选择一名已受伤的其他男性角色，你与该角色各回复1点体力。",
          },
        ],
        hiredFaction: { 蜀: "H_SHU040" },
        relatedGenerals: ["刘备"],
      },
    ],
    expansionPack: "标准",
  },
  H_SHU040: {
    id: "H_SHU040",
    name: "孙尚香",
    faction: "蜀",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        avatarId: "WU008",
        skills: [
          {
            name: "枭姬",
            description: "当你失去装备区里的牌后，你可以摸两张牌。",
          },
          {
            name: "良助",
            description:
              "每回合限一次，一名角色于其回合内回复体力后，你可以令其摸一张牌。",
          },
        ],
        hiredFaction: { 吴: "WU008" },
        relatedGenerals: ["刘备"],
      },
    ],
    expansionPack: "DIY客将",
  },

  // TODO: others

  WU012: {
    id: "WU012",
    name: "太史慈",
    faction: "吴",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "天义",
            description:
              "出牌阶段限一次,你可以与一名其他角色拼点。若你赢,本回合你使用【杀】无距离限制、可多指定一个目标且可多使用一张【杀】；若你没赢,本回合你不能使用【杀】。",
            keywords: ["拼点"],
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "天义",
            description:
              "出牌阶段限一次,你可以与一名其他角色拼点。若你赢,本回合你使用【杀】无距离限制、可多指定一个目标且可多使用一张【杀】；若你没赢,本回合你不能使用【杀】。",
            keywords: ["拼点"],
          },
          {
            name: "酣战",
            description:
              "当你拼点后,没赢的角色可以获得与其拼点的角色装备区里的一张牌。",
            keywords: ["拼点"],
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "天义",
            description:
              "出牌阶段限一次,你可以与一名其他角色拼点。若你赢,本回合你使用【杀】无距离限制、可多指定一个目标且可多使用一张【杀】；若你没赢,本回合你不能使用【杀】。",
            keywords: ["拼点"],
          },
          {
            name: "酣战",
            description:
              "当你拼点后,没赢的角色可以获得对方装备区里的一张牌；赢的角色可以获得拼点牌里的【杀】。",
            keywords: ["拼点"],
          },
        ],
      },
    ],
    relatedGenerals: ["孙策"],
    expansionPack: "标准",
  },

  // TODO: others

  WU015: {
    id: "WU015",
    name: "张昭&张纮",
    faction: "吴",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "直谏",
            description:
              "出牌阶段，你可以将手牌中的一张装备牌置于一名其他角色的装备区里，然后摸一张牌。",
          },
          {
            name: "固政",
            description:
              "其他角色的弃牌阶段结束时，你可以选择其弃置的其中一张手牌，将此牌交给其，然后你可获得其余于此阶段被弃置的牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "直谏",
            description:
              "出牌阶段，你可以将手牌中的一张装备牌置于一名其他角色的装备区里，然后摸一张牌。",
          },
          {
            name: "固政",
            description:
              "每阶段限一次，其他角色的至少两张牌因弃置而置入弃牌堆后，你可以将其中一张牌交给其，然后若为该角色的弃牌阶段，此阶段结束时你可以获得其余于此阶段被置入弃牌堆的牌。",
          },
        ],
      },
    ],
    expansionPack: "标准",
  },

  WU016: {
    id: "WU016",
    name: "丁奉",
    faction: "吴",
    health: 2,
    defaultVersion: "fan-made",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "短兵",
            description: "你使用【杀】时可以多指定一名距离为1的角色为目标。",
          },
          {
            name: "奋迅",
            description:
              "出牌阶段限一次,你可以弃置一张牌并指定一名其他角色,你与该角色本回合的距离视为1。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "短兵",
            description:
              "你使用【杀】时可以多指定一名距离为1的角色为目标。当你使用【杀】指定唯一目标后,目标角色需多使用一张【闪】才能抵消",
          },
          {
            name: "奋迅",
            description:
              "出牌阶段限一次,你可以弃置一张牌并指定一名其他角色,你与该角色本回合的距离视为1。",
          },
        ],
      },
      {
        versionId: "fan-made",
        skills: [
          {
            name: "短兵",
            description:
              "你使用【杀】时可以多指定一名距离为1的角色为目标。你对距离1的角色使用的【杀】需两张【闪】才能抵消",
          },
          {
            name: "奋迅",
            description:
              "出牌阶段限一次,你可以选择一名其他角色,本回合你计算与其距离视为1,然后此回合结束时,若你未对其造成过伤害,你弃一张牌。",
          },
        ],
      },
    ],
    relatedGenerals: ["徐盛", "诸葛恪"],
    expansionPack: "标准",
  },

  // TODO: others

  WU019: {
    id: "WU019",
    name: "陆抗",
    faction: "吴",
    health: 1.5,
    defaultVersion: "half-official",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "恪守",
            description:
              "当你受到伤害时,你可以弃置两张颜色相同的牌,令此伤害-1,若没有其他与你势力相同的角色,你判定,若结果为红色,你摸一张牌。",
          },
          {
            name: "筑围",
            description:
              "当你的判定牌生效后,若此牌为【杀】或【决斗】,你可获得之,然后你可令当前回合角色本回合使用【杀】的次数上限和手牌上限+1。",
          },
        ],
      },
      {
        versionId: "half-official",
        healthSub: 2,
        skills: [
          {
            name: "决堰",
            description:
              "主将技,你计算体力上限减少1个单独的阴阳鱼。准备阶段,你可以选择一个有牌的区域,你于本回合结束阶段时弃置此区域内所有牌,若此区域为:判定区,你本回合获得“集智”并跳过判定阶段；装备区,摸三张牌且本回合手牌上限+3；手牌区,本回合使用【杀】次数+3。",
          },
          {
            name: "恪守",
            description:
              "当你受到伤害时,你可以弃置两张颜色相同的牌,令此伤害-1。若没有其他与你势力相同的角色,当你一次性弃置至少两张牌后,你可以判定,若为红色,你摸一张牌。",
          },
        ],
      },
      {
        versionId: "official-online",
        skills: [
          {
            name: "恪守",
            description:
              "当你受到伤害时,你可以弃置两张颜色相同的牌,令此伤害-1,若没有其他与你势力相同的角色,你判定,若结果为红色,你摸一张牌。",
          },
          {
            name: "筑围",
            description:
              "当你的判定牌生效后,若此牌为【杀】或伤害类锦囊,你可获得之,然后你可令当前回合角色本回合使用【杀】的次数上限和手牌上限+1。",
            keywords: ["伤害类牌"],
          },
        ],
      },
      {
        versionId: "official-online-new",
        skills: [
          {
            name: "恪守",
            description:
              "当你受到伤害时,你可以弃置两张颜色相同的手牌,令此伤害-1,若没有其他与你势力相同的角色,你判定,若结果为红色,你摸一张牌。",
          },
          {
            name: "筑围",
            description:
              "当你的判定牌生效后,若此牌为【杀】或伤害类锦囊,你可获得之,然后你可令当前回合角色本回合使用【杀】的次数上限和手牌上限+1。",
            keywords: ["伤害类牌"],
          },
        ],
      },
      {
        versionId: "official-mobile",
        skills: [
          {
            name: "恪守",
            description:
              "当你受到伤害时,你依次执行:1.你可以弃置两张颜色相同的牌,令此伤害-1；2.若没有其他与你势力相同的角色,你判定,若结果为红色,你摸一张牌。",
          },
          {
            name: "筑围",
            description:
              "当你的判定牌生效后,你可获得之,然后你可令当前回合角色本回合使用【杀】的次数上限和手牌上限+1。",
          },
        ],
      },
      {
        versionId: "qSanguosha",
        skills: [
          {
            name: "恪守",
            description:
              "当你受到伤害时,你依次执行:1.你可以弃置两张颜色相同的牌,令此伤害-1；2.若没有其他与你势力相同的角色,你判定,若结果为红色,你摸一张牌。",
            standardizedSkill: {
              description:
                "当你受到伤害时,你可弃置两张颜色相同的牌▶伤害值-1。若没有与你势力相同的其他角色,你判定,若结果为红色,你摸一张牌。",

              timing: "受到伤害时",
            },
          },
          {
            name: "筑围",
            description:
              "当你的判定牌生效后,若此牌为【杀】或伤害类锦囊,你可获得之,然后你可令当前回合角色本回合使用【杀】的次数上限和手牌上限+1。",
            standardizedSkill: {
              description:
                "当你进行的判定结果确定后,若判定牌为包含使用者对目标对应的角色造成伤害的效果的牌,你可获得此牌▶你可令当前回合角色使用【杀】的次数上限于此回合内+1且其手牌上限于此回合内+1。 ",

              timing: "判定结果确定后",
            },
            keywords: ["伤害类牌"],
          },
        ],
      },
    ],
    relatedGenerals: ["陆逊"],
    expansionPack: "权",
  },

  WU020: {
    id: "WU020",
    name: "徐盛",
    faction: "吴",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "疑城",
            description:
              "你或与你处于相同队列的其他角色使用【杀】指定目标后或成为【杀】的目标后,其可以摸一张牌,然后弃置一张牌。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "疑城",
            description:
              "与你势力相同的角色成为【杀】的目标后,你可以令其摸一张牌,然后其可以使用一张装备牌。若如此做,其于当前回合结束时弃置X张牌(X为本回合你对其发动此技能的次数)。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "破军",
            description:
              "你使用【杀】指定目标后,你可以弃置其一张牌。结束阶段,其从弃牌堆中获得此牌。",
          },
          {
            name: "疑城",
            description:
              "与你势力相同的角色成为【杀】的目标后,你可以令其摸一张牌,且其可以使用一张装备牌。当前回合结束阶段,其弃置等量于此回合被发动“疑城”次数的牌。",
          },
        ],
      },
    ],
    relatedGenerals: ["丁奉"],
    expansionPack: "阵",
  },

  // TODO: others

  WU022: {
    id: "WU022",
    name: "吕范",
    faction: "吴",
    health: 1.5,
    defaultVersion: "half-official",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "调度",
            description:
              "与你势力相同的角色使用装备牌时可以摸一张牌。出牌阶段开始时,你可以获得与你势力相同的角色装备区一张牌,并交给另一名角色。",
            memo: "技能描述错误,本意为:你从角色A的装备区里获得的牌,不能把它还给A(当且仅当A是你自己时,此装备牌必须交给其他角色)。",
          },
          {
            name: "典财",
            description:
              "其他角色的出牌阶段结束时,若你此阶段失去的牌数大于等于X(X为你的体力值),你可以摸牌至体力上限,然后你可以变更一次副将。",
            keywords: ["变更"],
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "调度",
            description:
              "出牌阶段开始时,你可以获得与你势力相同的角色装备区里的一张牌,然后交给另一名角色。每回合每种类别限一次,与你势力相同的角色使用指定自己为目标的牌时,其可以摸一张牌。",
            memo: "你从角色A的装备区里获得的牌,不能把它还给A(若A是你自己,则不能留在自己手上)。",
            standardizedSkill: [
              {
                index: 1,
                description:
                  "出牌阶段开始时,你可获得与你势力相同的一名角色装备区里的一张牌▶若其:为你,你将此牌交给一名角色；不为你,你可将此牌交给另一名角色。",

                timing: "出牌阶段开始时",
              },
              {
                index: 2,
                description:
                  "当牌被使用时,若使用者与你势力相同,且此牌的目标角色包含其,且本回合未因其使用相同类别的牌而发动过此技能,(你令)其可摸一张牌。",

                timing: "牌被使用时",
              },
            ],
          },
          {
            name: "典财",
            description:
              "其他角色的出牌阶段结束时,若你此阶段失去的牌数大于等于X(X为你的体力值),你可以将手牌摸至体力上限,然后你可以变更一次副将。",
            standardizedSkill: {
              description:
                "其他角色的出牌阶段结束时,若你于此阶段内失去过至少X张牌(X为你的体力值且至少为1),你可将你的手牌补至Y张(Y为你的体力上限)▶你可变更。 ",

              timing: "出牌阶段结束时",
            },
            keywords: ["变更"],
          },
        ],
      },
      {
        versionId: "official-online",
        skills: [
          {
            name: "调度",
            description:
              "每回合限一次,与你势力相同的角色使用装备牌时,其可以摸一张牌。出牌阶段开始时,你可以获得与你势力相同的角色装备区一张牌,然后你可将此牌交给另一名角色。",
          },
          {
            name: "典财",
            description:
              "其他角色的出牌阶段结束时,若你此阶段失去的牌数大于等于X(X为你的体力值),你可以摸牌至体力上限,然后你可以变更一次副将。",
            keywords: ["变更"],
          },
        ],
      },
    ],
    expansionPack: "变",
  },

  WU023: {
    id: "WU023",
    name: "陈武&董袭",
    faction: "吴",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "断绁",
            description:
              "出牌阶段限一次,你可以令至多X名其他角色横置(X为你已损失的体力值且至少为1),然后你横置。",
          },
          {
            name: "奋命",
            description:
              "结束阶段,若你处于“连环状态”,则你可弃置所有处于“连环状态”的角色各一张牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "奋命",
            description:
              "出牌阶段限一次,你可以令至多X名其他角色横置,然后你横置,然后你可以弃置所有处于“连环状态”的角色各一张牌。(X为你已损失的体力值且至少为1)",
          },
          {
            name: "断绁",
            description:
              "你重置武将牌时,或你于回合内首次对横置的角色造成属性伤害时,你可以摸一张牌。",
          },
        ],
      },
    ],
    expansionPack: "势",
  },

  WU031: {
    id: "WU031",
    name: "朱然",
    faction: "吴",
    health: 2,
    defaultVersion: "half-official",
    versions: [
      {
        versionId: "half-official",
        skills: [
          {
            name: "胆守",
            description:
              "轮次技,一名角色的准备阶段,你可以弃置区域内所有牌。本回合每个主要阶段开始时,若你的手牌数不大于以此法弃置的牌数,你选择:1.摸X张牌(X初始为1),若X大于3,你对其造成1点伤害；2.令Ⅹ的数值在本回合+1。",
            label: ["轮次技"],
          },
        ],
      },
    ],
    expansionPack: "SP",
  },

  // TODO: others
  WU070: {
    id: "WU070",
    name: "苏飞",
    faction: ["吴", "群"],
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "联翩",
            description:
              "结束阶段,若你于此回合内弃置任意角色牌的总数大于你的体力值,你可以令一名与你势力相同的角色将手牌摸至其体力上限。其他角色的结束阶段,若其于此回合内弃置任意角色牌的总数大于你的体力值,其可以弃置你的一张牌或令你回复1点体力。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "联翩",
            description:
              "与你势力相同的角色的回合内限三次，其使用牌连续指定另一名角色为目标（或之一）后，你可以重铸一张手牌，然后你可以交给当前回合角色一张手牌。",
            standardizedSkill: {
              description:
                "牌指定目标后，若牌的使用者不为你且当前为此牌的使用者的回合且你未因此牌发动过此技能且此目标角色是此牌的使用者使用的上一张牌的目标且你本回合发动此此技能的次数小于3，你可重铸一张牌▶你可交给其一张手牌。",
              timing: ["指定目标后"],
            },
          },
        ],
      },
    ],
    relatedGenerals: ["甘宁"],
    expansionPack: "不臣",
  },

  // TODO: others

  WU086: {
    id: "WU086",
    name: "吴景",
    faction: "吴",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "调归",
            description:
              "出牌阶段限一次,你可以将一张装备牌当【调虎离山】使用,若你的势力因此形成队列,则你摸X张牌(X为该队列的角色数)。",
          },
          {
            name: "风扬",
            description:
              "阵法技,其他势力角色不能弃置或获得与你处于同一队列的角色装备区里的牌。",
            label: "阵法技",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "调归",
            description:
              "轮次技,任意角色的出牌阶段开始时,你可以将一张装备牌当【调虎离山】对当前回合角色以外的其他角色使用,使用时,你摸X张牌(X为与此牌的目标相邻且与你势力相同的角色数)。",
            label: "轮次技",
          },
          {
            name: "风扬",
            description:
              "阵法技,其他势力角色不能弃置或获得与你处于同一队列的角色装备区里的牌。",
            label: "阵法技",
          },
        ],
      },
    ],
    expansionPack: "不臣",
  },

  WU088: {
    id: "WU088",
    name: "周夷",
    faction: "吴",
    health: 1.5,
    defaultVersion: "official",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "逐寇",
            description:
              "当你于每名角色的出牌阶段第一次造成伤害后,你可以摸X张牌 (X为本回合你使用过的牌数且至为5)。",
          },
          {
            name: "断念",
            description:
              "出牌阶段结束时,你可以弃置所有手牌,然后将手牌摸至体力上限。",
          },
          {
            name: "莲佑",
            description: "你死亡时,你可以令一名其他角色获得技能“兴火”。",
          },
          {
            name: "兴火",
            description: "锁定技,你造成的火焰伤害+1。",
            label: "锁定技",
            isConditional: true,
          },
        ],
      },
    ],
    expansionPack: "纵横捭阖",
  },

  // TODO: others

  // ============================== Faction QUN ==============================
  //
  // =========================================================================

  // TODO: others

  QUN002: {
    id: "QUN002",
    name: "吕布",
    faction: "群",
    health: 2.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "无双",
            description:
              "锁定技,你的【杀】需两张【闪】才能抵消；与你【决斗】的角色每次需打出两张【杀】；你使用非转化的【决斗】目标上限+2。",
            label: ["锁定技"],
            standardizedSkill: [
              {
                index: 1,
                description:
                  "锁定技,当【杀】指定目标后,若使用者是你,你将此目标对应的角色抵消此【杀】的方式改为依次使用两张【闪】。",
                timing: "指定目标后",
              },
              {
                index: 2,
                description:
                  "锁定技,当【决斗】指定目标后,若使用者是你,你将此目标对应的角色因执行此【决斗】的效果而响应此【决斗】的方式改为依次打出两张【杀】。",
                timing: "指定目标后",
              },
              {
                index: 3,
                description:
                  "锁定技,当你成为【决斗】的目标后,你将使用者因执行此【决斗】的效果而响应此【决斗】的方式改为依次打出两张【杀】。",
                timing: "成为目标后",
              },
              {
                index: 4,
                description:
                  "锁定技,当非转化的【决斗】选择目标后,若使用者为你,你可令至多两名角色也成为此【决斗】的目标。 ",
                timing: "选择目标后",
              },
            ],
          },
        ],
      },
      {
        versionId: "dou-DIY",
        health: 2,
        healthSub: 2.5,
        skills: [
          {
            name: "无双",
            description:
              "锁定技,你的【杀】需两张【闪】才能抵消；与你【决斗】的角色每次需打出两张【杀】；你使用非转化的【决斗】目标上限+2。",
            label: ["锁定技"],
          },
          {
            name: "利驭",
            description:
              "主将技/客将技<汉/蜀>(-0.5)，你使用的【杀】结算完成后，可以令受到此牌伤害的一名目标角色展示一张牌并指定另一名其他角色，然后你可以获得此牌并视为对后者使用【决斗】。你于一回合内以此法第二次造成伤害后，失去此技能。",
            label: ["主将技", "客将技"],
          },
        ],
      },
    ],
    relatedGenerals: ["吕布"],
    expansionPack: "标准",
  },

  QUN003: {
    id: "QUN003",
    name: "貂蝉",
    faction: "群",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "离间",
            description:
              "出牌阶段限一次,你可以弃置一张牌并选择两名其他男性角色,令其中一名角色视为对其中另一名角色使用一张【决斗】。",
          },
          {
            name: "闭月",
            description: "结束阶段,你可以摸一张牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "离间",
            description:
              "出牌阶段限一次,你可以弃置一张牌并选择两名其他男性角色,令其中一名角色视为对其中另一名角色使用一张【决斗】。",
          },
          {
            name: "闭月",
            description:
              "结束阶段,你可以摸一张牌,然后你可以令本回合造成过伤害的角色各摸一张牌。",
          },
        ],
      },
    ],
    relatedGenerals: ["吕布"],
    expansionPack: "标准",
  },
  QUN004: {
    id: "QUN004",
    name: "袁绍",
    faction: "群",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "乱击",
            description:
              "出牌阶段，你可以将两张手牌当【万箭齐发】使用（不能使用本回合发动此技能时已使用过的花色），与你势力相同的角色打出【闪】响应此牌后可摸一张牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "乱击",
            description:
              "出牌阶段，你可以将两张手牌当【万箭齐发】使用（不能使用本阶段发动此技能时已使用过的花色），与你势力相同的角色打出【闪】响应此牌后可以摸一张牌。",
          },
        ],
        hiredFaction: { 汉: "H_HAN004" },
      },
    ],
    relatedGenerals: ["颜良&文丑", "田丰"],
    expansionPack: "标准",
  },
  H_HAN004: {
    id: "H_HAN004",
    name: "袁绍",
    faction: "汉",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "士首",
            description:
              "你每回合使用的第一张【杀】可以额外指定任意名与你势力大小不同的角色为目标。",
            keywords: ["势力大小不同"],
          },
          {
            name: "合讨",
            description:
              "限定技，其他角色使用牌指定多个目标角色后，你可以弃置一张颜色相同的牌，令此牌对一名目标结算两次且取消其他目标。",
            label: "限定技",
          },
        ],
        hiredFaction: { 群: "QUN004" },
      },
    ],
    relatedGenerals: ["曹操"],
    expansionPack: "DIY客将",
  },
  QUN005: {
    id: "QUN005",
    name: "颜良&文丑",
    faction: "群",
    health: 2,
    defaultVersion: "half-official",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "双雄",
            description:
              "摸牌阶段,你可以改为判定并获得生效后的判定牌。若如此做,本回合你可以将一张与判定结果颜色不同的手牌当【决斗】使用。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "双雄",
            description:
              "摸牌阶段，你可以改为判定。当你的判定牌于回合内生效后，你获得之，本回合你可以将一张与此牌颜色不同的手牌当【决斗】使用。",
          },
        ],
      },
    ],
    relatedGenerals: ["袁绍"],
    expansionPack: "标准",
  },
  QUN006: {
    id: "QUN006",
    name: "董卓",
    faction: "群",
    health: 2,
    defaultVersion: "half-official",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "横征",
            description:
              "摸牌阶段,若你的体力值为1或没有手牌,你可以改为获得所有其他角色区域里各一张牌。",
          },
          {
            name: "暴凌",
            description:
              "主将技,锁定技,出牌阶段结束时,若此武将牌已明置,则你移除副将,然后加3点体力上限并恢复3点体力,失去“暴凌”并获得“崩坏”。",
            label: ["主将技", "锁定技"],
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "横征",
            description:
              "摸牌阶段,若你的体力值为1或没有手牌,你可以改为获得所有其他角色区域里各一张牌。",
          },
          {
            name: "暴凌",
            description:
              "主将技,锁定技,出牌阶段结束时,你移除副将,然后加3点体力上限并恢复3点体力,获得“崩坏”。",
            label: ["主将技", "锁定技"],
          },
          {
            name: "崩坏",
            description:
              "锁定技,结束阶段,若你体力值不为最小,你选择一至两项:1.失去1点体力；2.减1点体力上限。若你选择两项,你执行一个额外的摸牌阶段。",
            label: ["锁定技"],
            isConditional: true,
          },
        ],
      },
      {
        versionId: "official-mobile",
        skills: [
          {
            name: "横征",
            description:
              "摸牌阶段,若你的体力值为1或没有手牌,你可以改为获得所有其他角色区域里各一张牌。",
          },
          {
            name: "暴凌",
            description:
              "主将技,限定技,锁定技,出牌阶段结束时,若你有副将,则你移除副将,然后加3点体力上限并恢复3点体力,获得“崩坏”。",
            label: ["主将技", "锁定技", "限定技"],
          },
        ],
      },
    ],
    expansionPack: "势",
  },

  QUN007: {
    id: "QUN007",
    name: "贾诩",
    faction: "群",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "完杀",
            description:
              "锁定技，你的回合内，一名角色进入濒死状态时，除你和其以外的角色不能使用【桃】。",
          },
          {
            name: "乱武",
            description:
              "限定技，出牌阶段，你可以令所有其他角色各选择一项：1.对其距离最小的另一名角色使用一张【杀】；2.失去1点体力。",
          },
          {
            name: "帷幕",
            description: "锁定技，当你成为黑色锦囊牌的目标时，取消之。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "完杀",
            description:
              "锁定技，你的回合内，一名角色进入濒死状态时，除你和其以外的角色不能使用【桃】。",
          },
          {
            name: "乱武",
            description:
              "限定技，出牌阶段，你可以令所有其他角色各选择一项：1.对其距离最小的另一名角色使用一张【杀】；2.失去1点体力。",
          },
          {
            name: "帷幕",
            description: "锁定技，当你成为黑色锦囊牌的目标时，取消之。",
          },
        ],
        hiredFaction: { 汉: "self", 魏: "WEI047" },
      },
    ],
    relatedGenerals: ["李傕&郭汜", "张绣"],
    expansionPack: "标准",
  },
  WEI047: {
    id: "WEI047",
    name: "贾诩",
    faction: "魏",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "缜略",
            description:
              "当锦囊牌对你或对你使用的牌生效前，你可以将一张手牌当【无懈可击】使用。",
          },
          {
            name: "间书",
            description:
              "出牌阶段限一次，你可以选择两名其他势力角色，你将一张手牌交给其中之一，令其对另一名发起军令：若执行，发起者弃置两张手牌；若不执行，被发起者失去1点体力。",
          },
        ],
        hiredFaction: { 群: "QUN007" },
      },
    ],

    relatedGenerals: ["曹丕", "张绣"],
    expansionPack: "DIY客将",
  },
  QUN008: {
    id: "QUN008",
    name: "庞德",
    faction: "群",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "马术",
            description: "锁定技，你计算与其他角色的距离-1。",
          },
          {
            name: "鞬出",
            description:
              "当你使用【杀】指定一个目标后，你可以弃置其一张牌。若此牌：为装备牌，该角色不能使用【闪】抵消此【杀】；不为装备牌，其获得此【杀】。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "马术",
            description: "锁定技，你计算与其他角色的距离-1。",
          },
          {
            name: "鞬出",
            description:
              "当你使用【杀】指定一个目标后，你可以弃置其一张牌。若此牌：为装备牌，该角色不能使用【闪】抵消此【杀】；不为装备牌，其获得此【杀】。",
          },
        ],
        hiredFaction: { 魏: "self" },
      },
    ],
    expansionPack: "标准",
  },
  QUN009: {
    id: "QUN009",
    name: "左慈",
    faction: "群",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "役鬼",
            description:
              "你首次明置此武将牌时,将两张剩余武将牌扣置于武将牌上,称为“魂”；每回合每种牌名限一次,你可以移去一张“魂”,视为使用任意一种基本牌或普通锦囊牌(目标仅包括与此“魂”牌面势力相同或未确定势力的角色)。",
            standardizedSkill: [
              {
                index: 1,
                description:
                  "当你明置此武将牌后,若你未发动过此技能,你随机将武将牌堆里的两张牌扣置于武将牌上(称为“魂”)。",

                timing: "明置武将牌后",
              },
              {
                index: 2,
                description:
                  "当你需要使用与你于当前回合内以此法使用过的牌的牌名均不同的除【闪】外的基本牌/除【无懈可击】外的普通锦囊牌时,你可将一张“魂”置入武将牌堆▶你使用无对应的实体牌的此基本牌/普通锦囊牌(有势力且与你以此法置入武将牌堆的“魂”代表的武将牌势力不同的角色不是你以此法使用的牌的合法目标)。",

                timing: "需要使用牌时",
              },
            ],
          },
          {
            name: "汲魂",
            description:
              "当你受到伤害后,或与你势力不同的角色从濒死被救回后,你可以将一张剩余武将牌扣置为“魂”。",
            standardizedSkill: [
              {
                index: 1,
                description:
                  "当你受到伤害后,你可随机将武将牌堆里的一张牌扣置于武将牌上(称为“魂”)。",

                timing: "明置武将牌后",
              },
              {
                index: 2,
                description:
                  "当一名角色的濒死结算结束后,若其与你势力不同且存活,你可随机将武将牌堆里的一张牌扣置于武将牌上(称为“魂”)。 ",

                timing: "需要使用牌时",
              },
            ],
          },
        ],
        references: [
          {
            title: "左慈的各版本图鉴,和〖役鬼〗可以转化的锦囊牌",
            url: "https://www.bilibili.com/read/cv16731260/",
          },
          {
            title:
              "左慈的各服描述差异,和〖役鬼〗“目标收敛、势力条件” 等概念的详细解释和举例",
            url: "https://www.bilibili.com/read/cv16158225/",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "役鬼",
            description:
              "你首次明置此武将牌时,将两张剩余武将牌扣置于武将牌上,称为“魂”；每回合每种类别限一次,你可以移去一张“魂”,视为使用任意一种基本牌或普通锦囊牌(【闪】和【无懈可击】除外,目标不能包含与此“魂”牌面势力相同或未确定势力的角色)。",
            standardizedSkill: [
              {
                index: 1,
                description:
                  "当你明置此武将牌后,若你未发动过此技能,你随机将武将牌堆里的两张牌扣置于武将牌上(称为“魂”)。",

                timing: "明置武将牌后",
              },
              {
                index: 2,
                description:
                  "当你需要使用与你于当前回合内以此法使用过的牌的类别均不同的除【闪】外的基本牌/除【无懈可击】外的普通锦囊牌时,你可将一张“魂”置入武将牌堆▶你使用无对应的实体牌的此基本牌/普通锦囊牌(有势力且与你以此法置入武将牌堆的“魂”代表的武将牌势力不同的角色不是你以此法使用的牌的合法目标)。",

                timing: "需要使用牌时",
              },
            ],
            memo: "〖役鬼〗转化的牌的目标为满足牌的合法性的目标与满足役鬼势力的目标的交集。详见参考链接。",
          },
          {
            name: "汲魂",
            description:
              "当你受到伤害后,或与你势力不同的角色从濒死被救回后,你可以将一张剩余武将牌扣置为“魂”。准备阶段,你可以移去至多两张“魂”,获得等量的“魂”。",
            standardizedSkill: [
              {
                index: 1,
                description:
                  "当你受到伤害后,你可随机将武将牌堆里的一张牌扣置于武将牌上(称为“魂”)。",

                timing: "明置武将牌后",
              },
              {
                index: 2,
                description:
                  "当一名角色的濒死结算结束后,若其与你势力不同且存活,你可随机将武将牌堆里的一张牌扣置于武将牌上(称为“魂”)。 ",

                timing: "濒死结算结束后",
              },

              {
                index: 3,
                description:
                  "准备阶段,你可将至多两张“魂”置入武将牌堆▶你随机将武将牌堆里的等量张牌扣置于武将牌上(称为“魂”)。 ",
                timing: "准备阶段",
              },
            ],
          },
        ],
        references: [
          {
            title: "左慈的各版本图鉴,和〖役鬼〗可以转化的锦囊牌",
            url: "https://www.bilibili.com/read/cv16731260/",
          },
          {
            title:
              "左慈的各服描述差异,和〖役鬼〗“目标收敛、势力条件” 等概念的详细解释和举例",
            url: "https://www.bilibili.com/read/cv16158225/",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "化身",
            description:
              "准备阶段，若你的“化身”不足两张，你可以从五张“化身”中获得至多两张，否则你可以重铸一张“化身”。你可以移去一张“化身”并发动此牌的一个无标签技能。",
            memo: "“化身”池由所有未加入游戏的武将牌组成，若你获得的武将牌能产生牌类标记，或没有无标签技能，你须重铸之。",
          },
          {
            name: "鬼道",
            description: "当你受到伤害后，你可以获得一张“化身”。",
          },
        ],
        relatedGenerals: [],
      },
    ],
    expansionPack: "变",
    relatedGenerals: ["于吉"],
  },
  QUN010: {
    id: "QUN010",
    name: "张角",
    faction: "群",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "雷击",
            description:
              "当你使用或打出【闪】时，你可以令一名角色判定，若为♠，你对其造成2点雷电伤害。",
          },
          {
            name: "鬼道",
            description: "当判定牌生效前，你可以打出一张黑色牌替换之。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "雷击",
            description:
              "当你使用或打出【闪】时，你可以令一名角色判定，若结果为：♠，你对其造成2点雷电伤害；♣，你回复1点体力，然后对其造成1点雷电伤害。",
          },
          {
            name: "鬼道",
            description: "当判定牌生效前，你可以打出一张黑色牌替换之。",
          },
        ],
      },
    ],
    expansionPack: "标准",
  },
  QUN011: {
    id: "QUN011",
    name: "于吉",
    faction: "群",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "千幻",
            description:
              "当一名与你势力相同的角色受到伤害后，你可将与你武将牌上的牌花色均不同的一张牌置于你的武将牌上；当一名与你势力相同的角色成为基本牌或锦囊牌的唯一目标时，你可以移去一张“千幻”牌，取消之。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "千幻",
            description:
              "当一名与你势力相同的角色受到伤害后，你可以将与你武将牌上的牌花色均不同的一张牌置于你的武将牌上。当与你势力相同的角色成为非装备牌的目标时，你可以移去一张“千幻”牌，取消此目标（每张牌限一次）。",
          },
        ],
        relatedGenerals: [],
        hiredFaction: { 吴: "self" },
      },
    ],
    expansionPack: "阵",
  },

  // others

  QUN015: {
    id: "QUN015",
    name: "纪灵",
    faction: "群",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "双刃",
            description:
              "出牌阶段开始时,你可以与一名角色拼点,若你赢,你视为对一名与其势力相同的角色使用【杀】；若你没赢,本回合你不能对其他角色使用牌。",
            keywords: ["拼点"],
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "双刃",
            description:
              "出牌阶段开始时,你可与一名角色拼点,若你赢,你视为对一名与其势力相同的角色使用【杀】；若你没赢,此阶段你不能使用【杀】或伤害类锦囊。你的【杀】有<富甲→选择唯一目标后,可以令与其相邻的一名角色也成为目标>。",
            memo: "无对应实体牌的【杀】无距离限制。",
            keywords: ["拼点", "富甲"],
          },
        ],
      },
    ],
    relatedGenerals: ["袁术"],
    expansionPack: "标准",
  },

  QUN017: {
    id: "QUN017",
    name: "潘凤",
    faction: "群",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "狂斧",
            description:
              "出牌阶段限一次,当你使用【杀】指定一个目标后,你可以获得其装备区里的一张牌,然后若此【杀】未造成伤害,则你弃置两张手牌.",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "狂斧",
            description:
              "每回合每名角色限一次,当你使用【杀】指定目标后,你可以获得其装备区里的一张牌,你可以立即使用以此法获得的武器牌。然后若此【杀】未对其造成伤害,你弃置两张手牌。",
            memo: "若以此法装备武器牌,此武器的触发时机早于“指定目标后”的技能在此【杀】的对此目标的结算中不会被触发,包括〖方天画戟〗〖青龙偃月刀〗〖五行鹤翎扇〗等。",
          },
        ],
      },
    ],
    expansionPack: "标准",
  },

  // TODO: others

  QUN020: {
    id: "QUN020",
    name: "何太后",
    faction: "群",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "鸩毒",
            description:
              "一名角色的出牌阶段开始时,你可以弃置一张手牌,令该角色视为使用一张【酒】,然后你对其造成1点伤害。",
          },
          {
            name: "戚乱",
            description:
              "一名角色的回合结束时,若你于本回合杀死过角色,你可以摸三张牌。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "鸩毒",
            description:
              "其他角色的出牌阶段开始时,你可以弃置一张手牌,令该角色视为使用一张【酒】,然后若该角色不为你,你对其造成1点伤害。",
          },
          {
            name: "戚乱",
            description:
              "一名角色的回合结束时,你可以摸X张牌(X为本回合你杀死的角色数的两倍与本回合死亡的角色数之和)。",
          },
        ],
      },
      {
        versionId: "qiaoJian-DIY",
        faction: "汉",
        skills: [
          {
            name: "鸩毒",
            description:
              "其他角色的出牌阶段开始时,你可以弃置一张手牌,令该角色视为使用一张【酒】,然后若该角色不为你,你对其造成1点伤害。",
          },
          {
            name: "戚乱",
            description:
              "一名角色的回合结束时,你可以摸X张牌(X为本回合你杀死的角色数的两倍与本回合死亡的角色数之和)。",
          },
        ],
        hiredFaction: { 群: "self" },
      },
    ],
    expansionPack: "阵",
  },

  QUN024: {
    id: "QUN024",
    name: "张任",
    faction: "群",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "穿心",
            description:
              "当你于出牌阶段使用【杀】或【决斗】对与你势力不同的目标造成伤害时，若其有副将，你可防止此伤害，令其选择一项：1.弃置装备区的所有牌并失去1点体力；2.移除副将。",
          },
          {
            name: "锋矢",
            description:
              "阵法技，若你是围攻角色，此围攻关系中的围攻角色使用【杀】指定被围攻角色为目标后，被围攻角色弃置装备区的一张牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "伏匿",
            description:
              "结束阶段，你可以弃置一张非基本牌，然后暗置此武将牌。你明置此武将牌的回合内使用【杀】无距离限制且次数上限+1。",
            memo: "“次数上限+1”，即你于此回合的每个出牌阶段的空闲时间点可以使用【杀】的次数上限+1。",
          },
          {
            name: "穿心",
            description:
              "其他角色的结束阶段，你可以明置此武将牌并使用一张【杀】，此【杀】对目标角色造成的伤害+X（X为其本回合回复过的体力值）。",
          },
        ],
      },
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "穿心",
            description:
              "当你使用【杀】或【决斗】对目标角色造成伤害时，若你的翼从数小于2，你可以从三张翼从牌中选择一张，其选择一项：1.移除副将并获得此翼从；2.此伤害+1，你额外获得此翼从。",
          },
          {
            name: "锋矢",
            description: "阵法技，与你处于同一队列的其他角色视为拥有你的翼从。",
          },
        ],
      },
    ],
    expansionPack: "阵",
  },

  QUN028: {
    id: "QUN028",
    name: "陈宫",
    faction: ["群", "魏"],
    health: 1.5,
    defaultVersion: "xiliang-DIY",
    versions: [
      {
        versionId: "half-official",
        skills: [
          {
            name: "引叛",
            description:
              "出牌阶段限一次,你可以选择一名其他角色,令所有与其势力不同的角色依次选择是否对其使用一张【杀】,然后其下回合使用【杀】次数+X (X为其以此法受到的伤害数),若其以此法进入过濒死则其回复1点体力。",
          },
          {
            name: "与谋",
            description:
              "锁定技,你杀死其他角色或其他角色杀死你均不执行奖惩,其他角色因奖惩而摸牌时,你摸一张牌。",
            label: "锁定技",
          },
        ],
      },
      {
        versionId: "xiliang-DIY",
        faction: "群",
        skills: [
          {
            name: "明策",
            description:
              // TODO: 修订版描述:https://www.bilibili.com/read/cv25257253
              "出牌阶段限一次,你可以弃置一张【杀】或武器牌,对一名没有军令的其他角色献策并指定另一名角色。结束阶段,其须选择一项:令你指定的角色执行军令；弃置此军令,摸两张牌。",
            keywords: ["献策"],
          },
          {
            name: "智迟",
            description:
              "锁定技,当你于回合外受到伤害后,本回合普通锦囊牌和【杀】指定你为目标时,取消之。",
            label: "锁定技",
          },
        ],
        references: [
          {
            title: "陈宫设计思路及献策机制讲解",
            url: "https://www.bilibili.com/read/cv14434956/",
          },
        ],
        expansionPack: "DIY",
      },
    ],
    expansionPack: "不臣",
  },

  // TODO: others

  QUN050: {
    id: "QUN050",
    name: "严白虎",
    faction: "群",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "雉盗",
            description:
              "锁定技，出牌阶段开始时，你选择一名其他角色，本回合你计算与其距离为1且不能使用牌指定你与其外的角色为目标，你于此阶段第一次对其造成伤害后，你获得其区域内的一张牌。",
          },
          {
            name: "寄篱",
            description:
              "锁定技，当你成为红色基本牌或红色普通锦囊牌的唯一目标后，此牌结算两次。当你于一阶段内第二次受到伤害时，防止此伤害，然后移除此武将牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "雉盗",
            description:
              "锁定技，出牌阶段开始时，你选择一名其他角色，此阶段除你和其以外的角色移出游戏，此阶段你首次对其造成伤害后获得其一张牌。",
          },
          {
            name: "寄篱",
            description:
              "锁定技，你死亡时，令一名与来源势力不同的其他角色获得“雉盗”“寄篱”和你的所有牌，然后其视为对来源使用【决斗】。",
          },
        ],
      },
    ],
    expansionPack: "不臣",
  },

  QUN058: {
    id: "QUN058",
    name: "卑弥呼",
    faction: "群",
    health: 1.5,
    defaultVersion: "official",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "鬼术",
            description:
              "出牌阶段,你可将一张♠手牌当【远交近攻】或【知己知彼】使用(不可与你本回合上一次以此法使用的牌相同)。",
            standardizedSkill: {
              description:
                "出牌阶段,若你于此回合内{未发动过此技能或上一次因发动此技能而使用的牌为【知己知彼】/【远交近攻】},你可使用对应的实体牌为你的一张♠手牌的【远交近攻】/【知己知彼】。",

              timing: "出牌阶段的空闲时间点",
            },
          },
          {
            name: "远域",
            description:
              "锁定技,当你受到伤害时,若你不在伤害来源的攻击范围内,此伤害-1。",
            label: "锁定技",
            standardizedSkill: {
              description:
                "锁定技,当你受到伤害时,若你不在来源的攻击范围内,你令伤害值-1。 ",

              timing: ["受到伤害时"],
            },
          },
        ],
      },
      {
        versionId: "official-oversea",
        skills: [
          {
            name: "鬼术",
            description:
              "出牌阶段,你可将一张♠手牌当【远交近攻】或【知己知彼】使用(不可与你以此法使用的上一张牌相同)。",
          },
          {
            name: "远域",
            description:
              "锁定技,当你受到伤害时,若来源不为你的上家或下家,防止此伤害。",
            label: "锁定技",
          },
        ],
      },
    ],
    expansionPack: "海外专属",
  },

  // ============================== Faction JIN ==============================
  //
  // =========================================================================

  JIN001: {
    id: "JIN001",
    name: "司马炎",
    faction: "晋",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "垂统",
            description:
              "其他角色进入濒死状态时，你可以将其装备区的一张牌移动至你装备区。",
          },
          {
            name: "兴图",
            description:
              "当你需要使用【桃】时，若你本回合未使用或打出过牌，你可将一张装备牌当【桃】使用。一名角色的回合结束时，若你本回合未造成或受到过伤害，其可令你摸一张牌。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["张华", "杨艳&杨芷"],
  },
  JIN002: {
    id: "JIN002",
    name: "司马师",
    faction: "晋",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "夷灭",
            description:
              "每回合限一次，当你对其他角色造成伤害时，你可失去1点体力，令伤害值增加至其体力值，伤害结算后其回复等同增加伤害值的体力。",
          },
          {
            name: "泰然",
            description:
              "回合结束时，你可以回复体力至上限并摸牌至体力上限。若如此做，你于下回合的出牌阶段开始时失去等量的体力并弃置等量的手牌。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["夏侯徽", "羊徽瑜", "傅嘏"],
  },
  JIN003: {
    id: "JIN003",
    name: "司马昭",
    faction: "晋",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "筹伐",
            description:
              "出牌阶段限一次，你可以展示一名其他角色的一张手牌，然后令其此阶段内与此牌类别不同的手牌均视为【杀】。",
          },
          {
            name: "昭然",
            description:
              "出牌阶段开始时，你可以令此阶段内你的手牌对所有角色可见，且你首次失去每种花色最后的手牌后，摸一张牌或弃置其他角色一张牌。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["王元姬", "贾充"],
  },
  JIN004: {
    id: "JIN004",
    name: "贾充",
    faction: "晋",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "通法",
            description:
              "每回合限一次，当一名角色使用应变牌时，其可以交给你一张牌（若为你则改为卜算2），然后你可以令其无视条件触发其使用牌的应变效果。",
          },
          {
            name: "悖弑",
            description:
              "当你成为其他角色使用【杀】或普通锦囊牌的唯一目标时，你可以弃置一张同类别的牌并取消之，然后获得并对其使用之，若你未以此法使用牌对其造成伤害，你失去1点体力。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["司马昭", "荀勖"],
  },
  JIN005: {
    id: "JIN005",
    name: "羊祜",
    faction: "晋",
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "柔克",
            description:
              "与你势力相同的角色于一回合内使用第一张牌时，若此牌为【杀】，其可以改为冰【杀】，然后若此牌未造成伤害，你令一名角色横置。你的手牌上限+2X（X为横置的角色数）。",
          },
          {
            name: "顺流",
            description:
              "当你造成属性伤害后，你可以依次弃置所有横置的角色各一张牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "柔克",
            description:
              "与你势力相同的角色于一回合内使用的第一张牌若为【杀】，你可以改为冰【杀】，然后若此牌未造成伤害，你可以横置一名目标角色。你的手牌上限+X（X为横置的角色数）。",
          },
          {
            name: "顺流",
            description:
              "当你造成属性伤害后，你可以依次弃置所有横置的角色各一张牌。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["杜预", "王濬"],
  },
  JIN007: {
    id: "JIN007",
    name: "王元姬",
    faction: "晋",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "宴戏",
            description:
              "出牌阶段限一次，你可以扣置一名其他角色的一张手牌和牌堆顶两张牌，洗混后展示之，你获得其中一张牌，此牌本回合不计入你手牌上限，若此牌来自其手牌，你获得其余两张牌。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["司马昭"],
  },
  JIN008: {
    id: "JIN008",
    name: "夏侯徽",
    faction: "晋",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "宜室",
            description:
              "每回合限一次，当其他角色于其出牌阶段内弃置牌后，你可以将其中一张牌交给其，然后你获得其余的牌。",
          },
          {
            name: "识度",
            description:
              "出牌阶段限一次，你可以与一名角色拼点。若你赢，你获得其所有手牌，然后你将半数手牌（向下取整）交给其。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["司马师"],
  },
  JIN009: {
    id: "JIN009",
    name: "司马懿",
    faction: "晋",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "权变",
            description:
              "当你于出牌阶段内第一次使用每种花色的手牌时，你可以令你此阶段不能再使用此花色的手牌，然后卜算3并摸一张牌。",
          },
          {
            name: "骤霆",
            description:
              "限定技，出牌阶段，你可以展示牌堆顶的一张牌，若此牌可使用，你使用之并重复此流程。",
            label: "限定技",
          },
        ],
        hiredFaction: { 魏: "self" },
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["张春华"],
  },
  JIN010: {
    id: "JIN010",
    name: "张春华",
    faction: "晋",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "慧识",
            description:
              "摸牌阶段，你可以改为观看牌堆顶的X张牌并获得其中半数的牌（X为上回合置入弃牌堆的牌数且至多为9，半数向下取整），然后将其余牌以任意顺序置于牌堆底。",
          },
          {
            name: "清冷",
            description:
              "其他角色的结束阶段，若其体力和手牌均多于你，你可以将一张牌当冰【杀】对其使用。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["司马懿"],
  },
  JIN011: {
    id: "JIN011",
    name: "张虎＆乐綝",
    faction: "晋",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "果毅",
            description:
              "出牌阶段限一次，你可以弃置至多三张基本牌并令等量名有牌的其他角色各选择一项：1.你弃置其装备区一张牌；2.你获得其一张手牌。这些角色选择完成后，若两项均被选择过，你可以对其中一名角色造成1点伤害。",
          },
        ],
      },
    ],
    expansionPack: "标准",
  },
  JIN012: {
    id: "JIN012",
    name: "羊徽瑜",
    faction: "晋",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "慈威",
            description:
              "其他角色于其回合内使用第二张牌时，若此牌为基本牌或普通锦囊牌，你可以弃置一张牌并令此牌无效。",
          },
          {
            name: "才媛",
            description:
              "锁定技，与你势力相同的角色回合结束时，若其未受伤，你摸一张牌；若你未受伤，其摸一张牌。",
            label: "锁定技",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["司马师"],
  },
  JIN013: {
    id: "JIN013",
    name: "王濬",
    faction: "晋",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "克清",
            description:
              "当你使用牌结算后，你可以横置所有受到此牌伤害的角色。若仅有一名角色受到伤害，则其下回合使用每张牌时需弃置一张手牌，然后本回合此技能失效。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["羊祜"],
  },
  JIN014: {
    id: "JIN014",
    name: "文鸯",
    faction: "晋",
    health: 2.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "膂力",
            description:
              "每回合限一次，当你造成伤害后，你可以选择一项：1.摸牌至体力值；2.弃置所有手牌，然后回复体力至X点（X为以此法弃置的牌数)。",
          },
          {
            name: "夺气",
            description:
              "限定技，一名角色的回合结束时，若你或其没有手牌，你可以获得一个额外的回合。",
            label: "限定技",
          },
        ],
      },
    ],
    expansionPack: "标准",
  },
  JIN015: {
    id: "JIN015",
    name: "石苞",
    faction: "晋",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "鸿勋",
            description:
              "与你势力相同的角色准备阶段，你可以使用一张【杀】<助战→弃置目标角色装备区里的一张牌>。若此【杀】造成伤害，当前回合角色获得此【杀】并摸一张牌。",
            keywords: ["助战"],
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["陈骞"],
  },
  JIN006: {
    id: "JIN006",
    name: "杜预",
    faction: "晋",
    health: 1.5,
    healthSub: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "三陈",
            description:
              "出牌阶段限一次，你可以令一名角色摸三张牌并弃置三张牌，若弃置牌类别均不同，其摸一张牌并复原此技能的发动次数（不能再选择相同的角色）。",
          },
          {
            name: "破竹",
            description:
              "主将技，你计算体力上限时减少1个单独阴阳鱼。出牌阶段限X次（X为此阶段“三陈”被复原的次数），你可以将一张手牌当【出其不意】使用。",
            label: "主将技",
          },
          {
            name: "武库",
            description:
              "副将技，每回合限一次，你可以将武器或防具牌当你本回合使用的上一张基本或普通锦囊牌使用。",
            label: "副将技",
          },
        ],
      },
    ],
    expansionPack: "阵",
    relatedGenerals: ["羊祜", "宣公主"],
  },
  JIN016: {
    id: "JIN016",
    name: "张华",
    faction: "晋",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "复礼",
            description:
              "与你势力相同的角色摸牌阶段，其可以多摸一张牌，然后展示并交给你一张牌，本回合其不能使用或打出此花色的牌。",
          },
          {
            name: "风物",
            description:
              "出牌阶段限一次，你可以令至多三名角色选择是否使用一张牌。然后若本回合所有花色的牌均被使用过，你摸两张牌并回复1点体力。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["司马炎"],
  },
  JIN023: {
    id: "JIN023",
    name: "马隆",
    faction: "晋",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "锋械",
            description:
              "出牌阶段开始时，你可以交换两名角色场上各一张装备牌，若其中一名角色为你，你视为对其中另一名角色和其队列使用一张【杀】。",
          },
          {
            name: "锥形",
            description:
              "阵法技，若你为围攻角色，被你围攻的角色对你使用的【杀】伤害-1。你对围攻你的角色使用【杀】伤害+1。",
            label: "阵法技",
          },
        ],
      },
    ],
    expansionPack: "阵",
  },
  JIN017: {
    id: "JIN017",
    name: "王浑",
    faction: "晋",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "献捷",
            description: "锁定技，你对横置的角色使用牌无距离和次数限制。",
            label: "锁定技",
          },
          {
            name: "斁乱",
            description:
              "出牌阶段，你可以移除副将，令你本回合第一次杀死角色的奖惩改为摸三张牌。若如此做，你选择一个势力，本局你使用牌指定该势力的角色为目标时，横置该势力的所有角色。",
          },
        ],
      },
    ],
    expansionPack: "势",
  },
  JIN022: {
    id: "JIN022",
    name: "胡烈&牵弘",
    faction: "晋",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "烈戎",
            description:
              // 出牌阶段开始时，你可以失去1点体力并令你本回合攻击范围至多+X（X为你已损失的体力值），视为使用一张火【杀】<助战→伤害+1>
              "出牌阶段开始时，你可以失去1点体力并令你本回合攻击范围至多+X（X为你已损失的体力值），视为使用一张火【杀】。",
          },
          {
            name: "勤边",
            description:
              "结束阶段，你可以将一张手牌当【逐近弃远】〈助战→执行两项〉对你攻击范围内距离最远的一名角色使用。",
          },
        ],
      },
    ],
    expansionPack: "势",
  },
  JIN020: {
    id: "JIN020",
    name: "荀勖",
    faction: "晋",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "应政",
            description:
              // 与你势力相同的角色出牌阶段限一次，当其使用应变牌结算结束后，该角色可以令你获得此牌，然后若其触发了此牌的应变效果，你可以令其选择是否变更副将（限一次）。
              "每回合限一次，与你势力相同的角色使用应变牌结算结束后，若其触发了此牌的应变效果，该角色可以令你获得此牌，然后你可以令其选择是否变更副将（限一次）。",
            keywords: ["变更"],
          },
          {
            name: "拨律",
            description:
              "出牌阶段限一次，你可以重铸一张手牌并选择一名角色，根据此牌花色修改其使用牌的应变条件，直到其回合结束：黑桃~富甲；红桃~残躯；梅花~助战；方片~空巢。",
          },
        ],
      },
    ],
    expansionPack: "变",
    relatedGenerals: ["贾充"],
  },
  JIN018: {
    id: "JIN018",
    name: "陈骞",
    faction: "晋",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "忽辱",
            description:
              "每回合限一次，当你造成或受到伤害时，你可以同时展示来源和受伤角色各一张手牌，若：花色相同，你获得之；类别相同，此伤害-1。",
          },
          {
            name: "武督",
            description:
              "出牌阶段限一次，你可以弃置一张牌，令一名有手牌的角色选择一项：1.其手牌对所有角色可见直到其回合结束；2.你对其造成1点伤害。",
          },
        ],
      },
    ],
    expansionPack: "变",
    relatedGenerals: ["石苞"],
  },
  JIN021: {
    id: "JIN021",
    name: "卫瓘",
    faction: "晋",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "檄令",
            description:
              "准备阶段，你可以将一张手牌置于武将牌上，称为“状”，你的下回合开始时移去之。每名角色每回合第一次使用或打出与“状”花色相同的牌时，其选择一项：1.弃置一张手牌；2.令你摸一张牌。",
          },
          {
            name: "追诛",
            description:
              "有角色受到致命伤害时，你可以移去“状”，然后对其发起“军令”。若其执行，防止此伤害；若其不执行，你令此伤害翻倍。",
          },
        ],
      },
    ],
    expansionPack: "权",
  },
  JIN024: {
    id: "JIN024",
    name: "贾南风",
    faction: "晋",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "伤败",
            description:
              "当你对其他角色造成伤害后，你可以令其下回合的手牌上限-1。",
          },
          {
            name: "废戮",
            description:
              "当一名角色进入濒死状态时，你可以令其选择一项：1.移除副将并回复1点体力；2.你移除此武将牌，其死亡。每名角色限一次。",
          },
        ],
      },
    ],
    expansionPack: "权",
  },

  // ============================== Faction HAN ==============================
  //
  // =========================================================================

  // 标准包
  HAN001: {
    id: "HAN001",
    name: "刘协",
    faction: "汉",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "天命",
            description:
              "当你成为【杀】的目标后，你可以弃置两张手牌（不足则全弃，无牌则不弃），摸两张牌。",
          },
          {
            name: "密诏",
            description:
              "出牌阶段限一次，你可以将X张牌交给一名其他角色（X为与你不同的势力数），然后令其与另一名其他角色拼点：赢的角色视为对没赢的角色使用一张【杀】。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["伏皇后", "曹节", "董承"],
  },
  HAN002: {
    id: "HAN002",
    name: "刘辩",
    faction: "汉",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "诗怨",
            description:
              "每回合各限一次，当你成为其他角色使用牌的目标后，若其体力值：大于你，你可以摸两张牌；小于等于你，你可以摸一张牌。",
          },
          {
            name: "毒逝",
            description:
              "锁定技，其他角色不能对你使用【桃】；你死亡时，来源获得此技能。",
            label: "锁定技",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["唐姬"],
  },
  HAN004: {
    id: "HAN004",
    name: "张让",
    faction: "汉",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "滔乱",
            description:
              "当你需要使用任意一种的基本牌或普通锦囊牌时，你可以明置此武将牌并视为使用之。当前回合结束时，你选择此牌指定过的至多三名其他角色，令其依次展示并交给你一张手牌，若其中的红色牌多于黑色牌，你暗置此武将牌。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["刘宏", "赵忠"],
  },
  HAN005: {
    id: "HAN005",
    name: "何进",
    faction: "汉",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "谋诛",
            description:
              "出牌阶段限一次，你可以令一名其他角色交给你一张手牌，然后若其手牌数小于你，其视为使用一张【杀】或【决斗】。",
          },
          {
            name: "延祸",
            description:
              "你死亡时，你可以弃置来源至多X张牌（X为你拥有的牌数）。",
            memo: "死亡时在奖惩前面。",
          },
        ],
      },
    ],
    expansionPack: "标准",
  },
  HAN006: {
    id: "HAN006",
    name: "王允",
    faction: "汉",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "连计",
            description:
              "出牌阶段每名角色限一次，你可以交给其他角色一张手牌，令其本回合下次受到的伤害+1。",
          },
          {
            name: "定著",
            description:
              "出牌阶段结束时，你可以选择一名本回合获得过牌的其他角色，其视为使用一张【决斗】。",
          },
        ],
      },
    ],
    relatedGenerals: ["貂蝉"],
    expansionPack: "标准",
  },
  HAN007: {
    id: "HAN007",
    name: "王荣",
    faction: "汉",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "敏思",
            description:
              "出牌阶段限一次，你可以弃置至多三张点数之和为13的牌，展示牌堆顶两倍的牌并获得之，本回合你以此法获得的红桃牌不计入手牌上限。",
          },
          {
            name: "赋颂",
            description:
              "你死亡时，你可以令一名与你势力相同的其他角色获得“敏思”。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["刘宏"],
  },
  HAN008: {
    id: "HAN008",
    name: "伏皇后",
    faction: "汉",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "惴恐",
            description:
              "其他角色的准备阶段，若你已受伤，你可以与其拼点。若你赢，防止其本回合造成伤害；若你没赢，其可以视为对你使用一张【杀】。",
          },
          {
            name: "求援",
            description:
              "当你成为其他角色使用【杀】的目标时，你可以令另一名其他角色也成为目标且优先结算，此【杀】被抵消后对其余目标无效。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["刘协"],
  },
  HAN009: {
    id: "HAN009",
    name: "伏完",
    faction: "汉",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "谋溃",
            description:
              "当你使用【杀】指定目标后，你可以选择一个目标并选择一至两项：1.摸一张牌；2.弃置其一张牌。若你选择了两项，当其抵消此【杀】时，其弃置你一张牌。",
          },
        ],
      },
    ],
    expansionPack: "标准",
  },
  HAN010: {
    id: "HAN010",
    name: "董承",
    faction: "汉",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "承诏",
            description:
              "每名角色的结束阶段，若你本回合获得过至少两张牌，你可以与其攻击范围内的一名角色拼点：赢的角色视为对没赢的角色使用一张无视防具的【杀】。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["刘协"],
  },
  HAN011: {
    id: "HAN011",
    name: "唐姬",
    faction: "汉",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "哀舞",
            description:
              "每回合限一次，当其他角色受到伤害后，你可以弃置任意张牌，然后其可以弃置任意张牌，若你与其共计弃置的牌数达到三张，你与其各回复1点体力。",
          },
          {
            name: "诀别",
            description:
              "与你势力相同的其他角色死亡时，其可以将所有牌交给你或令你摸三张牌。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["刘辩"],
  },
  HAN012: {
    id: "HAN012",
    name: "蔡邕",
    faction: "汉",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "铸典",
            description:
              "当你成为黑色牌的目标后，你可以重铸一张牌，然后若你摸到的牌为黑色的另一种花色，你可以展示之并摸一张牌。",
          },
          {
            name: "博通",
            description:
              "你可以将四张花色各不同的牌当任意一种基本牌使用，然后你可以将这些牌交给其他角色。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["马日磾"],
  },
  HAN013: {
    id: "HAN013",
    name: "皇甫嵩",
    faction: "汉",
    health: 2.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "奋钺",
            description:
              "出牌阶段每势力限一次，你可以与一名角色拼点：若你赢，其不能响应你本回合使用的下一张牌，且若你的拼点牌点数小于9，你视为对其使用一张火【杀】；若你没赢，结束此阶段。",
          },
        ],
      },
    ],
    expansionPack: "标准",
    relatedGenerals: ["朱儁", "卢植"],
  },
  HAN016: {
    id: "HAN016",
    name: "刘宠&骆俊",
    faction: "汉",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "劲弩",
            description:
              "出牌阶段结束时，若你此阶段仅使用过【杀】，或使用的最后三张牌均不为【杀】，你可以视为使用一张【杀】。",
          },
          {
            name: "威屯",
            description:
              "限定技，弃牌阶段开始前，若你的手牌最多，你可以跳过此阶段，并视为对任意名角色使用一张【桃园结义】。",
            label: "限定技",
          },
        ],
      },
    ],
    expansionPack: "标准",
  },
  HAN017: {
    id: "HAN017",
    name: "刘繇",
    faction: "汉",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "戡难",
            description:
              "出牌阶段每势力限一次，你可以与一名角色拼点：赢的角色可以获得没赢的拼点牌并令你本回合使用下张【杀】伤害+1，若你赢，你本回合不能再发动此技能。",
            keywords: ["拼点"],
          },
          {
            name: "逆拒",
            description:
              "锁定技，你拼点没赢后，你本回合拼点牌点数+3，若对方也没赢，你摸一张牌。",
            label: "锁定技",
            keywords: ["拼点"],
          },
        ],
      },
    ],
    expansionPack: "标准",
  },
  HAN018: {
    id: "HAN018",
    name: "蹇硕",
    faction: "汉",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "集兵",
            description:
              "摸牌阶段，你可以多摸X张牌（X为与你势力相同的角色数）。若如此做，回合结束时，若你本回合造成伤害数小于X，你失去1点体力。",
          },
        ],
      },
    ],
    expansionPack: "标准",
  },
  // 君临天下 - 阵
  HAN014: {
    id: "HAN014",
    name: "朱儁",
    faction: "汉",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "摧破",
            description:
              "锁定技，你于一回合内使用第X张牌对目标角色造成的伤害+1（X为此牌名称字数）。",
            label: "锁定技",
          },
          {
            name: "虎翼",
            description:
              "阵法技，若你是围攻角色，当另一名围攻角色对被围攻角色使用【杀】结算后，你可以对被围攻角色使用一张【杀】。",
            label: "阵法技",
          },
        ],
      },
    ],
    expansionPack: "阵",
    relatedGenerals: ["皇甫嵩"],
  },
  HAN015: {
    id: "HAN015",
    name: "卢植",
    faction: "汉",
    health: 2,
    healthSub: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "用良",
            description:
              "出牌阶段限一次，你可以弃置一张牌，视为仅对一名其他角色使用【敕令】（无视目标条件限制）。",
          },
          {
            name: "备寇",
            description:
              "主将技，你计算体力上限减少1个单独的阴阳鱼。当其他角色明置武将牌时，若其已没有暗置的武将牌，你可以令其摸两张牌或弃置两张牌。",
            label: "主将技",
          },
          {
            name: "修体",
            description:
              "副将技，结束阶段，你可以令至多X名角色摸牌至体力上限（X为本回合明置过武将牌的角色数）。",
            label: "副将技",
          },
        ],
      },
    ],
    expansionPack: "阵",
    relatedGenerals: ["皇甫嵩", "蔡邕"],
  },
  HAN022: {
    id: "HAN022",
    name: "刘虞",
    faction: "汉",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "绥抚",
            description:
              "其他角色的结束阶段，若本回合有至少两名小势力角色受到过伤害，你可以令其将所有手牌置于牌堆顶，其视为使用一张【五谷丰登】。",
            memo: "小势力角色的判定，仅看结束阶段该角色是否为小势力角色。死亡角色不计入。",
          },
          {
            name: "安境",
            description:
              "每回合限一次，与你势力相同的角色受到伤害后，你可以令所有与你势力相同的角色各摸一张牌。",
          },
        ],
      },
    ],
    expansionPack: "势",
  },
  HAN019: {
    id: "HAN019",
    name: "吉平",
    faction: "汉",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "烈医",
            description:
              "当你对一名角色造成伤害后，你可以令该角色回复2点体力，然后本回合你不能再造成伤害。",
          },
          {
            name: "蛊毒",
            description:
              "每回合限一次，其他角色回复体力时，你可以防止之。若如此做，当前回合结束时其失去1点体力，然后若其仍存活，你移除此武将牌。",
          },
        ],
      },
    ],
    expansionPack: "势",
  },
  HAN024: {
    id: "HAN024",
    name: "灵雎",
    faction: "汉",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "竭缘",
            description:
              "当你对其他角色造成伤害时，或受到其他角色造成的伤害时，若其体力值大于等于你，你可以弃置一张红色手牌，令此伤害+1或-1。",
          },
          {
            name: "焚心",
            description:
              "当你杀死角色后，你可以变更副将，此次变更额外获得三张其副将牌面势力的备选武将牌。",
            keywords: ["变更"],
          },
        ],
      },
    ],
    expansionPack: "变",
  },
  HAN023: {
    id: "HAN023",
    name: "伍琼&种辑",
    faction: "汉",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "除奸",
            description:
              "其他角色的准备阶段，若其体力值或手牌数为全场最大，你可以令其本回合对你使用【杀】无距离和次数限制，然后当前回合结束时，你对其造成1点伤害。",
          },
          {
            name: "心疾",
            description:
              "锁定技，你处于鏖战状态。当你于濒死状态失救时，你减1点体力上限并回复体力至1点。",
            label: "锁定技",
          },
        ],
      },
    ],
    expansionPack: "变",
  },
  HAN003: {
    id: "HAN003",
    name: "刘宏",
    faction: "汉",
    health: 2,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "鬻爵",
            description:
              "其他角色的出牌阶段开始时，若其已明置的武将牌技能数之和大于你，你可以弃置一张牌，对其发起“军令”：若其执行，其本回合下一次造成伤害后摸两张牌；若其不执行，你暗置其一张武将牌且其本回合不能明置之（若其有暗置的武将牌，则改为令其叠置）。",
          },
        ],
      },
    ],
    expansionPack: "权",
    relatedGenerals: ["王荣", "张让"],
  },
  HAN021: {
    id: "HAN021",
    name: "曹节",
    faction: "汉",
    health: 1.5,
    defaultVersion: "qiaoJian-DIY",
    versions: [
      {
        versionId: "qiaoJian-DIY",
        skills: [
          {
            name: "悬壶",
            description:
              "每名角色的结束阶段，若你本回合有红色牌置入弃牌堆，你可以令一名角色摸一张牌，然后若其手牌数等于体力值，其回复1点体力。",
          },
          {
            name: "守玺",
            description:
              "与你势力相同的角色装备区的牌被另一名角色弃置或获得时，你可以弃置一张与该牌花色相同的手牌，防止之。",
          },
        ],
      },
    ],
    expansionPack: "权",
    relatedGenerals: ["刘协"],
  },

  // =============================== AMBITION ================================
  //
  // =========================================================================

  AM001: {
    id: "AM001",
    name: "司马昭",
    faction: "野心家",
    health: 1.5,
    defaultVersion: "dou-DIY",
    relatedGenerals: ["司马懿"],
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "夙智",
            description:
              "锁定技,你的回合内,你拥有以不效果:1.你的【杀】或【决斗】对其他角色造成伤害+1；2.你使用非转化锦囊牌时无距离限制且摸一张牌；3.其他角色因弃置而失去牌时,你获得其一张牌。若你发动以上效果达到三次,本回合此技能失效,否则回合结束时你获得“反馈”直到下回合开始。",
            standardizedSkill: [
              {
                index: 1,
                description:
                  "当你于回合内因执行【杀】或【决斗】的效果而造成伤害时,若使用者为你且X＜3,你令伤害值+1。",
                timing: "造成伤害时",
              },
              {
                index: 2,
                description:
                  "当非转化的锦囊牌于你的回合内被使用时,若使用者为你且X＜3,你摸一张牌。",
                timing: "牌被使用时",
              },
              {
                index: 3,
                description:
                  "当其他角色的牌于你的回合内因弃置而置入弃牌堆后,若X＜3,你获得其一张牌。",
                timing: "移至目标区域后",
              },
              {
                index: 4,
                description:
                  "若X＜3,你于回合内使用非转化的锦囊牌无距离关系的限制。",
                timing: null,
              },
              {
                index: 5,
                description:
                  "回合结束前,若X＜3,你于你的下个回合开始之前拥有〖反馈〗。(X为你于此回合内发动〖夙智①〗、〖夙智②〗和〖夙智③〗的次数之和) ",
                timing: "回合结束前",
              },
            ],
            label: "锁定技",
          },
          {
            name: "昭心",
            description:
              "当你受到伤害后,你可以展示所有手牌,然后与一名手牌数小于等于你的其他角色交换手牌。",
            standardizedSkill: {
              description:
                "当你受到伤害后,你可展示所有手牌▶你与一名手牌数不大于你的其他角色交换手牌。",
              timing: "受到伤害后",
            },
          },
          {
            name: "反馈",
            description: "当你受到伤害后,你可以获得伤害来源的一张牌。 ",
            isConditional: true,
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "夙智",
            description:
              "明置此武将牌时,或你的回合开始时,将“夙”补至三枚。若你有“夙”,你拥有“反馈”。你可以弃一枚“夙”发动以下效果:①你使用的【杀】或【决斗】造成伤害时,伤害值+1；②你使用非转化锦囊牌时,摸一张牌；③你不因此法而弃置/获得其他角色的牌后,你获得/弃置其一张牌。",
          },
          {
            name: "昭心",
            description:
              "当你受到伤害后,你可以展示所有手牌,然后与一名手牌数小于等于你的其他角色交换手牌。",
            standardizedSkill: {
              description:
                "当你受到伤害后,你可展示所有手牌▶你与一名手牌数不大于你的其他角色交换手牌。",
              timing: "受到伤害后",
            },
          },
          {
            name: "反馈",
            description: "当你受到伤害后,你可以获得伤害来源的一张牌。 ",
            isConditional: true,
          },
        ],
      },
    ],
    expansionPack: "不臣",
  },

  AM002: {
    id: "AM002",
    name: "钟会",
    faction: "野心家",
    health: 2,
    defaultVersion: "half-official-other",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "权计",
            description:
              "每回合各限一次,当你造成或受到伤害后,你楼可以摸一张牌并将一张牌置于武将牌上,称为“权”；你的手牌上限+X(X为“权”数)。",
            standardizedSkill: [
              {
                index: 1,
                description:
                  "当你受到伤害后,若你于当前回合内未发动过此技能,你可摸一张牌▶你将一张牌置于武将牌上(称为“权”)。",
                timing: "受到伤害后",
              },
              {
                index: 2,
                description:
                  "当你造成伤害后,若你于当前回合内未发动过此技能,你可摸一张牌▶你将一张牌置于武将牌上(称为“权”)。",
                timing: "造成伤害后",
              },
              {
                index: 3,
                description: "你的手牌上限+X(X为“权”数)。",
                timing: null,
              },
            ],
          },
          {
            name: "排异",
            description:
              "出牌阶段限一次,你可移去一张“权”,令-名角色摸X张牌(X为“权”数且至多为7)若其手牌数大于你,你对其造成1点伤害。",
            standardizedSkill: {
              description:
                "出牌阶段限一次,你可将一张“权”置入弃牌堆并选择一名角色▶其摸X张牌(X=min{“权”数,7})。若其手牌数大于你,你对其造成1点普通伤害。 ",
              timing: "出牌阶段的空闲时间点",
            },
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "权计",
            description:
              "每回合各限一次,当你造成或受到伤害后,你可以摸X张牌,然后你将等量的牌置于武将牌上,称为“权”；你的手牌上限+X(X为“权”数,至少为1,至多为你的体力上限)。",
          },
          {
            name: "排异",
            description:
              "出牌阶段限一次,你可以对一名角色发起一次“军令”,若其执行,你摸X张牌并移去一张“权”；若其不执行,你可以对与其势力相同的至多X名角色各造成1点伤害并移去等量的“权”(X为“权”数,至少为1,至多为你的体力上限)。",
          },
        ],
      },
      {
        versionId: "half-official-other",
        skills: [
          {
            name: "权计",
            description:
              "当你造成或受到1点伤害后,你可以摸一张牌,然后弃置一张牌,若X小于你的体力上限,将此牌置于武将牌上,称为“权”；你的手牌上限+X(X为“权”数)。",
          },
          {
            name: "排异",
            description:
              "出牌阶段限一次,你可对一名角色发起“军令”,若其执行,你摸X张牌,移去一张“权”；若其不执行,你可以对与其势力相同的至多X名角色各造成1点伤害,移去等量的“权”(X为“权”数)。",
          },
        ],
      },
    ],
    expansionPack: "不臣",
  },

  AM003: {
    id: "AM003",
    name: "孙綝",
    faction: "野心家",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "嗜戮",
            description:
              "当一名角色死亡时,你可将其所有武将牌置于你的武将牌旁,称为“戮”,若你为来源,你从剩余武将牌堆顶额外获得两张“戳”。准备阶段,你可弃置至多X张牌(X为“戮”数),摸等量的牌。",
            standardizedSkill: [
              {
                index: 1,
                description:
                  "当一名角色死亡后,你可将其所有武将牌置于你的武将牌上(均称为“戮”)▶若其是你杀死的,你随机将武将牌里的两张武将牌置于你的武将牌上(均称为“戮”)。",
                timing: "死亡后",
              },
              {
                index: 2,
                description:
                  "准备阶段开始时,若你有“戮”,你可弃置至多X张牌(X为“戮”数)▶你摸等量的牌。",
                timing: "准备阶段开始时",
              },
            ],
          },
          {
            name: "凶虐",
            description:
              "出牌阶段开始时,你可以移去一张“戮”令你本回合对此“戮”势力角色获得下列效果中的一项:1.对其造成伤害时,令此伤害+1；2.对其造成伤害时,你获得其一张牌；3.对其使用牌无次数限制。出牌阶段结束时,你可移去两张“戮”,然后直到你的下回合开始,其他角色对你造成的伤害-1。",
            standardizedSkill: [
              {
                index: 1,
                description:
                  "出牌阶段开始时,你可将一张“戮”置入武将牌堆▶你选择:1.(→)当你于此阶段内对与你以此法置入武将牌堆的“戮”代表的武将势力相同的角色造成伤害时,你令伤害值+1；2.(→)当你于此阶段内对与你以此法置入武将牌堆的“戮”代表的武将势力相同的角色造成伤害时,你获得其一张牌；3.你于此阶段内对与你以此法置入武将牌堆的“戮”代表的武将势力相同的角色使用牌无次数限制。",
                timing: "出牌阶段开始时",
              },
              {
                index: 2,
                description:
                  "出牌阶段结束时,你可将两张“戮”置入武将牌堆▶(→)当你于你的下个回合开始之前受到其他角色造成的伤害时,你令伤害值-1。 ",
                timing: "出牌阶段结束时",
              },
            ],
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "嗜戮",
            description:
              "锁定技,出牌阶段结束时,若你的副将本回合未发动非锁定技,你变更副将为“戮”没有的势力；以此法被变更的副将改为置于你的武将牌旁,称为“戮”；准备阶段,你弃置X张手牌(不足全弃,无牌不弃),摸X张牌(X为“戮”的势力数)",
            keywords: ["变更"],
          },
          {
            name: "凶虐",
            description:
              "锁定技,当你使用【杀】造成伤害或受到【杀】造成的伤害时,若受伤角色或伤害来源与“戮”的势力相同,此伤害+1,与“戮”势力相同的角色不因【杀】对你造成伤害时,此伤害-1。",
            label: "锁定技",
          },
        ],
      },
      {
        versionId: "half-official-other",
        skills: [
          {
            name: "嗜戮",
            description:
              "准备阶段,你可以变更副将(三张备选武将牌势力各不同),将未被选择的两张和被变更的副将置于此武将牌上,称为“戮”。出牌阶段限一次,你可以弃置所有手牌(无牌不弃),然后摸X张牌(X为“戮”的势力数,至多为你的体力上限)。",
            keywords: ["变更"],
          },
          {
            name: "凶虐",
            description:
              "锁定技,当你使用【杀】造成伤害或受到【杀】造成的伤害时,若受伤角色或伤害来源与“戮”的势力相同,此伤害+1,与“戮”势力相同的角色不因【杀】对你造成伤害时,此伤害-1。",
            label: "锁定技",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "嗜戮",
            description:
              "你被变更的副将置于此武将牌旁,称为“戮”。回合结束时,若你的副将牌暗置,你选择此牌不包含的一个势力,变更副将为此势力。准备阶段,你可以执行至多两项:①暗置副将；②将手牌摸至X张(X为“戮”包含的势力数)。",
            keywords: ["变更"],
          },
          {
            name: "凶虐",
            description:
              "锁定技,当你造成/受到渠道为【杀】的伤害时,若“戮”包含受伤角色/来源的势力,此伤害+1。当你受到渠道不为【杀】的伤害时,若“戮”包含来源的势力,此伤害-1。",
            label: "锁定技",
          },
        ],
      },
    ],
    expansionPack: "不臣",
  },

  AM004: {
    id: "AM004",
    name: "公孙渊",
    faction: "野心家",
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "怀异",
            description:
              "出牌阶段限一次,你可以展示所有手牌,若其中包含两种颜色,你弃置其中一种颜色的牌,然后获得至多等同弃置牌数的其他角色各一张牌,将以此法获得的装备牌置于武将牌上,称为“异”。你可以将“异”如手牌般使用或打出。",
          },
          {
            name: "恣睢",
            description:
              "锁定技,摸牌阶段,你额外摸X张牌；结束阶段,若X大于体力上限(X为“异”数),你死亡。",
            label: "锁定技",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "怀异",
            description:
              "出牌阶段限一次,你可以弃置一个区域的所有牌或移除副将,令所有大势力角色依次交给你至少一张牌,然后你选择交给你牌数较少的势力,移除此势力一名角色的副将。",
            keywords: ["移除"],
          },
          {
            name: "恣睢",
            description:
              "锁定技,被你移除的副将改为置于你武将牌旁,称为“异”；摸牌阶段,你多摸X张牌,结束阶段若X大于体力上限,你死亡(X为“异”数)。",
            label: "锁定技",
            keywords: ["移除"],
          },
        ],
      },
      {
        versionId: "half-official-other",
        skills: [
          {
            name: "怀异",
            description:
              "出牌阶段限一次,你可以展示所有手牌,并弃置一种颜色的所有牌,然后令至多等量名角色依次交给你至少一张牌,结算完成后,你令其中一名交给你牌数最少且已确定势力的角色移除副将。",
            keywords: ["移除"],
          },
          {
            name: "恣睢",
            description:
              "锁定技,被你移除的副将改为置于你武将牌旁,称为“异”；摸牌阶段,你多摸X张牌；结束阶段,若X大于体力上限,你死亡(X为“异”数)。",
            label: "锁定技",
            keywords: ["移除"],
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "怀异",
            description:
              "出牌阶段限一次,你可以对所有其他角色发起	“议事”,你获得所有与结果颜色相同的议事牌,展示手牌并弃置另一种颜色的所有手牌。结算后,若你以此法弃置的牌数不小于获得的牌数,你可以令一名没有被你获得议事牌的大势力角色移除副将。",
            keywords: ["议事", "移除"],
          },
          {
            name: "恣睢",
            description:
              "锁定技,被你移除的副将置于此武将牌旁,称为“异”。摸牌阶段,你多摸X张牌。结束阶段,若X大于体力上限,你死亡(X为“异”数)。",
            label: "锁定技",
            keywords: ["移除"],
          },
        ],
      },
    ],
    expansionPack: "不臣",
  },

  // ================================ Dou DIY ================================
  //
  // =========================================================================

  DOU005: {
    id: "DOU005",
    name: "一到雪季就不见",
    faction: ["魏", "蜀", "吴", "群"],
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "速降",
            description:
              "锁定技,你沿逆时针计算至其他角色的距离-1,其他角色沿逆时针计算至你的距离+1。",
            label: "锁定技",
          },
          {
            name: "立刃",
            description:
              "出牌阶段开始时,你可以横置或重置。你横置／重置后,可以将“板”标记移动到你上家的左边／下家的右边。在距离和座次的计算中,你视为位于“板”的位置（回合顺序保持不变）。",
            standardizedSkill: [
              {
                index: 1,
                description: "出牌阶段开始时,你可以横置或重置。",
                timing: "出牌阶段开始时",
              },
              {
                index: 2,
                description:
                  "你横置后/重置后,(若场上没有“板”,你获得“板”标记)你可以将“板”置于你上家的左边/下家的右边。",
                timing: ["横置后", "重置后"],
              },
              {
                index: 3,
                description:
                  "若场上有“板”,在距离、座次和阵法的计算中,你视为处于“板”所在的位置。",
                timing: null,
              },
            ],
          },
          {
            name: "嗜雪",
            description:
              "锁定技,攻击范围内没有你的角色对你造成的伤害和你对其造成的伤害均视为冰冻伤害。你受到的冰冻伤害由你决定是否弃置两张牌以取消之。",
            standardizedSkill: [
              {
                index: 1,
                description:
                  "当你对一名角色造成的伤害结算开始前,或一名角色对你造成的伤害结算开始前,若其攻击范围内没有你,（你令）此伤害改为冰冻伤害。",
                timing: "伤害结算开始前",
              },
              {
                index: 2,
                description:
                  "一名角色因对你造成非传导的冰冻伤害而决定是否弃置你两张牌并取消此冰冻伤害时,改为由你选择是否弃置两张牌以取消此伤害。你受到传导的冰冻伤害时,可以弃置两张牌取消此伤害。",
                timing: "DIY时机",
              },
            ],
            label: "锁定技",
            keywords: ["冰冻伤害"],
            memo: "伤害来源选择是否弃置你的两张牌并取消此冰冻伤害时,改为你决定是否（由你）弃置两张牌；你受到传导的冰冻伤害时,可以弃置两张牌取消此伤害。",
          },
        ],
      },
    ],
    relatedGenerals: ["陆逊"],
    expansionPack: "DIY",
  },

  DOU009: {
    id: "DOU009",
    name: "组局不易,群主叹气",
    faction: ["魏", "蜀", "吴", "群"],
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "抬杠",
            description:
              "当你判定/拼点时,你可以卜算2,然后你可以将牌堆底的一张牌当作此判定结果/拼点牌。",
            standardizedSkill: [
              {
                index: 1,
                description:
                  "当你判定时,你可以卜算2▶你可以将牌堆底的一张牌置入处理区来作为判定牌。",

                timing: "判定时",
              },
              {
                index: 2,
                description:
                  "当一名角色进行拼点时,若你是拼点的发起者或拼点的目标,你可以卜算2▶你选择拼点的牌的范围为你手牌区里或牌堆底的一张牌。",

                timing: "进行拼点时",
              },
            ],
            keywords: ["拼点"],
          },
          // {
          //   name: "牌主",
          //   description:
          //     "每项限一次:1.你可以视为使用任意普通锦囊牌；2.你可以视为使用野心家标记；3.发动另一张武将牌的触发类技能时,可以改为发动任意同时机的无标签技能。执行过全部选项后,“组局”视为未发动过。",
          //   standardizedSkill: [
          //     {
          //
          //       index: 1,
          //       description:
          //         "当你需要使用任意普通锦囊牌时,若你没有发动过〖牌主①〗,你可使用无对应实体牌的此锦囊▷若你发动过〖牌主②〗和〖牌主③〗,且你发动过〖约局〗,你令〖约局〗的发动次数上限+1。",
          //
          //       timing: "需要使用牌时",
          //     },
          //     {
          //
          //       index: 2,
          //       description:
          //         "当你需要使用阴阳鱼标记、珠联璧合标记或先驱标记时,若你没有发动过〖牌主②〗,你可以视为使用此标记▷若你发动过〖牌主①〗和〖牌主③〗,且你发动过〖约局〗,你令〖约局〗的发动次数上限+1。",
          //
          //       timing: "DIY时机",
          //     },
          //     {
          //
          //       index: 3,
          //       description:
          //         "当你另一张武将牌上的一个触发类技能的时机被触发时,若你满足此触发类技能的发动条件,且你没有发动过〖牌主③〗,你可以令此触发类技能于此时机内失效▶你可以发动任意武将的没有技能标签的在此时机触发的技能▷若你发动过〖牌主②〗和〖牌主③〗,且你发动过〖约局〗,你令〖约局〗的发动次数上限+1。",
          //
          //       timing: "DIY时机",
          //     },
          //   ],
          // },
          {
            name: "襄举",
            description:
              "准备阶段,你可以对所有其他角色发起议事,若结果为：红,你跳过摸牌阶段,视为对你和所有意见为红的角色使用【联军盛宴】；黑,出牌阶段开始时,你对所有角色造成1点冰冻伤害,你视为对受到此伤害的角色使用【调虎离山】。空巢或残躯：以此法视为使用的牌不可被响应。",
            keywords: ["议事", "冰冻伤害"],
            standardizedSkill: {
              description:
                // 用“议事”关键字描述
                "准备阶段,你可以令所有有手牌的其他角色同时展示一张手牌▶若以此法展示的红色牌多于黑色牌,你跳过此回合的下一个摸牌阶段,你对你和所有以此法展示红色牌的其他角色使用一张无对应实体牌的【联军盛宴】(你因执行此牌的效果而摸牌或回复的总数为此牌的目标角色数-1),若你的体力值不大于1或手牌数为0,此【联军盛宴】不可被响应。若以此法展示的黑色牌多于红色牌,此回合的下一个出牌阶段开始时,你对所有角色造成1点冰冻伤害,然后你视为对所有此阶段受到过伤害的角色使用【调虎离山】,若你的体力值不大于1或手牌数为0,此【调虎离山】不可被响应。",
              timing: "准备阶段",
            },
          },
        ],
      },
    ],
    relatedGenerals: ["夏侯霸"],
    expansionPack: "DIY",
  },

  DOU010: {
    id: "DOU010",
    name: "“妈的,最烦磨叽的人”",
    faction: ["魏", "蜀", "吴", "群"],
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "速战",
            description:
              "你于出牌阶段内使用的前三张牌,若为:基本牌,无视距离且无次数限制；装备牌,使用时摸一张牌；锦囊牌,使用时可弃置一名目标角色一张牌。",
          },

          {
            name: "速决",
            description:
              "锁定技,你于出牌阶段内使用至少三张牌后,你使用基本牌或普通锦囊牌时须弃置一张手牌。杀死你的角色获得此技能。",
            label: "锁定技",
          },
        ],
      },
    ],
    relatedGenerals: ["李典"],
    expansionPack: "DIY",
  },

  DOU011: {
    id: "DOU011",
    name: "狼人杀高端玩家",
    faction: ["魏", "蜀", "吴", "群"],
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "倒钩",
            description:
              "你或与你势力相同的角色受到对方造成的伤害后,你可以令伤害来源摸一张牌,或受伤角色摸两张牌。你与其击杀对方的奖惩均改为摸两张牌。",
            standardizedSkill: [
              {
                index: 1,
                description:
                  "你受到伤害后,若伤害来源与你势力相同,你可以摸两张牌或令其摸一张牌。一名与你势力相同的其他角色受到伤害后,若伤害来源是你,你可以摸一张牌或令其摸两张牌。",

                timing: "受到伤害后",
              },
              {
                index: 2,
                description:
                  "你/与你势力相同的角色死亡时,若杀死其的角色是与你势力相同的角色/你,奖惩改为“摸两张牌”。",
                timing: "死亡时",
              },
            ],
          },
          {
            name: "悍跳",
            description:
              "主将技,转换技,阳:回合开始时或明置此武将牌时,若你未确定势力,你可以声明任意势力并视为此势力角色(直到你死亡),然后移除、变更副将。阴:若其他角色的势力均与你相同或均与你不同,你以暗置状态恢复初始副将,你视为未确定势力。",
            label: ["主将技", "转换技"],
            standardizedSkill: [
              {
                index: 1,
                description:
                  "回合开始时或你明置此武将牌时,若你发动过〖悍跳①〗和〖悍跳②〗的次数之和为偶数,且你未确定势力,你可以不公开你的真实势力,你声明任意未以此法声明过的势力▶你视为此势力角色(直到你即将进行死亡结算),你变更副将(以此法进行的变更在一局游戏内无次数限制,以此法失去的副将牌不需要翻至正面朝上,改为置于此武将牌下方,被称为“初始副将”)。",
                timing: ["回合开始时", "明置武将牌时"],
              },
              {
                index: 2,
                description:
                  "任意势力的角色数变化后,若你发动过〖悍跳①〗和〖悍跳②〗的次数之和为奇数,且其他角色的势力均与你相同或均与你不同,且你的副将的武将牌没有成为过“初始副将”,你将你的副将变更为“初始副将”(以此法作为你的副将的武将牌处于暗置状态),你视为未确定势力,你失去〖悍跳②〗并获得〖悍跳①〗。",
                timing: "DIY时机",
              },
            ],
            keywords: ["变更"],
          },
        ],
      },
    ],
    relatedGenerals: ["孙策"],
    expansionPack: "DIY",
  },

  DOU012: {
    id: "DOU012",
    name: "随便打牌的整活选手",
    faction: ["魏", "蜀", "吴", "群"],
    health: 2,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "随适",
            description:
              "锁定技,当其它角色因牌或技能的效果令你执行描述为“除非/需…否则…”“选择一项:…”的动作时,或者其令你选择是否执行军令时,或其对你发起议事时,其指定其中一个选项。若你选择该选项,结算完成后你摸两张牌。",
            label: "锁定技",
          },
          {
            name: "驰援",
            description:
              "限定技,回合结束时,你可以叠置,然后令一名其他角色选择:1.摸两张牌,然后执行一个出牌阶段；2.执行一个摸牌阶段,然后使用至多两张牌。纵横:描述中的“两张牌”均改为“一张牌”。",
            label: ["限定技"],
            keywords: ["纵横"],
          },
          {
            name: "驰援[纵横]",
            description:
              "回合结束时,你可以叠置,然后令一名其他角色选择:1.摸一张牌,然后执行一个出牌阶段；2.执行一个摸牌阶段,然后可以使用一张牌。",
            isConditional: true,
          },
        ],
      },
    ],
    relatedGenerals: ["贾诩"],
    expansionPack: "DIY",
  },

  DOU013: {
    id: "DOU013",
    name: "单走一个6",
    faction: ["魏", "蜀", "吴", "群"],
    health: 2,
    healthSub: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "言六",
            description:
              "你可以将点数为6的牌当任意牌使用或打出以响应其他角色使用的牌。一名角色使用或打出牌响应另一名角色使用的牌后,若你将二者的点数计算得到6,你可以令响应者将手牌摸至使用者的手牌数（至多为6）。",
            memo: "“计算”时必须且仅可使用两张牌的点数各一次,仅允许进行四则运算、开方 √ 和阶乘 ! 。例如:(8 - 5)! = 6 是允许的；3和6拼成36再开方是不允许的。",
          },
          {
            name: "阴阳",
            description:
              "副将技(-0.5)，当一名角色执行“将手牌摸至X”的操作时,你可将此操作改为“摸X张牌,然后将手牌弃至X张”。",
            label: "副将技",
          },
        ],
      },
    ],
    relatedGenerals: ["荀彧"],
    expansionPack: "DIY",
  },

  DOU016: {
    id: "DOU016",
    name: "一杀一闪想到烧绳",
    faction: ["魏", "蜀", "吴", "汉"],
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "长考",
            description:
              "准备阶段,你可以摸一张牌,弃置一张牌,此回合每种花色限一次,你使用牌时,若与上次以此法被弃置的牌花色相同,重复划线流程。",
          },
          {
            name: "复盘",
            description:
              "每个回合结束时,你可以弃置X张牌（X为你本回合发动此技能的次数）,然后你视为将此回合其他角色对你使用过的第X张基本牌或普通锦囊牌对一名合法目标角色使用。",
          },
        ],
      },
    ],
    relatedGenerals: ["黄月英"],
    expansionPack: "DIY",
  },
};
