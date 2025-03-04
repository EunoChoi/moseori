import styled from "styled-components";

interface Option {
  label: string;
  value: number;
}

interface Props {
  value: Option[] | Option;
  options: Option[];
  name: string;
}

const SelectedValue = ({ value, options, name }: Props) => {
  const MAX_VISIBLE_NUM = 3;
  const remainSelectedItem = Array.isArray(value) ? value.length - MAX_VISIBLE_NUM : 0;

  if (Array.isArray(value)) {
    if (value.length == 0 || value.length === options.length) {
      return <Selection>{name}</Selection>;
    }
    else {
      return <>
        {value.slice(0, 3).map(e =>
          <MultiSelection key={'selected-value-' + e.value}>#{e.label}</MultiSelection>)}
        {remainSelectedItem >= 1 && <MultiSelection>외 {remainSelectedItem}</MultiSelection>}
      </>;
    }
  }
  else {
    return <Selection>{value.label}</Selection>;
  }
}

export default SelectedValue;

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