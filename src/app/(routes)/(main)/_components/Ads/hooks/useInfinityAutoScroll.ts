import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";

interface Props {
  scrollWrapperRef: RefObject<HTMLDivElement | null>;
  translateX: number;
  setTranslateX: Dispatch<SetStateAction<number>>;
  cardWidth: number;
  loopWidth: number;
  isInteracting: boolean;
}

const useInfinityAutoScroll = ({ scrollWrapperRef, translateX, setTranslateX, cardWidth, loopWidth, isInteracting }: Props) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // console.log(Math.abs(translateX), loopWidth);
    if (Math.abs(translateX) > loopWidth && scrollWrapperRef.current) {
      scrollWrapperRef.current.style.transition = 'none';
      setTranslateX(() => {
        if (scrollWrapperRef.current) scrollWrapperRef.current.style.transition = 'none';
        return 0;;
      });
    }
  }, [translateX, loopWidth])

  useEffect(() => {
    console.log('isPause : ', isInteracting);
    if (isInteracting === false) {
      intervalRef.current = setInterval(() => {
        setTranslateX((c: number) => {
          if (scrollWrapperRef.current) scrollWrapperRef.current.style.transition = 'transform 500ms ease-out';
          return c - cardWidth;
        });
      }, 4000);
      return () => {
        if (intervalRef.current) {
          console.log("auto scroll interval clear");
          clearInterval(intervalRef.current);
        }
      }
    }
    else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [isInteracting, cardWidth]);

  return { autoScrollInterval: intervalRef }
}

export default useInfinityAutoScroll;