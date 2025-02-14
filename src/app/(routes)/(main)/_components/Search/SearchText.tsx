import React from 'react';
import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';

const SearchText: React.FC = () => {
  return (
    <Wrapper>
      <div></div>
      <SearchIcon className='icon' fontSize='inherit' color='inherit' />
    </Wrapper>
  );
};

export default SearchText;

const Wrapper = styled.div`
  height: 38px;
  min-width: 150px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;

  border-radius: 48px;
  border: solid 3px var(--main-color);
  /* border: solid 3px var(--sub-color); */

  .icon{
    color: var(--main-color);
    /* color: var(--sub-color); */
    font-size: 22px;
  }

  @media (max-width: 479px) { //mobile port
    width: 300px;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    flex-grow: 1;
    max-width: 250px;
  }
  @media (min-width:1024px) { //desktop
    flex-grow: 1;
    max-width: 250px;
  }
`