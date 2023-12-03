import { GeneralList } from "@/components/pages/guide/GeneralList";

const detailLink = (key: string): string => `general/${key}`;

export default function GeneralListPage() {
  return (
    <div>
      <GeneralList detailLink={detailLink} />
    </div>
  );
}
