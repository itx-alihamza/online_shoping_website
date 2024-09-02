import { tagsArray } from "@/app/utils/filtersShopPage";
import React, { useState } from "react";

const FilterTagsDropDown = () => {
  const [dropDownActive, setDropDown] = useState(true);
  function handleDropDownActive() {
    setDropDown(!dropDownActive);
  }
  return (
    <div className=" max-w-[90%] flex flex-col  gap-y-4">
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm font-math font-bold">Tagss</p>
        <img
          className="w-2.5 h-1.5 mx-1 cursor-pointer transition-transform"
          style={dropDownActive ? { transform: "rotate(180deg)" } : {}}
          src="/Shop_page/arrowDown.png"
          alt="Arrow"
          onClick={() => handleDropDownActive()}
        />
      </div>
      <div
        className="hidden flex-wrap gap-2"
        style={dropDownActive ? { display: "flex" } : {}}
      >
        {tagsArray.map((item) => {
          return (
            <p className="text-xs text-[#8A8A8A] cursor-pointer">{item.tag}</p>
          );
        })}
      </div>
    </div>
  );
};

export default FilterTagsDropDown;
