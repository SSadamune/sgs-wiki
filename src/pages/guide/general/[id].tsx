// src\pages\guide\general\[id].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { GeneralDetail } from "@/components/pages/guide/GeneralDetail/GeneralDetail";
import { generals as generalsData } from "@/data/generals";
import { General } from "@/data/types/Generals";
import { ParsedUrlQuery } from "querystring";
import Error from "next/error";

type Props = {
  generalData: General;
};

export default function GeneralDetailPage({ generalData }: Props) {
  if (!generalData) {
    return <Error statusCode={404} title="武将信息未找到" />;
  }

  return <GeneralDetail generalData={generalData} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(generalsData)
      .filter((key) => generalsData[key].defaultVersion !== "official")
      .map((key) => ({ params: { id: key } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  context
) => {
  const key = context.params?.id;
  const generalData = generalsData[key ?? ""];

  if (!generalData) {
    return { notFound: true };
  }

  return { props: { generalData } };
};
