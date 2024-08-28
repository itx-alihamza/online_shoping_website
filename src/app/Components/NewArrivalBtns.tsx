import React from "react";
type NewArrivalBtnProps = {
  onClick: () => void;
  index: number;
  text: any;
  isActive: number | null;
};
const NewArrivalBtns = ({
  index,
  text,
  isActive,
  onClick,
}: NewArrivalBtnProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center text-[12px] w-[18%] h-[7vh] rounded-md cursor-pointer
        ${
          index == isActive
            ? "bg-black text-white"
            : "bg-[#FAFAFA] text-[#8A8A8A]"
        }`}
    >
      {text}
    </div>
  );
};

export default NewArrivalBtns;
