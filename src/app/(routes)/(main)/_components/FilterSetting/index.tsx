import useDocumentScrollLockWhenMount from "@/common/hooks/useDocumentScrollLockWhenMount";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import FilterGroup from "./FilterGroup";

interface Option {
  label: string;
  value: number;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  catOptions: Option[];
  sortOptions: Option[];
  selectedCatOptions: Option[];
  selectedSortOptions: Option;
  setSelectedCatOption: Dispatch<SetStateAction<Option[]>>;
  setSelectedSortOption: Dispatch<SetStateAction<Option>>;
}

const FilterSetting = ({
  isOpen,
  onClose,
  catOptions,
  selectedCatOptions,
  setSelectedCatOption,
  sortOptions,
  selectedSortOptions,
  setSelectedSortOption }: Props) => {

  const portalRoot = document.getElementById('modal-root');
  useDocumentScrollLockWhenMount() //컴포넌트 마운트시 전체 스크롤 중단

  if (!portalRoot) return null;
  return createPortal(<BGWrapper className={isOpen ? 'open' : ''}>
    <Wrapper>
      <Header>
        <span></span>
        <span>검색 설정</span>
        <button onClick={onClose}><CloseRoundedIcon fontSize="inherit" color="inherit" /></button>
      </Header>
      <Main>
        <EmptyForCenter />
        <FilterGroup
          name="도서 카테고리"
          options={catOptions}
          selectedOptions={selectedCatOptions}
          setSelectedOption={setSelectedCatOption} />
        <FilterGroup
          name="정렬 방식"
          options={sortOptions}
          selectedOptions={selectedSortOptions}
          setSelectedOption={setSelectedSortOption} />
        <EmptyForCenter />
      </Main>
    </Wrapper>
  </BGWrapper>, portalRoot);
}

export default FilterSetting;

const EmptyForCenter = styled.div`
  height: 100%;
`
const BGWrapper = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  
  width: 100dvw;
  height: 100dvh;

  background-color: rgba(0,0,0,0.1);
  backdrop-filter: blur(16px);

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
  }
  @media (min-width:1024px) { //desktop
  }
`
const Header = styled.header`
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid var(--light-grey);

  font-size: 20px;
  font-weight: 600;
  
  span, button{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button{
    justify-content: end;
  }

  @media (max-width: 479px) { //mobile port
    padding: 0 5dvw;
    height: var(--mobile-header-height)
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    height: var(--mobile-header-height)
  }
  @media (min-width:1024px) { //desktop
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

  gap: 32px;
  padding-bottom: 64px;
`
