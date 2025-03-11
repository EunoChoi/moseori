import { OptionType } from "@/common/type/selectType";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import { isSelected, selectMultiple, selectSingle } from "./function/selectControl";

interface OptionListItemProps {
  value: number[];
  setValue: Dispatch<SetStateAction<number[]>>;
  optionListItem: OptionType;
  multiple: boolean | undefined;
}

const OptionListItem = ({ value, setValue, optionListItem, multiple }: OptionListItemProps) => {


  const MarkIcon = (optionListItem: OptionType) => {
    if (multiple) {
      return (isSelected({ optionListItem, value }) ?
        <CheckBoxRoundedIcon fontSize='inherit' color='inherit' /> :
        <CheckBoxOutlineBlankRoundedIcon fontSize='inherit' color='inherit' />);
    }
    else {
      return (isSelected({ optionListItem, value }) ?
        <RadioButtonCheckedRoundedIcon fontSize='inherit' color='inherit' /> :
        <RadioButtonUncheckedRoundedIcon fontSize='inherit' color='inherit' />);
    }
  }

  return <Wrapper
    onClick={() => {
      if (multiple) {
        selectMultiple({ optionListItem, value, setValue });
      }
      else {
        selectSingle({ optionListItem, setValue });
      }
    }}
  >
    <span className='check'>{MarkIcon(optionListItem)}</span>
    <span className='label'>{optionListItem.label}</span>
  </Wrapper>
}

//React.memo로 인해 props가 변하지 않으면 리렌더링 되지 않는다.
export default React.memo(OptionListItem);

const Wrapper = styled.li`
  cursor: pointer;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  height: 2.5rem;
  padding: 0 1rem;

  .check{
    display: flex;
    align-items: center;
    font-size: 18px;
    color: var(--main-0)
  }
  .label{
    font-size: 14px;
    font-weight: 500;
    color: var(--grey0);
  }
`