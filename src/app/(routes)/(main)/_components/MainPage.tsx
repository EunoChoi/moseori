'use client';

import { SearchQueryProvider } from "@/common/store/searchQuery/SearchQueryProvider";
import { Suspense } from "react";
import styled from "styled-components";
import Ad from "./Ad";
import Banner from "./Banner";
import Posts from "./Posts";
import SearchBar from "./SearchBar";

/**client component, main page component*/
const MainPage = () => {
  const adList = ['AD1', 'AD2', 'AD3', 'AD4', 'AD5'];

  return (<Wrapper >
    <Ad adList={adList} />

    <IntroWrapper>
      <IntroText>
        <span className="main">독서 열정이 모이는 공간</span>
        <span className="sub">다양한 서평단 모집에 참여하고 혜택을 받아보세요</span>
      </IntroText>
      <Banner />
    </IntroWrapper>

    <Suspense fallback={<></>}>
      <SearchQueryProvider>
        <SearchBar />
        <Posts />
      </SearchQueryProvider>
    </Suspense>
  </Wrapper>)
}

export default MainPage;


const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 479px) { //mobile port
    align-items: start;
    gap: 64px;
    width: 100dvw;
    padding: 56px 0;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    gap: 64px;
    padding: 64px 0;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
  @media (min-width:1024px) { //desktop
    gap: 64px;
    width: 90%;
    padding: 72px 0;
    flex-direction: row;
  }
`
const IntroText = styled.div`
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
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    .main{
      font-size: 28px;
    }
    .sub{
      font-size: 20px;
    }
  }
  @media (min-width:1024px) { //desktop
    width: auto;
    .main{
      font-size: 28px;
    }
    .sub{
      font-size: 20px;
    }
  }
`
const Wrapper = styled.div`
  width: 100dvw;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: visible;
`