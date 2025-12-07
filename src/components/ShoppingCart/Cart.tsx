import { useShop } from "../../Store/ShopContext";
import RedirectToHome from "../ToHome/RedirectToHome";
import CartItemCard from "./CartItemCard";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { cart: cartItems } = useShop();
  return (
    <div>
      <div className="header w-full p-3 bg-surface px-5">
        <RedirectToHome className="text-clr-text " />
      </div>
      {cartItems.length ? (
        <div className="cart-items-wrapper  my-5 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:p-3">
          {cartItems.map((item) => (
            <CartItemCard data={item} />
          ))}
        </div>
      )
      :<EmptyCart/>
    }
    </div>
  );
};

export default Cart;
