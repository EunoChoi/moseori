import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import styled from "styled-components";

const Filters = () => {
  // const options = Array.from({ length: 20 }, (_, i) => (i + 1).toString());
  // const [option, setOption] = useState<string>();


  return (<Wrapper>
    {/* <FilterComboBox options={options} onSelect={setOption}></FilterComboBox> */}
    <FilterTypeButton>
      <span>도서 카테고리</span>
      <ExpandMoreIcon className='icon' fontSize='inherit' color='inherit' />
    </FilterTypeButton>
    <FilterTypeButton className='shrink-0'>
      <span>최근 등록순</span>
      <ExpandMoreIcon className='icon' fontSize='inherit' color='inherit' />
    </FilterTypeButton>
    <FilterTypeButton className='circle shrink-0'>
      <TuneIcon className='icon' fontSize='inherit' color='inherit' />
    </FilterTypeButton>
  </Wrapper>);
}

export default Filters;

const Wrapper = styled.div`
  width: inherit;
  height: inherit;

  display: flex;
  justify-content: center;
  align-items:center;
  gap : 8px;

  @media (max-width: 479px) { //mobile port
    width: 100dvw; 
    height: 30px;
    padding: 0 3dvw;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobile land + tablet
    width: auto;
    height: 36px;
    margin-right: 8px;
  }
  @media (min-width:1024px) { //desktop
    width: auto;
    height: 36px;
    margin-right: 8px;
  }
`

const FilterTypeButton = styled.button`
  height: 100%;
  border-radius: 9999px;
  padding-left: 16px;
  padding-right: 13px;

  display: flex;
  justify-content: start;
  align-items: center;
  overflow-x: scroll;
  gap: 8px;
  
  box-sizing: border-box;
  background-color: var(--sub-color);
  border: 1px solid rgba(0,0,0,0.05);

  span, .icon{
    flex-grow: 1;
    display: flex;
    justify-content: start;
    overflow-x: scroll;
    white-space: nowrap;

    color: var(--grey0);
    font-size: 14px;
    font-weight: 600;
  }
  .icon{
    font-size: 16px;
  }
  &.shrink-0{
    flex-shrink: 0;
  }
  &.circle{
    aspect-ratio: 1;
    padding: 0;
  }
`