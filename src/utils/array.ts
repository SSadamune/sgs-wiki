export const ensureArray = <T>(itemOrArray: T | T[] | undefined): T[] =>
  itemOrArray === undefined
    ? []
    : Array.isArray(itemOrArray)
    ? itemOrArray
    : [itemOrArray];
