import { PackId, MilitaryOrder } from "@/data/types/MilitaryOrders";
import styles from "./MilitaryOrderCard.module.scss";
import { versions } from "@/data/versions";

type Props = {
  militaryOrder: MilitaryOrder;
  isDrawn?: boolean;
  packId: PackId;
  onClickSelect?: (id: number) => void;
};

const displayedPack = (packId: PackId) => versions[packId].name;

export function MilitaryOrderCard({
  militaryOrder,
  isDrawn,
  packId,
  onClickSelect,
}: Props) {
  return (
    <div className={styles.card}>
      <div>
        <div>
          军令：{displayedPack(packId)} {militaryOrder.id}
        </div>
        <div className={styles.text}>{militaryOrder.description}</div>
      </div>
      {!!isDrawn && !!onClickSelect && (
        <button
          onClick={(e) => onClickSelect(militaryOrder.id)}
          className={styles.selectButton}
        >
          选择此军令
        </button>
      )}
    </div>
  );
}
