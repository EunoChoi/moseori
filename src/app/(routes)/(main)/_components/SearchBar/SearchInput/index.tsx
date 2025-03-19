import useInput from '@/common/hooks/useInput';
import { useSearchContext } from '@/common/store/useSearchContext';
import { useState } from 'react';
import styled from 'styled-components';
import DesktopSearchInput from './DesktopSearchInput';
import MobileSearchInput from './MobileSearchInput';
import useDeboundSearch from './_hooks/useDebounceSearch';

interface SearchInputProps {
  debounceSearch?: boolean;
}

const SearchInput = ({ debounceSearch }: SearchInputProps) => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const { searchKeyword, setSearchKeyword } = useSearchContext();
  const { value: searchInput, onChange: onSearchInputChange } = useInput({ initialValue: searchKeyword ? searchKeyword : '' });

  if (debounceSearch) {
    useDeboundSearch({ searchInput, setSearchKeyword, setSearchHistory });
  }

  const onClickSearchButton = () => {
    setSearchKeyword(searchInput);
    setSearchHistory(c => [...c, searchInput]);
  }

  return (
    <>
      <DesktopSearchInputWrapper>
        <DesktopSearchInput />
      </DesktopSearchInputWrapper>
      <MobileSearchInputWrapper>
        <MobileSearchInput />
      </MobileSearchInputWrapper>
    </>
  );
};

export default SearchInput;

const DesktopSearchInputWrapper = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`
const MobileSearchInputWrapper = styled.div`
  display: block;
  @media (min-width: 1024px) {
    display: none;
  }
`