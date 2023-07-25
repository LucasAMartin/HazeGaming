import React from "react";
import { witcherBanner, home, search, bag, trending } from "../assets";

const Trending = () => (
  <div className="rounded-lg bg-pink-500">
    <div className="flex flex-row flex-nowrap text-white text-[12px] font-poppins text-center items-center pl-1 pr-1">
      <img src={trending} className="w-6 h-6 " />
      Trending
    </div>
  </div>
);

const LargeTile = () => (
  <div className={`bg-url(${witcherBanner}) w-full h-full`}>
    <img
      src={witcherBanner}
      alt="img"
      className="w-full h-full object-cover rounded-lg"
    />
    <div className="flex flex-wrap absolute top-2 left-2">
      <Trending />
      <img src={home} className="w-6 h-6 " />
      <img src={search} className="w-6 h-6 " />
      <img src={bag} className="w-6 h-6 " />
    </div>
  </div>
);

export default LargeTile;
