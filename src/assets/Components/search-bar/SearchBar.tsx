import { CiSearch } from "react-icons/ci";
import Input from "../input/Input";

export default function SearchBar(){

  return(
    <div className="flex items-center justify-between  border py-10 ">
      <CiSearch className="text-xl " />
      <Input className="outline-none border-b border-stone-500 p-10 ">Search</Input>
    </div>
  )
}
