import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselComp.css";
import { ChevronLeft, ChevronRight } from "react-feather";
type carouselProp = {
  customerData: any;
};
const CarouselComponent = ({ customerData }: carouselProp) => {
  const [itemindex, setItemIndex] = useState(0);
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0", // Adjust this padding to control how much of the next/previous slide is shown
    slidesToShow: 3,
    speed: 500,
    arrows: true,
  };
  // console.log("customer data : ", customerData);
  return (
    <div className="flex flex-col justify-center items-center max-w-[79%] max-h-full carousel-container">
      <Slider
        ref={(slider: any) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {customerData.map((item: any) => {
          console.log("item", item.text);
          return (
            // <div className="border border-black max-h-[61vh] w-[142%] flex-shrink-0 flex flex-row p-[40px] ransition-transform mr-3 duration-500 rounded-[5px]">
            <div className="flex flex-row border border-black w-full justify-center">
              <img className="w-[32%] h-[96%] mt-[3px]" src={item.cusImg} />
              <div className="pl-[20px] flex flex-col justify-between">
                <p className="text-[11px]">{item.text}</p>
                <img
                  className="w-[56px] h-[12px] mt-[3px]"
                  src="/Homepage/3_sec/stars.png"
                  style={{ boxShadow: "-13px 13px 0 #d9d9d9" }}
                />
                <div className="border border-black  w-1/2" />
                <h4
                  className="text-[#484848] text-[50px] mainHeading"
                  style={{ fontSize: "clamp(1rem, 2vw, 3rem)" }}
                >
                  {item.cusName}
                </h4>
                <p className="text-[12px]">{item.passion}</p>
              </div>
            </div>
          );
        })}
      </Slider>
      {/* Buttons */}
      <div className="  flex flex-row justify-between w-[100px] mt-[39px] ">
        <button
          onClick={previous}
          className="flex flex- w-8 h-8 p-[6px] shadow-black bg-white  justify-center items-center rounded-full"
          style={{ boxShadow: "0px 0px 20px -7px" }}
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="flex flex- w-8 h-8 p-[6px] shadow-black bg-white  justify-center items-center rounded-full"
          style={{ boxShadow: "0px 0px 20px -7px" }}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
