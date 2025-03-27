import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import styled from 'styled-components';

interface ArrowsProps {
  currentIndex: number;
  maxIndex: number;
  scrollToLeft: () => void;
  scrollToRight: () => void;
}

const Arrows = ({ currentIndex, maxIndex, scrollToLeft, scrollToRight }: ArrowsProps) => {

  return (<>
    {currentIndex !== 0 &&
      <Arrow
        className='left'
        onClick={scrollToLeft}
      >
        <ArrowBackIosRoundedIcon fontSize='inherit' color='inherit' />
      </Arrow>}
    {currentIndex < maxIndex &&
      <Arrow
        className='right'
        onClick={scrollToRight}
      >
        <ArrowForwardIosRoundedIcon fontSize='inherit' color='inherit' />
      </Arrow>}
  </>);
}

export default Arrows;

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

  &.left{
    left: 0;
  }
  &.right{
    right: 0;
  }
`

