import React from "react";

function leftMenu() {
  return (
    <div>
      <div className="flex-col justify-start text-[11px] mx-5">
        <div className="pt-5 space-y-1">
          {" "}
          <p className="font-bold text-sm"> Product</p>
          <p> All</p>
          <p> Men</p>
          <p> Women</p>
          <p> Kids</p>
        </div>
        <div className="pt-5 space-y-1">
          <p className="font-bold text-sm"> Category</p>
          <p> All</p>
          <p> Boots</p>
          <p> Flats</p>
          <p> Heels</p>
          <p> Loafers</p>
          <p> Pantofels</p>
          <p> Sandals</p>
          <p> School Shoes</p>
          <p className="font-bold"> More..</p>
        </div>
        <div className="pt-5 space-y-1">
          <p className="font-bold text-sm"> Information</p>
          <p> About Us</p>
          <p> FAQ</p>
          <p> Shipping</p>
        </div>
      </div>
    </div>
  );
}

export default leftMenu;
