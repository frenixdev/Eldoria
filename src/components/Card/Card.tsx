import type { CardData } from "../../Store/productsDetails";
import Rating from "./Rating";
const Card = ({ title, img, price, stars, totalRating }: CardData) => {
  return (
    <div
      className="card
    w-full border border-border  rounded-lg  shadow-sm cursor-pointer
     bg-surface transition-all duration-(--transition-fast)
     hover:shadow-md hover:-translate-y-1
     md:p-4 py-2"
    >
      <div
        className="image-wrapper
       relative w-full h-auto
       overflow-hidden rounded-md"
      >
        <img src={img} alt={title} className="w-full h-full  object-contain " />
        <p
          className="price-tag
          absolute z-10 bottom-0 right-0
          rounded-tl-sm  text-xs text-cta-soft
           bg-primary  rounded-full px-2 py-1 "
        >
          $ {price}
        </p>
      </div>
      <p className="text-sm md:text-base m-2">{title}</p>
      <Rating stars={stars} totalRating={totalRating} className="ml-2 md:ml-0"/>
    </div>
  );
};

export default Card;
