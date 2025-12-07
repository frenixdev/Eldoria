import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
type props = {
  stars : number;
  totalRating: number,
  className?: string
}
const Rating = ({totalRating, stars, className} : props) => {
  const starList: string[] = [];
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starList.push("fill");
    } else {
      starList.push("empty");
    }
  }
  return (
      <div className={`flex  items-center w-full ${className}   `}>
        <div className="flex gap-0.5 md:gap-1 md:text-sm items-center  text-sm">
          {starList.map((star, index) => {
            if (star === "fill") {
              return <FaStar key={index} className="text-yellow-500" />;
            } else {
              return <CiStar key={index} />;
            }
          })}
        </div>
        <span className="ml-2 text-[.6rem]  text-clr-para ">
          •  {totalRating} <span className="md:inline-block hidden">reviews</span>
        </span>
      </div>
  )
};

export default Rating
