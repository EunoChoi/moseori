import React from 'react';
import styled from 'styled-components';
import SearchText from './SearchText';

import SelectedFilters from './SelectedFilters';

const Search: React.FC = () => {

  return (
    <Wrapper>
      <SearchText />
      <SelectedFilters />
    </Wrapper >);
};

export default Search;

const Wrapper = styled.div`
  z-index: 10; //postCard z-index : 9
  position: sticky;
  top: -1px;

  width: 100dvw;
  height: auto;

  display: flex;
  align-items: center;

  
  background-color: var(--background);
  /* background: linear-gradient(to bottom, rgba(248, 249, 250, 1) 90%, rgba(248, 249, 250,0));  */
  /* border-bottom: solid 1px rgba(0, 0, 0, .08);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 6px 6px 0px; */

  @media (max-width: 479px) { //mobile port
    flex-direction: column;
    gap: 16px;
    padding: 20px 20px;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    flex-direction: row-reverse;
    justify-content: center;
    gap: 0px;

    padding: 12px 20px;
  }
  @media (min-width:1024px) { //desktop
    flex-direction: row-reverse;
    justify-content: center;
    gap: 0px;

    padding: 12px 20px;
  }
`