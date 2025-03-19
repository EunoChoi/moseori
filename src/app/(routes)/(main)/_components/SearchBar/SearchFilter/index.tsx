import Select from "@/common/components/Select";
import { useSearchContext } from "@/common/store/useSearchContext";
import styled from "styled-components";
import { CAT_OPTIONS, SORT_OPTIONS } from "../../../../../../common/constant/searchFilterOptions";

const SearchFilter = () => {
  const { sortType, setSortType, categoryType, setCategoryType } = useSearchContext();

  return (<>
    <CatSelect
      multiple
      name="도서 카테고리"
      options={CAT_OPTIONS}
      value={categoryType}
      setValue={setCategoryType}
    />
    <SortSelect
      name="정렬"
      options={SORT_OPTIONS}
      value={sortType}
      setValue={setSortType} />
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