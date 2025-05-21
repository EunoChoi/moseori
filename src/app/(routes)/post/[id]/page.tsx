'use client';

import ModalHeader from "@/common/components/_modals/ModalHeader";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import styled from "styled-components";

import testImage from '/public/img/testImage1.png';
import testImage2 from '/public/img/testImage2.jpg';

import ZoomPostContent from "./_components/ZoomPostContent";

const ZoomPage = () => {

  const router = useRouter();
  const { id } = useParams();

  //⚒️ 필요 추가 사항
  //id 이용해서 post 데이터 가져오기, post 데이터 없으면 존재하지 않는다는 메세지 띄우기

  return (
    <Wrapper>
      <ZoomPostHeader
        title='모집공고'
        leftButtonElement={<ArrowBackIosIcon fontSize="inherit" color="inherit" />}
        onClickLeftButton={() => { router.back() }}
      />
      <ContentWrapper>
        <ImageContent>
          <Image src={testImage} alt='이미지'></Image>
          <Image src={testImage2} alt='이미지2'></Image>
        </ImageContent>
        <ZoomPostContent />
      </ContentWrapper>
    </Wrapper>
  );
}
export default ZoomPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100dvw;
  height: auto;
  @media (min-width:1024px) { //desktop
    height: 100dvh;
  }
`
const ZoomPostHeader = styled(ModalHeader)`
  position: sticky;
  top: 0;
  z-index: 10;
`
const ContentWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  @media (min-width:1024px) { //desktop
    overflow: hidden;
    flex-direction: row;
  }
`
const ImageContent = styled.div`
  width: 100%;
  height: auto;
  img{
    display: block;
    width: 100%;
    height: auto;
  }
  @media (min-width:1024px) { //desktop
    flex-shrink: 0;
    width: 45%;
    height: 100%;
    overflow: scroll;
    border-right: 1px solid var(--light-grey);
  }
`;