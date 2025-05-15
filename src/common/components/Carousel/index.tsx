
import { Children, ReactNode, useRef } from "react";
import styled from "styled-components";
import Arrows from "./Arrows";
import carouselScroll from './function/carouselScroll';
import useCheckCurrentIndex from "./hooks/useCheckCurrentIndex";
import Indicator from "./Indicator";

interface Props {
  children?: ReactNode;
  className?: string;
  indicator?: boolean;
  arrow?: boolean;
}

const Carousel = ({ children, className, indicator, arrow }: Props) => {

  const childrenArray = Children.toArray(children);
  const maxIndex = childrenArray.length - 1;
  const scrollRef = useRef<HTMLDivElement>(null);

  const { currentIndex } = useCheckCurrentIndex({ ref: scrollRef });

  const { scrollToLeft, scrollToRight } = carouselScroll({ ref: scrollRef });

  const hasArrows = arrow === true;
  const hasIndicator = indicator === true && childrenArray.length > 1;

  return (<Wrapper className={className}  >
    <ScrollWrapper ref={scrollRef} >
      {children}
    </ScrollWrapper>

    {hasArrows && <Arrows
      currentIndex={currentIndex}
      maxIndex={maxIndex}
      scrollToLeft={scrollToLeft}
      scrollToRight={scrollToRight}
    />}
    {hasIndicator &&
      <Indicator
        currentIndex={currentIndex}
        length={childrenArray.length}
      />}
  </Wrapper>);
}

export default Carousel;

const Wrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: auto;
`
const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;

  flex-shrink: 0;
  display: flex;
  align-items: center;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  > * {
    flex-shrink: 0;
    width: 100%;
    height: 100%;

    scroll-snap-stop: always;
    scroll-snap-align: center;
  }
`
