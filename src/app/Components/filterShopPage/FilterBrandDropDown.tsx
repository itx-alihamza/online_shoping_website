import { filterBrandsArray } from "@/app/utils/filtersShopPage";
import React, { useState } from "react";
type FilterBrandProps = {
  //   onClick: () => void;
};
const FilterBrandDropdown = ({}: FilterBrandProps) => {
  const [dropDownActive, setDropDown] = useState(true);
  function handleDropDownActive() {
    setDropDown(!dropDownActive);
  }
  return (
    <div className=" max-w-[90%] flex flex-col  gap-y-4">
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm font-math font-bold">Brands</p>
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
        {filterBrandsArray.map((item) => {
          return (
            <p className="text-xs text-[#8A8A8A] cursor-pointer">
              {item.brand}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBrandDropdown;
