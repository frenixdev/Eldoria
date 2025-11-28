import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Button from "../Components/Button";
const FilterBtn = () => {
  return (
    <Button className="cursor-pointer rounded-[50%] bg-gray-950 p-2 text-3xl text-white">
      {<HiOutlineAdjustmentsHorizontal />}
    </Button>
  );
};

export default FilterBtn;
