import useInput from '@/common/hooks/useInput';
import { useSearchContext } from '@/common/store/useSearchContext';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState } from 'react';
import styled from 'styled-components';

interface DesktopSearchInputProps {

}

const DesktopSearchInput = ({ }: DesktopSearchInputProps) => {

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
    <Wrapper>
      <SearchInputForm
        type='text'
        value={searchInput}
        onChange={onSearchInputChange}
        placeholder='모집 공고 검색'
      />
      <SearchButton onClick={onClickSearchButton}>
        <SearchRoundedIcon className='icon' fontSize='inherit' color='inherit' />
      </SearchButton>
    </Wrapper>
  );
};

export default DesktopSearchInput;

const Wrapper = styled.div`
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
  padding-left: 14px;
  gap: 6px;

  .icon{
    color: var(--grey0);
    font-size: 18px;
  }
`
const SearchInputForm = styled.input`
  border: none;
  outline: none;

  display: inline;
  width: 200px;

  font-size: 15px;
  font-weight: 500;
  color: var(--grey0);

  background-color: rgba(0,0,0,0);

  &::placeholder{
    color: darkgray;
  }
`
const SearchButton = styled.button`
  display: flex;
  justify-content : center;
  align-items : center;

  height: 100%;
  padding: 0 14px;
`