import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface Option {
  label: string;
  value: number;
}
interface FilterGroupProps<T extends Option[] | Option> {
  name: string;
  options: Option[];
  selectedOptions: T;
  setSelectedOption: Dispatch<SetStateAction<T>>;
}

const isMultiple = (options: Option | Option[]): options is Option[] => {
  return Array.isArray(options);
};

const FilterGroup = <T extends Option[] | Option>(props: FilterGroupProps<T>) => {

  const isSelected = (compareOption: Option) => {
    if (isMultiple(props.selectedOptions)) {
      return props.selectedOptions.includes(compareOption) === true;
    } else {
      return props.selectedOptions === compareOption;
    }
  }
  const selectFilterOption = (clickedOption: Option) => {
    if (isMultiple(props.selectedOptions)) {
      if (props.selectedOptions.includes(clickedOption) === true) {  //선택 요소 삭제
        const lastValueItems = props.selectedOptions.filter(e => e !== clickedOption)
        props.setSelectedOption(lastValueItems as T);
      }
      else { //선택 요소 추가
        props.setSelectedOption([...props.selectedOptions, clickedOption] as T);
      }
    }
    else {
      if (props.selectedOptions !== clickedOption) {
        props.setSelectedOption(clickedOption as T);
      }
    }
  }
  const resetSelectedItems = () => {
    if (isMultiple(props.selectedOptions)) {
      props.setSelectedOption([] as unknown as T);
    }
  }
  const selectAllListItem = () => {
    if (isMultiple(props.selectedOptions)) {
      props.setSelectedOption([...props.options] as T);
    }
  }

  return (
    <Wrapper>
      <FilterHeader>
        <FilterTypeName className="name">{props.name}</FilterTypeName>
        <FilterSubText className="sub">
          {isMultiple(props.selectedOptions) === true ? '중복 선택 가능' : '단일 선택'}
        </FilterSubText>
      </FilterHeader>
      <FilterOptionList>
        {props.options.map(option =>
          <FilterOption
            key={'cat-option-' + option.value}
            className={isSelected(option) === true ? 'selected' : ''}
            onClick={() => selectFilterOption(option)} >
            <span>{option.label}</span>
          </FilterOption>)}
      </FilterOptionList>
      {isMultiple(props.selectedOptions) === true &&
        <FilterControl>
          <button onClick={selectAllListItem}>
            <CheckCircleRoundedIcon fontSize='inherit' color='inherit' />모두 선택
          </button>
          <button onClick={resetSelectedItems}>
            <RestartAltRoundedIcon fontSize='inherit' color='inherit' />초기화
          </button>
        </FilterControl>}
    </Wrapper>
  );
};

export default FilterGroup;

const Wrapper = styled.section`
  width: 100%;
  padding: 16px;

  display: flex;
  flex-direction: column;
`
const FilterHeader = styled.span`
  display: flex;
  justify-content: start;
  align-items: center;
  gap :12px;
  margin-bottom: 16px;
`
const FilterTypeName = styled.span`
  font-size: 18px;
  font-weight: 600;
  padding: 6px 0;
`
const FilterSubText = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: grey;
`
const FilterOptionList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  grid-gap: 12px;
`
const FilterOption = styled.button`
  transition : background-color 200ms ease-in-out, border-color 200ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px 32px;
  border : 1px solid var(--light-grey);
  border-radius: 12px;

  font-size: 15px;

  &.selected{
    background-color: var(--main-3);
    border-color: var(--main-0);
  }
`
const FilterControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-top: 24px;

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    font-size: 16px;
    font-weight: 500;
    color: var(--grey0);
  }
`