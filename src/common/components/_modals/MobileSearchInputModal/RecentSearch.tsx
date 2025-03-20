import styled from "styled-components";

interface Props {
  searchHistory: string[];
}

const RecentSearch = ({ searchHistory }: Props) => {
  const hasRecentSearchInput = searchHistory.length > 0;
  const searchHistoryTop10 = searchHistory.slice(-10);

  return (<Wrapper>
    {hasRecentSearchInput && <span className="title">최근 검색어</span>}
    {searchHistoryTop10.map((e, i) =>
      <RecentSearchText key={e + i}>
        <button className="recent-search-text">{e}</button>
        <DeleteRecentButton>&times;</DeleteRecentButton>
      </RecentSearchText>)}
    {hasRecentSearchInput && <DeleteAllRecentButton>최근 검색어 전체 삭제</DeleteAllRecentButton>}
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
const DeleteRecentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  color: grey;
`
const RecentSearchText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  .recent-search-text{
    width: 100%;
    font-size: 16px;
    color: grey;

    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
`