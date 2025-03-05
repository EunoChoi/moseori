import styled from "styled-components";

const Banner = () => {
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

export default Banner;

const Wrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 479px) { //mobile port
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    max-width: 400px;
  }
  @media (min-width:1024px) { //desktop
    max-width: 400px;
  }
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 12px;

  width: 60%;
  padding-right: 12px;
  /* border: 1px solid black; */
`;

const Tag = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--main-0);
  text-transform: capitalize;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: var(--grey0);

  width: 100%;
  /* white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis; */
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
  border-radius: 9999px;
  padding: 4px 20px;
`;

const ImageWrapper = styled.div`
  width: 40%;
  /* border: 1px solid black; */
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
