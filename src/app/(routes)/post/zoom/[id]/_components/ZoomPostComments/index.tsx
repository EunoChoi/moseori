import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from "styled-components";
import InputFoam from './InputForm';

interface ZoomPostCommentsProps {
  onClose: () => void;
}

const ZoomPostComments = ({ onClose }: ZoomPostCommentsProps) => {
  return (
    <BG onClick={onClose}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <KeyboardArrowDownIcon fontSize="inherit" color='inherit' />
        </CloseButton>

        {/* 댓글 존재 여부 파악 후 마운트 */}
        <Comments>댓글이 존재하지 않습니다.</Comments>

        {/* 로그인 여부 파악 후 마운트 */}
        <InputFoam />
      </Wrapper>
    </BG>
  );
}
export default ZoomPostComments;

const BG = styled.div`
  width: 100dvw;
  height: 100dvh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: end;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100dvw;
  height: 80dvh;

  background-color: white;
  border : 1px solid rgba(0, 0, 0, 0.08);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .12);


  @media (max-width: 479px) { //mobile port
    width: 100%;
    height: 85%;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    width: 100%;
    height: 85%;
  }
  @media (min-width:1024px) { //desktop
    width: 60%;
    height: 70%;
  }
`;
const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

 font-size: 32px;
 padding: 8px;
 color: var(--grey0);
 
`
const Comments = styled.div`
  
`
const CommentInput = styled.input`

`