import styled from "styled-components";

const BannerCard = () => {
  return (
    <Wrapper>
      <InfoArea>
        <Tag>new</Tag>
        <Title>타이틀 텍스트 타이틀 텍스트</Title>
        <SubText>서브 텍스트 서브 텍스트 </SubText>
        <Button>Go!</Button>
      </InfoArea>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
    </Wrapper>
  );
};

export default BannerCard;

const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  padding: 4px 32px;
  @media (max-width: 479px) { //mobile port
    padding: 4px 7.5dvw;
  }
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 4px;

  width: 60%;
  padding-right: 12px;
`;

const Tag = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--main-0);
  text-transform: capitalize;
  margin-bottom: 8px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: var(--grey0);

  width: 100%;
`;

const SubText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: grey;

  width: 100%;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

const Button = styled.button`
  font-size: 12px;
  font-weight: 400;

  color: white;
  background-color: var(--main-0);
  background-color: var(--main-1);
  border-radius: 9999px;
  padding: 4px 20px;

  margin-top: 8px;
`;

const ImageWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 100%;
  aspect-ratio: 1;

  border-radius: 16px;
  background-color: var(--main-2);
`;
