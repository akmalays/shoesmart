import React from "react";
import shoe1 from "../../../assets/pngwing.com.png";
import dataShoe from "../../../data/data.json";

function productImage() {
  return (
    <div>
      <div className="px-5 py-5 flex">
        <div className="bg-sky-100 max-w-4xl rounded-xl z-0">
          <div className="flex gap-5 justify-end pt-5 text-[14px] px-20">
            <button
              className="cursor-pointer px-3 py-1 border bg-white rounded-lg text-black font-bold
          hover:bg-sky-900 hover:text-white focus:bg-sky-900 focus:text-white"
            >
              Description
            </button>
            <button
              className="cursor-pointer px-4 py-1 border bg-white rounded-lg text-black font-bold
          hover:bg-sky-900 hover:text-white focus:bg-sky-900 focus:text-white"
            >
              Details
            </button>
            <button
              className="cursor-pointer px-4 py-1 border bg-white rounded-lg text-black font-bold
          hover:bg-sky-900 hover:text-white focus:bg-sky-900 focus:text-white"
            >
              Instruction
            </button>
          </div>
          <div className="flex gap-2 px-20 pt-2 pb-4 w-sm">
            <div className="w-[65%] relative">
              <img
                src={dataShoe.image_url}
                width={100}
                height={100}
                alt="shoe1"
              />
            </div>

            <div className="bg-white rounded-xl w-96 h-6/8">
              <div className="px-4 py-4 text-left">
                <p className="text-black font-normal text-[16px] leading-6">
                  {" "}
                  {dataShoe.description}Tony perroti Boots dengan design high
                  class dan modern. Sangat nyaman untuk dipakai. terbuat dari
                  genuine Leather (kulit Sapi Asli) yang berkualitas tinggi.
                  Dibuat dengan handmade dan produksi di Indonesia. Terdapat
                  zipper (resleting) di bagian upper. Upper dan Sole sangat kuat
                  dan stabil. Design klasik ini menunjukkan sisi elegan dari
                  produk.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="pr-20 pl-5 pb-12">
            <div className="flex gap-3">
              <div className="bg-white rounded ">
                <img src={shoe1} alt="shoe1" width={300} height={270} />
              </div>
              <div className="bg-white rounded ">
                <img src={shoe1} alt="shoe1" width={300} height={270} />
              </div>
              <div className="bg-white rounded ">
                <img src={shoe1} alt="shoe1" width={300} height={270} />
              </div>
              <div className="bg-white rounded ">
                <img src={shoe1} alt="shoe1" width={300} height={270} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white drop-shadow-xl z-100 rounded-xl font-bold text-lg w-96 ml-[-4%]">
          <div className="px-7 py-2">
            <div className="py-2">
              <p className="font-bold text-lg pb-5">
                {" "}
                {dataShoe.name} Tony Perotty Boots
              </p>
            </div>
            <div className="flex-col justify-start pb-5">
              <p className="text-base pb-2">Size</p>
              <div className="flex justify-start gap-2">
                <button
                  className="border px-3 py-2 text-sm rounded-lg text-black hover:bg-sky-900 hover:text-white cursor-pointer
            focus:bg-sky-900 focus:text-white"
                >
                  30
                </button>
                <button
                  className="border px-3 py-2 text-sm rounded-lg text-black hover:bg-sky-900 hover:text-white cursor-pointer
            focus:bg-sky-900 focus:text-white"
                >
                  31
                </button>
                <button
                  className="border px-3 py-2 text-sm rounded-lg text-black hover:bg-sky-900 hover:text-white cursor-pointer
            focus:bg-sky-900 focus:text-white"
                >
                  32
                </button>
                <button
                  className="border px-3 py-2 text-sm rounded-lg text-black hover:bg-sky-900 hover:text-white cursor-pointer
            focus:bg-sky-900 focus:text-white"
                >
                  33
                </button>
                <button
                  className="border px-3 py-2 text-sm rounded-lg text-black hover:bg-sky-900 hover:text-white cursor-pointer
            focus:bg-sky-900 focus:text-white"
                >
                  34
                </button>
              </div>
            </div>
            <div className="flex-col justify-start py-5">
              <p className="font-bold text-base pb-2"> Color</p>
              <div className="flex justify-start gap-5 ">
                <button
                  className="text-black border px-4  rounded-lg py-1 text-xs hover:bg-black hover:text-white
              focus:bg-black focus:text-white "
                >
                  {" "}
                  Black
                </button>
                <button
                  className=" text-black border px-4  rounded-lg py-1 text-xs hover:bg-black hover:text-white
              focus:bg-black focus:text-white  "
                >
                  Blue
                </button>
              </div>
              <div className="flex justify-between py-10">
                <p className="text-base">Quantity</p>
                <div className="flex justify-center">
                  <div className="bg-white rounded-full w-7 h-7 border items-center text-xl z-10 place-items-center ">
                    <p className="place-items-center"> -</p>
                  </div>
                  <div className="flex items-center bg-sky-600 text-white px-5 py-1">
                    {" "}
                    1{" "}
                  </div>
                  <div className="bg-white rounded-full w-7 h-7 border  text-xl z-10">
                    {" "}
                    +{" "}
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start pb-20">
                <p className="text-base">Price</p>
                <p className="text-2xl"> Rp. 369.000 </p>{" "}
              </div>
              <div className="flex gap-2 pb-10">
                <button className="border flex-none rounded-lg px-2 py-1 hover:opacity-70 cursor-pointer">
                  {" "}
                  Add to cart
                </button>
                <button className="bg-sky-900 text-white rounded-lg font-semibold border px-5 py-2 cursor-pointer text-lg font-bolder hover:opacity-70  ">
                  {" "}
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productImage;
