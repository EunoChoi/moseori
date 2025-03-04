import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import styled from 'styled-components';

interface Option {
  label: string;
  value: number;
}

interface Props {
  multiple: boolean | undefined;
  options: Option[];
  isSelected: (option: Option) => boolean;
  selectListItem: (option: Option) => void;
}

const OptionList = ({ multiple, options, isSelected, selectListItem }: Props) => {

  const MarkIcon = (option: Option) => {
    if (multiple) {
      return (isSelected(option) ?
        <CheckBoxRoundedIcon fontSize='inherit' color='inherit' /> :
        <CheckBoxOutlineBlankRoundedIcon fontSize='inherit' color='inherit' />);
    }
    else {
      return (isSelected(option) ?
        <RadioButtonCheckedRoundedIcon fontSize='inherit' color='inherit' /> :
        <RadioButtonUncheckedRoundedIcon fontSize='inherit' color='inherit' />);
    }
  }

  return (
    <OptionListWrapper>
      {options.map(option =>
        <OptionListItem
          key={'list' + option.value}
          onClick={() => { selectListItem(option) }}>
          <span className='check'>
            {MarkIcon(option)}
          </span>
          <span className='label'>{option.label}</span>
        </OptionListItem>
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