import Link from "next/link";
import { generals as generalsData } from "@/data/generals";

export function GeneralList() {
  return (
    <div>
      <h1>武将列表</h1>
      <ul>
        {Object.entries(generalsData).map(([key, generalData]) => (
          <li key={key}>
            <Link href={`/guide/general/${generalData.id}`}>
              {generalData.name} - {generalData.faction}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
