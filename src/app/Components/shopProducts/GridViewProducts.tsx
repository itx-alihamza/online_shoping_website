import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./paginationStyle.css";
import { shopProductsData } from "@/app/utils/shopProducts";
import { shopProductTypes } from "@/app/utils/types";
type ShopProductsProps = {
  productSize: string | null;
  productColor: string | null;
  productPrice: string | null;
  productBrand: string | null;
  productTag: string | null;
};
const GridColumnsProductView = ({
  productSize,
  productColor,
  productPrice,
  productBrand,
  productTag,
}: ShopProductsProps) => {
  console.log("Product Size", productSize);
  console.log("Product Color", productColor);
  console.log("Product Price", productPrice);
  console.log("Product Brand", productBrand);
  console.log("Product Tag", productTag);
  // Products filtering logic
  let shopProductsFilterData: any = [];
  if (
    productSize ||
    productColor ||
    productPrice ||
    productBrand ||
    productTag
  ) {
    if (productSize) {
      const filteredSizeProducts = shopProductsData.filter(
        (item) => item.size == productSize
      );
      shopProductsFilterData = [...filteredSizeProducts];
    }
    if (productColor) {
      const filterColorProducts = shopProductsData.filter(
        (item) =>
          item.color1 == productColor ||
          item.color2 == productColor ||
          item.color3 == productColor
      );
      shopProductsFilterData = [...filterColorProducts];
    }
    if (productPrice) {
      if (productPrice == "$0-$50") {
        shopProductsFilterData = shopProductsData.filter(
          (item) => item.price >= 0 && item.price <= 50
        );
      }
      if (productPrice == "$50-$100") {
        shopProductsFilterData = shopProductsData.filter(
          (item) => item.price >= 50 && item.price <= 100
        );
      }
      if (productPrice == "$100-$150") {
        shopProductsFilterData = shopProductsData.filter(
          (item) => item.price >= 100 && item.price <= 150
        );
      }
      if (productPrice == "$150-$200") {
        shopProductsFilterData = shopProductsData.filter(
          (item) => item.price >= 150 && item.price <= 200
        );
      }
      if (productPrice == "$300-$400") {
        shopProductsFilterData = shopProductsData.filter(
          (item) => item.price >= 300 && item.price <= 400
        );
      }
    }
    if (productBrand) {
      shopProductsFilterData = shopProductsData.filter(
        (item) => item.brand == productBrand
      );
    }
    if (productTag) {
      shopProductsFilterData = shopProductsData.filter(
        (item) => item.tag == productTag
      );
    }
  } else {
    shopProductsFilterData = shopProductsData;
  }

  // console.log("Shop filter data outside: ", ShopProductsFilterData);
  //  const shopProductsFilterData = shopProductsData

  const itemsPerPage = 25; // Define the number of items per page
  const [itemOffset, setItemOffset] = useState(0);

  // Calculate the current items to display
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = shopProductsFilterData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(shopProductsFilterData.length / itemsPerPage);
  console.log("Page count : ", pageCount);

  // Handle page click
  const handlePageClick = (event: any) => {
    const newOffset =
      (event.selected * itemsPerPage) % shopProductsFilterData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div
        className=" grid gap-4 w-full h-[1034px] mb-[40px]"
        style={{
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "repeat(5, calc((100% - 1rem * 4)/5))",
        }}
      >
        {currentItems.map((item: shopProductTypes) => (
          <div key={item.id} className=" flex flex-col gap-1">
            <div className="relative w-full h-[65%]">
              <img
                className="w-full h-full"
                src={item.pic}
                alt="Product Image"
              />
              {item.quantity == 0 ? (
                <div
                  className="absolute top-1/2 left-1/2 text-center  p-1 bg-[#B1B1B1] flex justify-center items-center rounded-full translate-x-[-50%] translate-y-[-50%]"
                  style={{
                    width: "clamp(10%, 2.5vw, 40%)",
                    height: "clamp(10%, 2.5vw, 40%)",
                  }}
                >
                  <p
                    className="text-[#FFFFFF] font-bold"
                    style={{ fontSize: "clamp(6px, .3vw, 30px)" }}
                  >
                    SOLD OUT
                  </p>
                </div>
              ) : null}
            </div>

            <p
              className="text-[12px] font-semibold"
              style={{
                fontSize: "clamp(8px, 1.5vh, 4rem)",
              }}
            >
              {item.name}
            </p>
            <p
              className="text-[12px]"
              style={{
                fontSize: "clamp(8px, 1.5vh, 4rem)",
              }}
            >
              ${item.price}
            </p>
            <div className="flex flex-row gap-2">
              <div
                className=" rounded-full cursor-pointer"
                style={{
                  backgroundColor: item.color1,
                  width: "clamp(10px, 2vh, 4rem)",
                  height: "clamp(10px, 2vh, 4rem)",
                }}
              />
              <div
                className="border border-[#e6e6e6] rounded-full cursor-pointer"
                style={{
                  backgroundColor: item.color2,
                  width: "clamp(10px, 2vh, 4rem)",
                  height: "clamp(10px, 2vh, 4rem)",
                }}
              />
              {item.color3 && (
                <div
                  className="border border-[#e6e6e6]  rounded-full cursor-pointer"
                  style={{
                    backgroundColor: item.color3,
                    width: "clamp(10px, 2vh, 4rem)",
                    height: "clamp(10px, 2vh, 4rem)",
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      {/* React Paginate Component */}
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <div className="w-6 h-6 p-2 flex justify-center items-center cursor-pointer">
            <img className="w-1.5 h-1.5" src="/Shop_page/leftPage.png" />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel={
          <img
            className="w-1.5 h-1.5"
            style={{ rotate: "180deg" }}
            src="/Shop_page/leftPage.png"
          />
        }
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
};

export default GridColumnsProductView;
