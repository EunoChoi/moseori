import _ from 'lodash';
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import AdCard from "./AdCard";

const Ad = () => {
  const adList = ['AD1', 'AD2', 'AD3', 'AD4'];
  const adListLength = adList.length;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const movingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const firstTargetRef = useRef<HTMLDivElement>(null);
  const secondTargetRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false); //초기 스크롤 재조정 보이기 방지 용도의 transition을 위한 상태
  const [isAutoScrollStart, setIsAutoScrollStart] = useState(true);

  const { ref: firstDummyRef, inView: firstDummyInView } = useInView({
    threshold: 0.08,
  });
  const { ref: secondDummyRef, inView: secondDummyInView } = useInView({
    threshold: 1,
  });
  const { ref: lastDummyRef, inView: lastDummyInView } = useInView({
    threshold: 0.08,
  });

  const infinityScrollHandler = useCallback((direction: 'left' | 'right') => {
    if (direction === 'left') {
      secondTargetRef.current?.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
    }
    else if (direction === 'right') {
      firstTargetRef.current?.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
    }
  }, []);
  const throttleInfinityScrollHandler = useCallback(_.throttle(infinityScrollHandler, 500), []);

  //무한 스크롤
  useEffect(() => {
    if (firstDummyInView) {
      throttleInfinityScrollHandler('left');
    }
    if (lastDummyInView) {
      throttleInfinityScrollHandler('right');
    }
  }, [firstDummyInView, lastDummyInView]);

  //자동 스크롤 기능 처리
  useEffect(() => {
    if (isAutoScrollStart) {
      autoScrollIntervalRef.current = setInterval(() => {
        if (wrapperRef.current) {
          const { clientWidth } = wrapperRef?.current;
          if (secondDummyInView) wrapperRef.current.scrollBy({ left: clientWidth / 2, behavior: 'auto' });
          else wrapperRef.current.scrollBy({ left: clientWidth / 2, behavior: 'smooth' });
        }
      }, 3000);
    }
    else {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    }
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    }
  }, [isAutoScrollStart, lastDummyInView]);

  //scroll 이동시 자동 스크롤 멈춤 처리
  useEffect(() => {
    setIsVisible(true);
    const movingStartHandler = () => {
      if (movingTimeoutRef.current) { clearTimeout(movingTimeoutRef.current); }
      setIsAutoScrollStart(false);
    };
    const movingEndHandler = () => {
      movingTimeoutRef.current = setTimeout(() => {
        setIsAutoScrollStart(true);
      }, 3000);
    };

    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('scroll', movingStartHandler);
      wrapperRef.current.addEventListener('scrollend', movingEndHandler);
      wrapperRef.current.addEventListener('touchstart', movingStartHandler);
      wrapperRef.current.addEventListener('touchend', movingEndHandler);
    }
    return () => {
      throttleInfinityScrollHandler.cancel();
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener('scroll', movingStartHandler);
        wrapperRef.current.removeEventListener('scrollend', movingEndHandler);
        wrapperRef.current.removeEventListener('touchstart', movingStartHandler);
        wrapperRef.current.removeEventListener('touchend', movingEndHandler);
      }
    };
  }, []);

  return (
    <>
      <Wrapper
        ref={wrapperRef} className={isVisible ? 'visible' : ''}>
        <AdCard ref={firstDummyRef} content={'#' + adList[adListLength - 2]} />
        <AdCard content={'#' + adList[adListLength - 1]} /> {/* 이 카드를 좌측으로 벗어날 때 두번째 타겟 카드로 이동 */}
        {adList.map((content, i) => {
          if (i === 0) {
            return <TargetAdCard key={"ad" + i} ref={firstTargetRef}><AdCard content={content} /></TargetAdCard>;
          }
          else if (i === adList.length - 1) {
            return <TargetAdCard key={"ad" + i} ref={secondTargetRef}><AdCard content={content} /></TargetAdCard>;
          }
          else return <AdCard key={"ad" + i} content={content} />
        }
        )}
        <AdCard ref={secondDummyRef} content={'#' + adList[0]} /> {/* 이 카드를 우측으로 벗어날 때 첫번째 타겟 카드로 이동 */}
        <AdCard ref={lastDummyRef} content={'#' + adList[1]} />
      </Wrapper>
    </>

  );
};

export default Ad;

const TargetAdCard = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

// Wrapper 스타일
const Wrapper = styled.div`
  transition: opacity 1s;
  opacity: 0;
  &.visible{
    opacity: 1;
  }

  width: 100dvw;
  height: auto;
  flex-shrink: 0;
  padding: 0 10dvw;
  margin-top: 20px;

  display: flex;
  align-items: center;
  overflow-x: scroll;
  gap: 5dvw;
  
  scroll-snap-type: x mandatory;
  >*{
    scroll-snap-stop: always !important;
    scroll-snap-align: center;
  }

  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;
