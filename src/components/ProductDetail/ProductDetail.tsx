import { useParams } from "react-router-dom";
import Container from "../Utility/Container";
import { getShopDetails } from "../../Store/ShopContext";

import ImageComp from "./ImageComp";
const ProductDetail = () => {
  const params = useParams();
  const {products} = getShopDetails();
  const selectedProduct = products.find( product => product.id === params.id);
  if (!selectedProduct) throw new Error("Product not found")
  return (
    <Container>
      <ImageComp src={selectedProduct!.img} isLiked={selectedProduct.isLiked} productId={selectedProduct.id}/>
    </Container>
  );
};

export default ProductDetail;
