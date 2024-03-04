import { VersionId } from "@/data/types/Version";
import { Skill as SkillType } from "@/data/types/Skills";
import { General, HiredFaction } from "@/data/types/Generals";
import { joinStrings } from "./string";

export type ParsedGeneral = {
  versionId: VersionId;
  id: string;
  avatarId: string;
  officialId: string;
  name: string;
  skills: SkillType[];
  faction: string;
  health: number | HealthWithSub;
  expansionPack: string;
  relatedGenerals?: string[];
  hiredFaction?: HiredFaction;
  references?: { title: string; url: string }[];
};

type HealthWithSub = { main: number; sub: number };

export const parseGeneral = (
  generalData: General,
  versionId: VersionId
): ParsedGeneral | null => {
  const versionData = generalData.versions.find(
    (v) => v.versionId === versionId
  );
  if (!versionData) return null;

  const mainHealth = versionData.health ?? generalData.health;
  const subHealth = versionData.healthSub ?? generalData.healthSub;
  const health: number | HealthWithSub = !!subHealth
    ? { main: mainHealth, sub: subHealth }
    : mainHealth;

  return {
    ...versionData,
    versionId,
    id: versionData.generalId ?? generalData.id,
    avatarId: versionData.avatarId ?? generalData.id,
    officialId: generalData.id,
    name: generalData.name,
    faction: joinStrings(versionData.faction ?? generalData.faction),
    health,
    expansionPack: versionData.expansionPack ?? generalData.expansionPack,
    relatedGenerals: versionData.relatedGenerals ?? generalData.relatedGenerals,
    hiredFaction: versionData.hiredFaction,
  };
};

export const displayHealth = (health: number | HealthWithSub): string => {
  if (typeof health === "number") {
    switch (health) {
      case 1.5:
        return "696";
      case 2:
        return "6969";
      case 2.5:
        return "69696";
      default:
        return "Unknown";
    }
  } else {
    return `${displayHealth(health.main)} / ${displayHealth(health.sub)}`;
  }
};
