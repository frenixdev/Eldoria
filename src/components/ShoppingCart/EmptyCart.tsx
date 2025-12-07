import { BsCartX } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import Button from "../Utility/Button";
import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <div className=" flex flex-col items-center gap-10 justify-center h-[80svh]  ">
      <BsCartX className="text-9xl " />
      <h2 className="text-2xl">
        Your Cart is <span className="font-bold text-primary">Empty</span>
      </h2>
      <Link to={"/"}>
        <Button className="flex items-center gap-5 bg-cta text-cta-text py-2 px-5 rounded-md shadow-md">
          <FiShoppingBag className="inline-block" />
          Return to Shop
        </Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
