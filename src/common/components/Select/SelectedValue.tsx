import { OptionsType, OptionType } from '@/common/type/selectType';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import styled from "styled-components";
import getOptionByValue from './function/getOptionByValue';

interface Props {
  name: string;
  options: OptionsType;
  multiple: boolean;

  value: number[];
  onToggleOptionList: () => void;
  isOptionListOpen: boolean;
}

const SelectedValue = ({ value, options, multiple, name, onToggleOptionList, isOptionListOpen }: Props) => {
  const MAX_VISIBLE_NUM = 3;
  const remainSelectedItem = value.length - MAX_VISIBLE_NUM;
  const isSelectedAll = value.length === 0 || value.length === options.length;

  const selectedOptions = value
    .slice(0, MAX_VISIBLE_NUM)
    .map((v: number) => getOptionByValue({ options, value: v }))
    .filter(e => e !== undefined);

  const displaySelectedOptions = () => {
    if (isSelectedAll) return <MultiSelection>{name}</MultiSelection>
    else {
      return <>
        {selectedOptions.map((option: OptionType) => <MultiSelection key={option.value + option.label}>
          {multiple && <>#</>}
          {option?.label}
        </MultiSelection>)}
        {remainSelectedItem >= 1 && <MultiSelection>외 {remainSelectedItem}</MultiSelection>}
      </>
    }
  }

  return (<Wrapper
    onMouseDown={(e) => { e.preventDefault() }}
    onClick={onToggleOptionList}
  >
    {displaySelectedOptions()}

    {isOptionListOpen ?
      <ExpandLessRoundedIcon className='icon' fontSize='inherit' color='inherit' /> :
      <ExpandMoreRoundedIcon className='icon' fontSize='inherit' color='inherit' />}
  </Wrapper>
  );
}

export default SelectedValue;

const Wrapper = styled.button`
  width: 100%;
  height: 42px;
  border-radius: 16px;
  background-color: var(--main-3);
  border: 1px solid var(--main-1);

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  .icon{
    font-size: 20px;
    color: var(--grey0);
  }
`

const Selection = styled.span`
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