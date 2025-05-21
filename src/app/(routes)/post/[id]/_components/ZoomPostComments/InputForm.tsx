import SendIcon from '@mui/icons-material/Send';
import styled from "styled-components";


const InputForm = () => {
  return (
    <Wrapper>
      <Input />
      <SendButton>
        <SendIcon fontSize="inherit" color='inherit' />
      </SendButton>
    </Wrapper>
  );
}

export default InputForm;

const Wrapper = styled.form`
  width: 100%;
  padding: 16px;
  gap: 16px;

  border-top: 1px solid rgba(0, 0, 0, 0.08);

  display: flex;
`
const Input = styled.input`
  transition: border-bottom 200ms ease-in-out;
  
  flex-grow: 1;
  font-size: 16px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.08);

  &:active{
    border-bottom: 2px solid black;
  }
`
const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
    
  font-size: 24px;
  color: var(--grey0);
`