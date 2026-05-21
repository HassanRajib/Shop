"use client"

import React from 'react'
import { IoFootsteps } from "react-icons/io5";
import { SlEyeglass } from "react-icons/sl";
import { FiBriefcase, FiShoppingBag } from "react-icons/fi";
import { RiShirtLine } from "react-icons/ri";
import { FaHandPaper, FaVenus } from "react-icons/fa";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const categories = [
  {
    name: "All",
    icon: <FiShoppingBag className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <RiShirtLine className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <IoFootsteps className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <SlEyeglass className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <FiBriefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <FaVenus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <RiShirtLine className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <FaHandPaper className="w-4 h-4" />,
    slug: "gloves",
  },
];



const Catagories = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()


  const selectedCatagory = searchParams.get("catagory")

  const handleChange = (value:string | null ) => {
    const params = new URLSearchParams(searchParams)
    params.set("catagory", value || "all")
    router.push(`${pathname}?${params.toString()}`, {scroll: false})
  }
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-amber-100 p-2 rounded-lg mb-4 text-sm'>
        {categories.map(catagory=>(
          <div className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
            catagory.slug === selectedCatagory ? "bg-white" : "text-gray-400"
          }`} key={catagory.name} onClick={()=>handleChange(catagory.slug)}>
            {catagory.icon}
            {catagory.name}
          </div>
        ))}
    </div>
  )
}

export default Catagories