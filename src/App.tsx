import { useEffect } from "react";
import HomeScreen from "./components/homeScreen/HomeScreen";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/ShoppingCart/Cart";
import { Route, Routes } from "react-router";


export default function () {

  useEffect(()=>{
    const loader = document.querySelector<HTMLDivElement>("#loader");
    if(loader) loader.remove();
  })

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product-details/:id" element={<ProductDetail />} />
    </Routes>
  );
}
