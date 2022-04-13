import React from "react";
import shoe1 from "../../../assets/pngwing.com.png";
import Image from "next/image";

function productImage() {
  return (
    <div>
      <div className="px-5 py-5">
        <div className="bg-sky-100 w-8/12 rounded-xl">
          <div className="flex gap-14 justify-end pt-5 text-[11px] px-10">
            <button
              className="cursor-pointer px-3 py-1 border bg-white rounded-lg text-black font-semibold
          hover:bg-sky-900 hover:text-white focus:bg-sky-900 focus:text-white"
            >
              Description
            </button>
            <button
              className="cursor-pointer px-4 py-1 border bg-white rounded-lg text-black font-semibold
          hover:bg-sky-900 hover:text-white focus:bg-sky-900 focus:text-white"
            >
              Details
            </button>
            <button
              className="cursor-pointer px-4 py-1 border bg-white rounded-lg text-black font-semibold
          hover:bg-sky-900 hover:text-white focus:bg-sky-900 focus:text-white"
            >
              Instruction
            </button>
          </div>
          <div className="flex gap-2 px-10 pt-2 pb-4 w-full">
            <div className="w-[100%] relative">
              <Image src={shoe1} />
            </div>
            <div className="bg-white rounded-xl w-11/12 h-6/8">
              <div className="px-3 py-3 text-left">
                <p className="text-black font-normal text-[11px] leading-6">
                  {" "}
                  Tony perroti Boots dengan design high class dan modern. Sangat
                  nyaman untuk dipakai. terbuat dari genuine Leather (kulit Sapi
                  Asli) yang berkualitas tinggi. Dibuat dengan handmade dan
                  produksi di Indonesia. Terdapat zipper (resleting) di bagian
                  upper. Upper dan Sole sangat kuat dan stabil. Design klasik
                  ini menunjukkan sisi elegan dari produk.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="pr-10 pl-5 pb-16">
            <div className="flex gap-3">
              <div className="bg-white rounded ">
                <Image src={shoe1} />
              </div>
              <div className="bg-white rounded ">
                <Image src={shoe1} />
              </div>
              <div className="bg-white rounded ">
                <Image src={shoe1} />
              </div>
              <div className="bg-white rounded ">
                <Image src={shoe1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productImage;
