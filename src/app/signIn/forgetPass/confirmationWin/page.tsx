"use client";
import SignBtn from "@/app/Components/SignBtn";
import { Linefont } from "next/font/google";
import Link from "next/link";

export default function ConfirmationWin() {
  function onRecoverAccountBtnClick() {
    console.log("Recover Account Clicked");
  }
  return (
    <div className="  flex justify-center items-center w-screen h-screen">
      <div className="border border-[#DBDBDB]  flex flex-row justify-center item-center w-[70%] h-[80%]">
        <img
          className="w-2/4 h-full justify-center item-center"
          src="/Log_in/logInGirlImage.png"
        />
        <div className="w-2/4 flex flex-col justify-around">
          <h1 className=" font-bold ml-[50px] mt-[23px] mb-[42px] w-full text-[#484848] mainHeading">
            FASCO
          </h1>
          <div className="w-[70%] ml-[50px] ml-[50px] flex flex-col  justify-around">
            <p className=" w-full text-[13px] font-semibold mb-[30px] font-math">
              Enter the confirmaiton code
            </p>
            <div className="flex flex-col w-100% mb-[8px] justify-center">
              <input
                type="text"
                placeholder="Confirmation Code"
                className="outline-none w-[160px] text-[9px] mb-[-8px] "
              />
              <div className="border border-[#9D9D9D]  mt-3 w-full"></div>
            </div>
            <div className="flex flex-col justify-between items-center">
              <SignBtn
                onClick={onRecoverAccountBtnClick}
                btn="recoverAccount"
                text="Recover Account"
              />
              <div className="flex flex-row justify-center items-center">
                <p className="mr-1  text-[9px]">
                  Didn't receive Confirmation Code?
                </p>
                <p className="text-blue-500 text-[9px]">Resent Now</p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end mb-[1px]">
            <p className="text-[10px] mt-[86px] mr-[8px]">
              FASCO Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
