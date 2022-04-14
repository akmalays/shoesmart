import React from "react";
import Footer from "../../components/footer";
import Navbar from "../product_list/components/navbar";
import ProductImage from "./components/productImage";
import ProductReview from "./components/productReview";
import ProductSize from "./components/productSize";

function Index() {
  return (
    <div>
      <div className="bg-[#f3f3f3]">
        <Navbar />
        <ProductImage />
        {/* <ProductSize /> */}
        <ProductReview />
        <Footer />
      </div>
    </div>
  );
}

export default Index;
