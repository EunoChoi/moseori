'use Client';

import CustomSelect from '@/common/components/CustomSelect';
import useSelectState from '@/common/components/CustomSelect/hooks/useSelectState';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import styled from 'styled-components';
import { CAT_OPTIONS, SORT_OPTIONS } from './constant';

import { TransitionContainer, useMountTransition } from '@/common/hooks/useMountTransition';
import FilterSetting from '../FilterSetting';
import Search from '../Search';

const Filters = () => {
  //search, filter(cat, sort)
  const { selectState: selectCatState, setSelectState: setSelectedCatOption } = useSelectState<'multiple'>({ key: 'cat', options: CAT_OPTIONS, type: 'multiple' });
  const { selectState: selectSortState, setSelectState: setSelectedSortOption } = useSelectState<'single'>({ key: 'sort', options: SORT_OPTIONS, type: 'single' });

  const { isMount: isFilterSettingMount,
    setIsMount: setIsFilterSettingMount,
    onToggle: onToggleFilterSetting,
    onClose: onCloseFilterSetting,
    transitionPhase: FilterSettingTransitionPhase } = useMountTransition({ defaultState: 'unmount' });

  return (<>
    <Wrapper>
      <CatSelect
        multiple
        name="도서 카테고리"
        options={CAT_OPTIONS}
        value={selectCatState}
        setValue={setSelectedCatOption}
      />
      <SortSelect
        name="정렬"
        options={SORT_OPTIONS}
        value={selectSortState}
        setValue={setSelectedSortOption} />

      <Search />

      <Button onClick={onToggleFilterSetting}>
        <TuneRoundedIcon className='icon' fontSize='inherit' color='inherit' />
      </Button>
    </Wrapper>

    <TransitionContainer
      duration={300}
      isMount={isFilterSettingMount}
      setIsMount={setIsFilterSettingMount}
      transitionPhase={FilterSettingTransitionPhase}
    >
      <FilterSetting
        selectedCatOptions={selectCatState}
        setSelectedCatOption={setSelectedCatOption}
        selectedSortOptions={selectSortState}
        setSelectedSortOption={setSelectedSortOption}
        isOpen={isFilterSettingMount}
        onClose={onCloseFilterSetting} />
    </TransitionContainer>
  </>);
}

export default Filters;

const CatSelect = styled(CustomSelect)`
  flex-shrink : 0;
  @media (max-width: 640px) {
    flex: 1;
  }
  @media (min-width:641px) { 
    width: 225px;
  }
`
const SortSelect = styled(CustomSelect)`
  flex-shrink: 0;
  @media (max-width: 640px) { //mobile port
    display: none;
  }
  @media (min-width:641px) { //mobild land + tablet + pc
    width: 225px;
  }
`

const Wrapper = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media (max-width: 640px) { //mobile port
    width: 100dvw;
    margin: 0;
    padding: 0 3dvw;
  }
  @media (min-width:641px) { //mobild land + tablet + pc
    width: auto;
    margin-right: 8px;
  }
`

const Button = styled.button`
  height: 100%;
  width: auto;

  padding : 0 18px;
  
  height: 42px;
  border-radius: 16px;
  background-color: var(--main-3);
  border: 1px solid var(--main-1);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 6px;

  .text{
    display: none;
  }
  .icon{
    color: var(--grey0);
    font-size: 18px;
  }
  @media (min-width:1024px) { //mobild land + tablet + pc
    .text{
      display: flex;

      font-size: 15px;
      font-weight: 500;
      color: var(--grey0);
    }
  }
`