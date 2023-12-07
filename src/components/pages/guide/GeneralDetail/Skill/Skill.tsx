import { Skill } from "@/data/types/Skills";
import classNames from "classnames";
import styles from "./Skill.module.scss";
import { useState } from "react";
import { ensureArray } from "@/utils/array";
import { circledNumber } from "@/utils/string";

type Props = {
  skill: Skill;
};

export function Skill({ skill }: Props) {
  const [displayStandard, setDisplayStandard] = useState(false);

  return (
    <div className={classNames({ [styles.conditional]: skill.isConditional })}>
      <h3>
        {skill.name}
        {/* {skill.isConditional && <span>{` <衍>`}</span>} */}
      </h3>

      {displayStandard && !!skill.standardizedSkill ? (
        <div className={styles.childSkillList}>
          {ensureArray(skill.standardizedSkill).map(
            (standardizedSkill, index) => (
              <div
                key={index}
                className={classNames({
                  [styles.conditional]: standardizedSkill.isConditional,
                })}
              >
                {!!standardizedSkill.index && (
                  <span>{`${circledNumber(standardizedSkill.index)} `}</span>
                )}
                <span>{`${standardizedSkill.description}`}</span>
              </div>
            )
          )}
        </div>
      ) : (
        <div>{skill.description}</div>
      )}

      {!!skill.memo && !displayStandard && (
        <div className={styles.memo}>{skill.memo}</div>
      )}

      {!!skill.standardizedSkill &&
        (displayStandard ? (
          <div
            onClick={() => setDisplayStandard(false)}
            className={styles.switchLink}
          >
            显示卡面描述
          </div>
        ) : (
          <div
            onClick={() => setDisplayStandard(true)}
            className={styles.switchLink}
          >
            显示规则描述
          </div>
        ))}
    </div>
  );
}
