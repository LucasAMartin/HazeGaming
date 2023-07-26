import React, { useState, useEffect } from "react";
import { witcherCover, tombRaiderCover, redDeadCover, skyrimCover, massEffectCover, gtaCover } from "../assets";
import Rating from "./Rating";
import PlayButton from "./PlayButton";

const MediumTile = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [imageTitle, setImageTitle] = useState("");

  useEffect(() => {
    const randomAsset = assetLinks[Math.floor(Math.random() * assetLinks.length)];
    setImageSrc(randomAsset.src);
    setImageTitle(randomAsset.title);
  }, []);

  return (
    <div className={`bg-darkPurple w-full h-full rounded-lg flex items-center cursor-pointer`}>
      <img
        src={imageSrc}
        alt="img"
        className="w-[25%] h-[150px] ml-6 object-cover rounded-lg "
      />
      <div className="text-white text-[20px] font-semibold absolute top-4 left-[35%]">{imageTitle}</div>
      <Rating className="absolute bottom-2 left-[35%]" />
      <PlayButton />
    </div>
  );
};

export const assetLinks = [
  {
    src: witcherCover,
    title: "The Witcher 3",
  },
  {
    src: tombRaiderCover,
    title: "Tomb Raider",
  },
  {
    src: redDeadCover,
    title: "Red Dead Redemption",
  },
  {
    src: skyrimCover,
    title: "Skyrim",
  },
  {
    src: massEffectCover,
    title: "Mass Effect",
  },
  {
    src: gtaCover,
    title: "Grand Theft Auto",
  },
];

export default MediumTile;
