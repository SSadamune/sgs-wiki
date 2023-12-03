import Link from "next/link";
import { generals as generalsData } from "@/data/generals";
import { useMemo } from "react";

type Props = {
  detailLink: (key: string) => string;
};

export function GeneralList({ detailLink }: Props) {
  const generalList = useMemo(
    () =>
      Object.entries(generalsData)
        .filter((generalData) => generalData[1].defaultVersion !== "official")
        .map(([key, generalData]) => ({
          name: generalData.name,
          faction: generalData.faction,
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
            <Link href={detailLink(general.key)}>
              {general.name} - {joinStrings(general.faction)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const joinStrings = (toJoin: string | string[]) =>
  Array.isArray(toJoin) ? toJoin.join("&") : toJoin;
