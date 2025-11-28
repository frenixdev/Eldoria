import Container from "./Container";
import SearchBar from "./SearchBar";
import FilterBtn from "./FilterBtn";

const HomeSearch = () => {
  return (
    <Container className="m-auto my-2 flex w-full max-w-[1200px] items-center justify-center gap-10">
      <SearchBar />
      <FilterBtn />
    </Container>
  );
};

export default HomeSearch;
