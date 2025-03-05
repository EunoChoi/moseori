import useInput from '@/common/hooks/useInput';
import useOpenState from '@/common/hooks/useOpenState';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import MobileSearchInputModal from './MobileSearchInputModal';

const Search: React.FC = () => {

  const {
    isOpen: isSearchInputOpen,
    onClose: onCloseSearchInput,
    onToggle: onToggleSearchInput } = useOpenState();

  const { value: search, setValue: setSearch, onChange } = useInput({ initialValue: '' });

  console.log(search);

  const isPc = useMediaQuery('(min-width:1024px)');

  return (
    <Wrapper>
      <SearchButton onClick={onToggleSearchInput}>
        <PCSearchInput
          type='text'
          placeholder='모집 공고 검색'
        />
        <SearchRoundedIcon className='icon' fontSize='inherit' color='inherit' />
      </SearchButton>
      {(isSearchInputOpen && !isPc) && <MobileSearchInputModal isOpen={isSearchInputOpen} onClose={onCloseSearchInput} />}
    </Wrapper>
  );
};

export default Search;

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