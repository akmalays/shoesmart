import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import imgShoe from "../assets/pngwing.com.png";
import dataShoe from "../data/data.json";
import { useRouter } from "next/router";

function productContent(props) {
  const router = useRouter();
  const [noOfElement, setnoOfElement] = useState(5);
  const slice = props.searchResults.slice(0, noOfElement);

  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };

  return (
    <div>
      <div className="flex gap-3 flex-wrap max-w-4xl">
        {slice.map((element, index) => (
          <div
            className="bg-white rounded w-[165px] h-[220px] cursor-pointer"
            key={index}
            onClick={() => {
              router.push(`/product_detail/${element.id}`);
            }}
          >
            <div className="flex justify-end p-2 relative z-10  ">
              <AiFillHeart
                size={15}
                className="hover:text-red-800 cursor-pointer"
              />
            </div>
            <div className="flex justify-center z-0 p-2">
              <img
                src={element.image_url}
                height={95}
                width={124}
                alt="img-shoe"
              />
            </div>
            <div className="flex-col justify-start text-xs pl-5">
              <p> {element.name} </p>
              <p className="font-bold">Rp. {element.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container items-center justify-center py-5">
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
