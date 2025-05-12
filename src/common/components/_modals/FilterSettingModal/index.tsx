import useDocumentScrollLockWhenMount from "@/common/hooks/useDocumentScrollLockWhenMount";
import { useSearchQueryContext } from "@/common/store/searchQuery/_hooks/useSearchQueryContext";
import styled from "styled-components";
import { CAT_OPTIONS, SORT_OPTIONS } from "../../../constant/searchFilterOptions";
import FilterGroup from "./FilterGroup";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ModalHeader from "../ModalHeader";


interface Props {
  className?: string;
  onClose: () => void;
}

const FilterSettingModal = ({ className, onClose }: Props) => {
  const { sortQuery, setSortQuery, catQuery, setCatQuery } = useSearchQueryContext();
  useDocumentScrollLockWhenMount() //컴포넌트 마운트시 전체 스크롤 중단

  return <BGWrapper onClick={onClose} className={className}>
    <Wrapper onClick={(e) => { e.stopPropagation() }}>
      <ModalHeader
        title="검색 설정"
        leftButtonElement={<ArrowBackIosIcon fontSize="inherit" color="inherit" />}
        rightButtonElement={'확인'}
        onClickLeftButton={onClose}
        onClickRightButton={onClose}
      />
      <Main>
        <FilterGroup
          multiple
          name="도서 카테고리"
          options={CAT_OPTIONS}
          value={catQuery}
          setValue={setCatQuery} />
        <FilterGroup
          name="정렬 방식"
          options={SORT_OPTIONS}
          value={sortQuery}
          setValue={setSortQuery} />
      </Main>
    </Wrapper>
  </BGWrapper>;
}

export default FilterSettingModal;

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
