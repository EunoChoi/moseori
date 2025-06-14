'use client';

import MultiSelect from "@/common/components/MultiSelect";
import { CAT_OPTIONS } from "@/common/constant/searchFilterOptions";
import { useState } from "react";
import styled from "styled-components";

import { FormSection } from "../common/FormSection";
import { PostFormInput, PostFormTitle } from "../common/StyledComponents";


export const BookInfoForm = () => {

  const [category, setCategory] = useState<number[]>([]);

  // useInput 사용해서 처리
  // const [name, setName] = useState<string>();
  // const [author, setAuthor] = useState<string>();
  // const [publisher, setPublisher] = useState<string>();

  return (<Wrapper>
    <PostFormTitle>📕 책 정보</PostFormTitle>
    <FormSection title='이름'>
      <PostFormInput placeholder="책 이름"></PostFormInput>
    </FormSection>
    <FormSection title='지은이'>
      <PostFormInput placeholder="책 지은이"></PostFormInput>
    </FormSection>
    <FormSection title='출판사'>
      <PostFormInput placeholder="책 출판사"></PostFormInput>
    </FormSection>
    <FormSection title='카테고리' BGColor="var(--main-3)">
      <CategorySelect
        // multiple
        name="도서 카테고리"
        options={CAT_OPTIONS}
        value={category}
        setValue={setCategory}
      />
    </FormSection>
  </Wrapper>);
}


const Wrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
`

const CategorySelect = styled(MultiSelect)`
  width: 100%;
  button{
    background-color: transparent;
    border: none;
    width: 100%;
  }
`