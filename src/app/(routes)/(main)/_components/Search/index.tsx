import React, { useState } from 'react';
import styled from 'styled-components';
import SearchText from './SearchText';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SelectedFilters from './SelectedFilters';

const Search: React.FC = () => {

  const [testToggle, setTestToggle] = useState<boolean>(false)

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchText />
        <button onClick={() => {
          setTestToggle(c => !c)
        }}>
          <FilterAltIcon fontSize='inherit' color='inherit' />
        </button>
      </SearchWrapper>
      {testToggle && <SelectedFilters />}
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