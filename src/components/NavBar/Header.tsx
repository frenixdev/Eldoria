import { BsHandbag } from "react-icons/bs";
import { RiMenuLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Button from "../Utility/Button";
// import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import { useState } from "react";
import DesktopNav from "./DesktopNav";
import {Link} from "react-router-dom";

export default function () {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenuToggle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <header className="flex items-center justify-between p-5 md:px-20 sticky top-0 left-0 w-full bg-white z-99 ">
      <Button
        className="relative z-999 block cursor-pointer rounded-full p-2 text-2xl md:hidden"
        onClick={handleMenuToggle}
      >
        {isOpen ? <IoMdClose /> : <RiMenuLine />}
      </Button>

      <h1 className="text-3xl  md:text-4xl font-semibold lg:text-5xl">Eldoria</h1>

      <MobileNav isOpen={isOpen} className={``} />
      <DesktopNav className="hidden md:flex" />
      <Link to="/cart" >
        <Button className="rounded-full lg:text-4xl ">
          <BsHandbag className="text-black" />
        </Button>
      </Link>
    </header>
  );
}
