import { CiSearch } from "react-icons/ci";
import Input from "./Input";

export default function SearchBar() {
  return (
    <div className="flex w-4/5 items-center justify-center gap-5 p-2 rounded-3xl border border-border ">
      <CiSearch className="text-3xl" />
      <Input className="inline w-full outline-none">just for showcase...</Input>
    </div>
  );
}
