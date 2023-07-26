import React, { useState, useEffect } from "react";
import {
  tombRaiderGameplay,
  gtaGameplay,
  witcherGameplay,
  massEffectGameplay,
  skyrimGameplay,
  redDeadGameplay,
} from "../assets";

const SmallTile = () => {
  const [imageSrc, setImageSrc] = useState(redDeadGameplay);

  useEffect(() => {
    const images = [
      tombRaiderGameplay,
      gtaGameplay,
      witcherGameplay,
      massEffectGameplay,
      skyrimGameplay,
      redDeadGameplay,
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImageSrc(randomImage);
  }, []);
  return (
    <div className={` w-full h-full cursor-pointer`}>
      <img
        src={imageSrc}
        alt="img"
        className="w-full h-full object-cover rounded-lg "
      />
    </div>
  );
};

export default SmallTile;
