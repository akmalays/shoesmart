import React from "react";
import Image from "next/image";
import banner3 from "../assets/Banner new Coming.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

function midBanner() {
  return (
    <div className="flex justify-end px-5 py-5 cursor-pointer">
      <div className="max-w-4xl rounded ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <Image src={banner3} alt="banner-3" className="rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={banner3} alt="banner-3" className="rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={banner3} alt="banner-3" className="rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={banner3} alt="banner-3" className="rounded-xl" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default midBanner;
