import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import styled from "styled-components";

const SelectedFilters = ({ isVisible }: { isVisible?: boolean }) => {
  const FILTER_TYPES = ['진행중', '자기계발'];
  // 필터 타입이 용이하도록 코드 작성 필요
  // 버튼 누른 후 마운트되는 필터 리스트에서 버튼에 해당하는 위치로 스크롤하기 위한 ref가 들어있으면 좋을듯

  return (<Wrapper className={isVisible ? 'hide' : ''}>
    <Empty />
    {FILTER_TYPES.map((e) =>
      <FilterTypeButton key={'filterType' + e}>
        <span>{e}</span>
        <CloseIcon className='icon' fontSize='inherit' color='inherit' />
        <ExpandMoreIcon className='icon' fontSize='inherit' color='inherit' />
      </FilterTypeButton>)}

    <FilterTypeButton className='more'>
      <SettingsIcon className='icon' fontSize='inherit' color='inherit' />
    </FilterTypeButton>
    <Empty />
  </Wrapper>);
}

export default SelectedFilters;

// 가운데 정렬을 위한 요소, 
const Empty = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items:center;
  gap: 8px;
  /* padding: 0 8px; */

  overflow-x: scroll;

  @media (max-width: 479px) { //mobile port
    width: 100dvw;
    height: 28px;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    width: auto;
    height: 36px;
  }
  @media (min-width:1024px) { //desktop
    width: auto;
    height: 36px;
  }
`

const FilterTypeButton = styled.button`
  height: 100%;
  border-radius: 40px;
  padding-left: 18px;
  padding-right: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;

  background-color: var(--main-color);

  span{
    font-size: 14px;
    font-weight: 500;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon{
    font-size: 16px;
    color: white;
  }

  &.more{
    font-size: 18px;
    aspect-ratio: 1;
    padding: 0;
  }
`

