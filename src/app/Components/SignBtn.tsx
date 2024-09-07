import React from "react";
type SignProps = {
  onClick: () => void;
  text: string;
  btn: string;
};
const SignBtn = ({ text, btn, onClick }: SignProps) => {
  // Determine the class based on the `btn` value
  const btnClass =
    btn == "signIn"
      ? "bg-black shadow-lg w-[77px] m-0 h-[31px] text-[10px] mb-2 text-white rounded-[4px] flex justify-center items-center"
      : btn == "signInWithInfo"
      ? "bg-black shadow-lg w-[89%] h-[31px] text-[10px] mb-2 text-white rounded-[4px] flex justify-center items-center"
      : btn == "register"
      ? "border border-blue-500 w-[89%] h-[31px] text-[10px] mb-2 text-blue-500 rounded-[4px] flex justify-center items-center"
      : btn == "confirmation"
      ? "bg-black shadow-lg w-[89%] h-[31px] text-[10px] mb-2 text-white rounded-[4px] flex justify-center items-center"
      : btn == "recoverAccount"
      ? "bg-black shadow-lg w-[89%] h-[31px] text-[10px] mb-2 text-white rounded-[4px] flex justify-center items-center"
      : btn == "submit"
      ? "bg-blue-500 w-[89%] h-[31px] text-[10px] mb-2 text-white rounded-[4px] flex justify-center items-center"
      : btn == "createAccount"
      ? "bg-black shadow-lg w-[89%] h-[31px] text-[10px] mb-2 text-white rounded-[4px] flex justify-center items-center"
      : btn == "shopNow"
      ? "bg-black shadow-lg w-[106px] h-[31px] text-[9px] mb-2 text-white rounded-[4px] flex justify-center items-center"
      : btn == "buyNow"
      ? "bg-black shadow-lg w-[106px] h-[31px] text-[9px] mb-2 text-white rounded-[4px] flex justify-center items-center"
      : btn == "viewMore"
      ? "bg-black shadow-lg w-[106px] h-[31px] text-[9px] mb-2 text-white rounded-[4px] flex justify-center items-center"
      : btn == "checkout"
      ? "bg-black shadow-lg w-[26vw] h-[7vh] text-[10px] mb-2 text-white rounded-[4px] flex justify-center items-center"
      : "";

  return (
    <div
      onClick={
        btn == "confirmatoin" ||
        "recoverAccount" ||
        "submit" ||
        "signInWithInfo" ||
        "createAccount" ||
        "shopNow" ||
        "buyNow" ||
        "viewMore" ||
        "checkout"
          ? onClick
          : undefined
      }
      className={`${btnClass} cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default SignBtn;
