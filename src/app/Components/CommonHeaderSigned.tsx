import React from "react";
import Link from "next/link";
import HeaderSignedButton from "./HeaderSignedButton";

const CommonHeaderSigned = () => {
  // console.log("currentPath : ", currentPathName);
  return (
    <div className="w-screen flex justify-center">
      <div
        id="top"
        className="flex flex-row  m-[16px] w-[70vw] justify-between"
      >
        <Link href="/home">
          <h1 className="mainHeading">FASCO</h1>
        </Link>
        <div className="text-[11px] text-[#484848]  w-[41%]  flex flex-row justify-around items-center">
          <HeaderSignedButton btnType={"home"} text={"Home"} />
          <HeaderSignedButton btnType={"shop"} text={"Shop"} />
          <HeaderSignedButton btnType={"products"} text={"Products"} />
          <HeaderSignedButton
            btnType={"pages"}
            text={
              <>
                <img
                  className="w-[7px] h-[5px] mx-1"
                  src="/Shop_page/arrowDown.png"
                  alt="Arrow"
                />
                <span>Page</span>
              </>
            }
          />
        </div>
        <div className="flex w-[12%] justify-between items-center">
          <div className="cursor-pointer">
            <img className="w-[14px] h-[14px]" src="/Shop_page/h1.png" />
          </div>
          <div className="cursor-pointer">
            <img className="w-[14px] h-[14px]" src="/Shop_page/h2.png" />
          </div>
          <div className="cursor-pointer">
            <img className="w-[14px] h-[14px]" src="/Shop_page/h3.png" />
          </div>
          <Link className="cursor-pointer" href="/products/miniCart/cartPage">
            <img className="w-[14px] h-[14px]" src="/Shop_page/h4.png" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommonHeaderSigned;
