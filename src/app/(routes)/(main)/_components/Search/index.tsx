import React from 'react';
import styled from 'styled-components';
import SearchText from './SearchText';

import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Search: React.FC = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <SearchText />
        <button>
          <FilterAltIcon fontSize='inherit' color='inherit' />
        </button>
      </SearchWrapper>
      {/* <SelectedFilters /> */}
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  position: sticky;
  top: 0;

  width: 100dvw;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
  padding: 16px 0;
  margin: 24px 0;
  background-color: white;
`

const SearchWrapper = styled.div`
  width: 85dvw;

  display: flex;
  justify-content: center;
  align-items: center;

  button{
    height: 100%;
    aspect-ratio: 1;
    border-radius: 40px;
    margin-left: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--main-color);
    color: white;
    font-size: 18px;
  }
`