import styled from "styled-components";

export const PostFormTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--grey0);
  margin-bottom: 0.5rem;
`
export const PostFormTextArea = styled.textarea`
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

export const PostFormInput = styled.input`
  padding: 0.5rem;
  width: 100%;

  font-size: 1rem;
  font-weight: 500;
  &::placeholder {
    color: var(--light-grey);
  }
`