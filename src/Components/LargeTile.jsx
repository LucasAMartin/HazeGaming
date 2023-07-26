import React, { useState, useEffect } from "react";
import TileIcons from "./TileIcons";
import { witcherBanner, tombRaiderBanner, redDead, skyrim, massEffect, gta } from "../assets";
import Rating from "./Rating";
import PlayButton from "./PlayButton";

const LargeTile = () => {
  const [imageSrc, setImageSrc] = useState(gta);

  useEffect(() => {
    const images = [witcherBanner, tombRaiderBanner, redDead, skyrim, massEffect, gta];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImageSrc(randomImage);
  }, []);

  return (
    <div className={` w-full h-full`}>
      <img
        src={imageSrc}
        alt="img"
        className="w-full h-full object-cover rounded-lg"
      />
      <TileIcons/>
      <Rating className="absolute bottom-2 left-2"/>
      <PlayButton/>
    </div>
  );
};

export default LargeTile;
