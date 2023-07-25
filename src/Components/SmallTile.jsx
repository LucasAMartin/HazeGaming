import React from "react";
import { tombRaiderGameplay } from "../assets";

const SmallTile = () => (
  <div className={` w-full h-full`}>
    <img
      src={tombRaiderGameplay}
      alt="img"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
);

export default SmallTile;
