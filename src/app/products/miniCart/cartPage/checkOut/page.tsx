"use client";
import Link from "next/link";
import { useState } from "react";
import "./page.css";

export default function CheckOut() {
  const [countryRegionDrop, setCountryRegionDown] = useState(false); //For Country / Region dropdown
  const [creditCardDrop, setCreditCardDown] = useState(false); //For Credit Card dropdown
  function handleCountryRegionDropDown() {
    setCountryRegionDown(!countryRegionDrop);
  }
  function handlePaymentCardDropDown() {
    setCreditCardDown(!creditCardDrop);
  }
  return (
    <div className="w-screen h-auto">
      {/* First Screen */}
      <div className="w-screen max-h-[1200px] flex flex-col items-center">
        <div className="w-full h-[10vh] flex flex-col justify-center items-center gap-4">
          <h2
            className="text-[50px] mainHeading"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 3rem)",
              color: "black",
              fontWeight: "bolder",
            }}
          >
            FASCO Demo Checkout
          </h2>
          <div className="border border-[#8A8A8A] w-full" />
        </div>
        <div className=" w-[70vw] h-full grid grid-cols-2">
          {/* left div */}
          <div
            className="w-[90%] mt-[30px] grid gap-4"
            style={{ gridTemplateRows: ".5fr 1fr 2fr" }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between items-center">
                <p
                  className="text-[#484848] font-math"
                  style={{ fontSize: "clamp(2rem, 2vw, 3rem)" }}
                >
                  Contact
                </p>
                <div className="flex flex-row gap-1 text-[#8A8A8A] text-xs">
                  <p>Have and account?</p>
                  <Link href={"/signUp"}>
                    <p className="text-[#1456FF] text-xs">Create Account</p>
                  </Link>
                </div>
              </div>
              <input
                className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2  rounded-sm focus:border-blue-500 outline-none"
                placeholder="Email Address"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between items-center">
                <p
                  className="text-[#484848] font-math"
                  style={{ fontSize: "clamp(2rem, 2vw, 3rem)" }}
                >
                  Delivery
                </p>
              </div>
              <div className="relative flex flex-col">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="flex flex-row justify-between items-center px-4 py-3 bg-white text-[#8A8A8A] w-full text-sm border-2 rounded-sm focus:border-blue-500 outline-none"
                  type="button"
                  onClick={handleCountryRegionDropDown}
                >
                  <p>Country / Region</p>
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdown"
                  className="absolute top-[50px] border bordere-[#8A8A8A] z-10 hidden bg-white divide-y rounded-sm shadow w-full"
                  style={countryRegionDrop ? { display: "flex" } : {}}
                >
                  <ul
                    className="w-full py-2 text-sm text-[#8A8A8A]"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li className="hover:bg-gray-300">
                      <a href="#" className="block px-4 py-2">
                        Dashboard
                      </a>
                    </li>
                    <li className="hover:bg-gray-300">
                      <a href="#" className="block px-4 py-2">
                        Settings
                      </a>
                    </li>
                    <li className="hover:bg-gray-300">
                      <a href="#" className="block px-4 py-2">
                        Earnings
                      </a>
                    </li>
                    <li className="hover:bg-gray-300">
                      <a href="#" className="block px-4 py-2">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row gap-1">
                <input
                  className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-sm focus:border-blue-500 outline-none"
                  placeholder="First Name"
                ></input>
                <input
                  className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-sm focus:border-blue-500 outline-none"
                  placeholder="Last Name"
                ></input>
              </div>
              <input
                className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-sm focus:border-blue-500 outline-none"
                placeholder="Address"
              ></input>
              <div className="flex flex-row gap-1">
                <input
                  className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-sm focus:border-blue-500 outline-none"
                  placeholder="City"
                ></input>
                <input
                  className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-sm focus:border-blue-500 outline-none"
                  placeholder="Postal Code"
                ></input>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-2 border-blue-500 rounded bg-blue-500 checked:bg-blue-500 text-white relative"
                />
                <p className="text-sm text-[#8A8A8A]">
                  Save This info For Future
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row justify-between items-center">
                <p
                  className="text-[#484848] font-math"
                  style={{ fontSize: "clamp(2rem, 2vw, 3rem)" }}
                >
                  Payment
                </p>
              </div>
              <div className="flex flex-col">
                <div className="relative flex flex-col">
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className="flex flex-row justify-between items-center px-4 py-3 bg-white text-[#8A8A8A] w-full text-sm border-2 rounded-sm focus:border-blue-500 outline-none"
                    type="button"
                    onClick={handlePaymentCardDropDown}
                  >
                    <p>Credit Card</p>
                    <div className="flex flex-row items-center gap-1">
                      <img className="w-8 h-5" src="/checkOut/mastercard.png" />
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* <!-- Dropdown menu --> */}
                  <div
                    id="dropdown"
                    className="absolute top-[50px] border bordere-[#8A8A8A] z-10 hidden bg-white divide-y rounded-sm shadow w-full"
                    style={creditCardDrop ? { display: "flex" } : {}}
                  >
                    <ul
                      className="w-full py-2 text-sm text-[#8A8A8A]"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li className="hover:bg-gray-300">
                        <a href="#" className="block px-4 py-2">
                          Dashboard
                        </a>
                      </li>
                      <li className="hover:bg-gray-300">
                        <a href="#" className="block px-4 py-2">
                          Settings
                        </a>
                      </li>
                      <li className="hover:bg-gray-300">
                        <a href="#" className="block px-4 py-2">
                          Earnings
                        </a>
                      </li>
                      <li className="hover:bg-gray-300">
                        <a href="#" className="block px-4 py-2">
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-5 bg-[#F5F5F5]">
                  <div className="flex flex-col gap-1">
                    <div className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-sm focus:border-blue-500 outline-none">
                      <input
                        className="outline-none"
                        placeholder="Card Number"
                      ></input>
                    </div>
                    <div className="flex flex-row gap-1">
                      <input
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-sm focus:border-blue-500 outline-none"
                        placeholder="Expiration Date"
                      ></input>
                      <input
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-sm focus:border-blue-500 outline-none"
                        placeholder="Security Code"
                      ></input>
                    </div>
                    <input
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-sm focus:border-blue-500 outline-none"
                      placeholder="Card Holder Name"
                    ></input>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      className="w-5 h-5 border-2 border-blue-500 rounded bg-blue-500 checked:bg-blue-500 text-white relative"
                      type="checkbox"
                    ></input>
                    <p className="text-sm text-[#8A8A8A]">
                      Save This info For Future
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="bg-black shadow-lg w-full  h-[7vh] text-[10px] mb-2 text-white rounded-[4px] flex justify-center items-center">
                  Pay Now
                </div>
                <p className="" style={{ fontSize: "clamp(9px, 13px, 30px" }}>
                  Copyright © 2022 FASCO . All Rights Reseved.
                </p>
              </div>
            </div>
          </div>
          {/* Right div */}
          <div className="px-8 py-6 bg-[#F5F5F5]">
            <div
              className=" grid  gap-3 "
              style={{ gridTemplateRows: "2fr 1fr 2fr" }}
            >
              <div
                className=" grid gap-3"
                style={{ gridTemplateColumns: "1.3fr 3fr 1fr" }}
              >
                <div className="relative">
                  <img className="w-full h-full" src="/checkOut/girlImg.png" />
                  <div className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] flex justify-center items-center w-4 h-4 rounded-full bg-red-600">
                    <p className="text-xs">1</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-center">
                  <p className="text-sm font-math font-bolds">
                    Mini Dress With Ruffled Straps
                  </p>
                  <p className="text-sm text-[#484848]">Red</p>
                </div>
                <div className="flex justify-end items-center">
                  <p className="text-sm text-[#484848]">$100.00</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <input
                  className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-none focus:border-blue-500 outline-none"
                  style={{ flex: "3" }}
                  placeholder="Discount"
                ></input>
                <div
                  className="bg-black h-[7vh]  shadow-lg text-[10px] text-white rounded-[4px] flex justify-center items-center"
                  style={{ flex: "1" }}
                >
                  Apply
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center text-sm text-[#484848]">
                  <p>Subtotal</p>
                  <p>$100.00</p>
                </div>
                <div className="flex flex-row justify-between items-center text-sm text-[#484848]">
                  <p>Shipping</p>
                  <p>$40.00</p>
                </div>
                <div className="flex flex-row justify-between items-center text-sm text-[#484848]">
                  <p>Total</p>
                  <p>$140.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#8A8A8A] w-full" />
      </div>
    </div>
  );
}
