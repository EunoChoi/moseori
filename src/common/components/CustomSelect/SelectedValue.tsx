import TagRoundedIcon from '@mui/icons-material/TagRounded';
import styled from "styled-components";

interface Option {
  label: string;
  value: number;
}

interface Props {
  value: Option[] | Option;
  options: Option[];
  name: string;
  selectListItem: (option: Option) => void;
}

const SelectedValue = ({ value, options, name, selectListItem }: Props) => {
  if (Array.isArray(value)) {
    if (value.length == 0 || value.length === options.length) {
      return <Selection>모든 {name}</Selection>;
    }
    else {
      return value.map(e =>
        <MultiSelection
          key={'selected-value-' + e.value}
          onClick={() => selectListItem(e)}>
          <TagRoundedIcon className='icon' fontSize='inherit' color='inherit' />
          {e.label}
        </MultiSelection>);
    }
  }
  else {
    return <Selection>{value.label}</Selection>;
  }
}

export default SelectedValue;

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