import { General } from "@/data/types/Generals";
import { VersionId } from "@/data/types/Version";
import { useEffect, useMemo, useState } from "react";

type Props = {
  id: string;
};

export function GeneralDetail({ id }: Props) {
  const [generalData, setGeneralData] = useState<General | null>(null);
  const [displayedVersionId, setDisplayedVersionId] =
    useState<VersionId | null>(null);

  useEffect(() => {
    import("@/data/generals")
      .then((module) => {
        const loadedGeneral = module.generals[id];
        if (loadedGeneral) {
          setGeneralData(loadedGeneral);
          setDisplayedVersionId(loadedGeneral.defaultVersion);
        } else {
          console.error("武将 ID 不存在");
        }
      })
      .catch((err) => {
        console.error("无法加载数据:", err);
      });
  }, [id]);

  const version = useMemo(() => {
    if (displayedVersionId !== null) {
      return generalData?.versions.filter(
        (version) => version.versionId === displayedVersionId
      )[0];
    }
  }, [displayedVersionId, generalData?.versions]);

  if (generalData === null) {
    <div>Loading</div>;
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
