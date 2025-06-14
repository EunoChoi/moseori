import { ReactNode } from "react";
import styled from "styled-components";

interface SubSectionInterface {
  children: ReactNode;
  title: string;
  BGColor?: string;
}

export const FormSection = ({ children, title, BGColor }: SubSectionInterface) => {
  return (<Wrapper>
    <SubSectionTitle>{title} </SubSectionTitle>
    <FormWrapper $BGColor={BGColor}>
      {children}
    </FormWrapper>
  </Wrapper>);
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
const SubSectionTitle = styled.span`
  width: 100%;

  font-size: 1rem;
  font-weight: 500;
  color: grey;
`
const FormWrapper = styled.div<{ $BGColor?: string }>`
  width: 100%;
  height: auto;
  /* overflow: hidden; */

  font-size: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--light-grey);

  background-color: ${({ $BGColor }) => $BGColor || "transparent"};
`