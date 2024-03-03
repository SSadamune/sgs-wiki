import { GeneralList } from "@/components/pages/guide/GeneralList";

// TODO: common homepage
const detailLink = (id: string): string =>
  process.env.NODE_ENV === "production"
    ? `https://ssadamune.github.io/sgs-wiki/guide/general/${id}`
    : `/guide/general/${id}`;

export default function GeneralListPage() {
  return (
    <div>
      <GeneralList detailLink={detailLink} />
    </div>
  );
}
