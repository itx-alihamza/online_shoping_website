"use client";
import SignBtn from "@/app/Components/SignBtn";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const [selectedQuantity, setSelectedQuantity] = useState<any>(1); //Storing selected product quantity
  function handleSelectedProductQuantity(num: any) {
    // for selecting product quantity
    setSelectedQuantity((prvValue: any) => {
      let newQuantity = prvValue + num;
      return newQuantity < 0 ? 0 : newQuantity;
    });
  }
  function handleOnClickRemoveProduct() {
    // For removing product
  }
  return (
    <div className=" flex flex-col items-center justify-center w-screen h-auto">
      <div className=" flex flex-col justify-center mb-6">
        <h2
          className="text-[50px] mainHeading"
          style={{ fontSize: "clamp(1rem, 2.7vw, 3rem)", color: "black" }}
        >
          Shopping Cart
        </h2>
        <div className="flex flex-row gap-2 justify-center items-center text-[10px] font-semibold">
          <p>Home</p>
          <img className="w-2 h-2" src="/shop_page/arrowLeft.png" />
          <p>Your Shopping Cart</p>
        </div>
      </div>
      <div className="w-[70vw] h-auto flex flex-col gap-5">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-row text-[15px] font-bold font-math">
            <p className="w-1/4">Product</p>
            <p className="w-1/4">Price</p>
            <p className="w-1/4">Quantity</p>
            <p className="w-1/4">Total</p>
          </div>
          <div className="border border-[#8A8A8A] w-full" />
        </div>
        <div className="flex flex-row h-[23vh]">
          <div className="w-1/4 text-md font-bold font-math">
            <div className=" w-full h-full flex flex-row gap-2">
              <img className="w-[45%] h-full" src="/miniCart/girlPic.png" />
              <div
                className="flex flex-col gap-2 text-md"
                style={{ fontSize: "clamp(9px, 1vw, 60px)" }}
              >
                <p className="font-bold font-math">
                  Mini Dress With Ruffled Strape
                </p>
                <p className="text-[#8A8A8A]">Color: Red</p>
                <p
                  className="text-[#8A8A8A] text-[15px] underline font-bold font-math"
                  onClick={handleOnClickRemoveProduct}
                >
                  Remove
                </p>
              </div>
            </div>
          </div>
          <p className="w-1/4 text-[15px] font-bold font-math">
            <p>$14.80</p>
          </p>
          <div className="w-1/4 text-[15px] font-bold font-math">
            <div className="border-[0.05rem] border-[#8A8A8A] h-9 w-1/2 flex flex-row rounded-md">
              <div
                className="h-full w-1/3 flex justify-center items-center hover:bg-[#EEEEEE] cursor-pointer"
                onClick={() => handleSelectedProductQuantity(-1)}
              >
                -
              </div>
              <p className="h-full w-1/3 flex justify-center text-[#8A8A8A] items-center">
                {selectedQuantity}
              </p>
              <div
                className="h-full w-1/3 flex justify-center items-center hover:bg-[#EEEEEE] cursor-pointer"
                onClick={() => handleSelectedProductQuantity(1)}
              >
                +
              </div>
            </div>
          </div>
          <p className="w-1/4 text-[15px] font-bold font-math">
            <p>$14.80</p>
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="border border-[#8A8A8A] w-full" />
          <div className="flex flex-col gap-4 self-end">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-2">
                <div className="border-2 border-black w-4 h-4" />
                <p className="text-[#8A8A8A] text-md">
                  For <span className="text-black">$10.00</span> Please Wrap The
                  Product
                </p>
              </div>
              <div className="border border-[#8A8A8A] w-full" />
            </div>
            <div className="flex flex-row justify-between items-center text-lg font-math font-bold">
              <p>Subtotal</p>
              <p>$100.00</p>
            </div>
            <div className=" flex flex-col h-full items-center gap-2">
              <Link href={"/products/miniCart/cartPage/checkOut"}>
                <SignBtn btn="checkout" onClick={() => null} text="Checkout" />
              </Link>
              <Link href={"/products/miniCart/cartPage"}>
                <p className="text-md font-math font-bold underline">
                  View Cart
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row  bg-white p-4 w-[70vw] h-full">
        <div className="flex flex-col justify-between ">
          {/* 1 of 2 */}
          <div className="flex flex-col gap-2">
            <div className="border border-[#8A8A8A] w-full" />
          </div>
        </div>
        {/* 2 of 2 */}
      </div>
    </div>
  );
}
