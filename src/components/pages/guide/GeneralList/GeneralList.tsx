import Link from "next/link";
import { generals as generalsData } from "@/data/generals";
import { useMemo } from "react";
import { joinStrings } from "@/utils/string";

type Props = {
  detailLink: (key: string) => string;
};

// TODO: common
const displayExpansions = ["SP", "纵横捭阖", "海外专属"];

export function GeneralList({ detailLink }: Props) {
  const generalList = useMemo(
    () =>
      Object.entries(generalsData)
        .filter(
          ([key, general]) =>
            general.defaultVersion !== "official" ||
            displayExpansions.includes(general.expansionPack)
        )
        .map(([key, general]) => ({
          name: general.name,
          faction: general.faction,
          key,
        })),
    []
  );

  return (
    <div>
      <h1>武将列表</h1>
      <ul>
        {generalList.map((general) => (
          <li key={general.key}>
            <a href={detailLink(general.key)}>{general.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
