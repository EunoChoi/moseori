import { OptionsType } from '@/common/type/selectType';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { resetAll, selectAll } from './function/selectControl';

interface Props {
  multiple: boolean;
  options: OptionsType;
  setValue: Dispatch<SetStateAction<number[]>>;
}

const BottomButton = ({ multiple, options, setValue }: Props) => {
  if (multiple === true) {
    return (<OptionButtonWrapper onMouseDown={(e) => { e.preventDefault() }}>
      <button onClick={() => selectAll({ options, setValue })}>
        <CheckCircleRoundedIcon fontSize='inherit' color='inherit' />모두 선택
      </button>
      <button onClick={() => resetAll({ setValue })}>
        <RestartAltRoundedIcon fontSize='inherit' color='inherit' />초기화
      </button>
    </OptionButtonWrapper>);
  }
}

export default BottomButton;

const OptionButtonWrapper = styled.div`
  background-color: var(--main-2);
  background-color: whitesmoke;
  padding : 12px 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-top: 1px solid #ddd;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    font-size: 14px;
    font-weight: 500;
    color: var(--grey0);
  }
`