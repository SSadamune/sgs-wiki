import { Faction, General } from "@/data/types/Generals";
import styles from "./GeneralDetailLink.module.scss";
import Image from "next/image";
import { useState } from "react";

type Props = {
  general: { name: string; faction: Faction | Faction[]; id: string };
  detailLink: (id: string) => string;
};

export function GeneralDetailLink({ general, detailLink }: Props) {
  const [imageSource, setImageSource] = useState(
    `https://ssadamune.github.io/sgs-wiki/images/avatar/${general.id}.png`
  );

  const handleError = () => {
    setImageSource(
      "https://ssadamune.github.io/sgs-wiki/images/avatar/default.jpg"
    );
  };

  return (
    <a href={detailLink(general.id)} className={styles.generalLink}>
      <Image
        src={imageSource}
        alt={general.id}
        width={70}
        height={70}
        onError={handleError}
      />
      <div>{`${general.name}`}</div>
    </a>
  );
}
