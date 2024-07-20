import React, { useCallback, useEffect, useState } from "react";
import "./GeneralGallery.scss";
import imagesData from "@/data/generalCardImages.json";
import ReactModal from "react-modal";
import LazyLoad from "react-lazyload";

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
  const [selectedImage, setSelectedImage] = useState<ImageInfo | null>(null);
  const [selectedFaction, setSelectedFaction] = useState<string | null>(null);

  useEffect(() => {
    const parsedImages = imagesData.map((fileName: string) =>
      parseImageName(fileName)
    );
    setImages(parsedImages);
  }, []);

  const displayImage = (image: ImageInfo) => {
    const factions = new Set(image.faction);
    const banList = [
      "陈群",
      "陈琳",
      "王朗",
      "郝昭",
      "留赞",
      "刘巴",
      "杨仪",
      "许靖",
      "孙鲁育",
      "孙鲁班",
    ];

    return (
      (!selectedFaction || factions.has(selectedFaction)) &&
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

    if (!selectedFaction && factionA !== factionB) {
      return factionA - factionB;
    }

    return a.id - b.id;
  };

  const openModal = (image: ImageInfo) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <div className="faction-tabs">
        {["ALL", "WEI", "SHU", "WU", "QUN"].map((faction) => (
          <button
            key={faction}
            className={selectedFaction === faction ? "active" : ""}
            onClick={() =>
              setSelectedFaction(faction === "ALL" ? null : faction)
            }
          >
            {faction}
          </button>
        ))}
      </div>

      {images
        .filter(displayImage)
        .sort(compareImage)
        .map((image, index) => (
          <div
            key={index}
            className="image-container"
            onClick={() => openModal(image)}
          >
            <LazyLoad height={200} offset={100} once>
              <img
                src={`https://ssadamune.github.io/sgs-wiki/images/general/${image.fileName}`}
                alt={`Image ${index + 1}`}
              />
            </LazyLoad>
          </div>
        ))}

      {selectedImage && (
        <ReactModal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <img
            src={`https://ssadamune.github.io/sgs-wiki/images/general/${selectedImage.fileName}`}
            alt={selectedImage.name}
            className="modal-image"
          />
        </ReactModal>
      )}
    </div>
  );
};

export default GeneralGallery;
