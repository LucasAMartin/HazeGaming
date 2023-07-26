import React from "react";
import { witcherCover, tombRaiderCover, redDeadCover, skyrimCover, massEffectCover, gtaCover } from "../assets";


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const gameTitles = [
  "Red Dead Redemption",
  "Grand Theft Auto",
  "The Witcher 3",
  "Tomb Raider",
  "Mass Effect",
  "Skyrim",
];
shuffleArray(gameTitles);

const LibraryDisplay = () => (
    <div className="flex flex-wrap gap-3 mt-4 w-full h-full">
      {gameTitles.map((title) => {
        const asset = assetLinks.find((asset) => asset.title === title);
        return (
          <img
            key={title}
            src={asset.src}
            alt={title}
            style={{ width: "200px", height: "250px" }}
            className="hover:scale-110 duration-200 object-cover rounded-md"
          />
        );
      })}
      {gameTitles.map((title) => {
        const asset = assetLinks.find((asset) => asset.title === title);
        return (
          <img
            key={title}
            src={asset.src}
            alt={title}
            style={{ width: "200px", height: "250px" }}
            className="hover:scale-110 duration-200 object-cover rounded-md"
          />
        );
      })}
      {gameTitles.map((title) => {
        const asset = assetLinks.find((asset) => asset.title === title);
        return (
          <img
            key={title}
            src={asset.src}
            alt={title}
            style={{ width: "200px", height: "250px" }}
            className="hover:scale-110 duration-200 object-cover rounded-md"
          />
        );
      })}
      {gameTitles.map((title) => {
        const asset = assetLinks.find((asset) => asset.title === title);
        return (
          <img
            key={title}
            src={asset.src}
            alt={title}
            style={{ width: "200px", height: "250px" }}
            className="hover:scale-110 duration-200 object-cover rounded-md"
          />
        );
      })}
    </div>
  );
  

export default LibraryDisplay;

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
