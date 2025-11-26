import DivWrapper from "../wrapper/DivWrapper"
import SearchBar from "../search-bar/SearchBar"
import FilterBtn from "../filter/FilterBtn"


const HomeSearch = () => {
  return (
    <DivWrapper className="flex justify-between bg-red-300 h-auto" >
      <SearchBar />
      <FilterBtn/>
    </DivWrapper>
  )
}

export default HomeSearch
