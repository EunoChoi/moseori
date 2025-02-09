import styled from 'styled-components';


const AdCard = ({ content }: { content: string | number }) => {
  return (
    <Wrapper>
      {content}
    </Wrapper>
  );
};

export default AdCard;

const Wrapper = styled.div`
  width: 80dvw;
  height: 130px;
  flex-shrink: 0;

  background-color: whitesmoke;
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
`
