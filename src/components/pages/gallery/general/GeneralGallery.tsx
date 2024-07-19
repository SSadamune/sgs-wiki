import React, { useEffect, useState } from "react";
import "./GeneralGallery.scss";
import imagesData from "@/data/generalCardImages.json";

const GeneralGallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages(imagesData);
  }, []);

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={`/images/general/${image}`} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default GeneralGallery;
