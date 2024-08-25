"use state";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
type RewindCorousalProps = {
  onClick: ({ index }: any) => void;
  currentIndex: number;
  imgArray: string[];
};
const RewindCorousal = ({
  imgArray,
  currentIndex,
  onClick,
}: RewindCorousalProps) => {
  return (
    <div className="relative flex flex-col justify-between w-[68%] h-full overflow-hidden">
      {/* Corousal images */}
      <div className=" h-[80%] flex flex-row justify-between">
        {imgArray.map((item) => (
          <div
            className="h-full w-[44%] flex-shrink-0 transition-transform mr-3 duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={`${item}`} className="w-full h-full " />
          </div>
        ))}
      </div>
      {/* indicaters */}
      <div className="  flex flex-row">
        {imgArray.map((item, index) => (
          <div
            onClick={() => onClick(index)}
            className={`flex justify-center items-center w-4 h-4 mr-1 border rounded-full cursor-pointer
                ${currentIndex == index ? "border-black" : "border-none"}`}
          >
            <div
              className={`
                transition-all w-[6px] h-[6px] rounded-full
                ${currentIndex == index ? "bg-black" : "bg-[#B6B6B6]"} `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewindCorousal;
