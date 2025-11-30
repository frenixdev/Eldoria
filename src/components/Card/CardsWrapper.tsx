type props ={
  className? : string;
  children: React.ReactNode;

}
const CardsWrapper:React.FC<props> = ({className , children}) => {

  return (
    <div className={className}>
      {
        children
      }
    </div>
  )
};

export default CardsWrapper
