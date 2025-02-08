'use client';

import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";

//constant
import { SUB_TITLE } from "./constant/SubTitle";

/**client component, main header component */
const MainHeader = () => {
  const router = useRouter();
  const subTitlekey = usePathname()?.split('/')[1] || 'default';

  return <Wrapper>
    <TitleWrapper>
      <Logo onClick={() => router.push('/')}>
        <div className="dummylogo" />
        <span>MOSEORi</span>
      </Logo>
      <SubTitle>|</SubTitle>
      <SubTitle>{SUB_TITLE[subTitlekey] ?? ''}</SubTitle>
    </TitleWrapper>
    <LinkWrapper>
      {/* 링크 컴포넌트 삽입 에정*/}
      <TestLink>euno님</TestLink>
    </LinkWrapper>
  </Wrapper>
}

export default MainHeader;

const Wrapper = styled.div`
  width: 100dvw;
  height: var(--mobile-header-height);
  padding: 0 3dvw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  color: var(--main-color);
`
const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  .dummylogo{
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: var(--main-color);
  }

  span{
    font-family: BMJUA;
    font-size: 20px;
  }
`
const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding-top: 1px;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 8px;
`
const TestLink = styled.span`
  color: var(--main-color);
  font-size: 16px;
  font-weight: 500;
`