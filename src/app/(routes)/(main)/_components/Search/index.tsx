import styled from 'styled-components';
import SearchText from './SearchText';

import { useEffect, useRef, useState } from 'react';
import Filters from '../Filters';

const Search = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isTop, setIsTop] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => {
      // console.log(ref.current?.getBoundingClientRect().top);
      if (ref.current && ref.current?.getBoundingClientRect().top < 0 && isTop === false) {
        setIsTop(true);
      }
      else setIsTop(false);
    }
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  return (
    <>
      <Wrapper ref={ref} className={isTop ? 'hide' : ''}>
        <SearchText />
        <Filters />
      </Wrapper >
      {isTop === true && <FixWrapper className='fix' >
        <SearchText />
        <Filters />
      </FixWrapper >}
    </>
  );
};

export default Search;

const Wrapper = styled.div`
  &.hide{
   opacity: 0; 
   pointer-events: none;
  }
  width: 100dvw;
  height: auto;
  background-color: var(--background);

  display: flex;
  align-items: center;

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
`;
const FixWrapper = styled(Wrapper)`
  z-index: 10; //postCard z-index : 9
  position: fixed;
  top: 0;
  border-bottom: solid 1px rgba(0,0,0,0.08);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 6px 6px 0px;
`