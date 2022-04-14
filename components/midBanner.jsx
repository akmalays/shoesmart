import React from "react";
import Image from "next/image";
import banner3 from "../assets/Banner new Coming.png";

function midBanner() {
  return (
    <div className="flex justify-end px-5 py-5 cursor-pointer">
      <div className="max-w-4xl rounded ">
        <Image src={banner3} alt="banner-3" className="rounded-xl" />
      </div>
    </div>
  );
}

export default midBanner;
