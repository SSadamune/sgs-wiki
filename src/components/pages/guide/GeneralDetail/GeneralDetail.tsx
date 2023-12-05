import { General } from "@/data/types/Generals";
import { useMemo, useState } from "react";
import Error from "next/error";
import { versions } from "@/data/versions";
import { VersionId } from "@/data/types/Version";
import styles from "./GeneralDetail.module.scss";
import classNames from "classnames";

type Props = {
  generalData: General;
};

export function GeneralDetail({ generalData }: Props) {
  const [activeVersionId, setActiveVersionId] = useState<VersionId>(
    generalData.defaultVersion
  );

  const activeVersion = useMemo(() => {
    return generalData?.versions.find((v) => v.versionId === activeVersionId);
  }, [activeVersionId, generalData?.versions]);

  if (!generalData) {
    return <Error statusCode={404} title="武将信息未找到" />;
  }

  if (!activeVersion) {
    return <Error statusCode={404} title="技能版本信息未找到" />;
  }

  return (
    <div>
      <h2>{generalData.name}</h2>
      {generalData.versions.length > 0 && (
        <div className={styles.versionList}>
          其它版本：
          {generalData.versions.map((version) => (
            <span
              key={version.versionId}
              onClick={() => setActiveVersionId(version.versionId)}
              className={classNames({
                [styles.activeVersion]: version.versionId === activeVersionId,
              })}
            >
              {versions[version.versionId].shortName}
            </span>
          ))}
        </div>
      )}
      <div>
        {activeVersion.skills.map((skill) => (
          <div key={skill.name}>
            <h4>{skill.name}</h4>
            <div>{skill.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
