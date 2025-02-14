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
      {SUB_TITLE[subTitlekey] && <SubTitle>{SUB_TITLE[subTitlekey]}</SubTitle>}
    </TitleWrapper>
    <LinkWrapper>
      {/* 링크 컴포넌트 삽입 에정*/}
      <TestLink onClick={() => router.push('/profile')}>euno님</TestLink>
    </LinkWrapper>
  </Wrapper>
}

export default MainHeader;

const Wrapper = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  width: 100dvw;
  height: var(--mobile-header-height);

  @media (max-width: 479px) { //mobile port
    padding: 0 5dvw;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    padding: 0 20px;
  }
  @media (min-width:1024px) { //desktop
    padding: 0 20px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  
`
const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  color: var(--main-color);

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

  color: #4d4d4d;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`
const TestLink = styled.span`
  color: #4d4d4d;
  font-size: 16px;
  font-weight: 500;
`