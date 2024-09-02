import React from "react";

const SomeCollection = () => {
  return (
    <div id="Packages" className=" flex flex-col justify-end w-screen h-screen">
      <div className="relative  flex flex-row justify-end w-srceen h-[67vh]">
        <img
          className="absolute top-0 bottom-0 left-0 right-0 h-full w-[55%] -r-black"
          src="/Homepage/4_sec/peaky.png"
        ></img>
        <div className=" flex flex-row justify-end items-center w-[60%] bg-[#DADADA]">
          <div className=" w-[74%] h-[80%] flex flex-col justify-around ml-24">
            <p className="text-[13px] text-[#767676]">women Collection</p>
            <h1
              className="text-[#484848] text-[50px] heading-font mainHeading"
              style={{ fontSize: "clamp(2rem, 2.6vw, 3rem)" }}
            >
              Peaky Blinders
            </h1>
            <h5 className="line-clamp-1 font-bold">DESCRIPTION</h5>
            <p className="text-[13px] text-[#767676]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              ipsam necessitatibus eum debitis voluptatibus esse. Amet dolor
              debitis nobis minima hic sed nesciunt? Deserunt quae aliquid
              pariatur! Atque, iusto asperiores.
            </p>
            <div className=" flex flex-row w-[80%] h-[7%]">
              <p className="text-sm text-[#767676] mr-2">Size: </p>
              <p className="flex justify-center items-center text-white text-sm bg-black rounded-lg h-full w-10">
                M
              </p>
            </div>
            <div className=" flex flex-row justify-start items-center w-full h-[18px] font-bold">
              <p className="text-[19px]">$100.</p>
              <p className=" self-center">00</p>
            </div>
            <div className="bg-black shadow-lg w-[138px] h-[40px] text-[9px] mb-2 text-white flex justify-center items-center rounded-lg cursor-pointer">
              Buy Now
            </div>
          </div>
        </div>
        {/* <div className=" skew-x-[-15deg] "></div> */}
      </div>
      <div className=" flex flex-row justify-center w-srceen h-[22vh]">
        <div className=" flex flex-row justify-center items-center gap-2 h-full w-[17%]">
          <img className="w-9 h-9" src="/Homepage/4_sec/review.png" />
          <div className="flex flex-col justify-between text-[#484848]">
            <p className="text-sm font-semibold">High Quality</p>
            <p className="text-xs">crafted form top material</p>
          </div>
        </div>
        <div className=" flex flex-row justify-center items-center gap-2 h-full w-[17%]">
          <img className="w-8 h-9" src="/Homepage/4_sec/certifi.png" />
          <div className="flex flex-col justify-between text-[#484848]">
            <p className="text-sm font-semibold">Warrany Protection</p>
            <p className="text-xs">Over 2 years</p>
          </div>
        </div>
        <div className=" flex flex-row justify-center items-center gap-2 h-full w-[17%]">
          <img className="w-9 h-9" src="/Homepage/4_sec/dilive.png" />
          <div className="flex flex-col justify-between text-[#484848]">
            <p className="text-sm font-semibold">Free Shipping</p>
            <p className="text-xs">Order over 150$</p>
          </div>
        </div>
        <div className=" flex flex-row justify-cneter items-center gap-2 h-full w-[17%]">
          <img className="w-9 h-9" src="/Homepage/4_sec/custo.png" />
          <div className="flex flex-col justify-between text-[#484848]">
            <p className="text-sm font-semibold">24 / 7 Support</p>
            <p className="text-xs">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomeCollection;
