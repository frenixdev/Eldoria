import Link from "./Link";
type props = {
  isOpen: boolean;
  className: string;
};
const MobileNav = ({ isOpen, className }: props) => {
  return (
    <nav
      className={`${className} ${isOpen ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 h-full w-1/2 bg-white transition-all duration-200 md:hidden`}
    >
      <ul className="mt-20 flex w-full flex-col items-center justify-center gap-10">
        <li>
          <Link url="#">Categories</Link>
        </li>
        <li>
          <Link url="#">Deals</Link>
        </li>
        <li>
          <Link url="#">Wishlist</Link>
        </li>
        <li>
          <Link url="#">Support</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
