import { generals as generalsData } from "@/data/generals";
import { useMemo, useState } from "react";
import styles from "./GeneralList.module.scss";
import { VersionId } from "@/data/types/Version";
import { ExpansionName, Faction, General } from "@/data/types/Generals";
import classNames from "classnames";
import { GeneralDetailLink } from "./GeneralDetailLink";
import { parseGeneral } from "@/utils/data";
import { notNull } from "@/utils/array";

type Props = {
  detailLink: (id: string) => string;
};

// TODO: common
const newExpansions: ExpansionName[] = ["不臣", "纵横捭阖", "SP", "海外专属"];
const otherOfficialVersions: VersionId[] = [
  "half-official-other",
  "official-online-new",
  "official-mobile",
  "official-oversea",
  "official-old-version",
];
const otherDiy: VersionId[] = [
  "qSanguosha",
  "zixing-DIY",
  "xiliang-DIY",
  "fan-made",
];

export function GeneralList({ detailLink }: Props) {
  type FilterKeys =
    | "showsNewExpansions"
    | "showsHalfOfficial"
    | "showsOtherOfficial"
    | "showsDouDiy"
    | "showsOtherDiy";

  const filterText: {
    [key in FilterKeys]: string;
  } = {
    showsNewExpansions: "新扩展",
    showsHalfOfficial: "官盗增修",
    showsOtherOfficial: "其它版本",
    showsDouDiy: "豆包DIY",
    showsOtherDiy: "其它DIY",
  };

  const [filters, setFilters] = useState<{
    [key in FilterKeys]: boolean;
  }>({
    showsNewExpansions: false,
    showsHalfOfficial: false,
    showsOtherOfficial: false,
    showsDouDiy: true,
    showsOtherDiy: true,
  });

  const generalList = useMemo(
    () =>
      Object.entries(generalsData)
        .filter(
          ([key, general]) =>
            // general.defaultVersion !== "official" ||
            (filters.showsNewExpansions &&
              newExpansions.includes(general.expansionPack)) ||
            (filters.showsHalfOfficial &&
              general.defaultVersion === "half-official") ||
            (filters.showsOtherOfficial &&
              otherOfficialVersions.includes(general.defaultVersion)) ||
            (filters.showsDouDiy && general.defaultVersion === "dou-DIY") ||
            (filters.showsOtherDiy && otherDiy.includes(general.defaultVersion))
        )
        .map(([key, general]) => parseGeneral(general, general.defaultVersion))
        .filter(notNull),
    [filters]
  );

  const groupedGeneralList = useMemo(() => {
    const factionList: string[] = [...Faction, "多势力"];
    return ExpansionName.map((expansion) => {
      const factions = factionList
        .map((faction) => {
          const generals = generalList.filter((general) => {
            if (factionList.includes(general.faction)) {
              return (
                general.expansionPack === expansion &&
                general.faction === faction
              );
            } else {
              return (
                faction === "多势力" && general.expansionPack === expansion
              );
            }
          });
          return { faction, generals };
        })
        .filter((factionObj) => factionObj.generals.length > 0);

      return { expansion, factions };
    });
  }, [generalList]);

  console.log(groupedGeneralList);

  const handleChangeFilter = (key: string, value: boolean) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  return (
    <div>
      <div className={styles.title}>
        <h1>武将列表</h1>
      </div>
      <div className={styles.filterList}>
        {Object.entries(filterText).map(([filterKey, text]) => (
          <span
            key={filterKey}
            className={classNames({
              [styles.activeFilter]: filters[filterKey as FilterKeys],
            })}
            onClick={() =>
              handleChangeFilter(filterKey, !filters[filterKey as FilterKeys])
            }
          >
            {text}
          </span>
        ))}
      </div>
      <div className={styles.linkList}>
        {groupedGeneralList.map(({ expansion, factions }) => (
          <div key={expansion} className={styles.expansionGroup}>
            <h2>{expansion}</h2>
            <div className={styles.factionList}>
              {factions.map(({ faction, generals }) => (
                <div key={faction} className={styles.factionGroup}>
                  <h3>{faction}</h3>
                  <div className={styles.generalList}>
                    {generals.map((general) => (
                      <GeneralDetailLink
                        key={general.officialId}
                        general={general}
                        detailLink={detailLink}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
