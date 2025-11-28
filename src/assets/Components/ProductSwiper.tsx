import Container from "./Container";
import ProductMiniCard from "./ProductMiniCard";
import {Swiper , SwiperSlide } from "swiper/react"
import data from "../Data/categoryData";
import "swiper/swiper-bundle.css";

const ProductScroller = () => {
  return (
    <Container className="select-none overflow-hidden  relative">
      <Swiper
      spaceBetween={30}
      direction="horizontal"
      slidesPerView="auto"
      grabCursor={true}
      loop={true}
      className="w-full cursor-pointer"

       >
        {data.map((details) => (
          <SwiperSlide className="w-auto!"><ProductMiniCard {...details} /></SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ProductScroller;
