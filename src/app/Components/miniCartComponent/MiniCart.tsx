"use state";
import React, { useState } from "react";
import SignBtn from "../SignBtn";
import Link from "next/link";
import "./page.css";
type MiniCartProps = {
  isProductAdd: any;
};
const MiniCart = ({ isProductAdd }: MiniCartProps) => {
  console.log("Is Product Add", isProductAdd);
  const [selectedQuantity, setSelectedQuantity] = useState<any>(1); //Storing selected product quantity
  const [isActiveCart, setCart] = useState<any>(isProductAdd); // For displaying mini cart
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
    <div
      className="main-container absolute top-0 bottom-0 left-0 right-0 hidden justify-end h-screen  w-screen z-1000 bg-[#787878]/50"
      style={isActiveCart == true ? { display: "flex" } : {}}
    >
      <div
        className={`relative r-[-50%] bg-white   w-[40vw] h-full ${
          isActiveCart ? "mini-cart-container" : ""
        }`}
      >
        <div className="flex flex-row p-4 w-full h-full">
          <div className="flex flex-col justify-between ">
            {/* 1 of 2 */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <h2
                    className="font-math font-bold"
                    style={{ fontSize: "clamp(20px, 2vw, 80px" }}
                  >
                    Shopping Cart
                  </h2>
                </div>
                <p className="text-lg text-[#8A8A8A]">
                  Buy <b className="text-black">$122.35</b> More And Get{" "}
                  <b className="text-black">Free Shipping</b>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <img className="w-[20%] h-full" src="/miniCart/girlPic.png" />
                  <div className="flex flex-col gap-2 text-md">
                    <p className="font-math font-bold text-lg">Denim Jacket</p>
                    <p className="text-[#8A8A8A]">Color: Red</p>
                    <p>$14.80</p>
                    <div className="border-[0.05rem] border-[#EEEEEE] bg-[#F1F1F1] h-9 flex flex-row rounded-md">
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
                  </div>
                </div>
                <div className="border border-[#8A8A8A] w-full" />
              </div>
            </div>
            {/* 2 of 2 */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center gap-1">
                  <div className="border-2 border-black w-4 h-4" />
                  <p className="text-[#8A8A8A] text-md">
                    For <span className="text-black">$10.00</span> Please Wrap
                    The Product
                  </p>
                </div>
                <div className="border border-[#8A8A8A] w-full" />
              </div>
              <div className="flex flex-row justify-between items-center text-lg font-math font-bold">
                <p>Subtotal</p>
                <p>$100.00</p>
              </div>
              <div className=" flex flex-col h-full items-center gap-2">
                <SignBtn btn="checkout" onClick={() => null} text="Checkout" />
                <Link href={"/products/miniCart/cartPage"}>
                  <p className="text-md font-math font-bold underline">
                    View Cart
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[10%] felx justify-center items-start">
            <img
              className="w-4 h-4 cursor-pointer"
              src="/miniCart/closeSymbol.png"
              onClick={handleOnAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
