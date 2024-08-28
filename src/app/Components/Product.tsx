import React from "react";
import { ProductTypes } from "../utils/types";

interface ProductProps {
  item: ProductTypes;
}
const Product = ({ item }: ProductProps) => {
  return (
    <div className=" shadow-md  flex flex-col justify-between p-5 rounded-lg cursor-pointer">
      <div className="max-h-[60%] max-w-full rounded-lg">
        <img className="w-full h-full" src={item.img} />
      </div>
      <div className=" flex flex-col w-full h-[47%] pt-2 justify-between">
        <div className=" flex flex-row justify-between h-[39%]">
          <div className=" flex flex-col">
            <p className="text-sm font-medium text-[#484848]">
              {item.prodName}
            </p>
            <p className="text-[9px] text-[#484848]">{item.brandName}</p>
          </div>
          <img
            className="w-[25%] h-[28%] mt-[3px]"
            src="/Homepage/3_sec/stars.png"
          />
        </div>
        <p className="flex items-center w-full h-[20%] text-[9px] ">
          ({item.reviews})Customers Reviews
        </p>
        <div className=" w-full h-[34%] flex flex-row justify-between items-center">
          <p className="text-lg font-medium text-[#484848]">{item.price}</p>
          <p className="text-[8px] text-red-500">{item.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
