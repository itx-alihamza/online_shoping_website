import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
type HeaderSignBtnProsps = {
  btnType: any;
  text: any;
};
const HeaderSignedButton = ({ btnType, text }: HeaderSignBtnProsps) => {
  const currentPathName = usePathname();
  {
    btnType =
      btnType == "home"
        ? "/home"
        : btnType == "shop"
        ? "/shopPage"
        : btnType == "products"
        ? "/products"
        : btnType == "pages"
        ? ""
        : "";
  }
  return (
    <Link
      className="w-[18%] flex h-[40%] flex-col justify-between items-center"
      href={btnType}
    >
      <div className="flex flex-row justify-center items-center">
        <p className="cursor-pointer flex justify-center items-center">
          {text}
        </p>
      </div>
      <div
        className={`${
          currentPathName == btnType ? "border border-b-[#484848] w-[75%]" : ""
        }`}
      />
    </Link>
  );
};

export default HeaderSignedButton;
