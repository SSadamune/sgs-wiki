import { generals as generalsData } from "@/data/generals";
import { useMemo, useState } from "react";
import styles from "./GeneralList.module.scss";
import { VersionId } from "@/data/types/Version";
import { ExpansionName } from "@/data/types/Generals";
import classNames from "classnames";

type Props = {
  detailLink: (key: string) => string;
};

// TODO: common
const newExpansions: ExpansionName[] = ["SP", "纵横捭阖", "海外专属"];
const otherOfficialVersions: VersionId[] = [
  "official-online-new",
  "official-mobile",
  "official-oversea",
  "official-old-version",
];
const otherDiy: VersionId[] = [
  "QSanguosha",
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
    showsOtherOfficial: "采用旧版",
    showsDouDiy: "豆包DIY",
    showsOtherDiy: "其它DIY",
  };

  const [filters, setFilters] = useState<{
    [key in FilterKeys]: boolean;
  }>({
    showsNewExpansions: true,
    showsHalfOfficial: true,
    showsOtherOfficial: true,
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
        .map(([key, general]) => ({
          name: general.name,
          faction: general.faction,
          key,
        })),
    [filters]
  );

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
      <ul className={styles.linkList}>
        {generalList.map((general) => (
          <li key={general.key}>
            <a
              href={detailLink(general.key)}
              className={styles.generalLink}
            >{`${general.key} ${general.name}`}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
