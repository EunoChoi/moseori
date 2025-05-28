import { JSX } from "react";
import styled from "styled-components";

interface ModalHeaderProps {
  className?: string;
  title: string;
  leftButtonElement?: string | JSX.Element;
  rightButtonElement?: string | JSX.Element;
  onClickLeftButton?: () => void;
  onClickCenterButton?: () => void;
  onClickRightButton?: () => void;
}

const ModalHeader = ({ title, className, leftButtonElement, rightButtonElement, onClickLeftButton, onClickCenterButton, onClickRightButton }: ModalHeaderProps) => {

  return <Wrapper className={className}>
    <ModalHeaderButton className="left" onClick={onClickLeftButton}>
      {leftButtonElement}
    </ModalHeaderButton>
    <ModalHeaderButton className="center" onClick={onClickCenterButton}>
      {title}
    </ModalHeaderButton>
    <ModalHeaderButton className="right" onClick={onClickRightButton}>
      {rightButtonElement}
    </ModalHeaderButton>
  </Wrapper>;
}

export default ModalHeader;

const Wrapper = styled.header`
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid var(--light-grey);
  background-color: var(--background);

  width: 100%;

  @media (max-width: 479px) { //mobile port
    padding: 0 5dvw;
    height: var(--mobile-header-height)
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    padding: 0 24px;
    height: var(--mobile-header-height)
  }
  @media (min-width:1024px) { //desktop
    padding: 0 24px;
    height: var(--pc-header-height);
  }
`
const ModalHeaderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;
  cursor: pointer;

  &.left{
    justify-content: start;
  }
  &.center{
    justify-content: center;
    
    font-size: 20px;
    font-weight: 600;
    color: black;
  }
  &.right{
    justify-content: end;
  }
    &.left, &.right{
    font-size: 16px;
    font-weight: 500;
    color: grey;
  }
`