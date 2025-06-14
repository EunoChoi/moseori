'use client';

import { ModalConfirmButton } from "@/common/components/_modals/ModalConfirmButton";
import ModalHeader from "@/common/components/_modals/ModalHeader";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from "next/navigation";
import styled from "styled-components";


import MultiSelect from "@/common/components/MultiSelect";
import { PostForm } from "../_components/PostForm";


const dummyPostData = {
  title: '인스타브레인',
  author: '안데르스 한센',
  publisher: '동양북스',
  category: '자기계발',
  tags: ['태그1', '태그2', '태그3'],
  dates: {
    start: '2023-10-01',
    end: '2023-10-31',
  },
  link: 'https://example.com',
  images: {
    thumbnail: 'https://via.placeholder.com/150',
    image1: 'https://via.placeholder.com/300',
    image2: 'https://via.placeholder.com/300',
  },
  content: '어쩌구 저쩌구 모집 공고 내용 어쩌구 저쩌구 모집 공고 내용 어쩌구 저쩌구 모집 공고 내용 어쩌구 저쩌구 모집 공고 내용 어쩌구 저쩌구 모집 공고 내용',
  interaction: {
    like: 0,
    comment: 0,
  }
}

const AddPost = () => {
  // 일단 모든 회원이 작성가능하도록 처리하고 관리자 페이지 만든 후 권한 받은 유저만 작성 가능하도록 수정 처리

  // 공통 폼 분리하고 state와 setter props로 받아와서 사용하도록 처리
  // 각 라우트 페이지에서 state 선언하고 props 전달하는 방식으로 페이지 작성


  const router = useRouter();


  return (<Wrapper>
    <ModalHeader
      title="모집공고 작성"
      leftButtonElement={<ArrowBackIosIcon fontSize="inherit" color="inherit" />}
      onClickLeftButton={() => { router.back() }}
    // rightButtonElement='완료'
    // onClickRightButton={() => { console.log('게시글 추가 완료') }}
    />
    <PostForm
    // 필요한 state props으로 전달받아 사용
    />
    <ModalConfirmButton text="작성 완료" onClick={() => {
      console.log('ㄱㄱ');
    }} />
  </Wrapper >);
}

export default AddPost;

const Wrapper = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: white;

  display: flex;
  flex-direction: column;
`
const MainForm = styled.form`
  flex-grow: 1;
  overflow-y : scroll;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  padding: 2rem 1rem;
  gap: 2rem;
`
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
const PostImagesContainer = styled.div`
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
const Section = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
`
const SectionTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--grey0);
  margin-bottom: 0.5rem;
`
const InputForm = styled.input`
  padding: 0.5rem;
  width: 100%;

  font-size: 1rem;
  font-weight: 500;
  &::placeholder {
    color: var(--light-grey);
  }
`
const TextAreaForm = styled.textarea`
 width: 100%;
 height: 128px;
 margin: 0;
 border : none;
 padding: 0.5rem;
 resize: none;


  font-size: 1rem;
  font-weight: 500;
  background-color: transparent;
  &:active, &:focus {
    outline: none;
    border: none;
  }
  &::placeholder {
    color: var(--light-grey);
  }
`
const CategorySelect = styled(MultiSelect)`
  width: 100%;
  button{
    background-color: transparent;
    border: none;
    width: 100%;
  }
`
const InputDateWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .start, .end{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    button{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1px solid var(--light-grey);
    }
    .hide{
      opacity: 0.5;
      pointer-events: auto;
      z-index: 999;
    }
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    display: none;
    pointer-events: none;
  }
  input[type="date"]{
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--grey0);
    border: none;
    background-color: transparent;

    &::placeholder {
      color: var(--light-grey);
    }
  }
`