import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomSelect from '../../../../../common/components/CustomSelect';

interface Option {
  label: string;
  value: number;
}
const catOptions: Option[] = [
  { label: '역사', value: 0 },
  { label: '소설', value: 1 },
  { label: '인문', value: 2 },
  { label: '과학', value: 3 },
  { label: '에세이', value: 4 },
  { label: '시', value: 5 },
  { label: '참고서', value: 6 },
  { label: '기타', value: 7 },
  { label: '취미', value: 8 },
];
const sortOptions: Option[] = [
  { label: '최근 등록순', value: 0 },
  { label: '마감 임박순', value: 1 },
]

const Filters = () => {
  const [multiCatNull, setMultiCatNull] = useState<Option[]>([]);
  const [SingleCat, setSingleCat] = useState<Option>(sortOptions[0]);

  useEffect(() => {
    console.log(multiCatNull);
  }, [multiCatNull])

  return (<Wrapper>
    <CatSelect
      name="도서 카테고리"
      multiple
      options={catOptions}
      value={multiCatNull}
      onChange={setMultiCatNull} />
    <SortSelect
      name="정렬"
      options={sortOptions}
      value={SingleCat}
      onChange={setSingleCat} />

    <SettingButton>
      <FilterListRoundedIcon className='icon' fontSize='inherit' color='inherit' />
      <span className='text'>필터 설정</span>
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
  gap: 4px;

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