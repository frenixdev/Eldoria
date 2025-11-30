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
    <div className="card md:p-4 cursor-pointer  w-full ">
      <div className="image-wrapper  w-full h-40 sm:h-80 overflow-hidden relative rounded-sm">
        <img src={img} alt={title} className="h-full  w-full object-contain " />
        <p className="price-tag absolute bottom-0 right-0 rounded-tl-sm bg-red-700 px-2 py-1 text-white   text-sm ">
          $ {price}
        </p>
      </div>
      <p className="text-base m-2">{title}</p>
      <div className="flex justify-between items-center w-auto  ">
        <div className="flex gap-1 items-center  text-base">
          {starList.map((star, index) => {
            if (star === "fill") {
              return <FaStar key={index} className="text-yellow-500" />;
            } else {
              return <CiStar key={index} />;
            }
          })}
        </div>
        <span className="ml-2 text-sm ">( {totalRating} )</span>
      </div>
    </div>
  );
};

export default Card;
