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
    <ButtonWrapper className="left">
      <button onClick={onClickLeftButton}>{leftButtonElement}</button>
    </ButtonWrapper>
    <ButtonWrapper className="title">
      <button onClick={onClickCenterButton}>{title}</button>
    </ButtonWrapper>
    <ButtonWrapper className="right">
      <button onClick={onClickRightButton}>{rightButtonElement}</button>
    </ButtonWrapper>
  </Wrapper>;
}

export default ModalHeader;

const Wrapper = styled.header`
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid var(--light-grey);
  background-color: var(--background);

  @media (max-width: 479px) { //mobile port
    padding: 0 5dvw;
    height: var(--mobile-header-height)
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    padding: 0 20px;
    height: var(--mobile-header-height)
  }
  @media (min-width:1024px) { //desktop
    padding: 0 20px;
    height: var(--pc-header-height);
  }
`
const ButtonWrapper = styled.div`
  &.title{
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-weight: 600;
    color: black;
  }
  &.left{
    display: flex;
    justify-content: start;
    align-items: center;
  }
  &.right{
    display: flex;
    justify-content: end;
    align-items: center;
  }
  &.left, &.right{
    font-size: 16px;
    font-weight: 500;
    color: grey;
  }
`