import React from "react";
import { ProductTypes } from "../utils/types";

interface ProductProps {
  item: ProductTypes;
}
const Product = ({ item }: ProductProps) => {
  return (
    <div className=" shadow-md  flex flex-col justify-between p-3 rounded-lg">
      <div className="max-h-[500px] max-w-full rounded-lg">
        <img className="w-full h-full" src={item.img} />
      </div>
      <div className="flex flex-col w-full h-[47%] justify-between">
        <div className="flex flex-row justify-between h-[16%]">
          <div className="flex flex-col">
            <p>{item.prodName}</p>
            <p>{item.brandName}</p>
          </div>
          <img src="/Homepage/3_sec/stars.png" />
        </div>
        <p className="w-full h-[9%]">({item.reviews})Customers Reviews</p>
        <div className="w-full h-[14%] flex flex-row justify-between">
          <p className="text-xl font-bold">{item.price}</p>
          <p className="text-[8px] text-red-500">{item.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
