'use client';

import { SearchQueryProvider } from "@/common/store/searchQuery/SearchQueryProvider";
import { Suspense } from "react";
import styled from "styled-components";
import Ad from "./Ad";
import Banner from "./Banner";
import IntroText from "./IntroText";
import Posts from "./Posts";
import SearchBar from "./SearchBar";

/**client component, main page component*/
const MainPage = () => {
  const adList = ['AD1', 'AD2', 'AD3', 'AD4', 'AD5'];

  return (<Wrapper >
    <Ad adList={adList} />

    <IntroWrapper>
      <IntroText />
      <Banner />
    </IntroWrapper>

    <SearchQueryProvider>
      <Suspense>
        <SearchBar />
        <Posts />
      </Suspense>
    </SearchQueryProvider>
  </Wrapper>)
}

export default MainPage;


const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;

  @media (max-width: 479px) { //mobile port
    width: 100dvw;
    padding: 56px 0;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    padding: 64px 0;
  }
  @media (min-width:1024px) { //desktop
    padding: 72px 0;
    flex-direction: row;
  }
`
const Wrapper = styled.div`
  width: 100dvw;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: visible;
`