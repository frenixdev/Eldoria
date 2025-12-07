import { CiSearch } from "react-icons/ci";
import Input from "./Input";

export default function SearchBar() {
  return (
    <div className=" group focus-within:ring-primary flex w-4/5 items-center justify-center gap-5 p-2 focus-within:ring-1 rounded-3xl border border-border ">
      <CiSearch className="text-3xl text-clr-muted" />
      <Input className="inline w-full outline-none caret-primary">just for showcase...</Input>
    </div>
  );
}
