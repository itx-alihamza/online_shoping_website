import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./CustomerReviewCorousal.css";
import { ChevronLeft, ChevronRight } from "react-feather";

type RewindCorousalProps = {
  custArray: any[];
};

const CustomerReviewCorousal = ({ custArray }: RewindCorousalProps) => {
  const swiperRef = useRef<Swiper | null>(null);
  const [setCurrentIndex, currentIndex] = useState(1);

  useEffect(() => {
    // Initialize Swiper and store the instance in the ref
    swiperRef.current = new Swiper(".swiper", {
      loop: true,
      spaceBetween: 30,
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        786: {
          slidesPerView: 2,
        },
        1084: {
          slidesPerView: 3,
        },
      },
    });

    // Set initial scale-up on the centered slide
    const slides = document.querySelectorAll(".swiper-slide");
    const centerIndex = Math.floor(slides.length / 2);
    if (slides[centerIndex]) {
      slides[centerIndex].classList.add("scale-up");
    }

    // Cleanup function to destroy swiper instance on component unmount
    return () => {
      if (swiperRef.current) swiperRef.current.destroy(true, true);
    };
  }, []);

  return (
    <div className="swiper  w-[90%] h-[44%] mt-34px flex flex-col justify-center items-center overflow-hidden">
      <div className="swiper-wrapper h-[55%] w-full flex flex-row justify-between rounded-[5px]">
        {custArray.map((item) => (
          <div
            key={item.id}
            className="swiper-slide  h-full w-[45%] bg-white flex-shrink-0 flex flex-row p-[33px] mr-3 duration-500 rounded-[5px]"
          >
            <img
              className="w-[32%] h-[96%] mt-[3px]"
              style={{ boxShadow: "-11px 12px 0px #d9d9d9" }}
              src={item.cusImg}
              alt={item.cusName}
            />
            <div className="pl-[20px] flex flex-col justify-between">
              <p className="text-[11px]">{item.text}</p>
              <img
                className="w-[56px] h-[12px] mt-[3px]"
                src="/Homepage/3_sec/stars.png"
                alt="stars"
              />
              <div className=" w-1/2" />
              <h4
                className="text-[#484848] text-[50px] mainHeading"
                style={{ fontSize: "clamp(1rem, 2vw, 3rem)" }}
              >
                {item.cusName}
              </h4>
              <p className="text-[12px]">{item.passion}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="absolute flex flex-row left-1/2 -translate-x-1/2 justify-between w-[100px] mt-[39px]">
        <button
          className="custom-prev flex w-8 h-8 p-[6px] hover:border-purple-700 shadow-black bg-white justify-center items-center rounded-full"
          style={{ boxShadow: "0px 0px 20px -7px" }}
        >
          <ChevronLeft />
        </button>
        <button
          className="custom-next flex w-8 h-8 p-[6px] shadow-black bg-white justify-center items-center rounded-full"
          style={{ boxShadow: "0px 0px 20px -7px" }}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CustomerReviewCorousal;
