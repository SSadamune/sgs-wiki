import { Skill } from "@/data/types/Skills";
import classNames from "classnames";
import styles from "./Skill.module.scss";

type Props = {
  skill: Skill;
};

export function Skill({ skill }: Props) {
  return (
    <div className={classNames({ [styles.conditional]: skill.isConditional })}>
      <h3>
        {skill.name}
        {skill.isConditional && <span>{` <衍>`}</span>}
      </h3>
      <div>{skill.description}</div>
      {!!skill.memo && <div className={styles.memo}>{skill.memo}</div>}
    </div>
  );
}
