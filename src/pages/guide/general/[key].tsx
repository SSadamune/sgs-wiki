// src\pages\guide\general\[id].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { GeneralDetail } from "@/components/pages/guide/GeneralDetail/GeneralDetail";
import { generals as generalsData } from "@/data/generals";
import { General } from "@/data/types/Generals";
import Error from "next/error";

type Props = {
  generalData: General;
};

export default function GeneralDetailPage({ generalData }: Props) {
  if (!generalData) {
    return <Error statusCode={404} title="武将信息未找到" />;
  }

  return (
    <div>
      <GeneralDetail generalData={generalData} />
    </div>
  );
}

// TODO: common
const displayExpansions = ["SP", "纵横捭阖", "海外专属"];
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(generalsData)
      .filter(
        (key) =>
          generalsData[key].defaultVersion !== "official" ||
          displayExpansions.includes(generalsData[key].expansionPack)
      )
      .map((key) => ({ params: { key } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { key: string }> = async (
  context
) => {
  const key = context.params?.key;
  const generalData = generalsData[key ?? ""];

  if (!generalData) {
    return { notFound: true };
  }

  return { props: { generalData } };
};
