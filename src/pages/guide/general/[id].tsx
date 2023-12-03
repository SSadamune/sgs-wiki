import { GeneralDetail } from "@/components/pages/guide/GeneralDetail";
import { General } from "@/data/types/Generals";
import { VersionId } from "@/data/types/Version";
import Error from "next/error";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

export default function GeneralDetailPage() {
  const router = useRouter();

  const { id } = router.query;

  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  if (!id || typeof id !== "string") {
    return <Error statusCode={404} title="武将id错误" />;
  }

  return (
    <div>
      <GeneralDetail id={id} />
    </div>
  );
}
