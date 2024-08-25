"use state";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
type RewindCorousalProps = {
  imgArray: string[];
};
const RewindCorousal = ({ imgArray }: RewindCorousalProps) => {
  const [curIndex, setCurrentImg] = useState(0);
  //   next button logic
  const next = () => {
    setCurrentImg(() => (curIndex == imgArray.length - 1 ? 0 : curIndex + 1));
  };
  //   prev button logic
  const prev = () => {
    setCurrentImg(() => (curIndex == 0 ? imgArray.length - 1 : curIndex - 1));
  };
  return (
    <div className="relative w-[68%] h-full overflow-hidden">
      {/* Corousal images */}
      <div className=" h-[80%] flex flex-row justify-between">
        {imgArray.map((item) => (
          <div
            className="h-full w-[44%] flex-shrink-0 transition-transform mr-3 duration-500"
            style={{ transform: `translateX(-${curIndex * 100}%)` }}
          >
            <img src={`${item}`} className="w-full h-full " />
          </div>
        ))}
      </div>
      {/* indicators */}
      <div className="  flex flex-row justify-between w-[100px] bg-purple-200">
        <button
          onClick={prev}
          className="flex flex- w-7 h-7 p-1 shadow-xl bg-white justify-center items-center rounded-full"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="flex flex- w-7 h-7 p-1 shadow-xl bg-white justify-center items-center rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
      {/* indicaters */}
      <div className=" bg-purple-200 flex flex-row">
        {imgArray.map((item, index) => (
          <div
            onClick={() => setCurrentImg(index)}
            className={`flex justify-center items-center w-4 h-4 mr-1 border rounded-full cursor-pointer
                ${curIndex == index ? "border-black" : "border-none"}`}
          >
            <div
              className={`
                transition-all w-[6px] h-[6px] rounded-full
                ${curIndex == index ? "bg-black" : "bg-[#B6B6B6]"} `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewindCorousal;
