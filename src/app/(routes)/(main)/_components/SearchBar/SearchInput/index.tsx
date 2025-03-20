import useInput from '@/common/hooks/useInput';
import { useSearchQueryContext } from '@/common/store/searchQuery/_hooks/useSearchQueryContext';
import { useState } from 'react';
import styled from 'styled-components';
import DesktopSearchInput from './DesktopSearchInput';
import MobileSearchInput from './MobileSearchInput';

interface SearchInputProps {
  debounceSearch?: boolean;
}

const SearchInput = ({ debounceSearch }: SearchInputProps) => {
  //local에서 history 불러와야함
  //useLocalState hooks 생성해서 활용
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const { searchTextQuery, setSearchTextQuery } = useSearchQueryContext();
  const { value: searchInput, onChange: onSearchInputChange } = useInput({ initialValue: searchTextQuery ? searchTextQuery : '' });

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearchTextQuery(searchInput);
    setSearchHistory(c => [...c, searchInput]);
  }

  return (
    <>
      <DesktopSearchInputWrapper>
        <DesktopSearchInput
          searchInput={searchInput}
          onChange={onSearchInputChange}
          onSubmit={onSubmit}
        />
      </DesktopSearchInputWrapper>
      <MobileSearchInputWrapper>
        <MobileSearchInput
          searchInput={searchInput}
          onChange={onSearchInputChange}
          onSubmit={onSubmit}
          searchHistory={searchHistory}
        />
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