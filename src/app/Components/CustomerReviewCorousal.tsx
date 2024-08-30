import React, { useEffect } from "react";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";
type RewindCorousalProps = {
  custArray: any;
};
const CustomerReviewCorousal = ({ custArray }: RewindCorousalProps) => {
  useEffect(() => {
    // Initialize Swiper only after the component has mounted
    const swiper = new Swiper(".swiper", {
      loop: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    // Cleanup function to destroy swiper instance on component unmount
    return () => {
      if (swiper) swiper.destroy(true, true);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    //  Slider main container
    <div className="swiper">
      {/* Additional required wrapper  */}
      <div className="swiper-wrapper">
        Slides
        <div className="swiper-slide">
          Slide first
          <img src="/Homepage/6_sec/1.png" />
        </div>
        <div className="swiper-slide">
          Slide 2
          <img src="/Homepage/6_sec/2.png" />
        </div>
        <div className="swiper-slide">
          Slide 3
          <img src="/Homepage/6_sec/1.png" />
        </div>
        <div className="swiper-slide">
          Slide 4
          <img src="/Homepage/6_sec/2.png" />
        </div>
        <div className="swiper-slide">
          Slide 4
          <img src="/Homepage/6_sec/1.png" />
        </div>
      </div>
      {/* If we need pagination  */}
      <div className="swiper-pagination"></div>

      {/* If we need navigation buttons  */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* If we need scrollbar  */}
      <div className="swiper-scrollbar"></div>
    </div>
  );
};

export default CustomerReviewCorousal;
