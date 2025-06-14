import Button from "@/common/components/Button";
import { TransitionContainer, useMountTransition } from "@/common/hooks/useMountTransition";

import BookmarkIcon from '@mui/icons-material/Bookmark';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


import styled from "styled-components";
import ZoomPostComments from "./Comments";

interface ZoomPostButtonProps {
  icon?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const ZoomPostButton = () => {

  const { isMount: commentsMount,
    setIsMount: setCommentsMount,
    onToggle: onToggleComments,
    onClose: onCloseComments,
    transitionPhase: CommentsTransitionPhase } = useMountTransition({ defaultState: 'unmount' });

  //useMountTransition, TransitionContainer 이용해서 comments 컴포넌트 모달로 띄우기

  return (
    <>
      <Wrapper>
        <div className='buttonWrapper'>
          <Button
            text='123'
            icon={<BookmarkIcon className="icon" fontSize="inherit" color="inherit" />}
          />
          <Button
            text='123'
            icon={<CommentIcon className="icon" fontSize="inherit" color="inherit" />}
            onClick={() => onToggleComments()}
          />
        </div>
        <div className='buttonWrapper'>
          <Button
            text='수정'
            icon={<EditIcon className="icon" fontSize="inherit" color="inherit" />}
          />
          <Button
            text='삭제'
            icon={<DeleteForeverIcon className="icon" fontSize="inherit" color="inherit" />}
          />
        </div>
      </Wrapper>
      <TransitionContainer
        portalBody={true}
        duration={500}
        isMount={commentsMount}
        setIsMount={setCommentsMount}
        transitionPhase={CommentsTransitionPhase}
        exitedStyle='opacity: 0; transform: translateY(100dvh);'
        enteredStyle='opacity: 1; transform: translateY(0px);'
      >
        <ZoomPostComments onClose={onCloseComments} />
      </TransitionContainer >
    </>
  );
}

export default ZoomPostButton;

const Wrapper = styled.div`
 width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 16px;

  .buttonWrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;
