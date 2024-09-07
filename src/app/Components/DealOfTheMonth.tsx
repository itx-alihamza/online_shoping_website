import React, { useState } from "react";
import RewindCorousal from "./RewindCorousal";
import { ChevronLeft, ChevronRight } from "react-feather";
import SignBtn from "./SignBtn";
type DealOfTheMonthProps = {
  heading: string;
};
// Corousal images
const imgData = [
  "/Homepage/2_sec/1.png",
  "/Homepage/2_sec/2.png",
  "/Homepage/2_sec/3.png",
  "/Homepage/2_sec/2.png",
];
const DealOfTheMonth = ({ heading }: DealOfTheMonthProps) => {
  const [curIndex, setCurrentImg] = useState(0);
  //   next button logic
  const next = () => {
    setCurrentImg(() => (curIndex == imgData.length - 1 ? 0 : curIndex + 1));
  };
  //   prev button logic
  const prev = () => {
    setCurrentImg(() => (curIndex == 0 ? imgData.length - 1 : curIndex - 1));
  };
  function onBuyNowButtonClick() {
    console.log("Buy Now Button Click");
  }
  return (
    <div id="DOM" className="flex items-center h-[74vh] bg-[#dcdcdc40]">
      <div className="flex flex-row justify-end    w-full h-[70%]">
        {/* sec-2-inner-div-1 */}
        <div className=" flex flex-col     w-[35%] h-full">
          <div className=" w-[78%] h-[50%] flex flex-col justify-between">
            <h1
              className="text-[#484848] text-[50px] mainHeading"
              style={{ fontSize: "clamp(1rem, 2.7vw, 3rem)" }}
            >
              {heading}
            </h1>
            <p className="text-[10px] w-full text-[#8A8A8A]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate repellendus non quod, illo corporis tempore fuga nihil
            </p>
            <SignBtn
              onClick={onBuyNowButtonClick}
              btn="buyNow"
              text="Buy Now"
            />
          </div>
          <div className=" flex flex-col justify-between max-w-[68%] h-1/3">
            <p className="text-[18px]">Hurry, Before Its Too Late!</p>
            <div className=" flex flex-row  justify-between items-center h-[90%] w-[78%]">
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center digit items-center w-full h-[64%] text-2xl rounded-lg shadow-xl bg-white">
                  02
                </div>
                <p className="self-center text-[14px]">Days</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center digit items-center w-full h-[64%] text-2xl rounded-lg shadow-xl bg-white">
                  06
                </div>
                <p className="self-center text-[14px]">Days</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center digit items-center w-full h-[64%] text-2xl rounded-lg shadow-xl bg-white">
                  05
                </div>
                <p className="self-center text-[14px]">Days</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center digit items-center w-full h-[64%] text-2xl rounded-lg shadow-xl bg-white">
                  30
                </div>
                <p className="self-center text-[14px]">Days</p>
              </div>
            </div>
          </div>
          <div className="flex h-[20%] w-full justify-end items-end ">
            <div className="   w-[73px] mr-3 h-10 flex flex-row justify-between">
              <button
                onClick={prev}
                className="flex flex- w-8 h-8 p-2 shadow-xl bg-white justify-center items-center rounded-full"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={next}
                className="flex flex- w-8 h-8 p-2 shadow-xl bg-white justify-center items-center rounded-full"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
        {/* sec-2-inner-div-2 */}
        <div className="   flex flex-row justify-between w-[50%] h-full">
          <div className="relative flex w-[35%] h-full mr-4">
            <img
              className="relative h-full w-full"
              src="/Homepage/2_sec/1.png"
            />
            <div className="absolute w-[53%] h-[22%] bottom-2 left-2 bg-white flex flex-col justify-center items-center">
              <div className="flex flex-row color-[#484848] w-full text-[9px] justify-center items-center">
                <p>01</p>
                <div className="  mx-1 w-5 h-[1px]" />
                <p>Spring Sale</p>
              </div>
              <div className="">
                <p>30% OFF</p>
              </div>
            </div>
          </div>
          <RewindCorousal
            onClick={(index) => {
              setCurrentImg(index);
            }}
            currentIndex={curIndex}
            imgArray={imgData}
          />
        </div>
      </div>
    </div>
  );
};

export default DealOfTheMonth;
