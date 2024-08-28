import React from "react";

const CommonFooter = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="  flex justify-center items-center  px-[170px] w-full h-[90%]">
        <div className="  flex flex-row justify-between items-center  mt-3 w-full h-[85%]">
          <img className="  w-[30%] h-full" src="/Homepage/7_sec/1.png" />
          <div className=" w-[63%] h-full flex justify-center items-center overflow-x-hidden">
            <div className=" text-center mx-0  h-[45%] w-[100%] flex flex-col justify-between items-center">
              <h2
                className="text-[#484848] text-[50px] mainHeading"
                style={{
                  fontSize: "clamp(1rem, 2.7vw, 3rem)",
                  fontWeight: "800",
                }}
              >
                Subscribe To Our Newsletter
              </h2>
              <p className="text-[12px] text-[#8A8A8A]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus inventore assumenda iure adipisci laudantium nihil
                explicabo quidem voluptatum autem dolorem, culpa labore mollitia
              </p>
              <div className="w-full h-[23%] px-[16px] text-[#8A8A8A] flex justify-start items-center">
                <div style={{ boxShadow: " 0px 141px 168px 0px" }}>
                  michael@ymail.com
                </div>
              </div>
              <button className="bg-black shadow-lg m-0 w-[144px] h-[39px] text-[10px] mb-2 text-white rounded-[7px] flex justify-center items-center">
                Subscribe Now
              </button>
            </div>
          </div>
          <img className="  w-[30%] h-full" src="/Homepage/7_sec/2.png" />
        </div>
      </div>
      <footer className=" -t-[1px] bordre-[#484848] self- flex flex-row justify-center items-center px-[100px] w-full h-[10%]">
        <div className="w-[50%] h-full flex items-center">
          <h3
            className="text-[#484848] text-[50px] mainHeading w-[50%]"
            style={{
              fontSize:
                "clamp(1rem, 1.8c:UsersDellDocumentsCodingLearningConceptsComponentsLoopCorousal c:UsersDellDocumentsCodingLearningConceptspracticestyle.css c:UsersDellDocumentsCodingLearningConceptspracticeindex.htmlvw, 3rem)",
            }}
          >
            FASCO
          </h3>
        </div>
        <div className="h-full w-[45%] flex flex-row justify-between items-center ">
          <p className="text-[10px] text-[#484848] cursor-pointer">
            Support Center
          </p>
          <p className="text-[10px] text-[#484848] cursor-pointer">Invoicing</p>
          <p className="text-[10px] text-[#484848] cursor-pointer">Contact</p>
          <p className="text-[10px] text-[#484848] cursor-pointer">Careers</p>
          <p className="text-[10px] text-[#484848] cursor-pointer">Blog</p>
          <p className="text-[10px] text-[#484848] cursor-pointer">FAQs</p>
        </div>
      </footer>
    </div>
  );
};

export default CommonFooter;
