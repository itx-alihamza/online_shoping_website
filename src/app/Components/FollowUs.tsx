import React from "react";

const FollowUs = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div
        className=" flex flex-col justify-center items-center pb-[6px] w-full h-[49%]"
        style={{ backgroundColor: "rgb(255 248 248 / 30%)" }}
      >
        <div
          className="text-[#484848] text-[50px] mainHeading"
          style={{ fontSize: "clamp(1rem, 2.7vw, 3rem)" }}
        >
          Follow Us On Instagram
        </div>
        <p className="max-w-[41%] text-[12px] text-[#8A8A8A] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          consequatur. Facilis corporis molestias est in et nam praesentium vero
          quod ullam pariatur perspiciatis
        </p>
      </div>
      <div className=" max-h-[34%] grid grid-cols-[1.3fr_repeat(5,1fr)_1.3fr] grid-rows-1 items-center">
        <img
          className="transform hover:scale-[1.3]   hover:z-10 transition-transform duration-500 hover:transition-transform duration-200"
          src="/Homepage/5_sec/1.png"
        />
        <img
          className="transform hover:scale-[1.3]   hover:z-10 transition-transform duration-500 hover:transition-transform duration-200"
          src="/Homepage/5_sec/2.png"
        />
        <img
          className="transform hover:scale-[1.3]   hover:z-10 transition-transform duration-500 hover:transition-transform duration-200"
          src="/Homepage/5_sec/3.png"
        />
        <img
          className="transform hover:scale-[1.3]   hover:z-10 transition-transform duration-500 hover:transition-transform duration-200"
          src="/Homepage/5_sec/4.png"
        />
        <img
          className="transform hover:scale-[1.3]   hover:z-10 transition-transform duration-500 hover:transition-transform duration-200"
          src="/Homepage/5_sec/5.png"
        />
        <img
          className="transform hover:scale-[1.3]   hover:z-10 transition-transform duration-500 hover:transition-transform duration-200"
          src="/Homepage/5_sec/6.png"
        />
        <img
          className="transform hover:scale-[1.3]   hover:z-10 transition-transform duration-500 hover:transition-transform duration-200"
          src="/Homepage/5_sec/7.png"
        />
      </div>
    </div>
  );
};

export default FollowUs;
