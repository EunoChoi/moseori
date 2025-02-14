import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import { useInView } from 'react-intersection-observer';
import styled from "styled-components";

const SelectedFilters = () => {
  const FILTER_TYPES = ['모든 공고', '자기계발x 소설x 에세이x 역사x 종교x', '마감일'];
  // 필터 타입이 용이하도록 코드 작성 필요
  // 버튼 누른 후 마운트되는 필터 리스트에서 버튼에 해당하는 위치로 스크롤하기 위한 ref가 들어있으면 좋을듯

  //inView 2개 사용해서 첫번째가 조금이라도 안보이면 left, 두번째가 조금이라도 안보이면 right
  const { ref: firstItemRef, inView: firstTargetInView } = useInView({
    initialInView: true,
    threshold: 0.99
  });
  const { ref: secondItemRef, inView: secondTargetInView } = useInView({
    initialInView: true,
    threshold: 0.99
  });


  return (<Wrapper>
    {firstTargetInView === false && <Blur className='left' />}
    {secondTargetInView === false && <Blur className='right' />}
    <ScrollWrapper>
      <Empty />
      <FilterTypeButton ref={firstItemRef} className='more'>
        <SettingsIcon className='icon' fontSize='inherit' color='inherit' />
      </FilterTypeButton>
      {FILTER_TYPES.map((e, i) =>
        <FilterTypeButton key={'filterType' + e} ref={i === FILTER_TYPES.length - 1 ? secondItemRef : undefined}>
          <span>{e}</span>
          {/* <CloseIcon className='icon' fontSize='inherit' color='inherit' /> */}
          <ExpandMoreIcon className='icon' fontSize='inherit' color='inherit' />
        </FilterTypeButton>)}
      <Empty />
    </ScrollWrapper>
  </Wrapper>);
}

export default SelectedFilters;

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 479px) { //mobile port
    width: 100dvw; 
    height: 30px;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobile land + tablet
    width: auto;
    height: 36px;
  }
  @media (min-width:1024px) { //desktop
    width: auto;
    height: 36px;
  }
`
const ScrollWrapper = styled.div`
  width: inherit;
  height: inherit;
  overflow-x: scroll;

  display: flex;
  justify-content: start;
  align-items:center;
  gap : 8px;

  @media (max-width: 479px) { //mobile port
    padding: 0 5dvw;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobile land + tablet
    margin-right: 8px;
  }
  @media (min-width:1024px) { //desktop
    margin-right: 8px;
  }
`
const Blur = styled.div`
  animation: fadeIn ease-in-out 200ms;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  flex-shrink: 0;
  position: absolute;
  top: -5px;

  height: 150%;
  width: 20px;

  pointer-events: none;

  @media (max-width: 479px) { //mobile port
    &.left{
    background: linear-gradient(to right, rgba(248, 249, 250, 1), rgba(248, 249, 250,0)); /* 왼쪽 페이드 */
    left: -2px;
    }
    &.right{
      right: -2px;
      background: linear-gradient(to left, rgba(248, 249, 250, 1), rgba(248, 249, 250, 0) 100%);
    }
  }
  @media (min-width:480px) { //mobild land + tablet
    &.left{
      background: linear-gradient(to right, rgba(248, 249, 250, 1), rgba(248, 249, 250,0)); /* 왼쪽 페이드 */
      left: 0px;
    }
    &.right{
      right: 8px;
      background: linear-gradient(to left, rgba(248, 249, 250, 1), rgba(248, 249, 250, 0) 100%);
    }
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
  background-color: var(--sub-color);

  span, .icon{
    color: var(--grey0);
  }

  span{
    font-size: 14px;
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon{
    font-size: 16px;
  }

  &.more{
    font-size: 18px;
    aspect-ratio: 1;
    padding: 0;
  }
`

// 가운데 정렬을 위한 요소, 
const Empty = styled.div`
  width: 100%;
  &:first-child{
    margin-left: -8px;
  }
  &:last-child{
    margin-left: -8px;
  }
`