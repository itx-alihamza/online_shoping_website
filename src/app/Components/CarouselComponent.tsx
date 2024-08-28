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
    arrows: false,
};
  // console.log("customer data : ", customerData);
  return (
    <div className="flex flex-col w-[79%] carousel-container">
       <Slider
    ref={(slider: any) => {
        sliderRef = slider;
    }}
    {...settings}
>
    {customerData.map((item: any, index: number) => (
        <div key={index}>
            <img className="slick-slide slick-center" src={item.cusImg} alt={`Item ${index + 1}`} />
            <div className="text-center mt-2">
                <p>{item.text}</p>
                <p>{item.cusName}</p>
                <p>{item.passion}</p>
            </div>
        </div>
    ))}
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
