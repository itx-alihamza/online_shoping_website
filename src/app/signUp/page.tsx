"use client";
import Link from "next/link";
import SocialSignButton from "../Components/SocialSignBtn";
import SignBtn from "../Components/SignBtn";

export default function SignUp() {
  function onClickSignInWithGoogle() {
    console.log("Sign With Google");
  }
  function onClickSignInWithGmail() {
    console.log("Sign With Gmail");
  }
  function onCreateAccountBtnClick() {
    console.log("Create Account Clicked");
  }
  return (
    <div className="  flex justify-center items-center w-screen h-screen">
      <div className="border border-[#DBDBDB]  flex flex-row justify-center item-center w-[70%] h-[80%]">
        <img
          className="w-2/4 h-full justify-center item-center"
          src="/SignIn/girlImageeRed.png"
        />
        <div className="w-2/4 flex flex-col justify-around">
          <h1 className=" font-bold ml-[50px] mt-[11px] w-full text-[#484848] mainHeading">
            FASCO
          </h1>
          <div className="w-[70%] h- ml-[50px] flex flex-col  justify-around">
            <p className=" w-full text-[13px] font-semibold mb-[12px]">
              Create Account
            </p>
            <div className="flex w-full flex-row justify-between">
              {/* sign up buttons */}
              <SocialSignButton
                onClick={onClickSignInWithGoogle}
                image="/SignIn/googleIcon.png"
                title="Sign in with Google."
              />
              <SocialSignButton
                onClick={onClickSignInWithGmail}
                image="/SignIn/gmailIcon.png"
                title="Sign in with Gmail."
              />
            </div>
            <div className="flex flex-row justify-center items-center">
              <div className="w-[15px] h-[2px] bg-[#838383]"></div>
              <p className="flex justify-center items-center  h-[40px] ml-3 mr-3 text-[18px] text-[#838383]">
                OR
              </p>
              <div className="w-[15px] h-[2px] bg-[#838383]"></div>
            </div>
            <div className="w-full h-[130px] mb-5  flex flex-wrap justify-between">
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
              <div className="flex flex-col w-[49%] justify-center">
                <input
                  type="text"
                  placeholder="New Password"
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
                  placeholder="Confirm Password"
                  className="outline-none w-[160px] text-[9px] mb-[-8px] "
                />
                <div
                  className="border border-[#9D9D9D]  mt-3 w-full"
                  style={{ borderBottomWidth: "1px" }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col w-full justify-between items-center">
              <SignBtn
                onClick={onCreateAccountBtnClick}
                btn="createAccount"
                text="Create Account"
              />
              <div className="flex flex-row justify-center items-center">
                <p className="mr-1  text-[10px]">Already have an account?</p>
                <Link className="text-blue-500 text-[10px]" href={"/signIn"}>
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end mb-[1px] m">
            <p className="text-[10px] mr-2">FASCO Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
