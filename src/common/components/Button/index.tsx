import styled from "styled-components";

interface ZoomPostButtonProps {
  icon?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const Button = ({ icon, text, onClick }: ZoomPostButtonProps) => {
  return (
    <Wrapper onClick={onClick}>
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
      {text && <ButtonText>{text}</ButtonText>}
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
const ButtonIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 22px;
  color: var(--main-0);
  filter: brightness(0.9);
`
const ButtonText = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: var(--grey0);
`