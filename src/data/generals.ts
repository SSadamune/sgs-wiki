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
            description: "当你受到伤害后，你可以获得对你造成伤害的牌。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "奸雄",
            description:
              "当你受到伤害后，你可以选择一项：1.获得造成此伤害的牌；2.摸一张牌。",
          },
        ],
      },
      {
        versionId: "fan-made",
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
        versionId: "official",
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
        versionId: "official",
        skills: [
          {
            name: "刚烈",
            description:
              "当你受到伤害后，你可以判定，若为：红色，你对伤害来源造成1点伤害；黑色，你弃置伤害来源的一张牌。",
          },
        ],
      },
      {
        versionId: "official-mobile",
        skills: [
          {
            name: "刚烈",
            description:
              "当你受到1点伤害后，你可以判定，若为：红色，你对伤害来源造成1点伤害；黑色，你弃置伤害来源的一张牌。",
          },
        ],
      },
      {
        versionId: "official-oversea",
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
        versionId: "fan-made",
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
        versionId: "official",
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
        versionId: "official",
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
        versionId: "official",
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
        versionId: "official-online",
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
        versionId: "official",
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
        versionId: "official",
        skills: [
          {
            name: "神速",
            description:
              "你可以选择以下任意项：1.跳过判定阶段和摸牌阶段；2.跳过出牌阶段并弃置一张装备牌；3.跳过弃牌阶段并失去1点体力。每执行一项，你视为使用一张无距离限制的【杀】。",
          },
        ],
      },
      {
        versionId: "half-official",
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
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "巧变",
            description:
              "你可以弃置一张手牌并跳过你的一个阶段（准备阶段和结束阶段除外），若你以此法跳过摸牌阶段，你可以获得至多两名其他角色各一张手牌；若你以此法跳过出牌阶段，你可以移动场上的一张牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "巧变",
            description:
              "你可以弃置一张手牌并跳过你的一个阶段（准备阶段和结束阶段除外）。若以此法：弃置装备牌，你可以使用之；跳过摸牌阶段，你可以获得至多两名角色各一张手牌；跳过出牌阶段，你可以移动场上的一张牌。",
          },
        ],
        relatedGenerals: ["郭淮"],
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
              "出牌阶段，你可以将一张黑色基本牌或装备牌当一张无视距离的【兵粮寸断】使用。若你对距离大于2的角色使用【兵粮寸断】，则本回合不能再发动“断粮”。",
          },
        ],
      },
      {
        versionId: "official-online",
        skills: [
          {
            name: "断粮",
            description:
              "出牌阶段，你可以将一张黑色基本牌或装备牌当一张无视距离的【兵粮寸断】使用。你可以对距离2以内的其他角色使用【兵粮寸断】。",
          },
        ],
      },
      {
        versionId: "fan-made",
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
        versionId: "official",
        skills: [
          {
            name: "强袭",
            description:
              "出牌阶段限一次，你可以失去1点体力或弃置一张武器牌，对一名其他角色造成1点伤害。",
          },
        ],
      },
      {
        versionId: "half-official",
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
        versionId: "fan-made",
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
        versionId: "official",
        skills: [
          {
            name: "骁果",
            description:
              "其他角色的结束阶段，你可以弃置一张基本牌，令其选择一项：1.弃置一张装备牌；2.受到你造成的1点伤害。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "骁果",
            description:
              "其他角色的准备阶段，你可以弃置任意张基本牌，然后弃置其装备区等量的牌（不足全弃，无牌不弃），若你以此法弃置的基本牌多于装备牌，你摸一张牌并对其造成1点伤害。",
          },
        ],
      },
      {
        versionId: "official-oversea",
        skills: [
          {
            name: "骁果",
            description:
              "其他角色的结束阶段，你可以弃置一张基本牌，令其选择一项：1.弃置一张装备牌，令你摸一张牌；2.受到你造成的1点伤害。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
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

  WEI018: {
    id: "WEI018",
    name: "曹洪",
    faction: "魏",
    health: 2,
    defaultVersion: "half-official",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "护援",
            description:
              "结束阶段，你可以选择一名其他角色并选择一项：1.交给其一张非装备牌；2.将一张装备牌置于其装备区，然后你可以弃置场上一张牌。",
          },
          {
            name: "鹤翼",
            description:
              "阵法技，与你处于同一队列的角色均拥有“飞影”（锁定技，其他角色计算与你的距离+1）。",
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
              "你的回合内，当一张装备牌置入一名角色的装备区后，你可以弃置其距离1的另一名角色区域内的一张牌；结束阶段，你可以将一张装备牌置于一名角色的装备区。",
          },
          {
            name: "鹤翼",
            description:
              "阵法技，与你处于同一队列的角色均拥有“飞影”（锁定技，其他角色计算与你的距离+1）。",
            label: "阵法技",
          },
        ],
      },
    ],
    relatedGenerals: ["曹仁"],
    expansionPack: "阵",
  },

  // TODO: others
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
            name: "横江",
            description:
              "当你受到1点伤害后，若当前回合角色的手牌上限大于0，你可以令其本回合手牌上限-1。此回合结束时，若其未于弃牌阶段弃置牌，你摸X张牌（X为你本回合发动此技能的次数）。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "挽危",
            description:
              "当确定你被其他角色获得的牌时，你可以改为自己选择失去的牌。",
            standardizedSkill: {
              description:
                "当确定你因其他角色的获得而移动的牌时，若你的能被该角色获得的牌数大于X，你可将此次移动的牌改为你的X张牌（X为此次移动的牌数）。",
              type: "Trigger",
              timing: "确定移动的牌时",
            },
          },
          {
            name: "约俭",
            description:
              "每回合限一次，你或当前回合角色因弃置而失去牌后，若失去牌的角色的手牌数不大于你，你可以令其获得其中的一张。",
            standardizedSkill: {
              description:
                "每回合限一次，一名角色的牌因弃置而移至弃牌堆后，若该角色：为你，你可以获得此次被移动的牌中的一张；为当前回合角色，且其手牌数不大于你，你可以令其选择此次被移动的牌中的一张，其获得之。",
              type: "Trigger",
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
              "当你受到1点伤害后，若当前回合角色的手牌上限大于0，你可以令其本回合手牌上限-1。此回合结束时，若其未于弃牌阶段弃置牌，你摸X张牌（X为你本回合发动此技能的次数）。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
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
              "主将技，锁定技，你计算体力上限减少1个单独的阴阳鱼。当一名角色因杀死与你势力相同的其他角色而摸牌时，其少摸一张牌，然后你摸一张牌。",
            label: "主将技",
          },
          {
            name: "精策",
            description:
              "回合结束时，若于本回合置入弃牌堆的牌数大于等于X，你可以执行一个额外的摸牌阶段，若你本回合使用过的牌数大于等于X，你可以执行一个额外的出牌阶段（X为你的体力值）。",
          },
        ],
      },
      {
        versionId: "zixing-DIY",
        skills: [
          {
            name: "精策",
            description:
              "结束阶段，若你本回合使用的牌数：大于体力值，你可以摸一张牌；等于体力值，你可以摸两张牌。",
          },
          {
            name: "疲攻",
            description:
              "主将技，你计算体力上限减少1个单独的阴阳鱼。每回合限一次，当你使用基本牌时，你可以指定一名角色，与其势力相同的角色各交给其一张手牌。",
            label: "主将技",
          },
          {
            name: "屏御",
            description:
              "副将技，与你势力相同的其他角色需要使用【闪】时，其可以令你选择是否打出之，视为由其使用。",
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
              "当你于你的一个出牌阶段内使用第X张牌后（X为你当前体力值），你可以令一名与你势力不同的角色执行军令，若其不执行，你摸两张牌。",
          },
        ],
        relatedGenerals: ["张郃"],
        expansionPack: "阳",
      },
      {
        versionId: "dou-DIY",
        health: 2,
        skills: [
          {
            name: "精策",
            description:
              "回合结束时，若你于本回合内使用过的牌数：大于体力值，你可以选择以下一项；等于体力值，你可以依次执行两项：1.获得一个额外的摸牌阶段；2.获得一个额外的出牌阶段。",
          },
        ],
      },
    ],
    relatedGenerals: ["张郃", "夏侯渊"],
    expansionPack: "SP",
  },

  WEI048: {
    id: ["WEI048", "QUN048"],
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
              "当你受到1点伤害后，你可令一名与你势力相同的角色摸一张牌；当你对其他角色造成伤害后，你令一名与其势力相同的角色摸一张牌。",
          },
          {
            name: "米道",
            description:
              "与你势力相同的角色每回合限一次，其使用【杀】或伤害类锦囊牌指定目标时，其可以交给你一张手牌，你声明此牌的花色和伤害属性。",
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
              "结束阶段，若你没有“米”，你可以摸两张牌并将两张牌置于武将牌上，称为“米”。当判定牌生效前，你可以打出一张“米”替换之。",
          },
          {
            name: "布施",
            description:
              "回合结束时，你获得等同于体力值的“义舍”标记。其他角色的准备阶段，你可以移去1枚“义舍”，交给其一张牌并摸两张牌。准备阶段，你弃置X张牌（X为角色数-你的体力值-2）。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "米道",
            description:
              "每个回合结束时，若你没有“米”，你摸两张牌并将两张牌置于武将牌上，称为“米”。当判定结果确定前，你可以打出一张“米”代替之。",
          },
          {
            name: "鬼卒",
            description:
              "与你势力相同的角色出牌阶段限一次，使用伤害类牌指定目标时，可以将一张手牌与一张“米”交换，令你声明此牌的花色和伤害属性。",
            keywords: ["伤害类牌"],
          },
          {
            name: "布施",
            description:
              "你造成伤害后或受到1点伤害后，受到伤害的角色可以获得一张“米”。",
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
              "当你于回合内使用非装备牌时，你可以弃置不为此牌目标的一名角色的一张牌，令其摸一张牌，若你使用的牌带有强化且与弃置的牌花色相同，此牌无视条件触强化效果。",
          },
          {
            name: "进趋",
            description:
              "结束阶段，你可以摸两张牌，然后将手牌弃置至X张（X为本回合你发动“奇制”的次数）。",
          },
        ],
      },
      {
        versionId: "zixing-DIY",
        generalId: ["WEI053", "JIN053"],
        skills: [
          {
            name: "奇制",
            description:
              "每回合限四次，当你使用基本牌或锦囊牌指定角色为目标后，你可以弃置不为此牌目标的一名角色的一张牌，然后其摸一张牌。",
          },
          {
            name: "进趋",
            description:
              "结束阶段，你可以摸两张牌，然后将手牌弃置至X张（X为本回合你发动“奇制”的次数）。",
          },
        ],
        faction: ["魏", "晋"],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "奇制",
            description:
              "每回合限五次，当你于回合内使用非装备牌时，你可以弃置不为此牌目标的角色一张牌，令其摸一张牌。若你使用的牌有应变强化且与弃置的牌花色相同，此牌无条件触发强化。",
          },
          {
            name: "进趋",
            description:
              "结束阶段，你可以摸两张牌，然后将手牌弃置至X张（X为本回合你发动“奇制”的次数）。",
          },
        ],
      },
    ],
    expansionPack: "SP",
  },

  // TODO: other WEI

  WEI084: {
    id: "WEI084",
    name: "华歆",
    faction: "魏",
    health: 1.5,
    defaultVersion: "half-official",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "望归",
            description:
              "每回合限一次，当你造成或受到伤害后，若你：仅明置此武将牌，你可以对一名与你势力不同的角色造成1点伤害；武将牌均明置，你可以令与你势力相同的角色各摸一张牌。",
          },
          {
            name: "息兵",
            description:
              "手牌数小于体力值的其他角色于出牌阶段使用首张黑色【杀】或黑色普通锦囊牌指定唯一目标后，你可以令其将手牌摸至体力值（至多摸至五张）且本回合不能使用手牌，若你于其武将牌均明置，你可以暗置你与其各一张武将牌，本回合不能再明置。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "望归",
            description:
              "每回合限一次，当你造成或受到伤害后，若你：仅明置此武将牌，你可以对一名与你势力不同的角色造成1点伤害；武将牌均明置，你可以令与你势力相同的角色各摸一张牌。",
            standardizedSkill: {
              description:
                "当你造成或受到伤害后，若你于当前回合内未发动过此技能且此武将牌处于明置状态且你的另一张武将牌：处于明置状态，你可令与你势力相同的角色各摸一张牌；处于暗置状态，你可对与你势力不同的一名角色造成1点普通伤害。",
              type: "Trigger",
              timing: ["造成伤害后", "受到伤害后"],
            },
            memo: "不能通过发动“望归”明置此武将牌（暗置时不满足任何发动条件）。",
          },
          {
            name: "息兵",
            description:
              "其他角色于出牌阶段使用首张黑色【杀】或黑色普通锦囊牌指定唯一目标后，你可以令其将手牌摸至体力值且本回合不能使用手牌。若你与其武将牌均明置，你可以暗置你与其各一张武将牌且本回合不能再明置之。",
            standardizedSkill: {
              description:
                "当黑色【杀】或黑色普通锦囊牌于其他角色的出牌阶段内指定目标后，若使用者为该角色且其于此回合内于使用此牌之前未使用过黑色【杀】或黑色普通锦囊牌且目标对应的角色数为1，你可发动此技能▶{若其手牌数小于体力值，其将手牌补至X张（X为其体力值），其于此回合内不能使用对应的实体牌均是其手牌区的牌的牌}。若你与其所有武将牌均处于明置状态，你可暗置你的一张不为君主武将牌且不为士兵牌的武将牌▷其暗置你选择的其一张不为君主武将牌且不为士兵牌的武将牌，你与其于此回合内不能明置以此法暗置的武将牌。 ",
              type: "Trigger",
              timing: ["牌指定目标后"],
            },
            memo: "如果不满足‘手牌小于体力值’，则无法执行补牌和封出牌的效果；但如果双方均已明置武将牌，仍然可以执行暗置武将牌的操作。",
          },
        ],
      },
    ],
    expansionPack: "纵横捭阖",
  },

  // others

  // ============================== Faction SHU ==============================
  //
  // =========================================================================

  // TODO: other SHU
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
              "锁定技，【南蛮入侵】对你无效；当其他角色使用的【南蛮入侵】结算结束后，你获得之。",
            label: "锁定技",
          },
          {
            name: "烈刃",
            description:
              "当你使用【杀】对一个目标造成伤害后，你可以与该角色拼点，若你赢，你获得其一张牌。",
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
              "锁定技，【南蛮入侵】对你无效。【南蛮入侵】在其他角色的回合内进入弃牌堆后，你获得之。",
            label: "锁定技",
          },
          {
            name: "烈刃",
            description:
              "你使用的【杀】对目标造成伤害后，你可以与其拼点，若你：赢，你获得其一张牌；没赢，你与其获得对方拼点的牌。",
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
            description: "当你回复1点体力后，你可以令一名其他角色摸一张牌。",
          },
          {
            name: "淑慎",
            description:
              "准备阶段开始时，你可以弃置所有手牌，若你以此法弃置的手牌数大于等于你的体力值，你回复1点体力。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "神智",
            description: "当你回复1点体力后，你可以令一名角色摸一张牌。",
          },
          {
            name: "淑慎",
            description:
              "准备阶段，若X不小于0（X为你的手牌数与体力值之差），你可以弃置所有手牌，然后回复1点体力，令至多X名其他角色各摸一张牌。",
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
              "当你于一回合内使用或打出第X张牌时，你可以摸X张牌（X为你的攻击范围）。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "蒺藜",
            description:
              "每回合限三次，当你于一回合内使用或打出第X张牌时，你可以摸X张牌（X为你的攻击范围且至多为5）。",
          },
        ],
      },
    ],
    expansionPack: "变",
  },

  SHU072: {
    id: ["SHU072", "QUN072"],
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
              "出牌阶段限一次，当你对与你势力不同的角色造成伤害后，你可以令一名与你势力相同的角色选择是否对其使用一张牌。此牌结算后，若此牌造成过伤害，则你与使用者各摸两张牌，否则受伤角色获得你对其造成伤害的牌。",
          },
          {
            name: "近陷",
            description:
              "当你明置此武将牌后，你选择距离1以内的所有角色，若其武将牌均明置，则其暗置一张武将牌，否则其弃置两张牌。",
          },
        ],
      },
      {
        versionId: "official-old-version",
        skills: [
          {
            name: "达命",
            description:
              "与你势力相同的角色出牌阶段开始时，你可以弃置一张锦囊牌，横置一名角色并摸X张牌（X为有横置角色的势力数），你选择一项:1.视为对当前回合角色使用一张【桃】；2.令当前回合角色视为对你选择的另一名角色使用一张雷【杀】。",
          },
          {
            name: "嚣逆",
            description:
              "锁定技，当你使用牌指定目标或成为其他角色使用牌的目标后，若场上有与你势力相同的其他角色且你在其中手牌最多，此目标角色不能响应此牌。",
            label: "锁定技",
          },
        ],
      },
    ],
    expansionPack: "变",
  },

  // TODO: others

  // ============================== Faction WU ==============================
  //
  // =========================================================================

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
            description: "出牌阶段，你可以将一张黑色牌当【过河拆桥】使用。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "奇袭",
            description:
              "出牌阶段，你可以将一张黑色牌当【过河拆桥】使用。出牌阶段限一次，你可以将一张黑桃手牌当【逐近弃远】使用。",
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
              "锁定技，若你未于出牌阶段内使用过颜色不同的牌，你本回合的手牌上限+4。",
            label: "锁定技",
          },
          {
            name: "谋断",
            description:
              "结束阶段，若你于出牌阶段内使用过四种花色或三种类别的牌，你可以移动场上的一张牌。",
          },
        ],
      },
      {
        versionId: "fan-made",
        skills: [
          {
            name: "克己",
            description:
              "锁定技，弃牌阶段开始时，你的手牌上限+X（X为你本回合未使用过的花色数）。",
            label: "锁定技",
          },
          {
            name: "谋断",
            description:
              "结束阶段，每满足以下一项，你可以移动场上的一张牌：①你本回合使用过四种花色的牌；②你本回合使用过三种类别的牌。",
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
    defaultVersion: "half-official",
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
              "每轮限一次，与你势力相同的角色出牌阶段，其可以将一张红色手牌当【以逸待劳】使用，然后若你为小势力角色，你可以令一名与你势力相同的角色将X张手牌当【火烧联营】使用（X为此牌的目标数），此牌不能被响应。",
          },
        ],
      },
    ],
    relatedGenerals: ["陆抗"],
    expansionPack: "标准",
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
              "出牌阶段限一次，你可以与一名其他角色拼点。若你赢，本回合你使用【杀】无距离限制、可多指定一个目标且可多使用一张【杀】；若你没赢，本回合你不能使用【杀】。",
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
              "出牌阶段限一次，你可以与一名其他角色拼点。若你赢，本回合你使用【杀】无距离限制、可多指定一个目标且可多使用一张【杀】；若你没赢，本回合你不能使用【杀】。",
            keywords: ["拼点"],
          },
          {
            name: "酣战",
            description:
              "当你拼点后，没赢的角色可以获得与其拼点的角色装备区里的一张牌。",
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
              "出牌阶段限一次，你可以与一名其他角色拼点。若你赢，本回合你使用【杀】无距离限制、可多指定一个目标且可多使用一张【杀】；若你没赢，本回合你不能使用【杀】。",
            keywords: ["拼点"],
          },
          {
            name: "酣战",
            description:
              "当你拼点后，没赢的角色可以获得对方装备区里的一张牌；赢的角色可以获得拼点牌里的【杀】。",
            keywords: ["拼点"],
          },
        ],
      },
    ],
    relatedGenerals: ["孙策"],
    expansionPack: "标准",
  },

  // TODO: others

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
              "出牌阶段限一次，你可以弃置一张牌并指定一名其他角色，你与该角色本回合的距离视为1。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "短兵",
            description:
              "你使用【杀】时可以多指定一名距离为1的角色为目标。当你使用【杀】指定唯一目标后，目标角色需多使用一张【闪】才能抵消",
          },
          {
            name: "奋迅",
            description:
              "出牌阶段限一次，你可以弃置一张牌并指定一名其他角色，你与该角色本回合的距离视为1。",
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
              "出牌阶段限一次，你可以选择一名其他角色，本回合你计算与其距离视为1，然后此回合结束时，若你未对其造成过伤害，你弃一张牌。",
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
              "当你受到伤害时，你可以弃置两张颜色相同的牌，令此伤害-1，若没有其他与你势力相同的角色，你判定，若结果为红色，你摸一张牌。",
          },
          {
            name: "筑围",
            description:
              "当你的判定牌生效后，若此牌为【杀】或【决斗】，你可获得之，然后你可令当前回合角色本回合使用【杀】的次数上限和手牌上限+1。",
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
              "主将技，你计算体力上限减少1个单独的阴阳鱼。准备阶段，你可以选择一个有牌的区域于本回合结束阶段破釜，若此区域为：判定区，你本回合获得“集智”并跳过判定阶段；装备区，摸三张牌且本回合手牌上限+3；手牌区，本回合使用【杀】次数+3。",
            keywords: ["破釜"],
          },
          {
            name: "恪守",
            description:
              "当你受到伤害时，你可以弃置两张颜色相同的牌，令此伤害-1。若没有其他与你势力相同的角色，当你一次性弃置至少两张牌后，你可以判定，若为红色，你摸一张牌。",
          },
        ],
      },
      {
        versionId: "official-online",
        skills: [
          {
            name: "恪守",
            description:
              "当你受到伤害时，你可以弃置两张颜色相同的牌，令此伤害-1，若没有其他与你势力相同的角色，你判定，若结果为红色，你摸一张牌。",
          },
          {
            name: "筑围",
            description:
              "当你的判定牌生效后，若此牌为【杀】或伤害类锦囊，你可获得之，然后你可令当前回合角色本回合使用【杀】的次数上限和手牌上限+1。",
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
              "当你受到伤害时，你可以弃置两张颜色相同的手牌，令此伤害-1，若没有其他与你势力相同的角色，你判定，若结果为红色，你摸一张牌。",
          },
          {
            name: "筑围",
            description:
              "当你的判定牌生效后，若此牌为【杀】或伤害类锦囊，你可获得之，然后你可令当前回合角色本回合使用【杀】的次数上限和手牌上限+1。",
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
              "当你受到伤害时，你依次执行：1.你可以弃置两张颜色相同的牌，令此伤害-1；2.若没有其他与你势力相同的角色，你判定，若结果为红色，你摸一张牌。",
          },
          {
            name: "筑围",
            description:
              "当你的判定牌生效后，你可获得之，然后你可令当前回合角色本回合使用【杀】的次数上限和手牌上限+1。",
          },
        ],
      },
      {
        versionId: "QSanguosha",
        skills: [
          {
            name: "恪守",
            description:
              "当你受到伤害时，你依次执行：1.你可以弃置两张颜色相同的牌，令此伤害-1；2.若没有其他与你势力相同的角色，你判定，若结果为红色，你摸一张牌。",
            standardizedSkill: {
              description:
                "当你受到伤害时，你可弃置两张颜色相同的牌▶伤害值-1。若没有与你势力相同的其他角色，你判定，若结果为红色，你摸一张牌。",
              type: "Trigger",
              timing: "受到伤害时",
            },
          },
          {
            name: "筑围",
            description:
              "当你的判定牌生效后，若此牌为【杀】或伤害类锦囊，你可获得之，然后你可令当前回合角色本回合使用【杀】的次数上限和手牌上限+1。",
            standardizedSkill: {
              description:
                "当你进行的判定结果确定后，若判定牌为包含使用者对目标对应的角色造成伤害的效果的牌，你可获得此牌▶你可令当前回合角色使用【杀】的次数上限于此回合内+1且其手牌上限于此回合内+1。 ",
              type: "Trigger",
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
              "你或与你处于相同队列的其他角色使用【杀】指定目标后或成为【杀】的目标后，其可以摸一张牌，然后弃置一张牌。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "疑城",
            description:
              "与你势力相同的角色成为【杀】的目标后，你可以令其摸一张牌，然后其可以使用一张装备牌。若如此做，其于当前回合结束时弃置X张牌（X为本回合你对其发动此技能的次数）。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "破军",
            description:
              "你使用【杀】指定目标后，你可以弃置其一张牌。结束阶段，其从弃牌堆中获得此牌。",
          },
          {
            name: "疑城",
            description:
              "与你势力相同的角色成为【杀】的目标后，你可以令其摸一张牌，且其可以使用一张装备牌。当前回合结束阶段，其弃置等量于此回合被发动“疑城”次数的牌。",
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
              "与你势力相同的角色使用装备牌时可以摸一张牌。出牌阶段开始时，你可以获得与你势力相同的角色装备区一张牌，并交给另一名角色。",
            memo: "技能描述错误，本意为：你从角色A的装备区里获得的牌，不能把它还给A（当且仅当A是你自己时，此装备牌必须交给其他角色）。",
          },
          {
            name: "典财",
            description:
              "其他角色的出牌阶段结束时，若你此阶段失去的牌数大于等于X（X为你的体力值），你可以摸牌至体力上限，然后你可以变更一次副将。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "调度",
            description:
              "出牌阶段开始时，你可以获得与你势力相同的角色装备区里的一张牌，然后交给另一名角色。每回合每种类别限一次，与你势力相同的角色使用指定自己为目标的牌时，其可以摸一张牌。",
            memo: "你从角色A的装备区里获得的牌，不能把它还给A（若A是你自己，则不能留在自己手上）。",
            standardizedSkill: [
              {
                isChild: true,
                index: 1,
                description:
                  "出牌阶段开始时，你可获得与你势力相同的一名角色装备区里的一张牌▶若其：为你，你将此牌交给一名角色；不为你，你可将此牌交给另一名角色。",
                type: "Trigger",
                timing: "出牌阶段开始时",
              },
              {
                isChild: true,
                index: 2,
                description:
                  "当牌被使用时，若使用者与你势力相同，且此牌的目标角色包含其，且本回合未因其使用相同类别的牌而发动过此技能，（你令）其可摸一张牌。",
                type: "Trigger",
                timing: "牌被使用时",
              },
            ],
          },
          {
            name: "典财",
            description:
              "其他角色的出牌阶段结束时，若你此阶段失去的牌数大于等于X（X为你的体力值），你可以将手牌摸至体力上限，然后你可以变更一次副将。",
            standardizedSkill: {
              description:
                "其他角色的出牌阶段结束时，若你于此阶段内失去过至少X张牌（X为你的体力值且至少为1），你可将你的手牌补至Y张（Y为你的体力上限）▶你可变更。 ",
              type: "Trigger",
              timing: "出牌阶段结束时",
            },
          },
        ],
      },
      {
        versionId: "official-online",
        skills: [
          {
            name: "调度",
            description:
              "每回合限一次，与你势力相同的角色使用装备牌时，其可以摸一张牌。出牌阶段开始时，你可以获得与你势力相同的角色装备区一张牌，然后你可将此牌交给另一名角色。",
          },
          {
            name: "典财",
            description:
              "其他角色的出牌阶段结束时，若你此阶段失去的牌数大于等于X（X为你的体力值），你可以摸牌至体力上限，然后你可以变更一次副将。",
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
              "出牌阶段限一次，你可以令至多X名其他角色横置（X为你已损失的体力值且至少为1），然后你横置。",
          },
          {
            name: "奋命",
            description:
              "结束阶段，若你处于“连环状态”，则你可弃置所有处于“连环状态”的角色各一张牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "奋命",
            description:
              "出牌阶段限一次，你可以令至多X名其他角色横置，然后你横置，然后你可以弃置所有处于“连环状态”的角色各一张牌。（X为你已损失的体力值且至少为1）",
          },
          {
            name: "断绁",
            description:
              "你重置武将牌时，或你于回合内首次对横置的角色造成属性伤害时，你可以摸一张牌。",
          },
        ],
      },
    ],
    expansionPack: "势",
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
              "结束阶段，若你于此回合内弃置任意角色牌的总数大于你的体力值，你可以令一名与你势力相同的角色将手牌摸至其体力上限。其他角色的结束阶段，若其于此回合内弃置任意角色牌的总数大于你的体力值，其可以弃置你的一张牌或令你回复1点体力。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "联翩",
            description:
              "每个阶段结束时，若你此阶段弃置过任意角色的总计至少两张牌，你可以摸一张牌。其他角色于其出牌阶段内使用牌连续指定同一名角色为目标（或之一）后，你可以弃置一张牌，令此牌的使用者摸一张牌。",
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
              "出牌阶段限一次，你可以将一张装备牌当【调虎离山】使用，若你的势力因此形成队列，则你摸X张牌（X为该队列的角色数）。",
            label: "轮次技",
          },
          {
            name: "风扬",
            description:
              "阵法技，其他势力角色不能弃置或获得与你处于同一队列的角色装备区里的牌。",
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
              "轮次技，任意角色的出牌阶段开始时，你可以将一张装备牌当【调虎离山】对当前回合角色以外的其他角色使用，使用时，你摸X张牌（X为与此牌的目标相邻且与你势力相同的角色数）。",
            label: "轮次技",
          },
          {
            name: "风扬",
            description:
              "阵法技，其他势力角色不能弃置或获得与你处于同一队列的角色装备区里的牌。",
            label: "阵法技",
          },
        ],
        relatedGenerals: ["孙策"],
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
              "当你于每名角色的出牌阶段第一次造成伤害后，你可以摸X张牌 (X为本回合你使用过的牌数且至为5）。",
          },
          {
            name: "断念",
            description:
              "出牌阶段结束时，你可以弃置所有手牌，然后将手牌摸至体力上限。",
          },
          {
            name: "莲佑",
            description: "你死亡时，你可以令一名其他角色获得技能“兴火”。",
          },
          {
            name: "兴火",
            description: "锁定技，你造成的火焰伤害+1。",
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
              "出牌阶段限一次，你可以弃置一张牌并选择两名其他男性角色，令其中一名角色视为对其中另一名角色使用一张【决斗】。",
          },
          {
            name: "闭月",
            description: "结束阶段，你可以摸一张牌。",
          },
        ],
      },
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "离间",
            description:
              "出牌阶段限一次，你可以弃置一张牌并选择两名其他男性角色，令其中一名角色视为对其中另一名角色使用一张【决斗】。",
          },
          {
            name: "闭月",
            description:
              "结束阶段，你可以摸一张牌，然后你可以令本回合造成过伤害的角色各摸一张牌。",
          },
        ],
      },
    ],
    relatedGenerals: ["吕布"],
    expansionPack: "标准",
  },

  // TODO: others

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
              "摸牌阶段，你可以改为判定并获得生效后的判定牌。若如此做，本回合你可以将一张与判定结果颜色不同的手牌当【决斗】使用。",
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
              "摸牌阶段，若你的体力值为1或没有手牌，你可以改为获得所有其他角色区域里各一张牌。",
          },
          {
            name: "暴凌",
            description:
              "主将技，锁定技，出牌阶段结束时，若此武将牌已明置，则你移除副将，然后加3点体力上限并恢复3点体力，失去“暴凌”并获得“崩坏”。",
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
              "摸牌阶段，若你的体力值为1或没有手牌，你可以改为获得所有其他角色区域里各一张牌。",
          },
          {
            name: "暴凌",
            description:
              "主将技，锁定技，出牌阶段结束时，你移除副将，然后加3点体力上限并恢复3点体力，获得“崩坏”。",
            label: ["主将技", "锁定技"],
          },
          {
            name: "崩坏",
            description:
              "锁定技，结束阶段，若你体力值不为最小，你选择一至两项：1.失去1点体力；2.减1点体力上限。若你选择两项，你执行一个额外的摸牌阶段。",
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
              "摸牌阶段，若你的体力值为1或没有手牌，你可以改为获得所有其他角色区域里各一张牌。",
          },
          {
            name: "暴凌",
            description:
              "主将技，限定技，锁定技，出牌阶段结束时，若你有副将，则你移除副将，然后加3点体力上限并恢复3点体力，获得“崩坏”。",
            label: ["主将技", "锁定技", "限定技"],
          },
        ],
      },
    ],
    expansionPack: "势",
  },

  // others

  QUN009: {
    id: "QUN009",
    name: "左慈",
    faction: "群",
    health: 1.5,
    defaultVersion: "half-official",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "役鬼",
            description:
              "你首次明置此武将牌时，将两张剩余武将牌扣置于武将牌上，称为“魂”；每回合每种牌名限一次，你可以移去一张“魂”，视为使用任意一种基本牌或普通锦囊牌（目标仅包括与此“魂”牌面势力相同或未确定势力的角色）。",
            standardizedSkill: [
              {
                isChild: true,
                index: 1,
                description:
                  "当你明置此武将牌后，若你未发动过此技能，你随机将武将牌堆里的两张牌扣置于武将牌上（称为“魂”）。",
                type: "Trigger",
                timing: "明置武将牌后",
              },
              {
                isChild: true,
                index: 2,
                description:
                  "当你需要使用与你于当前回合内以此法使用过的牌的牌名均不同的除【闪】外的基本牌/除【无懈可击】外的普通锦囊牌时，你可将一张“魂”置入武将牌堆▶你使用无对应的实体牌的此基本牌/普通锦囊牌（有势力且与你以此法置入武将牌堆的“魂”代表的武将牌势力不同的角色不是你以此法使用的牌的合法目标）。",
                type: "Trigger",
                timing: "需要使用牌时",
              },
            ],
          },
          {
            name: "汲魂",
            description:
              "当你受到伤害后，或与你势力不同的角色从濒死被救回后，你可以将一张剩余武将牌扣置为“魂”。",
            standardizedSkill: [
              {
                isChild: true,
                index: 1,
                description:
                  "当你受到伤害后，你可随机将武将牌堆里的一张牌扣置于武将牌上（称为“魂”）。",
                type: "Trigger",
                timing: "明置武将牌后",
              },
              {
                isChild: true,
                index: 2,
                description:
                  "当一名角色的濒死结算结束后，若其与你势力不同且存活，你可随机将武将牌堆里的一张牌扣置于武将牌上（称为“魂”）。 ",
                type: "Trigger",
                timing: "需要使用牌时",
              },
            ],
          },
        ],
        references: [
          {
            title: "左慈的各版本图鉴，和〖役鬼〗可以转化的锦囊牌",
            url: "https://www.bilibili.com/read/cv16731260/",
          },
          {
            title:
              "左慈的各服描述差异，和〖役鬼〗“目标收敛、势力条件” 等概念的详细解释和举例",
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
              "你首次明置此武将牌时，将两张剩余武将牌扣置于武将牌上，称为“魂”；每回合每种类别限一次，你可以移去一张“魂”，视为使用任意一种基本牌或普通锦囊牌（【闪】和【无懈可击】除外，目标不能包含与此“魂”牌面势力相同或未确定势力的角色）。",
            standardizedSkill: [
              {
                isChild: true,
                index: 1,
                description:
                  "当你明置此武将牌后，若你未发动过此技能，你随机将武将牌堆里的两张牌扣置于武将牌上（称为“魂”）。",
                type: "Trigger",
                timing: "明置武将牌后",
              },
              {
                isChild: true,
                index: 2,
                description:
                  "当你需要使用与你于当前回合内以此法使用过的牌的类别均不同的除【闪】外的基本牌/除【无懈可击】外的普通锦囊牌时，你可将一张“魂”置入武将牌堆▶你使用无对应的实体牌的此基本牌/普通锦囊牌（有势力且与你以此法置入武将牌堆的“魂”代表的武将牌势力不同的角色不是你以此法使用的牌的合法目标）。",
                type: "Trigger",
                timing: "需要使用牌时",
              },
            ],
            memo: "〖役鬼〗转化的牌的目标为满足牌的合法性的目标与满足役鬼势力的目标的交集。详见参考链接。",
          },
          {
            name: "汲魂",
            description:
              "当你受到伤害后，或与你势力不同的角色从濒死被救回后，你可以将一张剩余武将牌扣置为“魂”。准备阶段，你可以移去至多两张“魂”，获得等量的“魂”。",
            standardizedSkill: [
              {
                isChild: true,
                index: 1,
                description:
                  "当你受到伤害后，你可随机将武将牌堆里的一张牌扣置于武将牌上（称为“魂”）。",
                type: "Trigger",
                timing: "明置武将牌后",
              },
              {
                isChild: true,
                index: 2,
                description:
                  "当一名角色的濒死结算结束后，若其与你势力不同且存活，你可随机将武将牌堆里的一张牌扣置于武将牌上（称为“魂”）。 ",
                type: "Trigger",
                timing: "濒死结算结束后",
              },

              {
                isChild: true,
                index: 3,
                description:
                  "准备阶段，你可将至多两张“魂”置入武将牌堆▶你随机将武将牌堆里的等量张牌扣置于武将牌上（称为“魂”）。 ",
                type: "Trigger",
                timing: "准备阶段",
              },
            ],
          },
        ],
        references: [
          {
            title: "左慈的各版本图鉴，和〖役鬼〗可以转化的锦囊牌",
            url: "https://www.bilibili.com/read/cv16731260/",
          },
          {
            title:
              "左慈的各服描述差异，和〖役鬼〗“目标收敛、势力条件” 等概念的详细解释和举例",
            url: "https://www.bilibili.com/read/cv16158225/",
          },
        ],
      },
    ],
    expansionPack: "变",
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
              "出牌阶段开始时，你可以与一名角色拼点，若你赢，你视为对一名与其势力相同的角色使用【杀】；若你没赢，本回合你不能对其他角色使用牌。",
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
              "出牌阶段开始时，你可与一名角色拼点，若你赢，你视为对一名与其势力相同的角色使用【杀】；若你没赢，此阶段你不能使用【杀】或伤害类锦囊。你的【杀】有<富甲→选择唯一目标后，可以令其相邻的一名角色也成为目标>。",
            memo: "无对应实体牌的【杀】无距离限制。",
            keywords: ["拼点", "富甲"],
          },
        ],
      },
    ],
    relatedGenerals: ["袁术"],
    expansionPack: "标准",
  },

  // TODO: others

  QUN020: {
    id: "QUN020",
    name: "何太后",
    faction: "群",
    health: 1.5,
    defaultVersion: "half-official",
    versions: [
      {
        versionId: "official",
        skills: [
          {
            name: "鸩毒",
            description:
              "一名角色的出牌阶段开始时，你可以弃置一张手牌，令该角色视为使用一张【酒】，然后你对其造成1点伤害。",
          },
          {
            name: "戚乱",
            description:
              "一名角色的回合结束时，若你于本回合杀死过角色，你可以摸三张牌。",
          },
        ],
      },
      {
        versionId: "half-official",
        skills: [
          {
            name: "鸩毒",
            description:
              "其他角色的出牌阶段开始时，你可以弃置一张手牌，令该角色视为使用一张【酒】，然后若该角色不为你，你对其造成1点伤害。",
          },
          {
            name: "戚乱",
            description:
              "一名角色的回合结束时，你可以摸X张牌（X为本回合你杀死的角色数的两倍与本回合死亡的角色数之和）。",
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
              "出牌阶段限一次，你可以选择一名其他角色，令所有与其势力不同的角色依次选择是否对其使用一张【杀】，然后其下回合使用【杀】次数+X (X为其以此法受到的伤害数)，若其以此法进入过濒死则其回复1点体力。",
          },
          {
            name: "与谋",
            description:
              "锁定技，你杀死其他角色或其他角色杀死你均不执行奖惩，其他角色因奖惩而摸牌时，你摸一张牌。",
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
              // TODO: 修订版描述：https://www.bilibili.com/read/cv25257253
              "出牌阶段限一次，你可以弃置一张【杀】或武器牌，对一名没有军令的其他角色献策并指定另一名角色。结束阶段，其须选择一项：令你指定的角色执行军令；弃置此军令，摸两张牌。",
            keywords: ["献策"],
          },
          {
            name: "智迟",
            description:
              "锁定技，当你于回合外受到伤害后，本回合普通锦囊牌和【杀】指定你为目标时，取消之。",
            label: "锁定技",
          },
        ],
        references: [
          {
            title: "陈宫设计思路及献策机制讲解",
            url: "https://www.bilibili.com/read/cv14434956/",
          },
        ],
        expansionPack: "治",
      },
    ],
    expansionPack: "不臣",
  },

  // TODO: others

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
              "出牌阶段，你可将一张♠手牌当【远交近攻】或【知己知彼】使用（不可与你本回合上一次以此法使用的牌相同）。",
            standardizedSkill: {
              description:
                "出牌阶段，若你于此回合内{未发动过此技能或上一次因发动此技能而使用的牌为【知己知彼】/【远交近攻】}，你可使用对应的实体牌为你的一张♠手牌的【远交近攻】/【知己知彼】。",
              type: "Trigger",
              timing: "出牌阶段的空闲时间点",
            },
          },
          {
            name: "远域",
            description:
              "锁定技，当你受到伤害时，若你不在伤害来源的攻击范围内，此伤害-1。",
            label: "锁定技",
            standardizedSkill: {
              description:
                "锁定技，当你受到伤害时，若你不在来源的攻击范围内，你令伤害值-1。 ",
              type: "Trigger",
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
              "出牌阶段，你可将一张♠手牌当【远交近攻】或【知己知彼】使用（不可与你以此法使用的上一张牌相同）。",
          },
          {
            name: "远域",
            description:
              "锁定技，当你受到伤害时，若来源不为你的上家或下家，防止此伤害。",
            label: "锁定技",
          },
        ],
      },
    ],
    expansionPack: "海外专属",
  },

  // =============================== AMBITION ================================
  //
  // =========================================================================

  // TODO: others

  // ================================ Dou DIY ================================
  //
  // =========================================================================

  DOU005: {
    id: "DOU005",
    name: "一到雪季就不见",
    faction: ["魏", "蜀", "吴", "群"],
    health: 1.5,
    defaultVersion: "dou-DIY",
    versions: [
      {
        versionId: "dou-DIY",
        skills: [
          {
            name: "速降",
            description:
              "锁定技，你/其他角色沿逆时针计算至其他角色/你的距离-1/+1。",
            label: "锁定技",
          },
          {
            name: "立刃",
            description:
              "出牌阶段开始时，你可以横置或重置。你横置/重置后，可以将“板”标记移动到你上家的左边/下家的右边，你视为位于此位置（不改变回合顺序）。",
            standardizedSkill: [
              {
                isChild: true,
                index: 1,
                description: "出牌阶段开始时，你可以横置或重置。",
                type: "Trigger",
                timing: "出牌阶段开始时",
              },
              {
                isChild: true,
                index: 2,
                description:
                  "你横置后/重置后，（若场上没有“板”，你获得“板”标记）你可以将“板”置于你上家的左边/下家的右边。",
                type: "Trigger",
                timing: ["横置后", "重置后"],
              },
              {
                isChild: true,
                index: 3,
                description:
                  "若场上有“板”，在距离、座次和阵法的计算中，你视为处于“板”所在的位置。",
                type: "State",
              },
              //
            ],
          },
          {
            name: "嗜雪",
            description:
              "你对攻击范围内没有你的角色造成伤害时，或受到其造成的伤害时，视为冰属性伤害。当你受到冰属性伤害时，你可以弃置一张红色手牌取消此伤害。",
            keywords: ["冰属性伤害"],
            memo: "伤害来源造成冰属性伤害时选择是否取消此伤害并改为弃置你两张牌，若其不取消此伤害，才会进入“受到伤害时”的时机。",
          },
        ],
      },
    ],
    expansionPack: "DIY",
  },

  DOU009: {
    id: "DOU009",
    name: "组局不易，群主叹气",
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
              "当你判定/拼点时，你可以卜算2，然后你可以将牌堆底的一张牌当作此判定结果/拼点牌。",
            standardizedSkill: [
              {
                isChild: true,
                index: 1,
                description:
                  "当你判定时，你可以卜算2▶你可以将牌堆底的一张牌置入处理区来作为判定牌。",
                type: "Trigger",
                timing: "判定时",
              },
              {
                isChild: true,
                index: 2,
                description:
                  "当一名角色进行拼点时，若你是拼点的发起者或拼点的目标，你可以卜算2▶你选择拼点的牌的范围为你手牌区里或牌堆底的一张牌。",
                type: "Trigger",
                timing: "进行拼点时",
              },
            ],
            keywords: ["拼点"],
          },
          // {
          //   name: "牌主",
          //   description:
          //     "每项限一次：1.你可以视为使用任意普通锦囊牌；2.你可以视为使用野心家标记；3.发动另一张武将牌的触发类技能时，可以改为发动任意同时机的无标签技能。执行过全部选项后，“组局”视为未发动过。",
          //   standardizedSkill: [
          //     {
          //       isChild: true,
          //       index: 1,
          //       description:
          //         "当你需要使用任意普通锦囊牌时，若你没有发动过〖牌主①〗，你可使用无对应实体牌的此锦囊▷若你发动过〖牌主②〗和〖牌主③〗，且你发动过〖约局〗，你令〖约局〗的发动次数上限+1。",
          //       type: "Trigger",
          //       timing: "需要使用牌时",
          //     },
          //     {
          //       isChild: true,
          //       index: 2,
          //       description:
          //         "当你需要使用阴阳鱼标记、珠联璧合标记或先驱标记时，若你没有发动过〖牌主②〗，你可以视为使用此标记▷若你发动过〖牌主①〗和〖牌主③〗，且你发动过〖约局〗，你令〖约局〗的发动次数上限+1。",
          //       type: "Trigger",
          //       timing: "DIY时机",
          //     },
          //     {
          //       isChild: true,
          //       index: 3,
          //       description:
          //         "当你另一张武将牌上的一个触发类技能的时机被触发时，若你满足此触发类技能的发动条件，且你没有发动过〖牌主③〗，你可以令此触发类技能于此时机内失效▶你可以发动任意武将的没有技能标签的在此时机触发的技能▷若你发动过〖牌主②〗和〖牌主③〗，且你发动过〖约局〗，你令〖约局〗的发动次数上限+1。",
          //       type: "Trigger",
          //       timing: "DIY时机",
          //     },
          //   ],
          // },
          {
            name: "襄举",
            description:
              "摸牌阶段开始时，你可以对所有其他角色发起议事，若结果为：红，你可以跳过此阶段，并视为对你和红色意见角色使用【联军盛宴】；黑，你判定，你可以对议事牌花色与判定结果相同的角色和你自己造成1点冰冻伤害。",
            keywords: ["议事", "冰属性伤害"],
            standardizedSkill: {
              description:
                // 用“议事”关键字描述
                "摸牌阶段开始时，你可以令所有有手牌的其他角色同时展示一张手牌▶若以此法展示的红色牌多于黑色牌，你可以跳过此阶段▷你对你和所有以此法展示红色牌的其他角色使用一张无对应实体牌的【联军盛宴】（你因执行此牌的效果而摸牌或回复的总数为以此法展示红色牌的角色数）。若以此法展示的黑色牌多于红色牌，你判定，你可以对你和以此法展示的牌与判定结果花色相同的角色造成1点冰属性伤害。",
              // "准备阶段，你可以令所有有手牌的角色同时展示一张手牌▶若以此法展示的红色牌多于黑色牌→本回合的下一个摸牌阶段开始时，跳过此阶段并对所有以此法展示红色牌的其他角色使用一张无对应实体牌的【联军盛宴】。若以此法展示的黑色牌多于红色牌→本回合的下一个出牌阶段开始时，跳过此阶段并判定，你对以此法展示的牌点数不大于判定结果的角色造成1点冰属性伤害。",
              type: "Trigger",
              timing: "摸牌阶段开始时",
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
    name: "“妈的，最烦磨叽的人”",
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
              "你于出牌阶段内使用的前三张牌，若为：基本牌，无视距离且无次数限制；装备牌，使用时摸一张牌；锦囊牌，使用时可弃置一名目标角色一张牌。",
          },

          {
            name: "速决",
            description:
              "锁定技，你于出牌阶段内使用至少三张牌后，你使用基本牌或普通锦囊牌时须弃置一张手牌。杀死你的角色获得此技能。",
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
              "你或与你势力相同的角色受到对方造成的伤害后，你可以令伤害来源摸一张牌，或受伤角色摸两张牌。你与其击杀对方的奖惩均改为摸两张牌。",
            standardizedSkill: [
              {
                isChild: true,
                index: 1,
                description:
                  "你受到伤害后，若伤害来源与你势力相同，你可以摸两张牌或令其摸一张牌。一名与你势力相同的其他角色受到伤害后，若伤害来源是你，你可以摸一张牌或令其摸两张牌。",
                type: "Trigger",
                timing: "受到伤害后",
              },
              {
                isChild: true,
                index: 2,
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
            standardizedSkill: [
              {
                isChild: true,
                index: 1,
                description:
                  "回合开始时或你明置此武将牌时，若你未确定势力，你可以不公开你的真实势力，你声明任意未以此法声明过的势力▶你视为此势力角色（直到你即将进行死亡结算），你变更副将（以此法失去的副将牌不需要翻至正面朝上，被称为“初始副将”），你失去〖悍跳①〗并获得〖悍跳②〗。",
                type: "Trigger",
                timing: ["回合开始时", "明置武将牌时"],
              },
              {
                isChild: true,
                index: 2,
                description:
                  "任意势力的角色数变化后，若其他角色的势力均与你相同或均与你不同，你将你的副将变更为“初始副将”（以此法作为你的副将的武将牌处于暗置状态），你视为未确定势力，你失去〖悍跳②〗并获得〖悍跳①〗。",
                type: "Trigger",
                timing: "DIY时机",
                isConditional: true,
              },
            ],
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
              "锁定技，当其它角色因牌或技能的效果令你执行描述为“除非/需…否则…”“选择一项：…”的动作时，或者其令你选择是否执行军令时，或其对你发起议事时，其指定其中一个选项。若你选择该选项，结算完成后你摸两张牌。",
            label: "锁定技",
          },
          {
            name: "驰援",
            description:
              "限定技，回合结束时，你可以叠置，然后令一名其他角色选择：1.摸两张牌，然后执行一个出牌阶段；2.执行一个摸牌阶段，然后使用至多两张牌。纵横：描述中的“两张牌”均改为“一张牌”。",
            label: ["限定技"],
            keywords: ["纵横"],
          },
          {
            name: "驰援[纵横]",
            description:
              "回合结束时，你可以叠置，然后令一名其他角色选择：1.摸一张牌，然后执行一个出牌阶段；2.执行一个摸牌阶段，然后可以使用一张牌。",
            isConditional: true,
          },
        ],
      },
    ],
    relatedGenerals: ["李典"],
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
              "出牌阶段限一次，当一名其他角色的一张牌置入弃牌堆后，若此时没有角色处于濒死状态，你可以弃置另一名角色一张牌。若这两张牌的点数可以计算得到6，你可以令其中一名角色将手牌摸至另一名的手牌数（最多为6）。",
          },
          {
            name: "阴阳",
            description:
              "副将技，你计算体力上限减少1个单独的阴阳鱼。当你执行或你令其他角色执行“将手牌摸至X”的操作时，你可将此操作改为“摸X张牌，然后将手牌弃至X张”。",
            label: "副将技",
          },
        ],
      },
    ],
    relatedGenerals: ["荀彧"],
    expansionPack: "DIY",
  },
};
