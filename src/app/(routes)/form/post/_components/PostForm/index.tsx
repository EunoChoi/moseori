'use client';

import styled from "styled-components";


import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { BookInfoForm } from "./BookInfoForm";
import { MainImageUploadForm } from "./BookInfoForm/MainImageUploadForm";
import { PostInfoForm } from "./PostInfoForm";


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


export const PostForm = () => {

  const router = useRouter();
  const [category, setCategory] = useState<number[]>([]);

  const [startDate, setStartDate] = useState<string>();
  const startDateRef = useRef<HTMLInputElement>(null);
  const [endDate, setEndDate] = useState<string>();
  const endDateRef = useRef<HTMLInputElement>(null);

  return (<Wrapper>
    <MainImageUploadForm />
    <BookInfoForm />
    <PostInfoForm />
  </Wrapper>);
}


const Wrapper = styled.form`
  flex-grow: 1;
  overflow-y : scroll;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  padding: 2rem 1rem;
  gap: 2rem;
`