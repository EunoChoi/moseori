import styled from "styled-components";

import BookmarkIcon from '@mui/icons-material/Bookmark';
import CommentIcon from '@mui/icons-material/Comment';


import { SC_Column_Wrapper, SC_Row_Wrapper } from "@/common/StyledComponent/SC_Wrapper";
import Image from "next/image";
import testBookImage from '/public/img/testImage-book.jpeg';

const PostCard = () => {
  return (<Wrapper>
    <CardWrapper>
      <PostInfo className="category">#인문</PostInfo>
      <ImageWrapper>
        <Image
          src={testBookImage}
          alt='책 이미지'
          layout="fill"
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />
      </ImageWrapper>

      <SC_Column_Wrapper>
        <PostInfo className="title">인스타브레인</PostInfo>
        <PostInfo className="author">안데르스 한센</PostInfo>
      </SC_Column_Wrapper>

      <PostInfo className="dueDate">25.06.18 마감</PostInfo>
    </CardWrapper>
    <SC_Row_Wrapper $gap={16} $margin='4px 0'>
      <InteractionButton>
        <BookmarkIcon className="icon" fontSize="inherit" color="inherit" />
        <span>123</span>
      </InteractionButton>
      <InteractionButton>
        <CommentIcon className="icon" fontSize="inherit" color="inherit" />
        <span>12</span>
      </InteractionButton>
    </SC_Row_Wrapper>
  </Wrapper>);
}

export default PostCard;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;  
  @media (min-width:1024px) {
    transition: 200ms ease-in-out transform;  
    &:hover {
      z-index: 9;
      transform: scale(1.01) translateY(-8px);
    }
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;

  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 22px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;

  @media (max-width: 640px) {
    border-radius: 16px;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 60%;
  aspect-ratio: 1;
  flex-shrink: 0;
  overflow: hidden;
`;

const PostInfo = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  word-break: keep-all;
  &.category{
    font-size: 1rem;
    font-weight: 500;
    color : var(--main-0);
  }
  &.title{
    font-size: 1rem;
    font-weight: 600;
    color: var(--grey0);
  }
  &.author{
    font-size: 0.85rem;
    font-weight: 500;
    color: grey;
  }
  &.dueDate{
    font-size: 0.9rem;
    font-weight: 400;
    color : var(--main-0);
  }
`;

const InteractionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
 
  >span, .icon {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--main-0);
    filter: brightness(95%) saturate(105%);
  }
`;
