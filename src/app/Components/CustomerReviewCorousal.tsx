import { Cherish } from "next/font/google";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

type RewindCorousalProps = {
  custArray: any;
};
const CustomerReviewCorousal = ({ custArray }: RewindCorousalProps) => {
  const [curIndex, setCurrentImg] = useState(0);
  //   next button logic
  const next = () => {
    setCurrentImg(() => (curIndex == custArray.length - 1 ? 0 : curIndex + 1));
  };
  //   prev button logic
  const prev = () => {
    setCurrentImg(() => (curIndex == 0 ? custArray.length - 1 : curIndex - 1));
  };
  return (
    <div className="border border-black w-[79%] h-[94%] flex flex-col justify-center items-center  overflow-hidden">
      {/* Corousal images */}
      <div
        className=" h-[55%] w-full bg-white flex flex-row justify-between rounded-[5px]"
        style={{ boxShadow: "0px 0px 20px -7px" }}
      >
        {/* {custArray.map((item: any) => {
          console.log("item", item.text);
          return (
            <div
              className="border border-black h-full w-[44%] flex-shrink-0 flex flex-row p-[40px] ransition-transform mr-3 duration-500 rounded-[5px]"
              style={{ transform: `translateX(-${curIndex * 100}%)` }}
            >
              <img className="w-[32%] h-[96%] mt-[3px]" src={item.cusImg} />
              <div className="pl-[43px] flex flex-col justify-between">
                <p className="text-[11px]">{item.text}</p>
                <img
                  className="w-[56px] h-[12px] mt-[3px]"
                  src="/Homepage/3_sec/stars.png"
                  style={{ boxShadow: "-13px 13px 0 #d9d9d9" }}
                />
                <div className="border border-black  w-1/2" />
                <h4
                  className="text-[#484848] text-[50px] mainHeading"
                  style={{ fontSize: "clamp(1rem, 2vw, 3rem)" }}
                >
                  {item.cusName}
                </h4>
                <p className="text-[12px]">{item.passion}</p>
              </div>
            </div>
          );
        })} */}
      </div>
      {/* indicators */}
      <div className="  flex flex-row justify-between w-[100px] mt-[39px] ">
        <button
          onClick={prev}
          className="flex flex- w-8 h-8 p-[6px] shadow-black bg-white  justify-center items-center rounded-full"
          style={{ boxShadow: "0px 0px 20px -7px" }}
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="flex flex- w-8 h-8 p-[6px] shadow-black bg-white  justify-center items-center rounded-full"
          style={{ boxShadow: "0px 0px 20px -7px" }}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CustomerReviewCorousal;
