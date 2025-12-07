import { Link } from "react-router-dom";
import Button from "../Utility/Button";
import { BsArrowLeft } from "react-icons/bs";
type props={
  className?: string
}
const RedirectToHome = ({className}: props) => {
  return (
    <Link to="/">
      <Button className={`${className} text-xl  lg:text-4xl`}>
        <BsArrowLeft className=" cursor-pointer" />
      </Button>
    </Link>
  );
};

export default RedirectToHome;
