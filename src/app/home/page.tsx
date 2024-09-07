"use client";
import { useState } from "react";
import DealOfTheMonth from "../Components/DealOfTheMonth";
import FollowUs from "../Components/FollowUs";
import NewArrivalBtns from "../Components/NewArrivalBtns";
import Product from "../Components/Product";
import SignBtn from "../Components/SignBtn";
import SomeCollection from "../Components/SomeCollection";
import { custData } from "../utils/customerData";
import products from "../utils/newArrivalProducts";
import Link from "next/link";
import CustomerReviewCorousal from "../Components/customerReviewCorousal/CustomerReviewCorousal";
export default function Home() {
  console.log("customer data", custData);

  // Arrival Buttons array
  const arrivalButton: any = [
    "Men's Fashion",
    "Women's Fashion",
    "Women Fashion",
    "Men Accessories",
    "Discount Deals",
  ];

  const [arrivalBtnIndex, setArrivalBtnIndex] = useState<number | null>(null); //New arrival button style prop

  function onShopNowBtnClick() {
    console.log("Show now button click");
  }

  // New arrival buttons
  function newArrivalMensFashionBtn(index: any) {
    console.log("New arrival Mens fashion button click");
    setArrivalBtnIndex(index);
  }
  function newArrivalWomensFashionBtn(index: any) {
    console.log("New arrival Womens fashion button click");
    setArrivalBtnIndex(index);
  }
  function newArrivalWomenFashionBtn(index: any) {
    console.log("New arrival Women fashion button click");
    setArrivalBtnIndex(index);
  }
  function newArrivalMenAccessoriesBtn(index: any) {
    console.log("New arrival Men Accessories button click");
    setArrivalBtnIndex(index);
  }
  function newArrivalDiscountDealsBtn(index: any) {
    console.log("New arrival Discount button click");
    setArrivalBtnIndex(index);
  }
  return (
    // Main div
    <div onClick={(e) => console.log("main dev", e)} className="relative">
      {/* Section-1 */}
      <div className="flex flex-col  h-[87vh] w-full sm:w-[80%] md:w-[70%]  m-auto justify-center items-center">
        <div className="flex flex-row  justify-between w-full h-[79%]">
          <div className=" flex justify-center w-[30%] bg-[#E0E0E0] h-full rounded-[9px]">
            <img
              className="self-end w-full h-[81%]"
              src="/Homepage/1_sec/1.png"
            />
          </div>
          <div className=" flex flex-col items-center w-[34%] h-full rounded-[9px]">
            <div className=" h-[22%] flex justify-center w-full rounded-[9px] bg-[#E0E0E0]">
              <img
                className="self-end w-[85%] h-[81%]"
                src="/Homepage/1_sec/4.png"
              />
            </div>
            <div className=" h-[56%] flex flex-wrap flex-col content-around justify-around items-center  w-full rounded-[9px]">
              <img
                className="w-[94%] h-[15%]"
                src="/Homepage/1_sec/ULTIMATE.png"
              />
              <img className="w-[85%] h-[30%]" src="/Homepage/1_sec/3.png" />
              <p className="text-[#484848] text-[15px]">New Collection</p>
              <SignBtn
                onClick={onShopNowBtnClick}
                btn="shopNow"
                text="SHOP NOW"
              />
            </div>
            <div className=" flex justify-center h-[22%] w-full rounded-[9px] bg-[#E0E0E0]">
              <img
                className="self-end w-full h-full"
                src="/Homepage/1_sec/2.png"
              />
            </div>
          </div>
          <div className=" flex justify-center w-[30%] h-full rounded-[9px] bg-[#E0E0E0]">
            <img
              className="self-end w-[70%] h-[81%]"
              src="/Homepage/1_sec/5.png"
            />
          </div>
        </div>
        <div className="flex justify-between text-[28px]  items-center pt-[25px] h-[22%] w-full">
          <div className="font-sans m-0 font-bold text-3xl ">CHANEL</div>
          <div className="font-serif m-0 text-sm ">LOUIS VUITTON</div>
          <div className="font-serif m-0 font-bold text-3xl">PRADA</div>
          <div className="font-sans m-0 text-xl">Calvin Klein</div>
          <div className="font-sans m-0 font-bold text-3xl ">DENIM</div>
        </div>
      </div>
      {/* Section-2 */}
      <DealOfTheMonth />
      {/* Section-3 */}
      <div id="NA" className="h-auto w-screen">
        <div className="  mx-auto flex flex-col justify-center items-center  h-auto w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw]">
          <div className="  flex flex-col  justify-center items-center my-11  max-w-[500px] max-h-[34vh]">
            <h1
              className="text-[#484848] text-[50px] mainHeading"
              style={{ fontSize: "clamp(2rem, 2.6vw, 3rem)" }}
            >
              New Arrivals
            </h1>
            <div className="">
              <p className="text-[#8A8A8A] text-[13px] text-center flex justify-center items-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, id esse alias architecto reprehenderit possimus!
                Suscipit
              </p>
            </div>
          </div>
          <div className=" flex flex-row justify-between  h-[13vh] w-[92%]">
            {arrivalButton.map((item: string, index: number) => {
              console.log("New Arrival Button", item, index);
              return (
                <NewArrivalBtns
                  index={index}
                  text={item}
                  isActive={arrivalBtnIndex}
                  onClick={() => newArrivalMensFashionBtn(index)}
                />
              );
            })}
          </div>
          <div className=" grid sm:grid-cols-[1fr] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] gap-12  p overflow-hidden h-[687px]  max-w-full">
            {products.map((item) => {
              return <Product item={item} />;
            })}
          </div>
          <div className=" flex justify-center items-center h-[12vh]">
            <SignBtn
              btn="viewMore"
              text="View More"
              onClick={() => {
                console.log("View More Button Click");
              }}
            />
          </div>
        </div>
      </div>
      {/* Section-4 Packages*/}
      <SomeCollection />

      {/* Section-5 */}
      <FollowUs />

      {/* Section-6 */}
      <div className="  bg-[#fafafa] w-screen h-[91vh]">
        <div className=" flex flex-col justify-center items-center pb-[6px] mt-[14px] w-full h-[35%]">
          <h1
            className="text-[#484848] text-[50px] mainHeading"
            style={{ fontSize: "clamp(1rem, 2.7vw, 3rem)" }}
          >
            This Is What Our Customers Say
          </h1>
          <p className="max-w-[41%] text-[12px] text-[#8A8A8A] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero moe
            seanto marico foricie amia.
          </p>
        </div>
        <div className="relative flex justify-center items-start  w-full h-[65%]  ">
          <CustomerReviewCorousal custArray={custData} />
        </div>
      </div>
      {/* Floating button */}
      <div className="fixed flex justify-between z-10 items-center top-[81%] right-[2%] w-20 ">
        <Link href="/products/miniCart/cartPage">
          <img
            className="w-8 h-8 p-2 border hover:border-[#ccc]  border-black bg-black rounded-lg"
            src="/Homepage/1_sec/crate.png"
          />
        </Link>
        <a href="#top">
          <img
            className="w-8 h-8 p-2 border hover:border-[#333] transition duration-300 ease-in-out border-black rounded-full"
            src="/Homepage/1_sec/arrow.png"
            style={{ transform: "5s ease-in-out linear" }}
          />
        </a>
      </div>
    </div>
  );
}
