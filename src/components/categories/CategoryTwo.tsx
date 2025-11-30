import CategoryWrapper from "./CategoryWrapper";
import { mustHaves } from "../../Store/productsDetails";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
const CategoryTwo = () => {
  return (
    <CategoryWrapper title="Must Haves">
      {mustHaves.map((item) => (
        <Link key={item.id} to={`/product-details/${item.id}`}>
          <Card {...item} />
        </Link>
      ))}
    </CategoryWrapper>
  );
};

export default CategoryTwo;
