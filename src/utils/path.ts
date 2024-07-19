// TODO: common homepage
export const guideGeneralDetailLink = (id: string): string =>
  process.env.NODE_ENV === "production"
    ? `https://ssadamune.github.io/sgs-wiki/guide/general/${id}`
    : `/guide/general/${id}`;
