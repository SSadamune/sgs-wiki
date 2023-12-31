import { General } from "@/data/types/Generals";
import { useMemo, useState } from "react";
import Error from "next/error";
import { versions } from "@/data/versions";
import { VersionId } from "@/data/types/Version";
import styles from "./GeneralDetail.module.scss";
import classNames from "classnames";
import { Skill as SkillType } from "@/data/types/Skills";
import { joinStrings } from "@/utils/string";
import { Skill } from "./Skill";

type Props = {
  generalData: General;
};

export function GeneralDetail({ generalData }: Props) {
  const [activeVersionId, setActiveVersionId] = useState<VersionId>(
    generalData.defaultVersion
  );
  const [expandReferences, setExpandReferences] = useState(false);

  const activeVersion = useMemo(() => {
    return parseGeneral(generalData, activeVersionId);
  }, [activeVersionId, generalData]);

  if (!generalData) {
    return <Error statusCode={404} title="武将信息未找到" />;
  }

  if (!activeVersion) {
    return <Error statusCode={404} title="技能版本信息未找到" />;
  }

  return (
    <div>
      <div className={styles.title}>
        <h2>{generalData.name}</h2>
        <div>
          {generalData.versions.length > 1 && (
            <div className={styles.versionList}>
              {generalData.versions.map((version) => (
                <span
                  key={version.versionId}
                  onClick={() => setActiveVersionId(version.versionId)}
                  className={classNames({
                    [styles.activeVersion]:
                      version.versionId === activeVersionId,
                  })}
                >
                  {versions[version.versionId].shortName}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <div>{`${activeVersion.faction}`}</div>
        <div>
          <span>
            {typeof activeVersion.health === "number"
              ? `体力：${activeVersion.health}`
              : `体力：主 ${activeVersion.health.main}，副 ${activeVersion.health.sub}`}
          </span>
        </div>
        {!!activeVersion.relatedGenerals && (
          <div>珠联璧合：{activeVersion.relatedGenerals.join("，")}</div>
        )}
      </div>

      <div>
        {activeVersion.skills.map((skill) => (
          <Skill skill={skill} key={skill.name} />
        ))}
      </div>

      {!!activeVersion.references && activeVersion.references.length > 0 && (
        <div>
          <h3
            className={styles.referencesTitle}
            onClick={() => setExpandReferences(!expandReferences)}
          >
            {expandReferences ? "▿" : "▹"} 参考链接
          </h3>
          {expandReferences && (
            <ul>
              {activeVersion.references.map((reference, index) => (
                <li key={index} className={styles.referencesItem}>
                  <a href={reference.url}>{reference.title}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

type ParsedGeneral = {
  versionId: VersionId;
  parsedGeneralId: string;
  skills: SkillType[];
  faction: string;
  health: number | HealthWithSub;
  expansionPack: string;
  relatedGenerals?: string[];
  references?: { title: string; url: string }[];
};

type HealthWithSub = { main: number; sub: number };

const parseGeneral = (
  generalData: General,
  versionId: VersionId
): ParsedGeneral | null => {
  const versionData = generalData.versions.find(
    (v) => v.versionId === versionId
  );
  if (!versionData) return null;

  const mainHealth = versionData.health ?? generalData.health;
  const subHealth = versionData.healthSub ?? generalData.healthSub;
  const health: number | HealthWithSub = !!subHealth
    ? { main: mainHealth, sub: subHealth }
    : mainHealth;

  return {
    ...versionData,
    versionId,
    parsedGeneralId: joinStrings(versionData.generalId ?? generalData.id),
    faction: joinStrings(versionData.faction ?? generalData.faction),
    health,
    expansionPack: versionData.expansionPack ?? generalData.expansionPack,
    relatedGenerals: versionData.relatedGenerals ?? generalData.relatedGenerals,
  };
};
