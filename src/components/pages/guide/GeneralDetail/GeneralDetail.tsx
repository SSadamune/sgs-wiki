import { General } from "@/data/types/Generals";
import { useMemo } from "react";
import Error from "next/error";

type Props = {
  generalData: General;
};

export function GeneralDetail({ generalData }: Props) {
  const version = useMemo(() => {
    return generalData?.versions.find(
      (v) => v.versionId === generalData.defaultVersion
    );
  }, [generalData]);

  if (!generalData) {
    return <Error statusCode={404} title="武将信息未找到" />;
  }

  if (!version) {
    return <Error statusCode={404} title="技能版本信息未找到" />;
  }

  return (
    <div>
      武将：{generalData?.name}
      <div>
        {version?.skills.map((skill) => (
          <div key={skill.name}>
            <div>{skill.name}</div>
            <div>{skill.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
