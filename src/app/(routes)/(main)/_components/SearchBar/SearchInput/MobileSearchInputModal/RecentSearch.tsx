import { useSearchQueryContext } from "@/common/store/searchQuery/_hooks/useSearchQueryContext";
import styled from "styled-components";

interface Props {
  searchHistory: string[];
  setSearchHistory: (value: string[]) => void;
}

const RecentSearch = ({ searchHistory, setSearchHistory }: Props) => {
  const { setSearchTextQuery } = useSearchQueryContext();
  const hasRecentSearchInput = searchHistory.length > 0;

  const updateSearchTextQuery = (e: string) => {
    setSearchTextQuery(e);
    const updatedSearchHistory = [...searchHistory, e].slice(-10);
    setSearchHistory(updatedSearchHistory);
  }
  const deleteSelectedSearchHistory = (i: number) => {
    const updatedSearchHistory = searchHistory.filter((e, index) => index !== i);
    setSearchHistory(updatedSearchHistory);
  }
  const deleteAllSearchHistory = () => {
    setSearchHistory([]);
  }

  return (<Wrapper>
    {hasRecentSearchInput && <span className="title">최근 검색어</span>}
    {searchHistory.map((e: string, i: number) =>
      <ItemWrapper key={e + i}>
        <RecentSearchText
          onClick={() => { updateSearchTextQuery(e); }}>
          {e}
        </RecentSearchText>
        <DeleteRecentButton
          onClick={() => deleteSelectedSearchHistory(i)}>
          &times;
        </DeleteRecentButton>
      </ItemWrapper>)}
    {hasRecentSearchInput && <DeleteAllRecentButton onClick={deleteAllSearchHistory}>
      최근 검색어 전체 삭제
    </DeleteAllRecentButton>}
  </Wrapper>);
}

export default RecentSearch;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 70%;

  .title{
    font-size: 18px;
    font-weight: 600;
    color: var(--grey0);
    margin-bottom: 16px;
  }
`
const DeleteAllRecentButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  color: darkgrey;
  color: var(--main-0);
  margin-top: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`
const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
`
const RecentSearchText = styled.button`
  width: 100%;
  font-size: 16px;
  color: grey;

  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`
const DeleteRecentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  color: grey;
`