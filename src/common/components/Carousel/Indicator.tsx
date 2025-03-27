import styled from "styled-components";

interface IndicatorProps {
  currentIndex: number;
  length: number;
}

const Indicator = ({ currentIndex, length }: IndicatorProps) => {
  return (<Wrapper>
    {Array(length).fill(undefined).map((_, i: number) =>
      <Dot
        key={'banner' + i}
        className={currentIndex === i ? 'current' : ''}
      />)}
  </Wrapper>);
}

export default Indicator;

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;

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