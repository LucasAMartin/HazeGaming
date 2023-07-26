import React, { useState, useEffect } from "react";
import TileIcons from "./TileIcons";
import {
  witcherBanner,
  tombRaiderBanner,
  redDead,
  skyrim,
  massEffect,
  gta,
} from "../assets";
import Rating from "./Rating";
import PlayButton from "./PlayButton";

const LargeTile = ({ gameTitle }) => {
  const [imageSrc, setImageSrc] = useState(gta);
  useEffect(() => {
    const selectedAsset = assetLinks.find((asset) => asset.title === gameTitle);
    if (selectedAsset) {
      setImageSrc(selectedAsset.src);
    }
  }, [gameTitle]);

  return (
    <div className={` w-full h-full cursor-pointer rounded-xl`}>
      <img
        src={imageSrc}
        alt="img"
        className="w-full border-2 border-darkPurple h-full object-cover rounded-xl"
      />
      <TileIcons />
      <Rating className="absolute bottom-2 left-2" />
      <PlayButton />
    </div>
  );
};

const assetLinks = [
  {
    src: witcherBanner,
    title: "The Witcher 3",
  },
  {
    src: tombRaiderBanner,
    title: "Tomb Raider",
  },
  {
    src: redDead,
    title: "Red Dead Redemption",
  },
  {
    src: skyrim,
    title: "Skyrim",
  },
  {
    src: massEffect,
    title: "Mass Effect",
  },
  {
    src: gta,
    title: "Grand Theft Auto",
  },
];

export default LargeTile;
