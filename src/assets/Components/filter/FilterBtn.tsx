import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Button from "../button/Button";
const FilterBtn = () => {
  return (
    <Button className="p-4 rounded-[50%] bg-gray-950 text-white">{<HiOutlineAdjustmentsHorizontal/>}</Button>
  )
}

export default FilterBtn
