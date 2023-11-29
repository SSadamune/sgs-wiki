import styles from "./MilitaryOrderDrawer.module.scss";
import { Official, Xiliang, Dou } from "@/data/militaryOrders";
import type {
  MilitaryOrder,
  MilitaryOrderPack,
} from "@/data/types/MilitaryOrders";
import { MilitaryOrderCard } from "./MilitaryOrderCard/MilitaryOrderCard";
import { useEffect, useState } from "react";
import classNames from "classnames";

type Process = "allCards" | "shuffling" | "drawn";

export function MilitaryOrderDrawer() {
  const packList = [Official, Xiliang, Dou];

  const [drawCount, setDrawCount] = useState<number>(2);
  const [shuffledPack, setShuffledPack] = useState<MilitaryOrderPack>(
    packList[0],
  );
  const [process, setProcess] = useState<Process>("allCards");
  const [ableToStop, setAbleToStop] = useState(false);
  const [ableToReset, setAbleToReset] = useState(false);
  const [selectedMilitaryOrder, setSelectedMilitaryOrder] =
    useState<MilitaryOrder>();
  const [showsSelected, setShowsSelected] = useState(false);

  const [shufflingTimer, setShufflingTimer] = useState<NodeJS.Timeout | null>(
    null,
  );

  const handleClickShuffle = () => {
    if (shufflingTimer) return; // 防止重复启动定时器

    setProcess("shuffling");
    setAbleToStop(false);

    const timer = setInterval(() => {
      setShuffledPack(shuffleMOPack(shuffledPack));
    }, 20);

    setShufflingTimer(timer);

    // 1秒后启用停止按钮
    setTimeout(() => setAbleToStop(true), 1000);
  };

  const handleClickStopShuffling = () => {
    if (shufflingTimer) {
      clearInterval(shufflingTimer);
      setShufflingTimer(null);
    }
    setProcess("drawn");
    setAbleToReset(false);
  };

  // 洗混军令卡
  const shuffleMOPack = (militaryOrderPack: MilitaryOrderPack) => {
    const orderList = militaryOrderPack.militaryOrders;
    for (let i = orderList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [orderList[i], orderList[j]] = [orderList[j], orderList[i]];
    }
    return { ...militaryOrderPack, militaryOrders: orderList };
  };

  // 清除定时器，防止内存泄漏
  useEffect(() => {
    return () => {
      if (shufflingTimer) {
        clearInterval(shufflingTimer);
      }
    };
  }, [shufflingTimer]);

  // 更新 drawCount
  const updateDrawCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(event.target.value, 10);
    if (!isNaN(newCount) && newCount >= 0) {
      setDrawCount(newCount);
    }
  };

  const incrementDrawCount = () => {
    setDrawCount((prevCount) =>
      prevCount < shuffledPack.size ? prevCount + 1 : shuffledPack.size,
    );
  };

  const decrementDrawCount = () => {
    setDrawCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 0));
  };

  const handleClickReset = () => {
    setProcess("allCards");
  };

  // 从随机抽取的军令卡中选择一张
  const handleSelectMilitaryOrder = (id: number) => {
    setAbleToReset(true);
    setSelectedMilitaryOrder(
      shuffledPack.militaryOrders.filter(
        (militaryOrder) => militaryOrder.id === id,
      )[0],
    );
    setShowsSelected(true);
  };

  return (
    <div className={styles.container}>
      {process === "allCards" && (
        <div className={styles.packList}>
          {packList.map((pack, index) => (
            <button onClick={(e) => setShuffledPack(pack)} key={index}>
              {pack.name}
            </button>
          ))}
        </div>
      )}

      <div className={styles.controlRow}>
        <div className={styles.drawCount}>
          <button
            className={styles.countButton}
            onClick={decrementDrawCount}
            disabled={process === "drawn"}
          >
            -
          </button>
          <input
            type="number"
            value={drawCount}
            onChange={updateDrawCount}
            className={styles.drawCountInput}
            disabled={process === "drawn"}
          />
          <button
            className={styles.countButton}
            onClick={incrementDrawCount}
            disabled={process === "drawn"}
          >
            +
          </button>
        </div>

        {process === "allCards" ? (
          <button className={styles.mainButton} onClick={handleClickShuffle}>
            洗牌
          </button>
        ) : process === "shuffling" ? (
          <button
            className={styles.mainButton}
            onClick={handleClickStopShuffling}
            disabled={!ableToStop}
          >
            抽卡
          </button>
        ) : (
          <button
            className={styles.mainButton}
            onClick={handleClickReset}
            disabled={!ableToReset}
          >
            重置
          </button>
        )}
      </div>

      <div className={styles.pack}>
        {shuffledPack.militaryOrders.map((militaryOrder, index) => {
          const isRemaining = index >= drawCount;

          if (isRemaining && process === "drawn") {
            return null;
          }

          return (
            <div
              className={classNames(styles.card, {
                [styles.sub]: isRemaining && process === "shuffling",
              })}
              key={index}
            >
              <MilitaryOrderCard
                militaryOrder={militaryOrder}
                isDrawn={process === "drawn"}
                packId={shuffledPack.id}
                onClickSelect={handleSelectMilitaryOrder}
              />
            </div>
          );
        })}
      </div>

      {showsSelected && !!selectedMilitaryOrder && (
        <div className={styles.selected}>
          <div />
          <div>
            {selectedMilitaryOrder.reverseDescription ??
              selectedMilitaryOrder.description}
          </div>
          <button
            className={styles.backButton}
            onClick={(e) => setShowsSelected(false)}
          >
            返回
          </button>
        </div>
      )}
    </div>
  );
}
