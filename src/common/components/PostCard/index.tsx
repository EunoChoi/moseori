import styled from "styled-components";

import BookmarkIcon from '@mui/icons-material/Bookmark';
import CommentIcon from '@mui/icons-material/Comment';

const PostCard = () => {
  return (<Wrapper>
    <CardWrapper>
      <ImageWrapper></ImageWrapper>
      <Title>인스타브레인 서평단 모집 두줄 두줄 두줄</Title>
      <Content>기본 설명 기본 설명 기본 설명 기본 설명 기본 설명 기본 설명 설명 기본 설명 기본 설명</Content>
    </CardWrapper>
    <PillWrapper>
      <Pill><BookmarkIcon className="icon" fontSize="inherit" color="inherit" /><span>13</span></Pill>
      <Pill><CommentIcon className="icon" fontSize="inherit" color="inherit" /><span>12</span></Pill>
      <Pill><span>카테고리</span></Pill>
      <Pill><span>~00.00.00</span></Pill>
    </PillWrapper>
  </Wrapper>);
}

export default PostCard;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;  

  @media (min-width:1024px) { //desktop
    transition: 200ms ease-in-out transform;  
    &:hover{
      z-index: 9;
      transform :scale(1.03) ;
    }
  }
`
const CardWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .04);
  border: solid 1px rgba(0, 0, 0, .08);

  @media (max-width: 479px) { //mobile port
    padding: 0 12px;
    gap: 16px;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    padding: 0 20px;
    gap: 24px;
  }
  @media (min-width:1024px) { //desktop
    padding: 0 20px;
    gap: 28px;
  }
`
const ImageWrapper = styled.div`
  width: 45%;
  aspect-ratio : 1;
  flex-shrink: 0;

  background-color: var(--sub-color);
  border-radius: 100px;
`
const Title = styled.span`
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;

  text-align: center;
  word-break: keep-all;

  font-size: 16px;
  @media (max-width: 479px) { //mobile port
    font-size: 14px;
  }
`
const Content = styled.span`
  text-align: center;
  word-break: keep-all;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 16px;
  line-height: 1.4;
  -webkit-line-clamp: 3;
  @media (max-width: 479px) { //mobile port
    font-size: 14px;
  }
`
const PillWrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 12px;

  overflow-x: scroll;
`
const Pill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:3px;
  flex-shrink: 0;

  padding: 4px 10px;
  border-radius: 24px;

  background-color: var(--sub-color);
  .icon, span{
    font-size: 13px;
    font-weight: 500;
    color: var(--grey0);

    @media (max-width: 479px) { //mobile port
    font-size: 13px;
    }
    @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
      font-size: 14px;
    }
    @media (min-width:1024px) { //desktop
      font-size: 15px;
    }
  }
`
