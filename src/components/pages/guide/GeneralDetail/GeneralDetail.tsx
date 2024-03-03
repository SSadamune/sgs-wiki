import { General } from "@/data/types/Generals";
import { useMemo, useState, useCallback, useEffect } from "react";
import Error from "next/error";
import { versions } from "@/data/versions";
import { VersionId } from "@/data/types/Version";
import styles from "./GeneralDetail.module.scss";
import classNames from "classnames";
import { Skill as SkillType } from "@/data/types/Skills";
import { joinStrings } from "@/utils/string";
import { Skill } from "./Skill";
import Image from "next/image";
import { displayHealth, parseGeneral } from "@/utils/data";

type Props = {
  generalData: General;
};

export function GeneralDetail({ generalData }: Props) {
  const [activeVersionId, setActiveVersionId] = useState<VersionId>(
    generalData.defaultVersion
  );
  const [expandReferences, setExpandReferences] = useState(false);
  const [avatarLoaded, setAvatarLoaded] = useState(true);

  const activeVersion = useMemo(() => {
    return parseGeneral(generalData, activeVersionId);
  }, [activeVersionId, generalData]);

  if (!generalData) {
    return <Error statusCode={404} title="武将信息未找到" />;
  }

  if (!activeVersion) {
    return <Error statusCode={404} title="技能版本信息未找到" />;
  }

  console.log(activeVersion);

  return (
    <div>
      <div className={styles.header}>
        <div>
          <a
            href={
              process.env.NODE_ENV === "production"
                ? `https://ssadamune.github.io/sgs-wiki/guide/general`
                : `/guide/general`
            }
          >
            返回
          </a>
        </div>
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

      <div className={styles.title}>
        <div
          className={styles.avatar}
          style={{ display: avatarLoaded ? "block" : "none" }}
        >
          <Image
            src={`https://ssadamune.github.io/sgs-wiki/images/avatar/${generalData.id}.png`}
            alt={generalData.name}
            fill
            onError={() => setAvatarLoaded(false)}
          />
        </div>
        <div className={styles.information}>
          <div className={styles.informationLine}>
            <h2 className={styles.name}>{generalData.name}</h2>
            <div>{`${activeVersion.faction}`}</div>
            <div>
              <span>{displayHealth(activeVersion.health)}</span>
            </div>
          </div>
          <div className={styles.informationLine}>
            {!!activeVersion.relatedGenerals && (
              <span>{`[珠]${activeVersion.relatedGenerals.join("，")}`}</span>
            )}
          </div>
          <div className={styles.informationLine}>
            {!!activeVersion.hiredFaction && (
              <span>
                {`[客]${Object.keys(activeVersion.hiredFaction).join("，")}`}
              </span>
            )}
          </div>
        </div>
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
