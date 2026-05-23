import Image from "next/image";
import React from "react";
import ProductList from "./components/ProductList";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ catagory: string }>;
}) => {
  const catagory = (await searchParams).catagory
  return (
    <div className="">
      <div className="relative aspect-3/1 md-10">
        <Image src="/fich.png" alt="big image" fill />
      </div>
      <ProductList catagory={catagory} params="homepage" />
    </div>
  );
};

export default Homepage;
