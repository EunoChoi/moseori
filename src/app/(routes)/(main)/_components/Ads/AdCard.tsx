import styled from 'styled-components';


const AdCard = ({ content, ref }: { content: string | number, ref?: (node?: Element | null) => void }) => {
  return (
    <Wrapper ref={ref}>
      {content}
    </Wrapper>
  );
};

export default AdCard;

const Wrapper = styled.div`
  width: 80dvw;
  aspect-ratio: 3;
  flex-shrink: 0;

  background-color: whitesmoke;
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
`
