import { Faction } from "@/data/types/Generals";

export const ensureArray = <T>(itemOrArray: T | T[] | undefined): T[] =>
  itemOrArray === undefined
    ? []
    : Array.isArray(itemOrArray)
    ? itemOrArray
    : [itemOrArray];

export const compareFaction = (
  factionA: Faction | Faction[],
  factionB: Faction | Faction[]
) => {
  if (Array.isArray(factionA) && !Array.isArray(factionB)) {
    return 1;
  } else if (!Array.isArray(factionA) && Array.isArray(factionB)) {
    return -1;
  } else if (Array.isArray(factionA) && Array.isArray(factionB)) {
    if (factionA.length !== factionB.length) {
      return factionA.length - factionB.length;
    }
    for (let i = 0; i < factionA.length; i++) {
      const compareResult =
        Faction.indexOf(factionA[i]) - Faction.indexOf(factionB[i]);
      if (compareResult !== 0) {
        return compareResult;
      }
    }
    return 0;
  } else {
    return (
      Faction.indexOf(factionA as Faction) -
      Faction.indexOf(factionB as Faction)
    );
  }
};

export const notNull = <T>(item: T | null): item is T => {
  return !!item;
};
