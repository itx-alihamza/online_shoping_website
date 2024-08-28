"use client";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignBtn from "./Components/SignBtn";
import { ChevronLeft, ChevronRight } from "react-feather";
import RewindCorousal from "./Components/RewindCorousal";
import { useState } from "react";
import Product from "./Components/Product";
import products from "./utils/products";
import NewArrivalBtns from "./Components/NewArrivalBtns";
import { custData } from "./utils/customerData";
import CarouselComponent from "./Components/CarouselComponent";
export default function Home() {
  console.log("customer data", custData);

  // Corousal images
  const imgData = [
    "/Homepage/2_sec/1.png",
    "/Homepage/2_sec/2.png",
    "/Homepage/2_sec/3.png",
    "/Homepage/2_sec/2.png",
  ];
  // Arrival Buttons array
  const arrivalButton: any = [
    "Men's Fashion",
    "Women's Fashion",
    "Women Fashion",
    "Men Accessories",
    "Discount Deals",
  ];
  const [curIndex, setCurrentImg] = useState(0);
  const [arrivalBtnIndex, setArrivalBtnIndex] = useState<number | null>(null); //New arrival button style prop
  //   next button logic
  const next = () => {
    setCurrentImg(() => (curIndex == imgData.length - 1 ? 0 : curIndex + 1));
  };
  //   prev button logic
  const prev = () => {
    setCurrentImg(() => (curIndex == 0 ? imgData.length - 1 : curIndex - 1));
  };
  function onShopNowBtnClick() {
    console.log("Show now button click");
  }
  function onBuyNowButtonClick() {
    console.log("Buy Now Button Click");
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
    <div onClick={(e) => console.log("main dev", e)} className="">
      {/* Section-1 */}
      <div className="flex flex-col  h-[84vh] w-full sm:w-[80%] md:w-[70%]  m-auto justify-center items-center">
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
      <div className="flex items-center h-[74vh] bg-[#dcdcdc40]">
        <div className="flex flex-row justify-end    w-full h-[70%]">
          {/* sec-2-inner-div-1 */}
          <div className=" flex flex-col     w-[35%] h-full">
            <div className=" w-[78%] h-[50%] flex flex-col justify-between">
              <h1
                className="text-[#484848] text-[50px] mainHeading"
                style={{ fontSize: "clamp(1rem, 2.7vw, 3rem)" }}
              >
                Deals Of The Month
              </h1>
              <p className="text-[10px] w-full text-[#8A8A8A]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate repellendus non quod, illo corporis tempore fuga nihil
              </p>
              <SignBtn
                onClick={onBuyNowButtonClick}
                btn="buyNow"
                text="Buy Now"
              />
            </div>
            <div className=" flex flex-col justify-between w-[78%] h-1/3">
              <p className="text-[18px]">Hurry, Before Its Too Late!</p>
              <div className="flex flex-row h-[90%] w-[78%] justify-between">
                <div className="flex w-[22%] flex-col">
                  <div className="flex justify-center digit items-center w-full h-[64%] text-2xl rounded-lg shadow-xl bg-white">
                    02
                  </div>
                  <p className="self-center text-[14px]">Days</p>
                </div>
                <div className="flex w-[20%] flex-col">
                  <div className="flex justify-center items-center w-full h-[64%] text-2xl rounded-lg shadow-xl bg-white">
                    <p>06</p>
                  </div>
                  <p className="self-center text-[14px]">Hr</p>
                </div>
                <div className="flex w-[20%] flex-col">
                  <div className="flex justify-center items-center w-full h-[64%] text-2xl rounded-lg shadow-xl bg-white">
                    <p>05</p>
                  </div>
                  <p className="self-center text-[14px]">Mins</p>
                </div>
                <div className="flex w-[20%] flex-col">
                  <div className="flex justify-center items-center w-full h-[64%] text-2xl rounded-lg shadow-xl bg-white">
                    <p>30</p>
                  </div>
                  <p className="self-center text-[14px]">Sec</p>
                </div>
              </div>
            </div>
            <div className="flex h-[20%] w-full justify-end items-end ">
              <div className="   w-[73px] mr-3 h-10 flex flex-row justify-between">
                <button
                  onClick={prev}
                  className="flex flex- w-8 h-8 p-2 shadow-xl bg-white justify-center items-center rounded-full"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={next}
                  className="flex flex- w-8 h-8 p-2 shadow-xl bg-white justify-center items-center rounded-full"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
          {/* sec-2-inner-div-2 */}
          <div className="   flex flex-row justify-between w-[50%] h-full">
            <div className="relative flex w-[35%] h-full mr-4">
              <img
                className="relative h-full w-full"
                src="/Homepage/2_sec/1.png"
              />
              <div className="absolute w-[53%] h-[22%] bottom-2 left-2 bg-white flex flex-col justify-center items-center">
                <div className="flex flex-row color-[#484848] w-full text-[9px] justify-center items-center">
                  <p>01</p>
                  <div className="  mx-1 w-5 h-[1px]" />
                  <p>Spring Sale</p>
                </div>
                <div className="">
                  <p>30% OFF</p>
                </div>
              </div>
            </div>
            <RewindCorousal
              onClick={(index) => {
                setCurrentImg(index);
              }}
              currentIndex={curIndex}
              imgArray={imgData}
            />
          </div>
        </div>
      </div>
      {/* Section-3 */}
      <div className="h-auto w-screen">
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
      {/* Section-4 */}
      <div className=" flex flex-col justify-end w-screen h-screen">
        <div className="relative  flex flex-row justify-end w-srceen h-[67vh]">
          <img
            className="absolute top-0 bottom-0 left-0 right-0 h-full w-[55%] -r-black"
            src="/Homepage/4_sec/peaky.png"
          ></img>
          <div className=" flex flex-row justify-end items-center w-[60%] bg-[#DADADA]">
            <div className=" w-[74%] h-[80%] flex flex-col justify-around ml-24">
              <p className="text-[13px] text-[#767676]">women Collection</p>
              <h1
                className="text-[#484848] text-[50px] heading-font mainHeading"
                style={{ fontSize: "clamp(2rem, 2.6vw, 3rem)" }}
              >
                Peaky Blinders
              </h1>
              <h5 className="line-clamp-1 font-bold">DESCRIPTION</h5>
              <p className="text-[13px] text-[#767676]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                ipsam necessitatibus eum debitis voluptatibus esse. Amet dolor
                debitis nobis minima hic sed nesciunt? Deserunt quae aliquid
                pariatur! Atque, iusto asperiores.
              </p>
              <div className=" flex flex-row w-[80%] h-[7%]">
                <p className="text-sm text-[#767676] mr-2">Size: </p>
                <p className="flex justify-center items-center text-white text-sm bg-black rounded-lg h-full w-10">
                  M
                </p>
              </div>
              <div className=" flex flex-row justify-start items-center w-full h-[18px] font-bold">
                <p className="text-[19px]">$100.</p>
                <p className=" self-center">00</p>
              </div>
              <div className="bg-black shadow-lg w-[138px] h-[40px] text-[9px] mb-2 text-white flex justify-center items-center rounded-lg cursor-pointer">
                Buy Now
              </div>
            </div>
          </div>
          {/* <div className=" skew-x-[-15deg] "></div> */}
        </div>
        <div className=" w-srceen h-[22vh]">
          <img className="" src="/Homepage/4_sec/final-features.png" />
        </div>
      </div>
      {/* Section-5 */}
      <div className="w-screen h-screen flex flex-col items-center">
        <div
          className=" flex flex-col justify-center items-center pb-[6px] w-full h-[49%]"
          style={{ backgroundColor: "rgb(255 248 248 / 30%)" }}
        >
          <div
            className="text-[#484848] text-[50px] mainHeading"
            style={{ fontSize: "clamp(1rem, 2.7vw, 3rem)" }}
          >
            Follow Us On Instagram
          </div>
          <p className="max-w-[41%] text-[12px] text-[#8A8A8A] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            consequatur. Facilis corporis molestias est in et nam praesentium
            vero quod ullam pariatur perspiciatis
          </p>
        </div>
        <div className=" max-h-[34%] grid grid-cols-[1.3fr_repeat(5,1fr)_1.3fr] grid-rows-1 items-center">
          <img
            className="transform hover:scale-[1.3]   hover:z-10 transition-transform duration-500 hover:transition-transform duration-200"
            src="/Homepage/5_sec/1.png"
          />
          <img
            className="transform hover:scale-[1.3]   hover:z-10 transition-transform duration-500 hover:transition-transform duration-200"
            src="/Homepage/5_sec/2.png"
          />
          <img
            className="transform hover:scale-[1.3]   hover:z-10 transition-transform duration-500 hover:transition-transform duration-200"
            src="/Homepage/5_sec/3.png"
          />
          <img
            className="transform hover:scale-[1.3]   hover:z-10 transition-transform duration-500 hover:transition-transform duration-200"
            src="/Homepage/5_sec/4.png"
          />
          <img
            className="transform hover:scale-[1.3]   hover:z-10 transition-transform duration-500 hover:transition-transform duration-200"
            src="/Homepage/5_sec/5.png"
          />
          <img
            className="transform hover:scale-[1.3]   hover:z-10 transition-transform duration-500 hover:transition-transform duration-200"
            src="/Homepage/5_sec/6.png"
          />
          <img
            className="transform hover:scale-[1.3]   hover:z-10 transition-transform duration-500 hover:transition-transform duration-200"
            src="/Homepage/5_sec/7.png"
          />
        </div>
      </div>
      {/* Section-6 */}
      <div className="  bg-[#fafafa] w-screen h-[91vh]">
        <div className=" flex flex-col justify-center items-center pb-[6px] mt-[14px] w-full h-[30%]">
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
        <div className=" border border-black bg-blue-800 w-full flex justify-center items-center h-[70%]">
          <CarouselComponent customerData={custData} />
        </div>
      </div>
    </div>
  );
}
