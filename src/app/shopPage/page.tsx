import { text } from "stream/consumers";

export default function ShopPage() {
  return (
    <div className="">
      {/* Fashion */}
      <div className=" flex flex-col items-center w-screen h-auto">
        <div className=" flex flex-col justify-center h-[20vh]">
          <h2
            className="text-[50px] mainHeading"
            style={{ fontSize: "clamp(1rem, 2.7vw, 3rem)", color: "black" }}
          >
            Fashion
          </h2>
          <div className="flex flex-row justify-around items-center text-[10px] font-semibold">
            <p>Home</p>
            <img className="w-2 h-2" src="/shop_page/arrowLeft.png" />
            <p>Fashion</p>
          </div>
        </div>
        <div className="w-[70vw] h-auto flex flex-col ">
          <div className=" h-[5vh] flex flex-row justify-between items-center">
            <div className=" w-[24%] flex justify-start">
              <h2
                className="text-[50px] mainHeading text-black"
                style={{ fontSize: "clamp(1rem, 1.6vw, 3rem)", color: "black" }}
              >
                Filters
              </h2>
            </div>
            <div className=" w-[38%] flex flex-row justify-start items-center">
              <p className="text-[13px] font-semibold">Best selling</p>
              <img
                className="w-[7px] h-[5px] mx-1"
                src="/Shop_page/arrowDown.png"
              />
            </div>
            <div className=" w-[38%] flex flex-row justify-end gap-2">
              <img
                className="w-[25px] h-[25px] p-2 bg-[#f2f2f2] rounded-sm cursor-pointer"
                src="/Shop_page/view1.png"
              />
              <img
                className="w-[25px] h-[25px] p-2 bg-[#f2f2f2] rounded-sm cursor-pointer"
                src="/Shop_page/view2.png"
              />
              <img
                className="w-[25px] h-[25px] p-2 bg-[#f2f2f2] rounded-sm cursor-pointer"
                src="/Shop_page/view3.png"
              />
              <img
                className="w-[25px] h-[25px] p-2 bg-[#f2f2f2] rounded-sm cursor-pointer"
                src="/Shop_page/view4.png"
              />
              <img
                className="w-[25px] h-[25px] p-2 bg-[#f2f2f2] rounded-sm cursor-pointer"
                src="/Shop_page/view5.png"
              />
            </div>
          </div>
        </div>
        <div className="border border-black w-[70vw] flex flex-row">
          <div className="border border-black w-[24%] flex flex-col">
            <div className="border gap-y-3">
              <p className="text-[12px] font-semibold">Size</p>
              <div className="w-8 h-8 p-2 border border-[#8A8A8A] text-[#8A8A8A] flex justify-center items-center rounded-sm">
                S
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
