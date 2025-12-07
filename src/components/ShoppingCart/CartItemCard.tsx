import { Link } from "react-router-dom";
import { useDispatch } from "../../Store/ShopContext";
import Button from "../Utility/Button";
import type { CartItems  } from "../../Store/ShopContext";
import Quantity from "./Quantity";
import Rating from "../Card/Rating";
interface props{
  data: CartItems;
}
const CartItemCard = ({data}:props) => {

const dispatch = useDispatch()

return (


  <div className="p-3  md:rounded-md border border-transparent   bg-surface flex gap-10 cursor-pointer shadow-sm hover:border-cta-border ">
      <Link to={`/product-details/${data.id}`}>
    <img src={data.img} alt={data.title} className="w-30 border border-transparent hover:border-cta-border rounded-md "/>
    </Link>
    <div className=" flex flex-col  justify-between  w-full ">
      <h2>{data.title}</h2>
      <p className="mb-3">$ {data.price}</p>
      <Rating stars={data.stars} totalRating={data.totalRating} />
      <Quantity
       quantity={data.quantity}
        decrease={()=> dispatch({type: "DECREASE_QTY", payload: data.id}) }
        increase={()=> dispatch({type: "INCREASE_QTY", payload: data.id}) }
        />
      <Button className="bg-primary hover:bg-primary-hover w-fit self-end text-primary-text py-1 px-3 rounded-md shadow-sm text-xl hover:-translate-y-1 hover:shadow-md" onClick={()=> console.log("hello")} > Buy now</Button>
    </div>
  </div>


);

};

export default CartItemCard
