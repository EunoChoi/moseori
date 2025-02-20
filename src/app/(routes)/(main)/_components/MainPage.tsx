'use client';

import styled from "styled-components";

//components
import BottomInfo from "@/common/components/BottomInfo";
import { useEffect, useRef, useState } from "react";
import Ads from "./Ads";
import Filters from "./Filters";
import Posts from "./Posts";
import Search from "./Search";

/**client component, main page component*/
const MainPage = () => {
  const adList = ['AD1', 'AD2', 'AD3', 'AD4', 'AD5'];

  const ref = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (ref.current && ref.current?.getBoundingClientRect().top === 0) {
        setIsSticky(true);
      }
      else {
        setIsSticky(false);
      }
    }
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  return (<Wrapper >
    <Ads adList={adList} />
    <IntroduceText>
      <span>📚 소개 텍스트! 소개 텍스트! 소개 텍스트! </span>
      <span>소개 텍스트 어쩌꾸 저쩌구 어쩌꾸 저쩌구!</span>
    </IntroduceText>

    <SearchFilterArea ref={ref} className={isSticky ? 'sticky' : ''}>
      <Search />
      <Filters />
    </SearchFilterArea >

    <Posts />
    <BottomInfo />
  </Wrapper>)
}

export default MainPage;

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
  align-items: center;
  @media (max-width: 640px) { //mobile port
    flex-direction: column;
    gap: 16px;
    padding: 20px 20px;
  }
  @media (min-width:641px) { //mobild land + tablet + pc
    flex-direction: row-reverse;
    justify-content: center;
    gap: 0px;
    padding: 12px 20px;
  }
`
const Wrapper = styled.div`
  width: 100dvw;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: visible;
`

const IntroduceText = styled.div`
  display :flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
 
  span{
    text-align: center;
    color: var(--grey0);
    font-family: BMJUA;
  }
  @media (max-width: 479px) { //mobile port
    span{
      font-size:16px;
    }
    span:first-child{
      font-size:20px;
    }
    padding : 32px 20px;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    span{
      font-size:18px;
    }
    span:first-child{
      font-size:22px;
    }
    padding : 44px 20px;
  }
  @media (min-width:1024px) { //desktop
    span{
      font-size:20px;
    }
    span:first-child{
      font-size:28px;
    }
    padding : 56px 20px;
  }
`