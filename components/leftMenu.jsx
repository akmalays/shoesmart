import React from "react";

function leftMenu() {
  return (
    <div>
      <div className="flex-col justify-start text-[11px] mx-5">
        <div className="pt-5 space-y-1">
          {" "}
          <p className="font-bold text-sm"> Product</p>
          <p className="hover:underline cursor-pointer"> All</p>
          <p className="hover:underline cursor-pointer"> Men</p>
          <p className="hover:underline cursor-pointer"> Women</p>
          <p className="hover:underline cursor-pointer"> Kids</p>
        </div>
        <div className="pt-5 space-y-1">
          <p className="font-bold text-sm"> Category</p>
          <p className="hover:underline cursor-pointer"> All</p>
          <p className="hover:underline cursor-pointer"> Boots</p>
          <p className="hover:underline cursor-pointer"> Flats</p>
          <p className="hover:underline cursor-pointer"> Heels</p>
          <p className="hover:underline cursor-pointer"> Loafers</p>
          <p className="hover:underline cursor-pointer"> Pantofels</p>
          <p className="hover:underline cursor-pointer"> Sandals</p>
          <p className="hover:underline cursor-pointer"> School Shoes</p>
          <p className="font-bold cursor-pointer hover:text-red-800"> More..</p>
        </div>
        <div className="pt-5 space-y-1">
          <p className="font-bold text-sm"> Information</p>
          <p className="hover:underline cursor-pointer"> About Us</p>
          <p className="hover:underline cursor-pointer"> FAQ</p>
          <p className="hover:underline cursor-pointer"> Shipping</p>
        </div>
      </div>
    </div>
  );
}

export default leftMenu;
