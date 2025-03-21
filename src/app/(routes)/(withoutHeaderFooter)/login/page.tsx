'use client';

import styled from "styled-components";

const Page = () => {
  return <Wrapper>
    <Title>로그인/회원가입</Title>
    <InfoText>로그인 안내 멘트</InfoText>
    <LoginButtons>
      <LoginButton className="google">구글 계정으로 계속하기</LoginButton>
      <LoginButton className="naver">네이버 계정으로 계속하기</LoginButton>
    </LoginButtons>
    <InfoText>로그인 없이 둘러보기</InfoText>
  </Wrapper>;
}

export default Page;

const Wrapper = styled.div`
`
const Title = styled.div`
`
const InfoText = styled.div`
`
const LoginButtons = styled.div`
`
const LoginButton = styled.div`
`