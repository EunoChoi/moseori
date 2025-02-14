import styled from "styled-components";

const PostCard = () => {
  return (<Wrapper>
  </Wrapper>);
}

export default PostCard;

const Wrapper = styled.div`
  aspect-ratio: 2;
  border-radius: 16px;

  border: 1px solid var(--card-border-grey);
  background-color: var(--card-background-grey);

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