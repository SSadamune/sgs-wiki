import { Faction, General } from "@/data/types/Generals";
import styles from "./GeneralDetailLink.module.scss";
import Image from "next/image";
import { useState } from "react";
import { ParsedGeneral } from "@/utils/data";
import { guideGeneralDetailLink } from "@/utils/path";

type Props = {
  general: ParsedGeneral;
};

export function GeneralDetailLink({ general }: Props) {
  const [imageSource, setImageSource] = useState(
    `https://ssadamune.github.io/sgs-wiki/images/avatar/${general.avatarId}.png`
  );

  const handleError = () => {
    setImageSource(
      "https://ssadamune.github.io/sgs-wiki/images/avatar/default.jpg"
    );
  };

  return (
    <a
      href={guideGeneralDetailLink(general.officialId)}
      className={styles.generalLink}
    >
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
