'use client';

import styled from "styled-components";

//components
import PostCard from "@/common/components/PostCard";
import Ad from "./Ads";
import Search from "./Search";

/**client component, main page component*/
const MainPage = () => {
  return (<Wrapper>
    <Ad />
    <Search />
    <PostCards>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
    </PostCards>
    <Info>
      <span className="title">MOSEORi</span>
      <div><span>모여라 서평 리뷰단</span><span>2</span><span>3</span></div>
      <div><span>email</span><span>eooooostudio@gmail.com</span><span>3</span></div>
      <div><span>문의</span><span>2</span><span>3</span></div>
    </Info>
  </Wrapper>)
}

export default MainPage;

const Wrapper = styled.div`
  width: 100dvw;
  height: calc(100dvh - var(--mobile-header-height));
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
`
const PostCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100dvw;
  height: auto;

  gap: 20px;
`
const Info = styled.div`
  width: 100dvw;
  height: 150px;

  padding: 0 5dvw;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  flex-shrink: 0;
  gap : 8px;

  background-color: var(--grey0);

  .title{
    font-size: 24px;
    font-family: BMJUA;
    color: white;
  }
  div{
    display: flex;
    align-items: center;
    gap: 12px;
    
    width: 100%;
    span{
      font-weight: 500;
      font-size: 14px;
      color: white;
    }
  }
`