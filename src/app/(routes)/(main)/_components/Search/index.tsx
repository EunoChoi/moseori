import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import styled from 'styled-components';

const Search: React.FC = () => {
  return (
    <Wrapper>
      <div></div>
      <SearchIcon className='icon' fontSize='inherit' color='inherit' />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  height: 36px;
  min-width: 100px;
  width: 230px;
  height: 42px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;

  /* border-radius: 9999px; */
  border-radius: 16px;
  box-sizing: border-box;
  border: solid 3px var(--main-1);

  .icon{
    color: var(--main-1);
    font-size: 22px;
  }
  @media (max-width: 640px) {
    max-width: 275px;
    width: 60dvw;
  }
`