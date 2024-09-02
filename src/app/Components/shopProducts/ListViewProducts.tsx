import { shopProductsData } from "@/app/utils/shopProducts";
import { shopProductTypes } from "@/app/utils/types";
import React from "react";
type ShopProductsProps = {
  //   productLayout: string;
};
const ListViewProducts = () => {
  return (
    <div
      className="border border-black grid gap-4 w-[76%] max-h-[1034px]"
      style={{
        gridTemplateRows: "repeat(3, 344px)",
        gridTemplateColumns: "1fr",
      }}
    >
      {shopProductsData.slice(0, 3).map((item: shopProductTypes) => {
        return (
          <div key={item.id} className="border flex flex-col gap-1">
            <div className="w-full h-[70%]">
              <img className="w-full h-full object-cover" src={item.pic} />
            </div>
            <p className="text-[12px] font-semibold">{item.name}</p>
            <p className="text-[12px]">{item.price}</p>
            <div className="flex flex-row gap-2">
              <div
                className="border border-black w-[21px] h-[21px] p-2 rounded-full cursor-pointer"
                style={{ backgroundColor: item.color1 }}
              />
              <div
                className="border border-[#e6e6e6] w-[21px] h-[21px] rounded-full cursor-pointer"
                style={{ backgroundColor: item.color2 }}
              />
              {item.color3 && (
                <div
                  className="border border-[#e6e6e6] w-[21px] h-[21px] rounded-full cursor-pointer"
                  style={{ backgroundColor: item.color3 }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListViewProducts;
