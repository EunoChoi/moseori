import useInput from '@/common/hooks/useInput';
import { TransitionContainer, useMountTransition } from '@/common/hooks/useMountTransition_fix';
import { useSearchContext } from '@/common/store/useSearchContext';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import MobileSearchModal from './MobileSearchModal';

const SearchInput: React.FC = () => {
  const isPc = useMediaQuery('(min-width:1024px)');


  const { isMount: isMobileSearchMount,
    setIsMount: setIsMobileSearchMount,
    onToggle: onToggleMobileSearch,
    onClose: onCloseMobileSearch,
    transitionPhase: MobileSearchTransitionPhase } = useMountTransition({ defaultState: 'unmount' });


  const { value: search, setValue: setSearch, onChange } = useInput({ initialValue: '' });
  const { setSearchKeyword } = useSearchContext();

  return (
    <Wrapper>
      <SearchButton onClick={onToggleMobileSearch}>
        <PCSearchInput
          type='text'
          placeholder='모집 공고 검색'
        />
        <SearchRoundedIcon className='icon' fontSize='inherit' color='inherit' />
      </SearchButton>
      {!isPc &&
        <TransitionContainer
          duration={300}
          isMount={isMobileSearchMount}
          setIsMount={setIsMobileSearchMount}
          transitionPhase={MobileSearchTransitionPhase}
        >
          <MobileSearchModal isOpen={isMobileSearchMount} onClose={onCloseMobileSearch} />
        </TransitionContainer>}
    </Wrapper>
  );
};

export default SearchInput;

const Wrapper = styled.div`
  position: relative;
  display : flex;
  flex-direction: column;
  align-items: center;

  overflow: visible;
`
const SearchButton = styled.button`
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
const PCSearchInput = styled.input`
  display: none;
  border: none;
  outline: none;
  background-color: rgba(0,0,0,0);
  &::placeholder{
    color: darkgray;
  }

  @media (min-width:1024px) {
    display: inline;
    width: 200px;

    font-size: 15px;
    font-weight: 500;
    color: var(--grey0);
  }
`