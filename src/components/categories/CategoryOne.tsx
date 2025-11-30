
import CategoryWrapper from "./CategoryWrapper";
import type { CardData } from "../../Store/productsDetails";
import {bestSeller} from "../../Store/productsDetails";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const CategoryOne = () => {
  return (
    <CategoryWrapper title="Best Seller" wrapperClass="">
      {bestSeller.map((item: CardData) => (
        <Link key={item.title} to={`/product-details/${item.id}`}>
        <Card  {...item} />
        </Link>

      ))}
    </CategoryWrapper>
  );
};

export default CategoryOne;
