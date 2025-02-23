import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { useEffect, useRef } from "react";
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
  selectListItem: (option: Option) => void;
  onToggleOption: () => void;
  isOpen: boolean;
}

const PillShapeSelect = ({ value, options, name, selectListItem, onToggleOption, isOpen }: Props) => {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.scrollTo({ left: scrollWrapperRef.current.scrollWidth, behavior: 'smooth' })
    }
  }, [value])

  return (<PillWrapper>
    <div
      className='scrollWrapper'
      ref={scrollWrapperRef}>
      <Emtpy />
      <SelectedValue
        value={value}
        options={options}
        name={name}
        selectListItem={selectListItem}
      />
      <Emtpy />
    </div>
    <div
      className='toggleButton'
      onMouseDown={(e) => { e.preventDefault() }}
      onClick={onToggleOption}>
      {isOpen ?
        <ExpandLessRoundedIcon className='icon' fontSize='inherit' color='inherit' /> :
        <ExpandMoreRoundedIcon className='icon' fontSize='inherit' color='inherit' />}
    </div>
  </PillWrapper>
  );
}

export default PillShapeSelect;

const Emtpy = styled.div`
  flex: 1;
`
const PillWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  border : 1px solid var(--main-0);
  background-color: var(--main-1);
  overflow: hidden;

  display: flex;
  align-items: center;
  padding-left: 20px;

  > .scrollWrapper{
    flex-grow: 1;
    display: flex;
    overflow-x: scroll;
    padding-right: 20px;
  }
  > .toggleButton{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-left: 8px;
    padding-right: 8px;
    border-left: solid 1px var(--main-0);
  }
`
