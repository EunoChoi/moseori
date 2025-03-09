import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Children, ReactNode, useRef } from "react";
import styled from "styled-components";
import carouselScroll from './function/carouselScroll';
import useCheckCurrentIndex from "./hooks/useCheckCurrentIndex";
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

  return (<Wrapper className={className} >
    <ScrollWrapper ref={scrollRef} >
      {children}
    </ScrollWrapper>
    <Arrow
      className={(arrow === true && currentIndex !== 0) ? 'left' : 'hide'}
      onClick={scrollToLeft}
    >
      <ArrowBackIosRoundedIcon fontSize='inherit' color='inherit' />
    </Arrow>
    <Arrow
      className={(arrow === true && currentIndex < maxIndex) ? 'right' : 'hide'}
      onClick={scrollToRight}
    >
      <ArrowForwardIosRoundedIcon fontSize='inherit' color='inherit' />
    </Arrow>
    {indicator === true &&
      <Indicator>
        {childrenArray?.map((_: ReactNode, i: number) =>
          <Dot
            key={'banner' + i}
            className={currentIndex === i ? 'current' : ''}
          />)}
      </Indicator>}
  </Wrapper>);
}

export default Carousel;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
const Arrow = styled.div`
  transition: opacity ease-in-out 300ms, visibility ease-in-out 300ms;

  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;

  transform: translateY(-50%);
  color: var(--main-1);
  font-size: 18px;
  padding: 4px;

  &.hide{
    opacity: 0;
    visibility: hidden;
  }
  &.left{
    left: 0;
  }
  &.right{
    right: 0;
  }
`
const ScrollWrapper = styled.div`
  display: flex;
  align-items: center;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  > * {
    flex-shrink: 0;

    scroll-snap-stop: always;
    scroll-snap-align: center;
    width: 100%;
  }
`
const Indicator = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 12px 0;
`
const Dot = styled.div`
  transition: background-color ease-in-out 200ms;

  width: 10px;
  aspect-ratio: 1;
  border-radius: 9999px;
  background-color: white;
  border: 2px solid var(--main-1);
  &.current{
    background-color: var(--main-1);
  }
`