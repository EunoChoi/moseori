import useDocumentScrollLockWhenMount from "@/common/hooks/useDocumentScrollLockWhenMount";
import styled from "styled-components";

import ModalHeader from "@/common/components/_modals/ModalHeader";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { ChangeEvent } from "react";
import RecentSearch from "./RecentSearch";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


interface Props {
  searchInput: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  searchHistory: string[];
  setSearchHistory: (value: string[]) => void;

  isOpen: boolean;
  onClose: () => void;
}

const MobileSearchInputModal = ({ searchInput, onChange, onSubmit, searchHistory, setSearchHistory, isOpen, onClose }: Props) => {
  useDocumentScrollLockWhenMount() //컴포넌트 마운트시 전체 스크롤 중단

  return <BGWrapper onClick={onClose} className={isOpen ? 'open' : ''}>
    <Wrapper onClick={(e) => { e.stopPropagation() }}>
      <ModalHeader
        title="공고 검색"
        leftButtonElement={<ArrowBackIosIcon fontSize="inherit" color="inherit" />}
        onClickLeftButton={onClose}
      />
      <Main>
        <SearchInputForm>
          <input
            type="text"
            value={searchInput}
            onChange={onChange}
            placeholder="모집 공고 검색"
          />
          <button
            type="submit"
            onClick={onSubmit}>
            <SearchRoundedIcon fontSize="small" color="inherit" />
          </button>
        </SearchInputForm>
        <RecentSearch
          searchHistory={searchHistory}
          setSearchHistory={setSearchHistory}
        />
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
  overflow: hidden;

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
const SearchInputForm = styled.form`
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
    font-size: 16px;
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
