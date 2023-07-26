import React, { useState, useEffect } from "react";
import {
  tombRaiderGameplay,
  gtaGameplay,
  witcherGameplay,
  massEffectGameplay,
  skyrimGameplay,
  redDeadGameplay,
} from "../assets";

const SmallTile = ({ gameTitle }) => {
  const [imageSrc, setImageSrc] = useState(redDeadGameplay);

  useEffect(() => {
    const selectedAsset = assetLinks.find((asset) => asset.title === gameTitle);
    if (selectedAsset) {
      setImageSrc(selectedAsset.src);
    }
  }, [gameTitle]);
  return (
    <div className={` w-full h-full cursor-pointer`}>
      <img
        src={imageSrc}
        alt="img"
        className="border-2 border-darkPurple w-full h-full object-cover rounded-lg "
      />
    </div>
  );
};

const assetLinks = [
  {
    src: witcherGameplay,
    title: "The Witcher 3",
  },
  {
    src: tombRaiderGameplay,
    title: "Tomb Raider",
  },
  {
    src: redDeadGameplay,
    title: "Red Dead Redemption",
  },
  {
    src: skyrimGameplay,
    title: "Skyrim",
  },
  {
    src: massEffectGameplay,
    title: "Mass Effect",
  },
  {
    src: gtaGameplay,
    title: "Grand Theft Auto",
  },
];

export default SmallTile;
