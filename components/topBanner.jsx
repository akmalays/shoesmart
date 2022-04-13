import React from "react";
import Image from "next/image";
import banner1 from "../assets/Group 45.png";
import banner2 from "../assets/Group 46.png";

function topBanner() {
  return (
    <div className="flex justify-end px-5 py-5">
      <div className="flex items-start gap-2 max-w-4xl">
        <Image src={banner1} />
        <Image src={banner2} />
      </div>
    </div>
  );
}

export default topBanner;
