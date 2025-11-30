
import NavItems from "./NavItems";

type props = {
  isOpen: boolean;
  className: string;
};
const MobileNav = ({ isOpen, className }: props) => {
  return (
    <nav
      className={`${className} ${isOpen ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 h-full w-1/2 z-99 bg-white transition-all duration-200 md:hidden`}
    >
      <NavItems className="mt-20 flex w-full flex-col items-center justify-center gap-10"/>
    </nav>
  );
};

export default MobileNav;
