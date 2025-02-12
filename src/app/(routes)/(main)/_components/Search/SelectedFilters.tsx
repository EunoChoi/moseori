import styled from "styled-components";

const SelectedFilters = () => {
  return (<SelectedOption>
    <span>진행중인 공고</span>
    <span>모든 분야</span>
    <span>"검색어입력내용..."</span>
  </SelectedOption>);
}

export default SelectedFilters;

const SelectedOption = styled.div`
  width: 100dvw;

  display: flex;
  justify-content: center;
  align-items:center;

  span{
    font-size:14px;
    font-weight: 500;
    color: var(--main-color);
  }
  span:not(:last-child){
    &::after{
      content: '・';
      margin: 0 4px;
    }
  }
`

