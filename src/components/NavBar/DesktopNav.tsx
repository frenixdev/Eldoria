import Link from "../Utility/Link";
import NavItems from "./NavItems";
type props = {
  className?: string;
};
const DesktopNav = ({ className }: props) => {
  return (
    <nav className={`${className} w-4/10 transition-all duration-200`}>
      <NavItems className="gap flex w-full items-center justify-between"/>
    </nav>
  );
};

export default DesktopNav;
