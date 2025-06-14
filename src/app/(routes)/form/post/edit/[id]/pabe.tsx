'use client';

import { useParams } from "next/navigation";
import styled from "styled-components";

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

const EditPost = () => {

  const { id } = useParams();
  //id를 이용해서 post 데이터 가져오기

  return (<>
  </>);
}

export default EditPost;

const Wrapper = styled.div`
`