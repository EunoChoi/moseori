import useDocumentScrollLockWhenMount from "@/common/hooks/useDocumentScrollLockWhenMount";
import styled from "styled-components";

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RecentSearch from "./RecentSearch";

interface Props {
  onClickSearchButton: () => void;
  searchInput: string;
  onSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  recentSearchInput: string[];

  isOpen: boolean;
  onClose: () => void;
}

const MobileSearchInputModal = ({ onClickSearchButton, searchInput, onSearchInputChange, recentSearchInput, isOpen, onClose }: Props) => {
  useDocumentScrollLockWhenMount() //컴포넌트 마운트시 전체 스크롤 중단
  const hasRecentSearchInput = recentSearchInput.length >= 1;

  return <BGWrapper onClick={onClose} className={isOpen ? 'open' : ''}>
    <Wrapper onClick={(e) => { e.stopPropagation() }}>
      <Header>
        <div className="button start"></div>
        <div className="name">공고 검색</div>
        <div className="button end"><button onClick={onClose}>취소</button></div>
      </Header>
      <Main>
        <SearchInputWrapper>
          <input
            type="text"
            value={searchInput}
            onChange={onSearchInputChange}
            placeholder="모집 공고 검색"
          />
          <button onClick={onClickSearchButton}>
            <SearchRoundedIcon fontSize="small" color="inherit" />
          </button>
        </SearchInputWrapper>
        <RecentSearch hasRecentSearchInput={hasRecentSearchInput} recentSearchInput={recentSearchInput} />
      </Main>
    </Wrapper>
  </BGWrapper>;
}

export default MobileSearchInputModal;

const BGWrapper = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  
  width: 100dvw;
  height: 100dvh;

  background-color: rgba(0,0,0,0.1);
  backdrop-filter: blur(6px);

  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 479px) { //mobile port
    width: 100dvw;
    height: 100dvh;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    width: 480px;
    height: 85dvh;
    border-radius: 12px;
  }
`
const Header = styled.header`
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid var(--light-grey);

  .name{
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-weight: 600;
    color: black;
  }
  .button{
    display: flex;
    align-items: center;

    font-size: 16px;
    font-weight: 500;
    color: grey;
  }
  .start{
    justify-content: start;
  }
  .end{
    justify-content: end;
  }

  @media (max-width: 479px) { //mobile port
    padding: 0 5dvw;
    height: var(--mobile-header-height)
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    padding: 0 20px;
    height: var(--mobile-header-height)
  }
  @media (min-width:1024px) { //desktop
    padding: 0 20px;
    height: var(--pc-header-height);
  }
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-grow: 1;
  overflow-y : scroll;

  gap: 56px;
  padding: 40px 0;
`
const SearchInputWrapper = styled.div`
  width: 90%;
  height: 46px;
  border-radius: 16px;
  border: 1px solid var(--main-0);

  display: flex;
  justify-content: space-between;
  align-items: center;

  input{
    flex-grow: 1;
    height: 90%;
    padding-left: 16px;
  }
  button{
    color: var(--main-0);
    display: flex;
    justify-content: center;
    align-items: center;

    height: 90%;
    padding: 0 16px;
  }
`
