import React from "react";
import Footer from "../../components/footer";
import Navbar from "../product_list/components/navbar";
import ProductImage from "./components/productImage";
import ProductReview from "./components/productReview";
import { BsChevronDown } from "react-icons/bs";
import MoreProduct from "./components/moreProduct";

function Index() {
  return (
    <div>
      <div className="bg-[#f3f3f3]">
        <Navbar />
        <ProductImage />
        <ProductReview />
        <div className="flex justify-center py-10">
          <div className="flex gap-3 rounded-lg bg-sky-900 px-5 py-2 hover:opacity-80 cursor-pointer">
            <p className="  font-semibold text-white"> See more review</p>
            <div className="flex items-center">
              <BsChevronDown className="text-white" size={20} />
            </div>
          </div>
        </div>
        <MoreProduct />
        <Footer />
      </div>
    </div>
  );
}

export default Index;
