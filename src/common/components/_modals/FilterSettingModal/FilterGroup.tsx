import { isSelected, resetAll, selectAll, selectMultiple, selectSingle } from '@/common/components/Select/function/selectControl';
import { OptionsType, OptionType } from '@/common/type/selectType';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface FilterGroupProps {
  multiple?: boolean;
  name: string;
  options: OptionsType;

  value: number[];
  setValue: Dispatch<SetStateAction<number[]>>;
}

const FilterGroup = ({ multiple, name, options, value, setValue }: FilterGroupProps) => {

  const isMultiple = multiple === true;
  const onClickOption = (optionListItem: OptionType) => {
    if (isMultiple) {
      selectMultiple({ optionListItem, value, setValue });
    }
    else {
      selectSingle({ optionListItem, setValue })
    }
  }

  return (
    <Wrapper>
      <FilterHeader>
        <FilterTypeName className="name">{name}</FilterTypeName>
        <FilterSubText className="sub">
          {isMultiple ? '중복 선택 가능' : '단일 선택'}
        </FilterSubText>
      </FilterHeader>
      <FilterOptionList>
        {options.map(optionListItem =>
          <FilterOption
            key={'cat-option-' + optionListItem.value}
            className={isSelected({ value, optionListItem }) === true ? 'selected' : ''}
            onClick={() => onClickOption(optionListItem)}
          >
            <span>{optionListItem.label}</span>
          </FilterOption>)}
      </FilterOptionList>
      {isMultiple &&
        <FilterControl>
          <button onClick={() => selectAll({ options, setValue })}>
            <CheckCircleRoundedIcon fontSize='inherit' color='inherit' />모두 선택
          </button>
          <button onClick={() => resetAll({ setValue })}>
            <RestartAltRoundedIcon fontSize='inherit' color='inherit' />초기화
          </button>
        </FilterControl>}
    </Wrapper>
  );
};

export default FilterGroup;

const Wrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  @media (max-width: 479px) { //mobile port
    padding: 16px;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    padding: 24px;
  }
  @media (min-width:1024px) { //desktop
    padding: 32px;
  }
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
    border-color: var(--main-1);
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