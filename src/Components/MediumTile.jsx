import React from "react";
import TileIcons from "./TileIcons";
import { witcherBanner } from "../assets";
import Rating from "./Rating";
import PlayButton from "./PlayButton";

const LargeTile = () => (
  <div className={` w-full h-full`}>
    <img
      src={witcherBanner}
      alt="img"
      className="w-full h-full object-cover rounded-lg"
    />
    <TileIcons/>
    <Rating/>
    <PlayButton/>
  </div>
);

export default LargeTile;
