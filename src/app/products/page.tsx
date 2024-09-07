"use client";
import React, { useState } from "react";
import { productImgs } from "../utils/products";
import SomeCollection from "../Components/SomeCollection";
import DealOfTheMonth from "../Components/DealOfTheMonth";
import "./page.css";
import MiniCart from "./miniCart/page";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState<null | string>(null); //Storing selected product size
  const [selectedColor, setSelectedColor] = useState<null | string>(null); //Storing selected product Color
  const [selectedQuantity, setSelectedQuantity] = useState<any>(1); //Storing selected product quantity
  const [selectedPictre, setSelectedPictre] = useState<any>(
    "/Product_page/main.png"
  ); //Storing selected product Pictre
  const [isActiveCart, setCart] = useState<any>(false); // For displaying mini cart
  function handleSelectedProductPicture(selectedImg: string) {
    //Handling selected product picture
    setSelectedPictre(selectedImg);
  }
  function handleOnSelectSize(size: string) {
    //Handling selected product size
    let isSelected = selectedSize == size ? null : size;
    setSelectedSize(isSelected);
  }
  function handleOnSelectColor(Color: string) {
    //Handling selected product Color
    let isSelected = selectedColor == Color ? null : Color;
    setSelectedColor(isSelected);
  }
  function handleSelectedProductQuantity(num: any) {
    setSelectedQuantity((prvValue: any) => {
      let newQuantity = prvValue + num;
      return newQuantity < 0 ? 0 : newQuantity;
    });
  }
  function handleOnAddToCart() {
    //Handling add to cart
    setCart(!isActiveCart);
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="w-screen h-[120vh] flex justify-center items-start">
          <div className=" w-[68vw] h-[100%] grid grid-cols-2 gap-x-16">
            <div className="w-full flex flex-row ">
              <div
                className="w-[20%] h-[60%] overflow-y-scroll px-5 py-2 flex flex-col gap-3"
                style={{ scrollbarWidth: "none" }}
              >
                {productImgs.map((item, index) => (
                  <div
                    style={
                      selectedPictre == item
                        ? {
                            border: "1px solid black",
                            padding: "3px",
                          }
                        : {}
                    }
                  >
                    <img
                      key={index}
                      src={item}
                      onClick={() => handleSelectedProductPicture(item)}
                    />
                  </div>
                ))}
              </div>
              <div className="w-[80%] h-[58%]">
                <img className="w-full h-full" src={selectedPictre} />
              </div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="w-full flex flex-col justify-between">
                <h3 className="text-[11px]">FASCO</h3>
                <div className="flex flex-row justify-between">
                  <h2
                    className="font-math font-bold"
                    style={{ fontSize: "clamp(1rem, 2vw, 3rem)" }}
                  >
                    Denim Jacket
                  </h2>
                  <div className="border border-[#EEEEEE] flex justify-center items-center w-8 h-8 p-2.5 rounded-full">
                    <img src="/Product_page/blackStar.png" />
                  </div>
                </div>
                <div className="flex flex-row gap-1 justify-start items-center">
                  <img
                    className="w-16 h-3.5"
                    src="/Product_page/reviewStars.png"
                  />
                  <p>(3)</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 ">
                <p
                  className="font-math font-bold"
                  style={{ fontSize: "clamp(1rem, 1.5vw, 3rem)" }}
                >
                  $39.00
                </p>
                <p className="text-[12px] text-[#666666] line-through">
                  $59.00
                </p>
                <div className="flex w-[54px] h-[14px] bg-[#DA3F3F] justify-center items-center rounded-full">
                  <p className="text-[7px] text-white">SAVE 33%</p>
                </div>
              </div>
              <div
                className="flex flex-row gap-1 items-center text-[#8A8A8A]"
                style={{ fontSize: " clamp(8px, 1.1vw, 34px)" }}
              >
                <img className="w-5 h-3" src="/Product_page/blackEye.png" />
                <p>24</p>
                <p>People are viewing this right now</p>
              </div>
              <div
                className="border border-[#FF706B] bg-[#FDEFEE] flex flex-row w-full justify-between items-center px-4 py-2 rounded-sm"
                style={{ fontSize: "clamp(8px, 1.3vw, 34px)" }}
              >
                <p className="font-math text-[#FF706B]">
                  Hurry up!Sale ends in:
                </p>
                <div className="flex flex-row gap-2 font-math text-[#FF706B]">
                  <p>00 : 05 : 59 : 47</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className=" w-full flex flex-row gap-1 text-[11px] text-[#666666]">
                  <p>Only</p>
                  <p className="font-bold text-[#666666]">9</p>
                  <p>items(s) left in stock!</p>
                </div>
                <div className="w-full bg-gray-300 h-[3px] rounded-lg overflow-hidden">
                  <div
                    className="bg-red-500 h-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold font-math">Size: M</p>
                <div className="flex flex-row gap-2">
                  <div
                    className="border border-[#EEEEEE] w-9 h-9 text-[12px] flex justify-center items-center p-2 rounded-md cursor-pointer"
                    style={
                      selectedSize == "M"
                        ? { backgroundColor: "black", color: "white" }
                        : {}
                    }
                    onClick={() => handleOnSelectSize("M")}
                  >
                    <p>M</p>
                  </div>
                  <div
                    className="border border-[#EEEEEE] w-9 h-9 text-[12px] flex justify-center items-center p-4 rounded-md cursor-pointer"
                    style={
                      selectedSize == "L"
                        ? { backgroundColor: "black", color: "white" }
                        : {}
                    }
                    onClick={() => handleOnSelectSize("L")}
                  >
                    L
                  </div>
                  <div
                    className="border border-[#EEEEEE] w-9 h-9 text-[12px] flex justify-center items-center p-4 rounded-md cursor-pointer"
                    style={
                      selectedSize == "XL"
                        ? { backgroundColor: "black", color: "white" }
                        : {}
                    }
                    onClick={() => handleOnSelectSize("XL")}
                  >
                    XL
                  </div>
                  <div
                    className="border border-[#EEEEEE] w-9 h-9 text-[12px] flex justify-center items-center p-4 rounded-md cursor-pointer"
                    style={
                      selectedSize == "XXL"
                        ? { backgroundColor: "black", color: "white" }
                        : {}
                    }
                    onClick={() => handleOnSelectSize("XXL")}
                  >
                    <p>XXL</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold font-math">Color: Blue</p>
                <div className="flex flex-row gap-2">
                  <div
                    className="cursor-pointer rounded-full"
                    style={{
                      width: "clamp(10px, 4vh, 4rem)",
                      height: "clamp(10px, 4vh, 4rem)",
                      ...(selectedColor == "#8DB4D2"
                        ? { border: "1px solid black", padding: "3px" }
                        : null),
                    }}
                    onClick={() => handleOnSelectColor("#8DB4D2")}
                  >
                    <div
                      className="w-full h-full rounded-full"
                      style={{
                        backgroundColor: "#8DB4D2",
                      }}
                    />
                  </div>
                  <div
                    className="cursor-pointer rounded-full"
                    style={{
                      width: "clamp(10px, 4vh, 4rem)",
                      height: "clamp(10px, 4vh, 4rem)",
                      ...(selectedColor == "#000000"
                        ? { border: "1px solid black", padding: "3px" }
                        : null),
                    }}
                    onClick={() => handleOnSelectColor("#000000")}
                  >
                    <div
                      className="w-full h-full rounded-full"
                      style={{
                        backgroundColor: "#000000",
                      }}
                    />
                  </div>
                  <div
                    className="cursor-pointer rounded-full"
                    style={{
                      width: "clamp(10px, 4vh, 4rem)",
                      height: "clamp(10px, 4vh, 4rem)",
                      ...(selectedColor == "#FFD1DC"
                        ? { border: "1px solid black", padding: "3px" }
                        : null),
                    }}
                    onClick={() => handleOnSelectColor("#FFD1DC")}
                  >
                    <div
                      className="w-full h-full rounded-full"
                      style={{
                        backgroundColor: "#FFD1DC",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold font-math">Quantity</p>
                <div className="flex flex-row justify-between items-center">
                  <div className="border border-[#EEEEEE] w-[23%] h-9 flex flex-row rounded-md">
                    <div
                      className="h-full w-1/3 flex justify-center items-center hover:bg-[#EEEEEE] cursor-pointer"
                      onClick={() => handleSelectedProductQuantity(-1)}
                    >
                      -
                    </div>
                    <div className="h-full w-1/3 flex justify-center items-center">
                      {selectedQuantity}
                    </div>
                    <div
                      className="h-full w-1/3 flex justify-center items-center hover:bg-[#EEEEEE] cursor-pointer"
                      onClick={() => handleSelectedProductQuantity(1)}
                    >
                      +
                    </div>
                  </div>
                  <div
                    className="border border-black w-[70%] h-9 flex justify-center items-center rounded-md cursor-pointer"
                    onClick={handleOnAddToCart}
                  >
                    <p className="text-math text-sm font-semibold">
                      Add to cart
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <div className="flex flex-row items-center text-xs gap-4">
                  <div className="flex flex-row items-center">
                    <div className="flex justify-center items-center w-[26px] h-[26px] p-2">
                      <img src="/Product_page/compareSign.png" />
                    </div>
                    <p>Compare</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="flex justify-center items-center w-[26px] h-[26px] p-2">
                      <img src="/Product_page/help.png" />
                    </div>
                    <p>Ask a question</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="flex justify-center items-center w-[26px] h-[26px] p-2">
                      <img src="/Product_page/share.png" />
                    </div>
                    <p>Share</p>
                  </div>
                </div>
                <div className="border border-[#EEEEEE] w-full"></div>
              </div>
              <div className="flex flex-col gap-1 text-xs ">
                <div className="flex flex-row items-center">
                  <div className="flex justify-center items-center w-[26px] h-[26px] p-1">
                    <img className="" src="/Product_page/deliverySign.png" />
                  </div>
                  <p className="font-math font-bold">Estimated Delivery:</p>
                  <p>Jul 30 - Aug 03</p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="flex justify-center items-center w-[24px] h-[24px] p-1">
                    <img className="" src="/Product_page/returnSign.png" />
                  </div>
                  <p className="font-math font-bold">
                    Free Shipping & Returns:
                  </p>
                  <p>On all orders over $75</p>
                </div>
              </div>
              <div className="w-full h-24 flex flex-col justify-center items-center gap-1 bg-[#F8F8F8]">
                <img
                  className="w-[50%] h-[20%]"
                  src="/Product_page/paymentCards.png"
                />
                <p className="text-center text-xs">
                  Guarantee safe & secure checkout
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Deal of the month */}
        <DealOfTheMonth heading="People Also Loved" />
        {/* Some Collection */}
        <SomeCollection />
        {/* <MiniCart onClick={}/> */}
      </div>
    </>
  );
};

export default ProductPage;
