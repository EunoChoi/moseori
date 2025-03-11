import useInput from '@/common/hooks/useInput';
import { TransitionContainer, useMountTransition } from '@/common/hooks/useMountTransition';
import { useSearchContext } from '@/common/store/useSearchContext';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import MobileSearchModal from './MobileSearchModal';

const SearchInput: React.FC = () => {
  const { isMount: isMobileSearchMount,
    setIsMount: setIsMobileSearchMount,
    onToggle: onToggleMobileSearch,
    onClose: onCloseMobileSearch,
    transitionPhase: MobileSearchTransitionPhase } = useMountTransition({ defaultState: 'unmount' });


  const isPc = useMediaQuery('(min-width:1024px)');
  // const timer = useRef<NodeJS.Timeout | null>(null);

  const [recentSearchInput, setRecentSearchInput] = useState<string[]>([]);
  const { searchKeyword, setSearchKeyword } = useSearchContext();
  const { value: searchInput, onChange: onSearchInputChange } = useInput({ initialValue: searchKeyword ? searchKeyword : '' });

  //debounce or search button?
  // useDeboundSearch({ searchInput, setSearchKeyword, setRecentSearchInput });

  const onClickSearchButton = () => {
    setSearchKeyword(searchInput);
    setRecentSearchInput(c => [...c, searchInput]);
  }

  return (
    <>
      <Wrapper>
        <SearchButtonWrapper onClick={onToggleMobileSearch}>
          <PCSearchInput
            type='text'
            value={searchInput}
            onChange={onSearchInputChange}
            placeholder='모집 공고 검색'
          />
          <SearchButton onClick={onClickSearchButton}>
            <SearchRoundedIcon className='icon' fontSize='inherit' color='inherit' />
          </SearchButton>
        </SearchButtonWrapper>
      </Wrapper>
      {!isPc &&
        <TransitionContainer
          portalBody={true}
          duration={300}
          isMount={isMobileSearchMount}
          setIsMount={setIsMobileSearchMount}
          transitionPhase={MobileSearchTransitionPhase}
        >
          <MobileSearchModal
            onClickSearchButton={onClickSearchButton}
            searchInput={searchInput}
            onSearchInputChange={onSearchInputChange}
            recentSearchInput={recentSearchInput}
            isOpen={isMobileSearchMount}
            onClose={onCloseMobileSearch} />
        </TransitionContainer>}
    </>

  );
};

export default SearchInput;

const Wrapper = styled.div`
  position: relative;
  display : flex;
  flex-direction: column;
  align-items: center;
`
const SearchButtonWrapper = styled.div`
  height: 100%;
  width: auto;
  
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
const SearchButton = styled.button`
  display: flex;
  justify-content : center;
  align-items : center;

  height: 100%;
  padding: 0 18px;
`
const PCSearchInput = styled.input`
  display: none;
  border: none;
  outline: none;
  background-color: rgba(0,0,0,0);
  padding-left: 18px;

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