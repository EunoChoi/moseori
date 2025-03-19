'use Client';

import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import styled from 'styled-components';

import { TransitionContainer, useMountTransition } from '@/common/hooks/useMountTransition';
import useTopChceck from "@/common/hooks/useTopCheck";

import FilterSettingModal from '@/common/components/_modals/FilterSettingModal';
import { useRef } from 'react';
import useSearchSync from './_hooks/useSearchSync';
import SearchFilter from './SearchFilter';
import SearchInput from './SearchInput';

const SearchBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isTop } = useTopChceck({ ref, top: 0 });

  const { isMount: isFilterSettingMount,
    setIsMount: setIsFilterSettingMount,
    onToggle: onToggleFilterSetting,
    onClose: onCloseFilterSetting,
    transitionPhase: FilterSettingTransitionPhase } = useMountTransition({ defaultState: 'unmount' });

  useSearchSync();

  return (<>
    <Wrapper ref={ref} className={isTop ? 'sticky' : ''}>
      <SearchFilter />
      <SearchInput />
      <FilterSettingButton onClick={onToggleFilterSetting}>
        <TuneRoundedIcon className='icon' fontSize='inherit' color='inherit' />
      </FilterSettingButton>
    </Wrapper>

    <TransitionContainer
      portalBody={true}
      duration={300}
      isMount={isFilterSettingMount}
      setIsMount={setIsFilterSettingMount}
      transitionPhase={FilterSettingTransitionPhase}
    >
      <FilterSettingModal onClose={onCloseFilterSetting} />
    </TransitionContainer>
  </>);
}

export default SearchBar;


const Wrapper = styled.div`
  position: sticky;
  z-index: 10; //postCard z-index : 9
  top: 0;
 
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100dvw;
  height: auto;
  padding: 12px 0;
  gap: 8px;
  background-color: var(--background);

  transition: border-bottom 500ms ease-in-out, box-shadow 500ms ease-in-out;
  border-bottom: solid 1px var(--background);
  box-shadow: rgba(0, 0, 0, 0) 0px 6px 6px 0px;
  &.sticky{
    border-bottom: solid 1px rgba(0,0,0,0.08);
    box-shadow: rgba(0, 0, 0, 0.04) 0px 6px 6px 0px;
  }

  @media (max-width: 640px) { 
    margin: 0;
    padding: 8px 3dvw;
  }
`

const FilterSettingButton = styled.button`
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

  .icon{
    color: var(--grey0);
    font-size: 18px;
  }
`