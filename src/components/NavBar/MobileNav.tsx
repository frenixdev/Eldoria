
import NavItems from "./NavItems";

type props = {
  isOpen: boolean;
  className: string;
};
const MobileNav = ({ isOpen, className }: props) => {
  return (
    <nav
      className={`${className} ${isOpen ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 h-full w-1/2 sm:w-1/3 z-99 bg-page transition-all duration-200 lg:hidden`}
    >
      <NavItems className="mt-20 flex w-full flex-col items-center justify-center text-xl  " listClassName="hover:bg-primary w-full text-center p-3 cursor-pointer transitio-all duration-100 hover:text-clr-text" />
    </nav>
  );
};

export default MobileNav;
