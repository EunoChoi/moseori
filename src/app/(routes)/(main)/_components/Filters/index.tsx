import setQueryParameter from '@/common/function/setQueryParameter';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomSelect from '../../../../../common/components/CustomSelect';
import { CAT_OPTIONS, SORT_OPTIONS } from './constant';

interface Option {
  label: string;
  value: number;
}


const Filters = () => {
  const [multiCatNull, setMultiCatNull] = useState<Option[]>([]);
  const [SingleCat, setSingleCat] = useState<Option>(SORT_OPTIONS[0]);

  useEffect(() => {
    console.log(multiCatNull);
  }, [multiCatNull])

  setQueryParameter();

  return (<Wrapper>
    <CatSelect
      name="도서 카테고리"
      multiple
      options={CAT_OPTIONS}
      value={multiCatNull}
      onChange={setMultiCatNull} />
    <SortSelect
      name="정렬"
      options={SORT_OPTIONS}
      value={SingleCat}
      onChange={setSingleCat} />

    <SettingButton>
      <FilterListRoundedIcon className='icon' fontSize='inherit' color='inherit' />
      <span className='text'>검색 설정</span>
    </SettingButton>
  </Wrapper>);
}

export default Filters;

const CatSelect = styled(CustomSelect)`
  flex-shrink : 0;
  @media (max-width: 640px) {
    flex: 1;
  }
  @media (min-width:641px) and (max-width: 1300px) { 
    width: 250px;
  }
  @media (min-width:1301px) { 
    width: 350px;
  }
`
const SortSelect = styled(CustomSelect)`
  flex-shrink: 0;
  @media (max-width: 1080px) { //mobile port
    display: none;
  }
  @media (min-width:1081px) { //mobild land + tablet + pc
    width: auto;
  }
`

const Wrapper = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media (max-width: 640px) { //mobile port
    width: 100dvw;
    height: 32px;
    margin: 0;
    padding: 0 3dvw;
  }
  @media (min-width:641px) { //mobild land + tablet + pc
    width: auto;
    height: 36px;
    margin-right: 8px;
  }
`

const Button = styled.button`
  height: 100%;
  width: auto;

  padding-left:  18px;
  padding-right: 20px;
  
  background-color: var(--main-1);
  border-radius: 9999px;
  border : 1px solid var(--main-0);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 6px;

  .text{
    font-size: 15px;
    font-weight: 500;
    color: var(--grey0);
  }
`
const SettingButton = styled(Button)`
  .icon{
    color: var(--grey0);
    font-size: 18px;
  }
`