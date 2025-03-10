import useDocumentScrollLockWhenMount from "@/common/hooks/useDocumentScrollLockWhenMount";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { CAT_OPTIONS, SORT_OPTIONS } from "../Filters/constant";
import FilterGroup from "./FilterGroup";

interface Option {
  label: string;
  value: number;
}

interface Props {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  selectedCatOptions: Option[];
  selectedSortOptions: Option;
  setSelectedCatOption: Dispatch<SetStateAction<Option[]>>;
  setSelectedSortOption: Dispatch<SetStateAction<Option>>;
}

const FilterSetting = ({
  className,
  isOpen,
  onClose,
  selectedCatOptions,
  setSelectedCatOption,
  selectedSortOptions,
  setSelectedSortOption }: Props) => {

  // const portalRoot = document.getElementById('modal-root');
  useDocumentScrollLockWhenMount() //컴포넌트 마운트시 전체 스크롤 중단

  return <BGWrapper onClick={onClose} className={className}>
    <Wrapper onClick={(e) => { e.stopPropagation() }}>
      <Header>
        <div></div>
        <div className="name">검색 설정</div>
        <div className="confirm"><button onClick={onClose}>확인</button></div>
      </Header>
      <Main>
        <FilterGroup
          name="도서 카테고리"
          options={CAT_OPTIONS}
          selectedOptions={selectedCatOptions}
          setSelectedOption={setSelectedCatOption} />
        <FilterGroup
          name="정렬 방식"
          options={SORT_OPTIONS}
          selectedOptions={selectedSortOptions}
          setSelectedOption={setSelectedSortOption} />
      </Main>
    </Wrapper>
  </BGWrapper>;
}

export default FilterSetting;

const BGWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  
  width: 100dvw;
  height: 100dvh;

  background-color: rgba(0,0,0,0.1);
  /* backdrop-filter: blur(6px); */

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
  @media (min-width:1024px) { //desktop
    width: 500px;
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
  .confirm{
    display: flex;
    justify-content: end;
    align-items: center;

    font-size: 16px;
    font-weight: 500;
    color: grey;
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

  gap: 32px;
  padding: 24px 0;
`
