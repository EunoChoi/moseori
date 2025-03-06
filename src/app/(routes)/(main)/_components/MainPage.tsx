'use client';

import styled from "styled-components";

//components
import Carousel from "@/common/components/Carousel";
import useTopChceck from "@/common/hooks/useTopCheck";
import { Suspense, useRef } from "react";
import Ads from "./Ads";
import Banner from "./Banner";
import Filters from "./Filters";
import Posts from "./Posts";

/**client component, main page component*/
const MainPage = () => {
  const adList = ['AD1', 'AD2', 'AD3', 'AD4', 'AD5'];

  const ref = useRef<HTMLDivElement>(null);
  const { isTop } = useTopChceck({ ref, top: 0 });

  return (<Wrapper >
    <Ads adList={adList} />

    <IntroBannerWrapper>
      <IntroText>
        <span className="main">독서 열정이 모이는 공간</span>
        <span className="sub">다양한 서평단 모집에 참여하고 혜택을 받아보세요</span>
      </IntroText>
      <BannerCarousel arrow={true} >
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </BannerCarousel>
    </IntroBannerWrapper>

    <SearchFilterArea ref={ref} className={isTop ? 'sticky' : ''}>
      <Suspense fallback={<></>}>
        <Filters />
      </Suspense>
    </SearchFilterArea >

    <Posts />
  </Wrapper>)
}

export default MainPage;

const BannerCarousel = styled(Carousel)`
  @media (max-width: 479px) { //mobile port
    width: 100%;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    width: 100%;
    max-width: 480px;
    padding: 0 32px;
  }
  @media (min-width:1024px) { //desktop
    padding: 0 32px;
    width: 480px;
  }
`
const IntroBannerWrapper = styled.div`
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
    width: 80%;
  }
  @media (min-width:1024px) { //desktop
    gap: 96px;
    width: 100%;
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

const SearchFilterArea = styled.div`
  position: sticky;
  z-index: 10; //postCard z-index : 9
  top: 0;

  transition: border-bottom 500ms ease-in-out, box-shadow 500ms ease-in-out;
  border-bottom: solid 1px var(--background);
  box-shadow: rgba(0, 0, 0, 0) 0px 6px 6px 0px;
  &.sticky{
    border-bottom: solid 1px rgba(0,0,0,0.08);
    box-shadow: rgba(0, 0, 0, 0.04) 0px 6px 6px 0px;
  }
 
  width: 100dvw;
  height: auto;
  background-color: var(--background);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 0;
`
const Wrapper = styled.div`
  width: 100dvw;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: visible;
`