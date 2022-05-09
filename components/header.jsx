import React, { useState } from "react";
import { MdNavigateNext, MdSearch } from "react-icons/md";
import dataShoe from "../data/data.json";

function Header() {
  const [filter, setFilter] = useState("");
  const searchText = (e) => {
    setFilter(e.target.value);
  };

  let dataSearch = dataShoe.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <div>
      <>
        <div className="flex justify-between mx-5 items-center align-middle mt-5">
          <div className="flex gap-3 text-[9px] font-semibold cursor-pointer ">
            <button className="text-gray-500 bg-white border px-4 py-1 rounded-lg hover:text-white hover:bg-sky-900   focus:bg-sky-900 focus:text-white">
              {" "}
              ALL BRANDS
            </button>

            <button className="text-gray-500 bg-white border px-5 py-1 rounded-lg hover:text-white hover:bg-sky-900  focus:bg-sky-900 focus:text-white">
              {" "}
              Avali{" "}
            </button>
            <button className="text-gray-500 bg-white border px-5 py-1 rounded-lg hover:text-white hover:bg-sky-900 focus:bg-sky-900 focus:text-white ">
              {" "}
              Zetta{" "}
            </button>
            <button className="text-gray-500 bg-white border px-5 py-1 rounded-lg hover:text-white hover:bg-sky-900 focus:bg-sky-900 focus:text-white">
              {" "}
              Barefoot{" "}
            </button>
            <button className="text-gray-500 bg-white border px-5 py-1 rounded-lg hover:text-white hover:bg-sky-900 focus:bg-sky-900 focus:text-white">
              {" "}
              Perindu{" "}
            </button>
            <button className="text-gray-500 bg-white border px-5 py-1 rounded-lg hover:text-white hover:bg-sky-900 focus:bg-sky-900 focus:text-white">
              {" "}
              Shoelavin{" "}
            </button>
            <button className="text-gray-500 bg-white border px-5 py-1 rounded-lg hover:text-white hover:bg-sky-900 focus:bg-sky-900 focus:text-white">
              {" "}
              Misletoe{" "}
            </button>
            <div className="flex hover:text-red-800">
              <button className="text-black py-1 font-bold hover:text-red-800">
                {" "}
                More Brands{" "}
              </button>
              <div className="py-1">
                <MdNavigateNext size={15} />
              </div>
            </div>
          </div>
          <div className="xl:w-96 flex">
            <div className="input-group relative flex flex-inherit items-stretch w-full ">
              <input
                type="search"
                value={filter}
                className="form-control placeholder:text-[9px] relative flex-auto min-w-0 block w-full px-3 py-1 text-[9px] font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:border-blue-600 focus:outline-none"
                placeholder="Search Your Favourite Shoes .."
                aria-label="Search"
                aria-describedby="button-addon2"
                onChange={searchText}
              />
            </div>
            <button className="bg-sky-900 border border-solid border-gray-300 rounded text-[9px] px-2">
              {" "}
              <div className="text-white">
                <MdSearch size={15} />
              </div>
            </button>
          </div>
        </div>
      </>
    </div>
  );
}

export default Header;
