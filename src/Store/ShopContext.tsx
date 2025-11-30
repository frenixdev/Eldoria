import {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { bestSeller, mustHaves } from "./productsDetails";
import type { CardData } from "./productsDetails";

interface CartItems extends CardData {
  quantity: number;
}
interface shopContext {
  products: CardData[];
  cart: CartItems[];
}
type ShopAction =
  | { type: "INCREASE_QTY"; payload: string }
  | { type: "LOAD_LOCAL_DATA"; payload: shopContext }
  | { type: "DECREASE_QTY"; payload: string }
  | { type: "ADD_TO_CART"; payload: string }
  | { type: "TOGGLE_LIKE"; payload: string }
  | { type: "REMOVE_FROM_CART"; payload: string };

interface props {
  children: React.ReactNode;
}

const ShopDetailsCtx = createContext<shopContext | null>(null);
const DispatchCtx = createContext<React.Dispatch<ShopAction> | null>(null);

const initialState: shopContext = {
  products: [...bestSeller, ...mustHaves],
  cart: [],
};

function reducer(state: shopContext, action: ShopAction): shopContext {
  switch (action.type) {
    case "TOGGLE_LIKE":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, isLiked: !product.isLiked }
            : product
        ),
      };
    case "LOAD_LOCAL_DATA":
      return {
        ...state,
        products: action.payload.products ?? state.products,
        cart: action.payload.cart ?? state.cart,
      };

    default:
      return state;
  }
}

export default function ShopContext({ children }: props) {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const data = localStorage.getItem("shopDetails");
    return data ? JSON.parse(data) : initial;
  });

  useEffect(() => {
    const toString = JSON.stringify(state);
    localStorage.setItem("shopDetails", toString);
    console.log("localStorage sucessfull");
  }, [state]);

  return (
    <ShopDetailsCtx.Provider
      value={{ products: state.products, cart: state.cart }}
    >
      <DispatchCtx.Provider value={dispatch}>{children}</DispatchCtx.Provider>
    </ShopDetailsCtx.Provider>
  );
}

export const getShopDetails = () => {
  const ctx = useContext(ShopDetailsCtx);
  if (!ctx) throw new Error("Shop context is null");
  return ctx;
};
export const getDispatch = () => {
  const ctx = useContext(DispatchCtx);
  if (!ctx) throw new Error("Dispatch context is null");
  return ctx;
};
