import React, { useEffect, useState } from "react";
import "./GeneralGallery.scss";
import imagesData from "@/data/generalCardImages.json";
import { Faction } from "@/data/types/Generals";

interface ImageInfo {
  faction: string[];
  id: number;
  name: string;
  isHired?: boolean;
  fileName: string;
}

const parseImageName = (fileName: string): ImageInfo => {
  const regex = /^H?_?([A-Z&]+)(\d{3})\s(.+)\.png$/;
  const match = fileName.match(regex);
  if (!match) throw new Error(`Invalid file name: ${fileName}`);

  const [, faction, id, name] = match;
  const isHired = fileName.startsWith("H_");
  const factionArray = faction.includes("&") ? faction.split("&") : [faction];

  return {
    faction: factionArray,
    id: parseInt(id, 10),
    name,
    isHired,
    fileName,
  };
};

const GeneralGallery: React.FC = () => {
  const [images, setImages] = useState<ImageInfo[]>([]);

  useEffect(() => {
    const parsedImages = imagesData.map((fileName: string) =>
      parseImageName(fileName)
    );
    setImages(parsedImages);
  }, []);

  const displayImage = (image: ImageInfo) => {
    const factions = new Set(image.faction);
    const banList = ["刘巴", "杨仪", "许靖", "孙鲁育", "孙鲁班"];

    return (
      ["WEI", "SHU", "WU", "QUN"].some((item) => factions.has(item)) &&
      !image.isHired &&
      !banList.includes(image.name)
    );
  };

  const compareImage = (a: ImageInfo, b: ImageInfo) => {
    const factionValue: { [key: string]: number } = {
      WEI: 1,
      SHU: 2,
      WU: 3,
      QUN: 4,
    };
    const getFactionValue = (faction: string[]) =>
      Math.min(
        ...faction.map(
          (f) => factionValue[f as keyof typeof factionValue] || 99
        )
      );

    const factionA = getFactionValue(a.faction);
    const factionB = getFactionValue(b.faction);

    if (factionA !== factionB) {
      return factionA - factionB;
    }

    return a.id - b.id;
  };

  return (
    <div className="gallery">
      {images
        .filter(displayImage)
        .sort(compareImage)
        .map((image, index) => (
          <div key={index} className="image-container">
            <img
              // src={`/images/general/${image.fileName}`}
              src={`https://ssadamune.github.io/sgs-wiki/images/general/${image.fileName}`}
              alt={`Image ${index + 1}`}
            />
            <div className="image-info">
              <p>{`ID: ${image.id}`}</p>
              <p>{`Name: ${image.name}`}</p>
              <p>{`Faction: ${
                Array.isArray(image.faction)
                  ? image.faction.join(", ")
                  : image.faction
              }`}</p>
              {image.isHired && <p>Hired</p>}
            </div>
          </div>
        ))}
    </div>
  );
};

export default GeneralGallery;
