'use client';

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import styled from 'styled-components';


export const MainImageUploadForm = () => {
  return (
    <TitleImageUploadButton type="button">
      <PhotoCameraIcon className="icon" />
      <span className="text">대표 이미지</span>
    </TitleImageUploadButton>
  );
}

const TitleImageUploadButton = styled.button`
  width: 128px;
  aspect-ratio: 1;
  border : 1px solid var(--light-grey);
  border-radius: 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap : 8px;

  .icon{
    font-size: 46px;
    color: var(--light-grey);
  }
  .text{
    font-size: 1rem;
    font-weight: 500;
    color: var(--light-grey);
  }
`