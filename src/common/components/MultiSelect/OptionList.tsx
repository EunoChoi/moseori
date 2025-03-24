import { OptionsType, OptionType } from '@/common/type/selectType';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import OptionListItem from './OptionListItem';


interface Props {
  multiple: boolean;
  options: OptionsType;
  value: number[];
  setValue: Dispatch<SetStateAction<number[]>>;
}

const OptionList = ({
  multiple,
  options,
  value,
  setValue
}: Props) => {

  return (
    <OptionListWrapper>
      {options.map((optionListItem: OptionType) =>
        <OptionListItem
          key={optionListItem.label + '-' + optionListItem.value}
          value={value}
          setValue={setValue}
          optionListItem={optionListItem}
          multiple={multiple}
        />
      )}
    </OptionListWrapper>
  );
}

export default OptionList;

const OptionListWrapper = styled.ul`
  width: auto;
  height: auto;
  max-height: 12.5rem;

  display:flex;
  flex-direction: column;
  overflow-y: scroll;
  flex-shrink: 0;
`
