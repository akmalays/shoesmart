import React from "react";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

function footer() {
  return (
    <div>
      <div className="flex justify-center gap-24 bg-sky-100 py-5  ">
        <div className="flex-col max-w-xs">
          <p className="font-bold uppercase text-xl mb-5"> Shoesmart</p>
          <p className="text-sm">
            {" "}
            Market place sepatu online untuk wanita dan pria yang didirikan pada
            2016. kami hadir sebagai jawaban atas tantangan dunia teknologi yang
            semakin maju, termasuk dalam hal berbelanja secara online.
          </p>
        </div>
        <div className="flex-col">
          <p className="font-semibold text-xl mb-5"> Category </p>
          <div className="flex justify-between gap-10 cursor-pointer">
            <div className="flex-col ">
              <p className="hover:underline"> Boots</p>
              <p className="hover:underline"> Flats</p>
              <p className="hover:underline"> Heels</p>
              <p className="hover:underline">Loafers</p>
              <p className="hover:underline"> Pantofels</p>{" "}
            </div>
            <div className="flex-col">
              <p className="hover:underline"> About Us</p>
              <p className="hover:underline"> FAQ</p>
              <p className="hover:underline"> Shipping</p>
              <p className="hover:underline">Return Policy</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 text-sky-900 cursor-pointer">
          <AiOutlineTwitter size={22} />
          <AiFillYoutube size={22} />
          <FaFacebook size={20} />
          <BsTelephoneFill size={18} />
        </div>
      </div>
    </div>
  );
}

export default footer;
