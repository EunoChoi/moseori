'use client'

import styled from "styled-components";

const BottomInfo = () => {
  return (<Wrapper>
    <Section>
      <Title>MOSEORi</Title>
      <TextWrapper><span>모여라 서평 리뷰단</span><span>2</span><span>3</span></TextWrapper>
      <TextWrapper><span>email</span><span>eooooostudio@gmail.com</span><span>3</span></TextWrapper>
      <TextWrapper><span>문의</span><span>2</span><span>3</span></TextWrapper>
    </Section>
    <Section className="right">
      <TextWrapper><span>모서리 모서리 모서리... 설명</span></TextWrapper>
      <TextWrapper><span>모서리 모서리</span></TextWrapper>
    </Section>
  </Wrapper>);
}

export default BottomInfo;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 100dvw;
  height: 200px;

  padding: 0 5dvw;
  margin-top: 20px;

  background-color: var(--grey0);
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  flex-shrink: 0;
  gap : 8px;

  width: 50%;
  height: 100%;
  &.right{
    align-items: end;
  }
`
const Title = styled.span`
  font-size: 28px;
  font-family: BMJUA;
  color: white;
  margin-bottom: 20px;
`
const TextWrapper = styled.div`
   display: flex;
    align-items: center;
    gap: 12px;
    span{
      font-weight: 500;
      font-size: 16px;
      color: white;
    }
`