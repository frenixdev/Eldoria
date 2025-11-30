
type props = {
  title: string;
  img: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const ProductMiniCard = ({ title, img }: props) => {
  return (
    <div className=" w-16 md:w-24 pt-1">
      <div className="aspect-square w-full border border-stone-300 overflow-hidden rounded-full bg-cyan-200 hover:scale-110 transition-all duration-300">
        <img src={img} className="object-cover w-full h-full" />
      </div>
      <p className=" text-sm md:text-md mt-2 text-center  break-word">{title}</p>
    </div>
  );
};

export default ProductMiniCard;
