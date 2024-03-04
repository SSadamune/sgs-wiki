// TODO: common homepage
export const detailLink = (id: string): string =>
  process.env.NODE_ENV === "production"
    ? `https://ssadamune.github.io/sgs-wiki/guide/general/${id}`
    : `/guide/general/${id}`;
