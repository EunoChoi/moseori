import { useRef } from 'react';
import styled from 'styled-components';
import useToggleListOption from './hooks/useToggleListOption';
import OptionButton from './OptionButton';
import OptionList from './OptionList';
import PillShapeSelect from './PillShapeSelect';

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

const CustomSelect = ({
  multiple,
  value,
  setValue,
  name,
  options,
  className
}: SelectProps) => {
  const optionWrapperRef = useRef<HTMLDivElement>(null);

  const { isOptionOpen,
    onCloseOption,
    onToggleOption } = useToggleListOption();

  const isSelected = (option: Option) => {
    if (Array.isArray(value)) {
      return value?.includes(option) === true;
    } else {
      return value === option;
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
  const onTransitionEnd = () => {  //focus action for blur action
    if (isOptionOpen) {
      optionWrapperRef.current?.focus();
    }
  }

  return (
    <Wrapper className={className}>
      <PillShapeSelect
        value={value}
        options={options}
        name={name}
        selectListItem={selectListItem}
        onToggleOption={onToggleOption}
        isOpen={isOptionOpen}
      />
      <OptionWrapper
        ref={optionWrapperRef}
        tabIndex={-1}
        onTransitionEnd={onTransitionEnd}
        onBlur={onCloseOption}
        className={isOptionOpen ? 'open' : ''}
      >
        <OptionList
          options={options}
          isSelected={isSelected}
          selectListItem={selectListItem} />
        <OptionButton
          selectAllListItem={selectAllListItem}
          resetSelectedItems={resetSelectedItems}
          multiple={multiple} />
      </OptionWrapper>
    </Wrapper>
  );
};


export default CustomSelect;


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