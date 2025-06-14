'use client';

import styled from "styled-components";
import { FormSection } from "../common/FormSection";
import { PostFormInput, PostFormTextArea, PostFormTitle } from '../common/StyledComponents';
import { PostDateForm } from './PostDateForm';
import { PostImagesUploadForm } from './PostImagesUploadForm';

export const PostInfoForm = () => {

  // state 생성 후 하위 컴포넌트에게 전달해서 사용



  return (
    <Wrapper>
      <PostFormTitle>💡 공고 정보</PostFormTitle>
      <FormSection title='세부 사항'>
        <PostFormTextArea placeholder="공고 관련 세부 안내 사항"></PostFormTextArea>
      </FormSection>
      <FormSection title='모집 기간' BGColor="var(--main-3)">
        <PostDateForm />
      </FormSection>
      <FormSection title='링크'>
        <PostFormInput placeholder="모집 및 관련 안내 페이지 주소"></PostFormInput>
      </FormSection>
      <FormSection title='공고 이미지'>
        <PostImagesUploadForm />
      </FormSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
`