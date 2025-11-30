import Link from "../Utility/Link";
type props = {
  className : string
}
const NavItems = ({className}:props) => {
  return (
    <ul className={`${className} `}>
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
  );
};

export default NavItems;
