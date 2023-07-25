import React from "react";
import TileIcons from "./TileIcons";
import { witcherBanner } from "../assets";


const LargeTile = () => (
  <div className={`bg-url(${witcherBanner}) w-full h-full`}>
    <img
      src={witcherBanner}
      alt="img"
      className="w-full h-full object-cover rounded-lg"
    />
    <TileIcons/>
  </div>
);

export default LargeTile;
