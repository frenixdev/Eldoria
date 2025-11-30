import Container from "../Utility/Container";
import SearchBar from "../SearchBar/SearchBar";
import FilterBtn from "../SearchBar/FilterBtn";

const HomeSearch = () => {
  return (
    <Container className="m-auto mb-2  flex w-full max-w-[1200px] items-center justify-center gap-10 ">
      <SearchBar />
      <FilterBtn />
    </Container>
  );
};

export default HomeSearch;
