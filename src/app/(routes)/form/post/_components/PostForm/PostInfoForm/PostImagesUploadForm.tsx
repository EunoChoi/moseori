'use client';

import CancelIcon from '@mui/icons-material/Cancel';
import Image from "next/image";
import styled from "styled-components";
import testBookImage from '/public/img/testImage-book.jpeg';


export const PostImagesUploadForm = () => {

  const images = [testBookImage, testBookImage, testBookImage, testBookImage, testBookImage];

  return (

    <Wrapper>
      <PostImageUploadButton />
      {images.map((image, i) => <PostImageContainer key={`${image}-${i}`}>
        <Image
          src={image}
          alt='책 이미지'
          fill
          sizes='100vw'
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <PostImageDeleteButton>
          <CancelIcon className="icon" />
        </PostImageDeleteButton>
      </PostImageContainer>)}

    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: start;
  align-items: start;
  gap: 0.75rem;
  padding: 0.75rem;
  flex-shrink: 0;

  /* overflow-y: visible; */
  overflow-x: scroll;
`
const PostImageUploadButton = styled.button`
  width: 100px;
  aspect-ratio: 1;
  border-radius: 10%;
  flex-shrink: 0;
  background-color: var(--light-grey);
`
const PostImageContainer = styled.div`
  position: relative;

  width: 100px;
  aspect-ratio: 1;
  img{
    border-radius: 10%;
    overflow: hidden;
  }
  flex-shrink: 0;
`
const PostImageDeleteButton = styled.button`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  .icon{
    width: 1.5rem;
    aspect-ratio: 1;
    /* background-color: var(--main-0); */
    background-color: white;
    color: var(--main-0);
    border-radius: 100%;

    z-index: 999;
  }
`