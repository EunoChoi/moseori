import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import styled from 'styled-components';

interface Option {
  label: string;
  value: number;
}

interface Props {
  options: Option[];
  isSelected: (option: Option) => boolean;
  selectListItem: (option: Option) => void;
}

const OptionList = ({ options, isSelected, selectListItem }: Props) => {
  return (
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
    font-size: 18px;
    color: var(--main-0)
  }
  .label{
    font-size: 14px;
    font-weight: 500;
    color: var(--grey0);
  }
`