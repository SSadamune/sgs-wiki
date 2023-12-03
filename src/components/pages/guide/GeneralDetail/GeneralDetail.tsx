import { General, GeneralVersion } from "@/data/types/Generals";
import { useEffect, useMemo, useState } from "react";
import Error from "next/error";
import { VersionId } from "@/data/types/Version";

type Props = {
  id: string;
};

export function GeneralDetail({ id }: Props) {
  const [generalData, setGeneralData] = useState<General | null>(null);
  const [displayedVersionId, setDisplayedVersionId] =
    useState<VersionId | null>(null);

  useEffect(() => {
    const fetchGeneralData = async () => {
      try {
        const allGeneralsData = await import("@/data/generals");
        const loadedGeneral = allGeneralsData.generals[id];

        if (loadedGeneral) {
          setGeneralData(loadedGeneral);
          setDisplayedVersionId(loadedGeneral.defaultVersion);
        } else {
          console.error("武将 ID 不存在");
        }
      } catch (err) {
        console.error("无法加载数据:", err);
      }
    };

    fetchGeneralData();
  }, [id]);

  const version = useMemo(() => {
    return generalData?.versions.find(
      (v) => v.versionId === displayedVersionId
    );
  }, [displayedVersionId, generalData?.versions]);

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
