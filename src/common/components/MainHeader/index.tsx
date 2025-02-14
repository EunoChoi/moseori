'use client';

import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";

import { SUB_TITLE } from "./constant/SubTitle";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
    <ProfileButtonWrapper>
      <ProfileName onClick={() => router.push('/profile')}>euno</ProfileName>
      <ProfileLogo><AccountCircleIcon className="icon" color="inherit" fontSize="inherit" /></ProfileLogo>
    </ProfileButtonWrapper>
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
  background-color: var(--background);

  @media (max-width: 479px) { //mobile port
    padding: 0 5dvw;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    padding: 0 20px;
  }
  @media (min-width:1024px) { //desktop
    padding: 0 24px;
    height: 72px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  gap: 16px;
  @media (min-width:1024px) { //desktop
    gap: 32px;
  }
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

  @media (min-width:1024px) { //desktop
    .dummylogo{
      width: 28px;
      height: 28px;
      border-radius: 8px;
    }
    span{
      font-family: BMJUA;
      font-size: 24px;
    }
  }
`
const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding-top: 2px;

  color: var(--main-color);
  color: #4d4d4d;

  @media (min-width:1024px) { //desktop
    font-size: 20px;
  }
`
const ProfileButtonWrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`
const ProfileName = styled.span`
  color: #4d4d4d;
  font-size: 16px;
  font-weight: 500;

  text-transform: uppercase;

  @media (min-width:1024px) { //desktop
    font-size: 20px;
  }
`
const ProfileLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .icon{
    font-size: 28px;
    color: var(--main-color);
  }

  @media (min-width:1024px) { //desktop
    width: 28px;
    height: 28px;
    .icon{
      font-size: 32px;
      color: var(--main-color);
    }
  }
`