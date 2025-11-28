import { BsHandbag } from "react-icons/bs";
import { RiMenuLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
// import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import { useState } from "react";
import DesktopNav from "./DesktopNav";

export default function () {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenuToggle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <header className="flex items-center justify-between p-5">
      <Button
        className="relative z-20 block cursor-pointer rounded-full p-2 text-2xl md:hidden"
        onClick={handleMenuToggle}
      >
        {isOpen ? <IoMdClose /> : <RiMenuLine />}
      </Button>
      <h1 className="text-3xl font-semibold">Eldoria</h1>
      <MobileNav isOpen={isOpen} className={``} />
      <DesktopNav className="hidden md:flex" />
      <Button className="rounded-full">
        <BsHandbag className="" />
      </Button>
    </header>
  );
}
