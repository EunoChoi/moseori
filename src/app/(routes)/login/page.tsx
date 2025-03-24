'use client';

import styled from "styled-components";

const Page = () => {
  return <Wrapper>
    <LogoWrapper>
      <LogoIcon></LogoIcon>
      <LogoText>MOSEORi</LogoText>
    </LogoWrapper>
    <TextWrapper>
      <Text className="main">반가워요 :)</Text>
      <Text className="sub">독서의 즐거움과 열정이 모이는 공간</Text>
      <Text className="sub">{`'모서리'를 함께 시작해요!`}</Text>
    </TextWrapper>
    <ButtonWrapper>
      <Text className="sns">SNS 로그인</Text>
      <LoginButtonWrapper>
        <LoginButton className="google" />
        <LoginButton className="naver" />
        <LoginButton className="kakao" />
      </LoginButtonWrapper>
      <GoWithoutLoginButton>로그인 없이 둘러보기 ➜</GoWithoutLoginButton>
    </ButtonWrapper>
  </Wrapper>;
}

export default Page;

const Wrapper = styled.div`
  width: 100dvw;
  height: 100dvh;
  padding: 5dvh 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-height: 479px) { //mobile port
    flex-direction: row;
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const LogoIcon = styled.div`
  width: 144px;
  aspect-ratio: 1;
  border-radius: 12px;
  background-color: var(--main-0);
`;

const LogoText = styled.span`
  font-family: BMJUA;
  font-size: 28px;
  color: var(--main-0);
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  color: var(--grey0);
  &.main{
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  &.sub{
    font-size: 20px;
    margin-bottom: 8px;
  }
  &.sns{
    font-size: 18px;
    font-weight: 700;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const LoginButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const LoginButton = styled.button`
  width: 48px;
  aspect-ratio: 1;
  border-radius: 9999px;
  border : 2px solid rgba(0,0,0,0.1);
  overflow: hidden;

  &.google{
    background-color: white;
  }
  &.naver{
    background-color: var(--naver);
  }
  &.kakao{
    background-color: var(--kakao);
  }
`;

const GoWithoutLoginButton = styled.button`
  font-size: 14px;
  color: darkgrey;
  margin-top: 24px;
`;