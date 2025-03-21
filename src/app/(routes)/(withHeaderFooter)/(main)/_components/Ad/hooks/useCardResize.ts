import { RefObject, useEffect, useState } from "react";

interface Props {
  cardRef: RefObject<HTMLDivElement | null>;
  adListLength: number;
}

const useCardResize = ({ cardRef, adListLength }: Props) => {
  const [cardWidth, setCardWidth] = useState<number>(0);
  const loopWidth = cardWidth * adListLength;

  useEffect(() => {
    const resizeCardWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.getBoundingClientRect().width);
      }
    }
    resizeCardWidth();
    window.addEventListener('resize', resizeCardWidth);
    return () => {
      window.removeEventListener('resize', resizeCardWidth);
    };
  }, [])

  return { cardWidth, setCardWidth, loopWidth };
}

export default useCardResize;