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
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    // arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  console.log("customer data : ", customerData);
  return (
    <div className="flex flex-col justify-center items-center w-[79%] carousel-container">
      <Slider
        ref={(slider: any) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {/* {customerData.map((item: any) => {
          console.log("customerData item", item.text);
          return (
            <div>
              <img className="" src={item.cusImg} />
              <div className="">
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
        })} */}
        <div>
          <img className="slick-slide slick-center" src="/" alt="Item 1" />
        </div>
        <div>
          <img
            className="slick-slide slick-center"
            src="image2.jpg"
            alt="Item 2"
          />
        </div>
        <div>
          <img
            className="slick-slide slick-center"
            src="image3.jpg"
            alt="Item 3"
          />
        </div>
        <div>
          <img
            className="slick-slide slick-center"
            src="image4.jpg"
            alt="Item 4"
          />
        </div>
        <div>
          <img
            className="slick-slide slick-center"
            src="image5.jpg"
            alt="Item 5"
          />
        </div>
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
