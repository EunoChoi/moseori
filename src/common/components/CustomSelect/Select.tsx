import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import styled from "styled-components";
import SelectedValue from "./SelectedValue";

interface Option {
  label: string;
  value: number;
}

interface Props {
  value: Option[] | Option;
  options: Option[];
  name: string;
  onToggleOptionList: () => void;
  isOptionListOpen: boolean;
}

const Select = ({ value, options, name, onToggleOptionList, isOptionListOpen }: Props) => {
  return (<Wrapper
    onMouseDown={(e) => { e.preventDefault() }}
    onClick={onToggleOptionList}
  >
    <SelectedValue
      value={value}
      options={options}
      name={name}
    />
    {isOptionListOpen ?
      <ExpandLessRoundedIcon className='icon' fontSize='inherit' color='inherit' /> :
      <ExpandMoreRoundedIcon className='icon' fontSize='inherit' color='inherit' />}
  </Wrapper>
  );
}

export default Select;

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
