import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import TopBanner from "../components/topBanner";
import MidBanner from "../components/midBanner";
import LowBanner from "../components/lowBanner";

function Mainroute() {
  return (
    <div>
      <Navbar />
      <Header />
      <TopBanner />
      <MidBanner />
      <LowBanner />
      <Footer />
    </div>
  );
}

export default Mainroute;
