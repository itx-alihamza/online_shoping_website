import React from "react";
import SignBtn from "./SignBtn";
import Link from "next/link";

const CommonHeaderUnsigned = () => {
  return (
    <div
      id="top"
      className=" flex m-[16px] flex-row  h-[38%]   justify-center "
    >
      <div className="flex w-[29%]">
        <h1 className="mainHeading">FASCO</h1>
      </div>
      <div className="text-[11px] text-[#484848]  w-[41%]  flex flex-row justify-around items-center">
        <Link href={"/home"}>
          <p className="cursor-pointer">Home</p>
        </Link>
        <a href="#DOM" className="cursor-pointer">
          Deals
        </a>
        <a href="#NA" className="cursor-pointer">
          New Arrivals
        </a>
        <a href="#Packages" className="cursor-pointer">
          Packages
        </a>
        <Link href={"/signIn"}>
          <p className="          border w-[77px] h-[31px] text-[9px] mb-2  rounded-[4px] flex justify-center items-center">
            Sign In
          </p>
        </Link>
        <Link href={"/signUp"}>
          <p className="bg-black shadow-lg w-[77px] h-[31px] text-[9px] mb-2 text-white rounded-[4px] flex justify-center items-center">
            Sign Up
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CommonHeaderUnsigned;
