import {React, useEffect, useState} from "react";
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

const LibraryDisplay = () => {
  const [shuffledGameTitles, setShuffledGameTitles] = useState([]);

  useEffect(() => {
    // Create an array with 4 separate copies of gameTitles and shuffle each of them
    const repeatedGameTitles = Array(4).fill().map(() => {
      const copy = [...gameTitles];
      shuffleArray(copy);
      return copy;
    });

    setShuffledGameTitles(repeatedGameTitles);
  }, []);

  return (
    <div className="flex flex-wrap gap-3 mt-4 w-full h-full justify-center">
      {shuffledGameTitles.map((gameTitlesRow, index) =>
        gameTitlesRow.map((title) => {
          const asset = assetLinks.find((asset) => asset.title === title);
          return (
            <div key={`${title}-${index}`} >
              <img
                src={asset.src}
                alt={title}
                className="sm:w-[200px] sm:h-[300px] w-[150px] h-[250px] hover:scale-110 duration-200 object-cover rounded-md"
              />
            </div>
          );
        })
      )}
    </div>
  );
};

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
