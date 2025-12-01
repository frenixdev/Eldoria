
import Container from "../Utility/Container";
import CategoryOne from "./CategoryOne";
import CategoryTwo from "./CategoryTwo";

export default function Categories() {

  return (
    <Container className=" grid lg:grid-cols-2 gap-10 grid-cols-1 md:mt-10 mt-0  ">
      <CategoryOne />
      <CategoryTwo/>
    </Container>
  )
}
