import { useEffect, useRef } from 'react';
import styled from "styled-components";
import AdCard from './AdCard';
import useCardResize from './hooks/useCardResize';
import useInfinityAutoScroll from './hooks/useInfinityAutoScroll';
import useInteraction from './hooks/useInteraction';

const Ad = () => {
  const adList = ['AD1', 'AD2', 'AD3', 'AD4'];
  const longAdList = Array.from({ length: 5 }, () => adList).flat();

  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const {
    cardWidth,
    loopWidth
  } = useCardResize({ cardRef, adListLength: adList.length });

  const {
    translateX,
    setTranslateX,
    isInteracting,
  } = useInteraction({ scrollWrapperRef, cardWidth });

  useInfinityAutoScroll({ scrollWrapperRef, translateX, setTranslateX, cardWidth, loopWidth, isInteracting });

  // cardWidth 변경시 스크롤 위치 재조정
  useEffect(() => {
    setTranslateX(() => {
      if (scrollWrapperRef.current) scrollWrapperRef.current.style.transition = 'none';
      return 0;
    })
  }, [cardWidth])

  return (
    <Wrapper>
      <ScrollWrapper
        ref={scrollWrapperRef}
        $translateX={translateX}
      >
        {longAdList.map((content, i) =>
          <AdCard key={'ad' + i} content={content} ref={i === 0 ? cardRef : undefined} />)
        }
        {longAdList.length % 2 === 0 && <AdCard content={'dummy for centering'} />}
      </ScrollWrapper>
    </Wrapper>
  );
};

export default Ad;

const Wrapper = styled.div`
  width: 100dvw;
  height: auto;

  overflow-x: hidden;
  flex-shrink: 0;
  padding: 24px 0;
`
const ScrollWrapper = styled.div.attrs<{ $translateX: number }>((props) => (
  {
    style: {
      transform: `translateX(${props.$translateX}px)`
    }
  }
))`
  transition : transform 500ms ease-out;

  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`