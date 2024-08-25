"use client";
import SignBtn from "@/app/Components/SignBtn";

export default function NewPass() {
  function onSubmitBtnClick() {
    console.log("Submit Button Clicked");
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
              Enter Your New Password
            </p>
            <div className="w-full h-[60pxpx] mb-5  flex flex-wrap justify-between">
              <div className="flex flex-col w-full mb-[8px] justify-center">
                <input
                  type="text"
                  placeholder="New Password"
                  className="outline-none w-[160px] text-[9px] mb-[-8px] "
                />
                <div className="border border-[#9D9D9D]  mt-3 w-full"></div>
              </div>
              <div className="flex flex-col w-full mb-[8px] justify-center">
                <input
                  type="text"
                  placeholder="Confirmation Password"
                  className="outline-none w-[160px] text-[9px] mb-[-8px] "
                />
                <div className="border border-[#9D9D9D]  mt-3 w-full"></div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center">
              <SignBtn onClick={onSubmitBtnClick} btn="submit" text="Submit" />
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
