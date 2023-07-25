import React from 'react'
import { ios, steam, windows, trending } from "../assets";

const TileIcons = () => (
    <div className="flex flex-wrap absolute top-2 left-2 gap-2">
      <div className="rounded-lg bg-pink-500">
        <div className="flex flex-row flex-nowrap text-white text-[12px] font-poppins text-center items-center pl-1 pr-1">
          <img src={trending} className="w-6 h-6 " />
          Trending
        </div>
      </div>
        <img src={windows} className="w-6 h-6" />
        <img src={ios} className="w-6 h-6 " />
        <img src={steam} className="w-6 h-6 " />
    </div>
  );


export default TileIcons