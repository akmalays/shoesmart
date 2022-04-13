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

function Mainroute() {
  return (
    <div>
      <div className="bg-[#f3f3f3]">
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
        <div className="flex justify-end">
          <ProductHero />
        </div>
        <LowBanner />
        <Footer />
      </div>
    </div>
  );
}

export default Mainroute;
