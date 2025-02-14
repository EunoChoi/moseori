import styled from "styled-components";

const PostCard = () => {
  return (<Wrapper>
  </Wrapper>);
}

export default PostCard;

const Wrapper = styled.div`
  aspect-ratio: 2;
  border-radius: 16px;

  background-color: white;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .04);

  @media (max-width: 479px) { //mobile port
    width: 90dvw;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    width: 100%;
  }
  @media (min-width:1024px) { //desktop
    width: 100%;
    transition: 200ms ease-in-out transform;
    &:hover{
      transform :scale(1.03) ;
    }
  }
`