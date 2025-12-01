import { CiStar } from "react-icons/ci"; //empty-star
import { FaStar } from "react-icons/fa6"; // fill-star
import type { CardData } from "../../Store/productsDetails";
const Card = ({ title, img, price, stars, totalRating }: CardData) => {
  const starList: string[] = [];
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starList.push("fill");
    } else {
      starList.push("empty");
    }
  }
  return (
    <div className="card md:p-4 cursor-pointer bg-neutral-50  w-full border border-zinc-200 rounded-lg shadow-sm  hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      <div
        className="image-wrapper
 w-full h-auto  overflow-hidden relative rounded-md"
      >
        <img src={img} alt={title} className="w-full h-full  object-contain " />
        <p
          className="price-tag absolute z-10 bottom-0 right-0 rounded-tl-sm  text-white   bg-orange-500
text-xs
rounded-full
px-2 py-1
 "
        >
          $ {price}
        </p>
      </div>
      <p className="text-sm md:text-base m-2">{title}</p>
      <div className="flex  items-center w-auto  ">
        <div className="flex gap-1 items-center  text-base">
          {starList.map((star, index) => {
            if (star === "fill") {
              return <FaStar key={index} className="text-yellow-500" />;
            } else {
              return <CiStar key={index} />;
            }
          })}
        </div>
        <span className="ml-2 text-sm text-zinc-600 "> •  ( {totalRating} reviews )</span>
      </div>
    </div>
  );
};

export default Card;
