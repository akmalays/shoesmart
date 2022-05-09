import React from "react";
import Image from "next/image";
import banner1 from "../assets/Group 45.png";
import banner2 from "../assets/Group 46.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

function topBanner() {
  return (
    <div className="flex justify-end px-5 py-5">
      <div className="flex items-start gap-3 max-w-4xl">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
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
            <Image src={banner1} alt="banner1" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={banner2} alt="banner2" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={banner2} alt="banner2" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={banner1} alt="banner1" className="cursor-pointer" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
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
            <Image src={banner1} alt="banner1" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={banner2} alt="banner2" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={banner2} alt="banner2" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={banner1} alt="banner1" className="cursor-pointer" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default topBanner;
