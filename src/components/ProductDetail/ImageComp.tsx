import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import { useDispatch } from "../../Store/ShopContext";
import Button from "../Utility/Button";
import RedirectToHome from "../ToHome/RedirectToHome";
interface props {
  src: string;
  productId: string;
  isLiked: boolean;
}
const ImageComp = ({ src, isLiked, productId }: props) => {
  const imgLink = src ? src : "";
  const dispatch = useDispatch();
  return (
    <div className="w-full relative">
      <div className="absolute top-0 left-0 flex items-center justify-between w-full  ">
        <RedirectToHome />
        <Button
          className="text-xl  lg:text-4xl"
          onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: productId })}
        >
          {isLiked ? (
            <FaHeart className="cursor-pointer  text-red-500" />
          ) : (
            <CiHeart className="cursor-pointer " />
          )}
        </Button>
      </div>
      <div>
        <img
          src={imgLink}
          alt="product-image"
          className=" md:w-1/3 w-9/10  mt-5 mx-auto "
        />
      </div>
    </div>
  );
};

export default ImageComp;
