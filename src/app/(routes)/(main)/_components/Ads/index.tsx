import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AdCard from "./AdCard";

const Ad = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const adList = ['AD1', 'AD2', 'AD3', 'AD4', 'AD5'];
  const adListLength = adList.length;

  const [isVisible, setIsVisible] = useState(false); //초기 스크롤 재조정 보이기 방지 용도의 transition을 위한 상태
  const [isAutoScrollStart, setIsAutoScrollStart] = useState(false);

  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const scrollEndTimeoutRef = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    if (isAutoScrollStart) {
      autoScrollIntervalRef.current = setInterval(() => {
        if (wrapperRef.current) {
          const { clientWidth } = wrapperRef.current;
          const snapScrollWidth = clientWidth * 0.85;
          wrapperRef.current.scrollBy({ left: snapScrollWidth, behavior: 'smooth' });
        }
      }, 2000);
      // console.log('start autoScrollInterval', autoScrollIntervalRef.current);
    }
    else {
      if (autoScrollIntervalRef.current) {
        // console.log('end autoScrollInterval', autoScrollIntervalRef.current);
        clearInterval(autoScrollIntervalRef.current);
      }
    }
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    }
  }, [isAutoScrollStart]);

  useEffect(() => {
    setIsVisible(true);
    const infinityScrollHandler = () => {
      //자동 스크롤 시작 처리
      setIsAutoScrollStart(false);
      if (scrollEndTimeoutRef.current) {
        // console.log('clearTimeout', scrollEndTimeoutRef.current);
        clearTimeout(scrollEndTimeoutRef.current);
      }
      scrollEndTimeoutRef.current = setTimeout(() => {
        // console.log('scroll end');
        setIsAutoScrollStart(true);
      }, 1000);

      //무한 스크롤
      if (wrapperRef.current) {
        const { scrollLeft, clientWidth } = wrapperRef.current;
        const snapScrollWidth = clientWidth * 0.85;
        const jumpPoint = (1 + adListLength) * snapScrollWidth;

        //우측으로 무한 스크롤
        if (scrollLeft > jumpPoint) {// 3, 0, 1, 2, 3, 0 순서중 두번째 0이 보이면서 멈춘 상태일때 scrollLeft, (1+4)이므로 (1 + n) * snapScrollWidth, 
          console.log(`(${scrollLeft} > ${jumpPoint}) jump to ${snapScrollWidth} from ${scrollLeft}`);
          wrapperRef.current.scrollTo({ left: snapScrollWidth });  //3, 0, 1, 2, 3, 0에서 첫번째 0이 보이면서 멈춘 상태일때 scrollLeft
        }
        //좌측으로 무한 스클롤
        else if (scrollLeft < snapScrollWidth - 5) {//5는 오차범위, 초기 첫번째 값으로 점프 후 이어서 점프 포인트로 점프되는 루프를 방지하기 위함
          console.log(`(${scrollLeft} < ${snapScrollWidth}) jump to ${jumpPoint} from ${scrollLeft}`);
          wrapperRef.current.scrollTo({ left: jumpPoint });
        }
      }
    };
    infinityScrollHandler();

    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('scroll', infinityScrollHandler);
    }
    return () => {
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener('scroll', infinityScrollHandler);
      }
    };
  }, []);

  return (
    <>
      <Wrapper ref={wrapperRef} className={isVisible ? 'visible' : ''}>
        <AdCard content={adList[adListLength - 1]} />
        {adList.map((content, i) => (
          <AdCard key={"ad" + i} content={content} />
        ))}
        <AdCard content={adList[0]} />
        <AdCard content={adList[1]} />
      </Wrapper>
    </>

  );
};

export default Ad;

// Wrapper 스타일
const Wrapper = styled.div`
  transition: opacity 1s;
  opacity: 0;
  &.visible{
    opacity: 1;
  }

  width: 100dvw;
  height: 150px;
  padding: 0 10dvw;

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
