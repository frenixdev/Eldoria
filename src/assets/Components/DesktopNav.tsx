import Link from "./Link";
type props = {
  className?: string;
};
const DesktopNav = ({ className }: props) => {
  return (
    <nav className={`${className} w-4/10 transition-all duration-200`}>
      <ul className="gap flex w-full items-center justify-between">
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

export default DesktopNav;
