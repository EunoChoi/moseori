import useDocumentScrollLockWhenMount from "@/common/hooks/useDocumentScrollLockWhenMount";
import { createPortal } from "react-dom";
import styled from "styled-components";

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSearchInputModal = ({ isOpen, onClose }: Props) => {
  const portalRoot = document.getElementById('modal-root');
  useDocumentScrollLockWhenMount() //컴포넌트 마운트시 전체 스크롤 중단

  //localStorage 사용해서 최근 검색어 저장 및 불러오기 처리
  const recentSearch = ['aaaa', '어쩌구 저쩌구', 'cddddccc', 'dsssdd', 'eeee', 'aasaaaa', 'bbddddbb', 'cccc', 'dddd', 'eeee'];

  if (!portalRoot) return null;
  return createPortal(<BGWrapper onClick={onClose} className={isOpen ? 'open' : ''}>
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
            placeholder="모집 공고 검색"
          />
          <button><SearchRoundedIcon fontSize="small" color="inherit" /></button>
        </SearchInputWrapper>
        <RecentSearchWrapper>
          <span className="title">최근 검색어</span>
          {recentSearch.slice(0, 10).map((e, i) =>
            <RecentSearch key={e + i}>
              <button className="recent-search-text">{e}</button>
              <DeleteRecentButton>&times;</DeleteRecentButton>
            </RecentSearch>)}
          {recentSearch.length >= 1 && <DeleteAllRecentButton>최근 검색어 전체 삭제</DeleteAllRecentButton>}
        </RecentSearchWrapper>
      </Main>
    </Wrapper>
  </BGWrapper>, portalRoot);
}

export default MobileSearchInputModal;

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
const RecentSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  .recent-search-text{
    font-size: 16px;
    color: grey;

    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
`

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
const RecentSearchWrapper = styled.div`
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
const SearchInputWrapper = styled.div`
  width: 90%;
  height: 46px;
  border-radius: 16px;
  border: 1px solid var(--main-0);

  padding: 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button{
    color: var(--grey0);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
