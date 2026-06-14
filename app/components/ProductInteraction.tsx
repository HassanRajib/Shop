"use client";
import React from "react";
import { ProductType } from "../types";

const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* size */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Size</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              className={`cursor-pointer border p-[2px] ${selectedSize === size ? "border-gray-600" : "border-gray-300"}`}
              key={size}
            >
              <div
                className={`w-6 h-6 text-center flex items-center justify-center ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* color */}
      <div className="flex flex-col gap-2 text-sm"></div>
      {/* quantity */}
      <div className="flex flex-col gap-2 text-sm"></div>
    </div>
  );
};

export default ProductInteraction;
