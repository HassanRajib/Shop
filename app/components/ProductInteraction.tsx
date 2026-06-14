"use client";
import React, { useState } from "react";
import { ProductType } from "../types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [quantity, setQuantity] = useState(1);

  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (type: "acc" | "decr") => {
    if (type === "decr") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

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
              onClick={() => handleTypeChange("size", size)}
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
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Color</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              className={`cursor-pointer border p-[2px] rounded-full ${selectedColor === color ? "border-gray-600" : "border-gray-300"}`}
              key={color}
              onClick={() => handleTypeChange("color", color)}
            >
              <div
                className={`w-6 h-6 rounded-full`}
                style={{ backgroundColor: color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* quantity */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Quantity</span>
        <div className="flex items-center gap-2">
          <button
            className="cursor-pointer border border-gray-300 p-1"
            onClick={() => handleQuantityChange("decr")}
          >
            <FaMinus className="w-4 h-4" />
          </button>
          <span>{quantity}</span>
          <button
            className="cursor-pointer border border-gray-300 p-1"
            onClick={() => handleQuantityChange("acc")}
          >
            <FaPlus className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* buttons */}
      <button>Add to Cart</button>
      <button>Buy this item</button>
    </div>
  );
};

export default ProductInteraction;
