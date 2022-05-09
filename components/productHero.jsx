import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import imgShoe from "../assets/pngwing.com.png";
import dataShoe from "../data/data.json";
import { useRouter } from "next/router";

function productContent() {
  const router = useRouter();
  const [noOfElement, setnoOfElement] = useState(5);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };

  const slice = dataShoe.slice(0, noOfElement);

  return (
    <div>
      <div className="flex justify-start gap-3 flex-wrap max-w-4xl">
        {slice.map((el, i) => (
          <div
            className="bg-white rounded w-[165px] h-[220px] cursor-pointer"
            key={i}
            onClick={() => {
              router.push(`/product_detail/${el.id}`);
            }}
          >
            <div className="flex justify-end p-2 relative z-10  ">
              <AiFillHeart
                size={15}
                className="hover:text-red-800 cursor-pointer"
              />
            </div>
            <div className="flex justify-center z-0  p-2">
              <img src={el.image_url} height={95} width={124} alt="img-shoe" />
            </div>
            <div className="flex-col justify-start text-xs px-3">
              <p> {el.name} </p>
              <p className="font-bold"> Rp. {el.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-row items-center py-5">
        <button
          className="bg-blue-600 rounded text-white text-xs font-semibold px-2 py-1"
          onClick={() => {
            loadMore();
          }}
        >
          load more
        </button>
      </div>
    </div>
  );
}

export default productContent;
