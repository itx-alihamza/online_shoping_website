"use client";
import SignBtn from "@/app/Components/SignBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgetPass() {
  //ON clickking sent confiramiton text
  const confiramitonRoute = useRouter();
  function onConfirmationBtnClick() {
    console.log("sent confiramiton text button clicked");
    confiramitonRoute.push("/signIn/forgetPass/confirmationWin");
  }
  return (
    <div className="  flex justify-center items-center w-screen h-screen">
      <div className="border border-[#DBDBDB]  flex flex-row justify-center item-center w-[70%] h-[80%]">
        <img
          className="w-2/4 h-full justify-center item-center"
          src="/Log_in/logInGirlImage.png"
        />
        <div className="w-2/4 flex flex-col justify-around">
          <h1 className=" font-bold ml-[80px] mt-[23px] mb-[42px] w-full text-[#484848] mainHeading">
            FASCO
          </h1>
          <div className="w-[70%] ml-[80px] ml-[50px] flex flex-col  justify-around">
            <p className=" w-full text-[13px] font-semibold mb-[12px]">
              Forget Password
            </p>
            <div className="w-full h-[80px] mb-5 flex flex-wrap justify-between">
              <div className="flex flex-col w-[49%]  justify-center">
                <input
                  type="text"
                  placeholder="First Name"
                  className="outline-none w-[160px] text-[9px] mb-[-8px] "
                />
                <div className="border border-[#9D9D9D]  mt-3 w-full"></div>
              </div>
              <div className="flex flex-col w-[49%] justify-center">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="outline-none w-[160px] text-[9px] mb-[-8px] "
                />
                <div
                  className=" border border-[#9D9D9D]  mt-3 w-full"
                  style={{ borderBottomWidth: "1px" }}
                ></div>
              </div>
              <div className="flex flex-col w-[49%] justify-center">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="outline-none w-[160px] text-[9px] mb-[-8px] "
                />
                <div
                  className="border border-[#9D9D9D]  mt-3 w-full"
                  style={{ borderBottomWidth: "1px" }}
                ></div>
              </div>
              <div className="flex flex-col w-[49%] justify-center">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="outline-none w-[160px] text-[9px] mb-[-8px] "
                />
                <div
                  className="border border-[#9D9D9D]  mt-3 w-full"
                  style={{ borderBottomWidth: "1px" }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center">
              <SignBtn
                onClick={onConfirmationBtnClick}
                btn="confirmation"
                text="Sent Confirmation Code"
              />
              <div className="flex flex-row justify-center items-center">
                <p className="mr-1  text-[10px]">Already have an account?</p>
                <Link className="text-blue-500 text-[10px]" href={"/signIn"}>
                  Login
                </Link>
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
