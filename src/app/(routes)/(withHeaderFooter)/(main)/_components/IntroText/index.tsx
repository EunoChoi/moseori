import styled from "styled-components";

const IntroText = () => {
  return (<Wrapper>
    <span className="main">독서 열정이 모이는 공간</span>
    <span className="sub">다양한 모집에 참여하고 독서의 즐거움을 나누세요!</span>
  </Wrapper>);
}

export default IntroText;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 12px;
  width: auto;

  .main{
    white-space: nowrap;
    font-size: 22px;
    font-weight: 700;
    color: var(--grey0);
  }
  .sub{
    white-space: nowrap;
    font-size: 16px;
    font-weight: 400;
    color: grey;
  }
  @media (max-width: 479px) { //mobile port
    width: 100%;
    padding: 0 7.5dvw;
  }
  @media (min-width:480px){ 
    .main{
      font-size: 28px;
    }
    .sub{
      font-size: 20px;
    }
  }
`

