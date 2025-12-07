import Button from "../Utility/Button";
type props = {
  quantity: number;
  decrease : ()=>void;
  increase:()=>void;
}
const Quantity = ({quantity, decrease, increase}: props) => {

  return (
    <div className="flex w-fit gap-5 items-center justify-between  h-10  mt-5 ">
      <Button className="border border-border hover:border-cta-border py-1 px-3 flex items-center justify-center h-full" onClick={decrease}>-</Button>
      <p className="  items-center justify-center ">{quantity}</p>
      <Button className="border border-border hover:border-cta-border py-1 px-3 flex items-center justify-center h-full " onClick={increase}>+</Button>
    </div>
  )
};

export default Quantity
