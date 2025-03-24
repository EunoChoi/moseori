import useInput from '@/common/hooks/useInput';
import useLocalState from '@/common/hooks/useLocalState';
import { useSearchQueryContext } from '@/common/store/searchQuery/_hooks/useSearchQueryContext';
import { useEffect } from 'react';
import styled from 'styled-components';
import DesktopSearchInput from './DesktopSearchInput';
import MobileSearchInput from './MobileSearchInput';

const SearchInput = () => {
  const { state: searchHistory, setState: setSearchHistory } = useLocalState<string[]>({ initialValue: [], key: 'searchHistory' });
  const { searchTextQuery, setSearchTextQuery } = useSearchQueryContext();
  const { value: searchInput, onChange: onSearchInputChange, setValue: setSearchInput } = useInput({ initialValue: searchTextQuery ? searchTextQuery : '' });

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearchTextQuery(searchInput);

    if (searchInput.trim() !== '') {
      const updatedSearchHistory = [...searchHistory, searchInput].slice(-10);
      setSearchHistory(updatedSearchHistory);
    }
  }

  useEffect(() => {
    setSearchInput(searchTextQuery);
  }, [searchTextQuery])

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
          setSearchHistory={setSearchHistory}
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