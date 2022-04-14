import React from "react";
import { AiFillStar } from "react-icons/ai";
import profile1 from "../../../assets/Profile Photo (You can use another photo).png";
import Image from "next/image";

function ProductReview() {
  return (
    <div>
      <div className="flex mx-5 gap-5">
        <div className="bg-white rounded-lg px-5 py-7">
          <div className="flex-col justify-center items-center space-y-2">
            <p className="text-6xl font-bold text-black ">
              5.0<span className="text-[9px] text-gray-700">/5</span>
            </p>
            <div className="flex justify-center gap-1 text-yellow-600">
              <AiFillStar size={15} />
              <AiFillStar size={15} />
              <AiFillStar size={15} />
              <AiFillStar size={15} />
              <AiFillStar size={15} />
            </div>
            <p className="font-bold text-sm"> Sangat Baik </p>
          </div>
        </div>
        <div className="bg-white rounded-lg w-full">
          <div className="flex justify-start px-5 py-3">
            <p className="font-bold text-sm">
              {" "}
              What they think about this product?
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 px-12  ">
            <div className="flex-col">
              <Image
                src={profile1}
                width={80}
                height={80}
                className="rounded"
                alt="profile1"
              />
              <div className="flex justify-center gap-1 text-yellow-600 py-1 ">
                <AiFillStar size={10} />
                <AiFillStar size={10} />
                <AiFillStar size={10} />
                <AiFillStar size={10} />
                <AiFillStar size={10} />
              </div>
            </div>
            <div className="bg-sky-100 rounded-lg w-11/12">
              <div className="py-2 px-4">
                <div className=" flex justify-between py-2">
                  <p className="font-bold text-sm">
                    Rosalina, Ibu Rumah Tangga{" "}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {" "}
                    Tuesday, 29 June 2015
                  </p>
                </div>
                <p className="text-xs font-normal pb-5">
                  Tony Perrotti Boots sangat cocok dipakai suami saya, bahannya
                  sangat bagus. Terimakasih Shoesmart!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReview;
