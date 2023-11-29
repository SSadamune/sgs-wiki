import { PackId, MilitaryOrder } from "@/data/types/MilitaryOrders";
import styles from "./MilitaryOrderCard.module.scss";

type Props = {
  militaryOrder: MilitaryOrder;
  isDrawn?: boolean;
  packId: PackId;
  onClickSelect?: (id: number) => void;
};

const groupDisplay = (packId: PackId) =>
  packId === "official"
    ? "官方"
    : packId === "xiliang"
    ? "西凉"
    : packId === "dou"
    ? "豆包"
    : "未知";

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
          军令：{groupDisplay(packId)} {militaryOrder.id}
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
