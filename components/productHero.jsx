import React from "react";
import { AiFillHeart } from "react-icons/ai";
import imgShoe from "../assets/pngwing.com.png";
import Image from "next/image";

function productContent() {
  return (
    <div>
      <div className="flex gap-3 flex-wrap max-w-4xl">
        <div className="bg-white rounded w-[165px] h-[220px] cursor-pointer">
          <div className="flex justify-end p-2 relative z-10  ">
            <AiFillHeart
              size={15}
              className="hover:text-red-800 cursor-pointer"
            />
          </div>
          <div className="flex justify-end z-0 w-[85%] p-2">
            <Image src={imgShoe} />
          </div>
          <div className="flex-col justify-start text-xs pl-5">
            <p> Tony Perroti Boots </p>
            <p className="font-bold"> Rp. 369.000</p>
          </div>
        </div>
        <div className="bg-white rounded w-[165px] h-[220px]">
          <div className="flex justify-end p-2 relative z-10 cursor-pointer ">
            <AiFillHeart size={15} className="hover:text-red-800" />
          </div>
          <div className="flex justify-end z-0 w-[85%] p-2">
            <Image src={imgShoe} />
          </div>
          <div className="flex-col justify-start text-xs pl-5">
            <p> Tony Perroti Boots </p>
            <p className="font-bold"> Rp. 369.000</p>
          </div>
        </div>
        <div className="bg-white rounded w-[165px] h-[220px]">
          <div className="flex justify-end p-2 relative z-10 cursor-pointer ">
            <AiFillHeart size={15} className="hover:text-red-800" />
          </div>
          <div className="flex justify-end z-0 w-[85%] p-2">
            <Image src={imgShoe} />
          </div>
          <div className="flex-col justify-start text-xs pl-5">
            <p> Tony Perroti Boots </p>
            <p className="font-bold"> Rp. 369.000</p>
          </div>
        </div>
        <div className="bg-white rounded w-[165px] h-[220px]">
          <div className="flex justify-end p-2 relative z-10 cursor-pointer ">
            <AiFillHeart size={15} className="hover:text-red-800" />
          </div>
          <div className="flex justify-end z-0 w-[85%] p-2">
            <Image src={imgShoe} />
          </div>
          <div className="flex-col justify-start text-xs pl-5">
            <p> Tony Perroti Boots </p>
            <p className="font-bold"> Rp. 369.000</p>
          </div>
        </div>
        <div className="bg-white rounded w-[165px] h-[220px]">
          <div className="flex justify-end p-2 relative z-10 cursor-pointer ">
            <AiFillHeart size={15} className="hover:text-red-800" />
          </div>
          <div className="flex justify-end z-0 w-[85%] p-2">
            <Image src={imgShoe} />
          </div>
          <div className="flex-col justify-start text-xs pl-5">
            <p> Tony Perroti Boots </p>
            <p className="font-bold"> Rp. 369.000</p>
          </div>
        </div>
        <div className="bg-white rounded w-[165px] h-[220px]">
          <div className="flex justify-end p-2 relative z-10 cursor-pointer ">
            <AiFillHeart size={15} className="hover:text-red-800" />
          </div>
          <div className="flex justify-end z-0 w-[85%] p-2">
            <Image src={imgShoe} />
          </div>
          <div className="flex-col justify-start text-xs pl-5">
            <p> Tony Perroti Boots </p>
            <p className="font-bold"> Rp. 369.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productContent;
