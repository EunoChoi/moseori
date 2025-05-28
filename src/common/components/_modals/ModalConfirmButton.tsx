'use client';

import styled from "styled-components";

interface ModalConfirmButtonProps {
  text: string;
  onClick?: () => void;
  onSubmit?: () => void;
}

export const ModalConfirmButton = ({ text, onClick, onSubmit }: ModalConfirmButtonProps) => {
  return (<Wrapper>
    <Button type='submit' onClick={onClick} onSubmit={onSubmit}>
      {text}
    </Button>
  </Wrapper>);
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0.75rem 1rem;
`
const Button = styled.button`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  border-radius: 0.7rem;

  background-color: var(--main-0);
  color: white;
  font-weight: 500;
  font-size: 1rem;

  @media (max-width: 479px) { //mobile port
    height: var(--mobile-header-height)
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    height: var(--mobile-header-height)
  }
  @media (min-width:1024px) { //desktop
    height: var(--pc-header-height);
  }
`