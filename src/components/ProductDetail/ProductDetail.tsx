import { Link, useParams } from "react-router-dom";
import Container from "../Utility/Container";
import { useShop } from "../../Store/ShopContext";
import { BsCartPlus } from "react-icons/bs";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import ImageComp from "./ImageComp";
import Rating from "../Card/Rating";
import Size from "./Size";
import Button from "../Utility/Button";
import { useDispatch } from "../../Store/ShopContext";
import Toast from "../toast/Toast";
import { useState } from "react";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { products } = useShop();
  const selectedProduct = products.find((product) => product.id === params.id);
  if (!selectedProduct) throw new Error("Product not found");
  const [isVisible, setIsVisible] = useState(false)

  function handleAddToCart(){
    dispatch({ type: "ADD_TO_CART", payload: selectedProduct!.id })
    setIsVisible(true);
    setTimeout(()=>{
      setIsVisible(false)
    }, 3000)
  }
  return (
    <Container className="space-y-5 md:space-y-10 md:p-10 ">
      {
        isVisible && <Toast className="bg-sucess ">
         <p className="text-sucess-text">  Item added successfully! </p>
        </Toast>
      }
      <ImageComp
        src={selectedProduct!.img}
        isLiked={selectedProduct.isLiked}
        productId={selectedProduct.id}
      />
      <div className="flex mb-2 font-semibold text-xl sm:text-2xl md:text-3xl">
        <h3 className="mr-auto">{selectedProduct.title}</h3>
        <p className="">$ {selectedProduct.price}</p>
      </div>
      <Rating
        stars={selectedProduct.stars}
        totalRating={selectedProduct.totalRating}
      />
      <Size />
      <p className="line-clamp-3 text-sm md:text-xl text-clr-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        facere earum odit ipsum minima necessitatibus, numquam odio non fugiat
        ea dolor ratione, temporibus inventore vel praesentium. Beatae suscipit
        magnam deserunt?
      </p>

      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <Link to={"/cart"} className="block w-full">
          <Button
            className={`w-full bg-primary text-primary-text hover:bg-primary-soft hover:text-cta-dark-text rounded-3xl  border border-transparent hover:border-cta-border py-3 shadow-sm hover:-translate-y-0.5 hover:shadow-md `}

          >
            Buy now
            <MdOutlineShoppingCartCheckout className="inline-block ml-5" />
          </Button>
        </Link>
        <Button
          onClick={handleAddToCart}
          className="flex
        bg-primary-soft border border-cta-border text-cta-dark-text rounded-3xl w-auto hover:border-primary  shadow-sm
        p-3 hover:-translate-y-0.5 hover:shadow-md
        md:w-fit whitespace-nowrap gap-10 items-center justify-center
        "
        >
          Add to cart <BsCartPlus className="" />
        </Button>
      </div>
    </Container>
  );
};

export default ProductDetail;
