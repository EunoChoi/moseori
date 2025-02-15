'use client';

import styled from "styled-components";

//components
import BottomInfo from "@/common/components/BottomInfo";
import Ads from "./Ads";
import Posts from "./Posts";
import Search from "./Search";

/**client component, main page component*/
const MainPage = () => {
  const adList = ['AD1', 'AD2', 'AD3', 'AD4', 'AD5'];

  return (<Wrapper >
    <Ads adList={adList} />

    <IntroduceText>
      <span>📚 소개 텍스트! 소개 텍스트! 소개 텍스트! </span>
      <span>소개 텍스트 어쩌꾸 저쩌구 어쩌꾸 저쩌구!</span>
    </IntroduceText>

    <Search />

    <Posts />

    <BottomInfo />
  </Wrapper>)
}

export default MainPage;


const Wrapper = styled.div`
  width: 100dvw;
  height: calc(100dvh - var(--mobile-header-height));
  overflow-y: scroll;
  /* height: auto; */

  display: flex;
  flex-direction: column;
  align-items: center;
`

const IntroduceText = styled.div`
  display :flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding : 36px 20px;

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
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    span{
      font-size:18px;
    }
    span:first-child{
      font-size:22px;
    }
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