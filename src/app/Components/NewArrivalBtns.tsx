import { title } from "process";
import React from "react";
type NewArrivalBtnProps = {
  onClick: () => void;
  text: string;
  style: boolean;
};
const NewArrivalBtns = ({ text, style, onClick }: NewArrivalBtnProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center text-[12px] w-[18%] h-[7vh] rounded-md
        ${style ? "bg-black text-white" : "bg-[#FAFAFA] text-[#8A8A8A]"}`}
    >
      {text}
    </div>
  );
};

export default NewArrivalBtns;
