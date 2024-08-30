import React from "react";
import SignBtn from "./SignBtn";
import Link from "next/link";

const CommonHeaderUnsigned = () => {
  return (
    <div
      id="top"
      className="flex mt-[26px] mb-[33px] flex-row  h-2/5   justify-center "
    >
      <div className="flex w-[29%]">
        <h1 className="mainHeading">FASCO</h1>
      </div>
      <div className="text-[9px]  w-[41%]  flex flex-row justify-around items-center">
        <p>Home</p>
        <p>Deals</p>
        <p>New Arrivals</p>
        <p>Packages</p>
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
