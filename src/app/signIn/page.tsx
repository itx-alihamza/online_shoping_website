"use client";

import Link from "next/link";
import SignBtn from "../Components/SignBtn";
import SignButton from "../Components/SocialSignBtn";

export default function SignIn() {
  function onClickSignInWithGoogle() {
    console.log("Sign With Google");
  }
  function onClickSignInWithGmail() {
    console.log("Sign With Gmail");
  }
  function onSignInWithInfoBtnClick() {
    console.log("Sign With Info");
  }
  return (
    <div className="  flex justify-center items-center w-screen h-screen">
      <div className="border border-[#DBDBDB]  flex flex-row justify-center item-center w-[70%] h-[80%]">
        <img
          className="w-2/4 h-full justify-center item-center"
          src="/Log_in/logInGirlImage.png"
        />
        <div className="w-2/4 flex flex-col justify-around">
          <h1 className="ml-[50px] mt-[11px] w-full mainHeading">FASCO</h1>
          <div className="w-[70%] h- ml-[50px] flex flex-col  justify-around">
            <p className=" w-full text-[13px] font-semibold mb-[12px]">
              Sign in to FASCO
            </p>
            <div className="flex w-full flex-row justify-between">
              {/* sign up buttons */}
              <SignButton
                onClick={onClickSignInWithGoogle}
                image="/SignIn/googleIcon.png"
                title="Sign in with Google."
              ></SignButton>
              <SignButton
                onClick={onClickSignInWithGmail}
                image="/SignIn/gmailIcon.png"
                title="Sign in with Gmail."
              />
            </div>
            <div className="flex flex-row mt-[18px] mb-[14px] justify-center items-center">
              <div className="w-[15px] h-[2px] bg-[#838383]"></div>
              <p className="flex justify-center items-center  h-[40px] ml-3 mr-3 text-[18px] text-[#838383]">
                OR
              </p>
              <div className="w-[15px] h-[2px] bg-[#838383]"></div>
            </div>
            <div className="w-full h-[64px] mb-5  flex flex-wrap justify-between">
              <div className="flex flex-col w-full  justify-center">
                <input
                  type="text"
                  placeholder="Email"
                  className="outline-none w-[160px] text-[9px] mb-[-8px] "
                />
                <div className="border border-[#9D9D9D]  mt-3 w-full"></div>
              </div>
              <div className="flex flex-col w-full justify-center">
                <input
                  type="text"
                  placeholder="Password"
                  className="outline-none w-[160px] text-[9px] mb-[-8px] "
                />
                <div
                  className=" border border-[#9D9D9D]  mt-3 w-full"
                  style={{ borderBottomWidth: "1px" }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center">
              <SignBtn
                onClick={onSignInWithInfoBtnClick}
                text="Sign In"
                btn="signInWithInfo"
              />
              <Link
                className="w-full flex justify-center items-center"
                href={"/signUp"}
              >
                <button className="border border-blue-500 w-[89%] h-[31px] text-[10px] mb-2 text-blue-500 rounded-[4px] flex justify-center items-center">
                  Register
                </button>
              </Link>
              <Link
                href={"/signIn/forgetPass"}
                className="flex w-[89%] justify-end mb-[1px] text-blue-500"
              >
                <p className="text-[10px]">Forgot Password</p>
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-end mb-[1px]">
            <p className="text-[10px] m-2">FASCO Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
