import { GeneralDetail } from "@/components/pages/guide/GeneralDetail";
import Error from "next/error";
import { useRouter } from "next/router";

export default function GeneralDetailPage() {
  const router = useRouter();

  const { id } = router.query;

  if (!router.isReady) {
    return;
  }

  if (!id || typeof id !== "string") {
    return <Error statusCode={404} title="武将 ID 不存在" />;
  }

  return (
    <div>
      <GeneralDetail id={id} />
    </div>
  );
}
