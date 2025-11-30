import { BsArrowLeft } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "../../Store/ShopContext";
import Button from "../Utility/Button";
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
        <Link to="/">
          <Button className="text-xl  lg:text-4xl">
            <BsArrowLeft className=" cursor-pointer" />
          </Button>
        </Link>
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
      <div >
        <img
          src={imgLink}
          alt="product-image"
          className=" w-1/2  mt-5 mx-auto "
        />
      </div>
    </div>
  );
};

export default ImageComp;
