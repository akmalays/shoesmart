import React from "react";
import { AiFillHeart } from "react-icons/ai";
import imgShoe from "../../../assets/pngwing.com.png";
import Image from "next/image";

function moreProduct() {
  return (
    <div>
      <div className="flex justify-center pb-10 px-5">
        <div className="bg-white rounded-lg w-full">
          <div className="flex justify-start font-bold text-lg px-5 py-5">
            <p> More Product</p>
          </div>{" "}
          <div className="flex flex-wrap gap-10 justify-center">
            <div className="w-lg pb-5">
              <div className="flex justify-end p-2 relative z-10 cursor-pointer ">
                <AiFillHeart size={15} className="hover:text-red-800" />
              </div>
              <div className="flex justify-center z-0 p-2">
                <Image src={imgShoe} alt="img-shoe" width={150} height={150} />
              </div>
              <div className="flex-col justify-start text-xs pl-5">
                <p> Tony Perroti Boots </p>
                <p className="font-bold"> Rp. 369.000</p>
              </div>
            </div>
            <div className="w-lg pb-5">
              <div className="flex justify-end p-2 relative z-10 cursor-pointer ">
                <AiFillHeart size={15} className="hover:text-red-800" />
              </div>
              <div className="flex justify-center z-0 p-2">
                <Image src={imgShoe} alt="img-shoe" width={150} height={150} />
              </div>
              <div className="flex-col justify-start text-xs pl-5">
                <p> Tony Perroti Boots </p>
                <p className="font-bold"> Rp. 369.000</p>
              </div>
            </div>
            <div className="w-lg pb-5">
              <div className="flex justify-end p-2 relative z-10 cursor-pointer ">
                <AiFillHeart size={15} className="hover:text-red-800" />
              </div>
              <div className="flex justify-center z-0 p-2">
                <Image src={imgShoe} alt="img-shoe" width={150} height={150} />
              </div>
              <div className="flex-col justify-start text-xs pl-5">
                <p> Tony Perroti Boots </p>
                <p className="font-bold"> Rp. 369.000</p>
              </div>
            </div>
            <div className="w-lg pb-5">
              <div className="flex justify-end p-2 relative z-10 cursor-pointer ">
                <AiFillHeart size={15} className="hover:text-red-800" />
              </div>
              <div className="flex justify-center z-0 p-2">
                <Image src={imgShoe} alt="img-shoe" width={150} height={150} />
              </div>
              <div className="flex-col justify-start text-xs pl-5">
                <p> Tony Perroti Boots </p>
                <p className="font-bold"> Rp. 369.000</p>
              </div>
            </div>
            <div className="w-lg pb-5">
              <div className="flex justify-end p-2 relative z-10 cursor-pointer ">
                <AiFillHeart size={15} className="hover:text-red-800" />
              </div>
              <div className="flex justify-center z-0 p-2">
                <Image src={imgShoe} alt="img-shoe" width={150} height={150} />
              </div>
              <div className="flex-col justify-start text-xs pl-5">
                <p> Tony Perroti Boots </p>
                <p className="font-bold"> Rp. 369.000</p>
              </div>
            </div>
            <div className="w-lg pb-5">
              <div className="flex justify-end p-2 relative z-10 cursor-pointer ">
                <AiFillHeart size={15} className="hover:text-red-800" />
              </div>
              <div className="flex justify-center z-0 p-2">
                <Image src={imgShoe} alt="img-shoe" width={150} height={150} />
              </div>
              <div className="flex-col justify-start text-xs pl-5">
                <p> Tony Perroti Boots </p>
                <p className="font-bold"> Rp. 369.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default moreProduct;
