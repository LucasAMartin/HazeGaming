import React, { useState, useEffect } from "react";
import { witcherCover, tombRaiderCover, redDeadCover, skyrimCover, massEffectCover, gtaCover } from "../assets";
import Rating from "./Rating";
import PlayButton from "./PlayButton";

const MediumTile = ({ gameTitle }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [imageTitle, setImageTitle] = useState("");

  useEffect(() => {
    const selectedAsset = assetLinks.find((asset) => asset.title === gameTitle);
    if (selectedAsset) {
      setImageSrc(selectedAsset.src);
      setImageTitle(selectedAsset.title);
    }
  }, [gameTitle]);

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

const assetLinks = [
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
