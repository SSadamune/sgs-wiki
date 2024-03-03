import { Faction, General } from "@/data/types/Generals";
import styles from "./GeneralDetailLink.module.scss";
import Image from "next/image";
import { useState } from "react";
import { ParsedGeneral } from "@/utils/data";

type Props = {
  general: ParsedGeneral;
  detailLink: (id: string) => string;
};

export function GeneralDetailLink({ general, detailLink }: Props) {
  const [imageSource, setImageSource] = useState(
    `https://ssadamune.github.io/sgs-wiki/images/avatar/${general.officialId}.png`
  );

  const handleError = () => {
    setImageSource(
      "https://ssadamune.github.io/sgs-wiki/images/avatar/default.jpg"
    );
  };

  return (
    <a href={detailLink(general.officialId)} className={styles.generalLink}>
      <Image
        src={imageSource}
        alt={general.officialId}
        width={70}
        height={70}
        onError={handleError}
      />
      <div>{`${general.name}`}</div>
    </a>
  );
}
