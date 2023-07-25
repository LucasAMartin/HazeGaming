import React from "react";
import { smile } from "../assets";

const Rating = () => (
  <div className="flex flex-wrap p-2 items-center absolute bottom-2 left-2 gap-2 rounded-lg bg-[rgba(20,20,20,.8)]">
    <img src={smile} className="w-6 h-6 rounded-xl bg-green-500" />
    <div className="flex flex-col flex-nowrap items-start pl-1 pr-1">
        <div className="text-white text-[12px] font-poppins text-center">
            Very Good
        </div>
        <div className="text-dimWhite text-[10px] font-poppins text-center">
            5789
        </div>
    </div>
  </div>
);

export default Rating;
