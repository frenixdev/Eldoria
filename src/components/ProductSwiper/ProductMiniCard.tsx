
type props = {
  title: string;
  img: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const ProductMiniCard = ({ title, img }: props) => {
  return (
    <div className=" w-10 md:w-24  md:pt-1">
      <div className="aspect-square object-cover w-full border border-stone-300 overflow-hidden rounded-full bg-cyan-200 hover:scale-110 transition-all duration-300">
        <img src={img} className="object-cover w-full h-full" />
      </div>
      <p className=" text-[0.6rem] md:text-md mb-2 text-center line-clamp-1 ">{title}</p>
    </div>
  );
};

export default ProductMiniCard;
