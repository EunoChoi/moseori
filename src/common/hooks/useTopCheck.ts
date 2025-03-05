import { RefObject, useEffect, useState } from "react";

interface Props {
  ref: RefObject<HTMLDivElement | null>;
  top: number;
}

const useTopCheck = ({ ref, top }: Props) => {
  const [isTop, setIsTop] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (ref.current && ref.current?.getBoundingClientRect().top === top) {
        setIsTop(true);
      }
      else {
        setIsTop(false);
      }
    }
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  return {
    isTop
  };
}

export default useTopCheck;