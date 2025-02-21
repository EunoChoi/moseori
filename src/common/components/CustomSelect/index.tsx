import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface Option {
  label: string;
  value: number;
}

interface BaseSelectProps {
  name: string;
  options: Option[];
  className?: string;
}
interface SingleSelectProps extends BaseSelectProps {
  multiple?: false;
  value: Option;
  setValue: (value: Option) => void;
}
interface MultiSelectProps extends BaseSelectProps {
  multiple: true;
  value: Option[];
  setValue: (value: Option[]) => void;
}

type SelectProps = SingleSelectProps | MultiSelectProps;

const CustomSelect: React.FC<SelectProps> = ({
  multiple,
  value, //multiple boolean 값에 따라 value 타입이 결정된다. 
  setValue,
  name,
  options,
  className
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const optionWrapperRef = useRef<HTMLDivElement>(null);

  const resetSelectedItems = () => {
    if (multiple) {
      setValue([]);
    }
  }
  const selectAllListItem = () => {
    if (multiple) {
      setValue([...options]);
    }
  }
  const selectListItem = (option: Option) => {
    if (multiple) {
      if (value.includes(option) === true) {  //선택 요소 삭제
        const lastValueItems = value.filter(e => e !== option)
        setValue([...lastValueItems]);
      }
      else { //선택 요소 추가
        setValue([...value, option]);
      }
    }
    else if (!multiple && value !== option) {
      setValue(option);
    }
  }
  const onToggleOpenCloseButton = () => {
    setIsOpen(c => !c);
  }
  const onBlurOptionListWrapper = () => {
    setIsOpen(false);
  }
  const onTransitionEnd = () => {  //focus action for blur action
    if (isOpen) {
      optionWrapperRef.current?.focus();
    }
  }
  const isSelected = (option: Option) => {
    if (multiple) {
      return value?.includes(option) === true;
    } else {
      return value === option;
    }
  }
  const renderValue = () => {
    if (multiple) {
      if (value.length == 0 || value.length === options.length) {
        return <Selection>모든 {name}</Selection>;
      }
      else {
        return value.map(e =>
          <MultiSelection
            key={'selected-value-' + e.value}
            onClick={() => selectListItem(e)}
          >
            <TagRoundedIcon className='icon' fontSize='inherit' color='inherit' />
            {e.label}
          </MultiSelection>);
      }
    }
    else {
      return <Selection>{value.label}</Selection>;
    }
  }

  useEffect(() => {
    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.scrollTo({ left: scrollWrapperRef.current.scrollWidth, behavior: 'smooth' })
    }
  }, [value])

  return (
    <Wrapper className={className}>
      <PillWrapper>
        <div
          className='scrollWrapper'
          ref={scrollWrapperRef}>
          <Emtpy />{renderValue()}<Emtpy />
        </div>
        <div
          className='toggleButton'
          onMouseDown={(e) => { e.preventDefault() }}
          onClick={onToggleOpenCloseButton}>
          {isOpen ?
            <ExpandLessRoundedIcon className='icon' fontSize='inherit' color='inherit' /> :
            <ExpandMoreRoundedIcon className='icon' fontSize='inherit' color='inherit' />}
        </div>
      </PillWrapper>
      <OptionWrapper
        ref={optionWrapperRef}
        tabIndex={-1}
        onTransitionEnd={onTransitionEnd}
        onBlur={onBlurOptionListWrapper}
        className={isOpen ? 'open' : ''}
      >
        <OptionListWrapper>
          {options.map(option =>
            <OptionListItem
              key={'list' + option.value}
              onClick={() => { selectListItem(option) }}>
              <span className='check'>
                {isSelected(option) ?
                  <RadioButtonCheckedRoundedIcon fontSize='inherit' color='inherit' /> :
                  <RadioButtonUncheckedRoundedIcon fontSize='inherit' color='inherit' />}
              </span>
              <span className='label'>{option.label}</span>
            </OptionListItem>
          )}
        </OptionListWrapper>
        {multiple === true &&
          <OptionButtonWrapper
            onMouseDown={(e) => { e.preventDefault() }}
          >
            <button onClick={selectAllListItem}>
              <CheckCircleRoundedIcon fontSize='inherit' color='inherit' />모두 선택
            </button>
            <button onClick={resetSelectedItems}>
              <RestartAltRoundedIcon fontSize='inherit' color='inherit' />초기화
            </button>
          </OptionButtonWrapper>}
      </OptionWrapper>

    </Wrapper >
  );
};


export default CustomSelect;

const Emtpy = styled.div`
  flex: 1;
`
const Wrapper = styled.div`
  position: relative;
  display : flex;
  flex-direction: column;
  align-items: center;

  //default widht, height
  width: 200px;
  height: 100%;
`
const OptionWrapper = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;

  transition: opacity 300ms ease-in-out, visibility 200ms ease-in-out;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  &.open{
    opacity: 1;
    visibility:visible;
    pointer-events: auto;
  }
  &:focus {
    outline: none;
  }

  position: absolute;
  top: 100%;
  right: 0;
  transform: translateX(calc(50% - 17px));
  margin-top: 4px;

  background-color: white;
  border-radius: 16px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: -10px; /* 상단 위치 조절 */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ddd; /* 테두리 색상 */
  }
  &::after {
    content: '';
    position: absolute;
    top: -9px; /* 테두리 두께(2px)만큼 조정 */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white; 
  }
`
const OptionListWrapper = styled.ul`
  width: auto;
  height: auto;
  max-height: 12.5rem;

  display:flex;
  flex-direction: column;
  overflow-y: scroll;
  flex-shrink: 0;
`
const OptionListItem = styled.li`
  transition: background-color 200ms ease-in-out;
  cursor: pointer;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  height: 2.5rem;
  padding: 0 1rem;

  .check{
    font-size: 18px;
    color: var(--main-0)
  }
  .label{
    font-size: 14px;
    font-weight: 500;
    color: var(--grey0);
  }
`
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

const PillWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  border : 1px solid var(--main-0);
  background-color: var(--main-1);
  overflow: hidden;

  display: flex;
  align-items: center;
  padding-left: 20px;

  > .scrollWrapper{
    flex-grow: 1;
    display: flex;
    overflow-x: scroll;
    padding-right: 20px;
  }
  > .toggleButton{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-left: 8px;
    padding-right: 8px;
    border-left: solid 1px var(--main-0);
  }
`
const Selection = styled.button`
  flex-shrink: 0;
  font-size: 15px;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--grey0);
`
const MultiSelection = styled(Selection)`
  margin: 0 4px;
  .icon{
    font-size: 15px;
  }
`