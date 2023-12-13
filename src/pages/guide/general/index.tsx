import { GeneralList } from "@/components/pages/guide/GeneralList";

// TODO: common homepage
const detailLink = (key: string): string =>
  process.env.NODE_ENV === "production"
    ? `https://ssadamune.github.io/sgs-wiki/guide/general/${key}`
    : `/guide/general/${key}`;

export default function GeneralListPage() {
  return (
    <div>
      <GeneralList detailLink={detailLink} />
    </div>
  );
}
