"use client";
import { Rotate3D, Rotate3DIcon } from "lucide-react";
import FollowUs from "../Components/FollowUs";
import SomeCollection from "../Components/SomeCollection";
import {
  filterBrandsArray,
  filterCollectionArray,
  filterColorArray,
  filterPricesArray,
  filterSizeArray,
} from "../utils/filtersShopPage";
import { useState } from "react";
import FilterCollectionDropDown from "../Components/filterShopPage/FilterCollectionDropDown";
import FilterTagsDropDown from "../Components/filterShopPage/FilterTagsDropDown";
import FilterBrandDropdown from "../Components/filterShopPage/FilterBrandDropDown";
import ListViewProducts from "../Components/shopProducts/ListViewProducts";
import TwoColumnsProductView from "../Components/shopProducts/TwoColumnViewProducts";

export default function ShopPage() {
  // For brand drop down
  const [dropDownActive, setDropDown] = useState(false); //To make dropdown active and unactive
  const [shopProductsLayout, setShopProductsLayout] = useState("listView"); //For selecting shop products view
  function handleDropDownActive() {
    setDropDown(!dropDownActive);
  }
  function handleShopProductsLayout(viewType: string) {
    setShopProductsLayout(viewType);
  }
  return (
    <div className="">
      {/* Fashion */}
      <div className=" flex flex-col items-center w-screen h-auto">
        <div className=" flex flex-col justify-center h-[18vh]">
          <h2
            className="text-[50px] mainHeading"
            style={{ fontSize: "clamp(1rem, 2.7vw, 3rem)", color: "black" }}
          >
            Fashion
          </h2>
          <div className="flex flex-row justify-around items-center text-[10px] font-semibold">
            <p>Home</p>
            <img className="w-2 h-2" src="/shop_page/arrowLeft.png" />
            <p>Fashion</p>
          </div>
        </div>
        <div className="w-[70vw] h-[8vh] flex flex-col ">
          <div className=" h-[5vh] flex flex-row justify-between items-center">
            <div className=" w-[24%] flex justify-start">
              <h2
                className="text-[50px] mainHeading font-bold text-black"
                style={{
                  fontSize: "clamp(1rem, 1.6vw, 3rem )",
                  // fontFamily: "Volkhov, serif",
                  color: "black",
                }}
              >
                Filters
              </h2>
            </div>
            <div className=" w-[38%] flex flex-row justify-start items-center">
              <p className="text-[13px] font-semibold">Best selling</p>
              <img
                className="w-[7px] h-[5px] mx-1"
                src="/Shop_page/arrowDown.png"
              />
            </div>
            <div className=" w-[38%] flex flex-row justify-end gap-2">
              <img
                className="w-[25px] h-[25px] p-2 bg-[#f2f2f2] hover:bg-gray-300 rounded-sm cursor-pointer"
                src="/Shop_page/view1.png"
                onClick={() => handleShopProductsLayout("listView")}
              />
              <img
                className="w-[25px] h-[25px] p-2 bg-[#f2f2f2] hover:bg-gray-300 rounded-sm cursor-pointer"
                src="/Shop_page/SVG.png"
                onClick={() => handleShopProductsLayout("twoColumnView")}
              />
              <img
                className="w-[25px] h-[25px] p-2 bg-[#f2f2f2] hover:bg-gray-300 rounded-sm cursor-pointer"
                src="/Shop_page/view3.png"
              />
              <img
                className="w-[25px] h-[25px] p-2 bg-[#f2f2f2] hover:bg-gray-300 rounded-sm cursor-pointer"
                src="/Shop_page/view4.png"
              />
              <img
                className="w-[25px] h-[25px] p-2 bg-[#f2f2f2] hover:bg-gray-300 rounded-sm cursor-pointer"
                src="/Shop_page/view5.png"
              />
            </div>
          </div>
        </div>
        <div className="border border-black w-[70vw]  flex flex-row">
          <div className="w-[24%] max-h-[774px] flex flex-col gap-6 justify-between">
            <div className=" max-w-[50%] flex flex-col  gap-y-4">
              <p className="text-sm font-math font-bold">Size</p>
              <div className=" flex flex-wrap gap-x-2 gap-y-1">
                {filterSizeArray.map((item: any) => {
                  return (
                    <div className="w-7 h-7 p-2 border border-[#8A8A8A] text-[#8A8A8A] flex justify-center items-center rounded-[4px] cursor-pointer">
                      {item.value}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" max-w-[90%] flex flex-col  gap-y-4">
              <p className="text-sm font-math font-bold">Color</p>
              <div className=" flex flex-wrap gap-2">
                {filterColorArray.map((item) => (
                  <div
                    className="w-[21px] h-[21px] rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                  />
                ))}
              </div>
            </div>
            <div className=" max-w-[90%] flex flex-col  gap-y-4">
              <p className="text-sm font-math font-bold">Prices</p>
              <div className=" flex flex-col gap-2">
                {filterPricesArray.map((item) => {
                  return (
                    <p className="text-xs text-[#8A8A8A] cursor-pointer">
                      {item.range}
                    </p>
                  );
                })}
              </div>
            </div>
            <FilterBrandDropdown />
            <FilterCollectionDropDown />
            <FilterTagsDropDown />
            {/* filterBrand */}
          </div>
          {shopProductsLayout == "listView" ? (
            <ListViewProducts />
          ) : shopProductsLayout == "twoColumnView" ? (
            <TwoColumnsProductView />
          ) : null}
        </div>
      </div>
      {/* some collectiton */}
      <SomeCollection />
      {/* follow us */}
      <FollowUs />
    </div>
  );
}
