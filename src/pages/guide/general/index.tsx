import { GeneralList } from "@/components/pages/guide/GeneralList";

// TODO: common homepage
const detailLink = (key: string): string =>
  `https://ssadamune.github.io/sgs-wiki/guide/general/${key}`;

export default function GeneralListPage() {
  return (
    <div>
      <GeneralList detailLink={detailLink} />
    </div>
  );
}
