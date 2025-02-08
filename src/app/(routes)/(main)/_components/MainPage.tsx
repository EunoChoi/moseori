'use client';

import styled from "styled-components";

//components

/**client component, main page component*/
const MainPage = () => {
  return (<Wrapper>
    메인
  </Wrapper>)
}

export default MainPage;

const Wrapper = styled.div`
  width: 100dvw;
  height: calc(100dvh - var(--mobile-header-height));
  border: 2px solid grey;
`