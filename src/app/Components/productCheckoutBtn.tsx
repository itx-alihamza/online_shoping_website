import React from "react";
type BtnProps = {
  onClick: () => void;
};
function handleOnClickCheckoutBtn() {}
const productCheckoutBtn = ({ onClick }: BtnProps) => {
  return (
    <div
      className="bg-black shadow-lg w-[26vw] h-[7vh] text-[10px] mb-2 text-white rounded-[4px] flex justify-center items-center"
      onClick={handleOnClickCheckoutBtn}
    ></div>
  );
};

export default productCheckoutBtn;
