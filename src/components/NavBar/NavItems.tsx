import Link from "../Utility/Link";
type props = {
  className : string
  listClassName?: string,
}
const NavItems = ({className, listClassName}:props) => {
  return (
    <ul className={`${className} `}>
      <li  className={listClassName} >
        <Link url="#">Categories</Link>
      </li>
      <li className={listClassName}>
        <Link url="#">Deals</Link>
      </li>
      <li className={listClassName}>
        <Link url="#">Wishlist</Link>
      </li>
      <li className={listClassName}>
        <Link url="#">Support</Link>
      </li>
    </ul>
  );
};

export default NavItems;
