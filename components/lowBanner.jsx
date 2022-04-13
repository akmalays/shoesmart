import React from "react";
import Image from "next/image";
import banner4 from "../assets/Banner.png";

function lowBanner() {
  return (
    <div>
      <div className="max-w-screen mx-5 py-5">
        <Image src={banner4} className="rounded-xl" />
      </div>
    </div>
  );
}

export default lowBanner;
