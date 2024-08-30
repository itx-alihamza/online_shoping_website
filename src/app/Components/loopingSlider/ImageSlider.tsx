import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./image-slider.css";

type ImageSliderProps = {
  images: any;
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section
      // aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map((item: any, index: number) => (
          <div
            key={index}
            className="border border-black h-full w-[44%] flex-shrink-0 flex flex-row p-[40px] mr-3 duration-500 rounded-[5px]"
          >
            <img className="w-[32%] h-[96%] mt-[3px]" src={item.cusImg} />
            <div className="pl-[43px] flex flex-col justify-between">
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
        ))}
      </div>
      {/* buttons */}
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      {/* indicators */}
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_: any, index: any) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
