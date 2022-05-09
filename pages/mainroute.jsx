import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import TopBanner from "../components/topBanner";
import MidBanner from "../components/midBanner";
import LowBanner from "../components/lowBanner";
import LeftMenu from "../components/leftMenu";
import ProductNew from "../components/productNew";
import ProductHero from "../components/productHero";
import { BiArrowToTop } from "react-icons/bi";

function Mainroute() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="bg-[#f3f3f3] relative z-0">
        <Navbar />
        <Header />
        <div className="flex justify-between">
          <LeftMenu />
          <div className="flex-col">
            <TopBanner />
            <div className="mx-5">
              <ProductNew />
            </div>
          </div>
        </div>
        <MidBanner />
        <div className="flex justify-end mx-7">
          <ProductHero />
        </div>
        <LowBanner />
        <Footer />
        <div className="flex justify-end items-end mt-2 mx-5 z-80">
          <button
            className=" text-white bg-red-700 rounded-full  px-2 py-2 animate-bounce "
            onClick={scrollToTop}
          >
            <BiArrowToTop size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mainroute;
