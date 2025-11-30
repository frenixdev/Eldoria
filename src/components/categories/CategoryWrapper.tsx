import Button from "../Utility/Button";
import CardsWrapper from "../Card/CardsWrapper";

interface CategoryWrapperProps {
  title: string;
  handleClick?: () => void;
  className?: string;
  children: React.ReactNode;
}
interface CardProps extends CategoryWrapperProps {
  wrapperClass?: string;
}
const CategoryWrapper = ({
  title,
  className,
  wrapperClass,
  handleClick,
  children,
}: CardProps) => {
  return (
    <div
      className={`${className} w-full md:shadow shadow-stone-500  md:p-5 p-3 border border-stone-300 rounded-sm  `}
    >
      <div
        id="top-row"
        className="flex items-center
        justify-between w-full mb-5 "
      >
        <h3 className="text-xl md:text-3xl font-semibold">{title}</h3>
        <Button className="text-sm md:text-xl hover:text-red-500" onClick={handleClick}>
          See more
        </Button>
      </div>
      <CardsWrapper
        className={`${wrapperClass}  grid w-full grid-cols-2 gap-10 place-items-center md:grid-cols-3  lg:grid-cols-2
`}
      >
        {children}
      </CardsWrapper>
    </div>
  );
};

export default CategoryWrapper;
