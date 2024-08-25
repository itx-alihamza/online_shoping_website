"use client";
import React from "react";

type signProps = {
  onClick: () => void;
  image: string;
  title: string;
};
const SocialSignButton: React.FC<signProps> = ({ image, title, onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className="cursor-pointer flex flex-row justify-center items-center w-[47%] h-[25px] mr-[30px]` border border-[#5B86E5] rounded-[4px]"
    >
      <img
        className="w-[16px] h-[16px] mr-[14px]"
        style={{ margin: "0 4px 0 0px" }}
        src={image}
      />
      <p className="text-[10px] font-semibold">{title}</p>
    </div>
  );
};

export default SocialSignButton;
