import Container from "../Utility/Container";
import ProductMiniCard from "./ProductMiniCard";
import {Swiper , SwiperSlide } from "swiper/react"
import data from "../../Store/categoryData";
import "swiper/swiper-bundle.css";

const ProductScroller = () => {
  return (
    <Container className="select-none overflow-hidden  relative pb-0! lg:p-5 rounded-full border border-border hover:shadow-md transition ">
      <Swiper
      spaceBetween={30}
      direction="horizontal"
      slidesPerView="auto"
      grabCursor={true}
      loop={true}
      className="w-full cursor-pointer "
       >
        {data.map((details) => (
          <SwiperSlide  key={details.title}  className="w-auto! "><ProductMiniCard{...details} /></SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ProductScroller;
