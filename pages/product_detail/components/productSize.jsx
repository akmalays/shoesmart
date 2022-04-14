import React from "react";

function productSize() {
  return (
    <div>
      <div className="bg-white drop-shadow-lg z-100 rounded-xl font-bold text-lg w-full mt-5">
        <div className="px-4 py-2">
          <div className="py-2">
            <p className="font-bold text-lg pb-5"> Tony Perotty Boots</p>
          </div>
          <div className="flex-col justify-start pb-5">
            <p className="text-base pb-2">Size</p>
            <div className="flex justify-center gap-2">
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
          <div className="flex-col justify-start">
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
            <div className="flex gap-5 py-10">
              <p className="text-base">Quantity</p>
              <div className="flex justify-center">
                <div className="bg-white rounded-full w-5 h-5 border items-center text-xl z-10">
                  {" "}
                  -{" "}
                </div>
                <div className="flex items-center bg-sky-900 text-white px-5 py-1">
                  {" "}
                  1{" "}
                </div>
                <div className="bg-white rounded-full w-5 h-5 border items-center text-xl z-10">
                  {" "}
                  +{" "}
                </div>
              </div>
            </div>
            <div className="flex-col justify-start pb-10">
              <p className="text-base">Price</p>
              <p className="text-2xl"> Rp. 369.000 </p>{" "}
            </div>
            <div className="flex gap-2 pb-20">
              <button className="border px-2 py-1 cursor-pointer">
                {" "}
                Add to cart
              </button>
              <button className="bg-sky-900 text-white rounded-lg font-semibold border px-5 py-2 cursor-pointer text-lg font-bolder">
                {" "}
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productSize;
