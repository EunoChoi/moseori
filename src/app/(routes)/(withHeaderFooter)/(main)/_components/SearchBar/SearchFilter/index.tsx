import Select from "@/common/components/Select";
import { CAT_OPTIONS, SORT_OPTIONS } from "@/common/constant/searchFilterOptions";
import { useSearchQueryContext } from "@/common/store/searchQuery/_hooks/useSearchQueryContext";
import styled from "styled-components";

const SearchFilter = () => {
  const { sortQuery, setSortQuery, catQuery, setCatQuery } = useSearchQueryContext();

  return (<>
    <CatSelect
      multiple
      name="도서 카테고리"
      options={CAT_OPTIONS}
      value={catQuery}
      setValue={setCatQuery}
    />
    <SortSelect
      name="정렬"
      options={SORT_OPTIONS}
      value={sortQuery}
      setValue={setSortQuery} />
  </>);
}

export default SearchFilter;

const CatSelect = styled(Select)`
  flex-shrink : 0;
  @media (max-width: 640px) {
    flex: 1;
  }
  @media (min-width:641px) { 
    width: 250px;
  }
`
const SortSelect = styled(Select)`
  flex-shrink: 0;
  @media (max-width: 640px) { 
    display: none;
  }
  @media (min-width:641px) {
    width: 250px;
  }
`