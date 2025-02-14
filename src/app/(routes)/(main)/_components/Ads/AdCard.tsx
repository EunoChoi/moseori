import { RefObject } from 'react';
import styled from 'styled-components';


const AdCard = ({ content, ref }: { content: string | number, ref?: RefObject<HTMLDivElement | null> }) => {
  return (
    <Wrapper
      ref={ref}
    >
      <div>
        {content}
      </div>
    </Wrapper>
  );
};

export default AdCard;

const Wrapper = styled.div`
  aspect-ratio: 5/2;
  flex-shrink: 0;

  div{
    width: 100%;
    height: 100%;
    
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .04);
    background-color: white;
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 479px) { //mobile port
    width: 85dvw;
    width: 300px;
    padding: 0 2.5dvw;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    width: 40dvw;
    width: 300px;
    padding: 0 8px;
  }
  @media (min-width:1024px) { //desktop
    width: 350px;
    padding: 0 12px;
    transition: 200ms ease-in-out transform;
    &:hover{
      transform :scale(1.05) ;
    }
  }
`
