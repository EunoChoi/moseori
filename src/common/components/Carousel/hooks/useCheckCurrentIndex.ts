import { RefObject, useEffect, useState } from "react";

interface Props {
  ref: RefObject<HTMLDivElement | null>;
}

const useCheckCurrentIndex = ({ ref }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const scrollHandler = () => {
      if (ref.current) {
        const index = Math.round(ref.current?.scrollLeft / ref.current?.clientWidth);
        setCurrentIndex(index);
      }
    };
    ref.current?.addEventListener('scroll', scrollHandler);
    return () => {
      ref.current?.removeEventListener('scroll', scrollHandler);
    }
  }, [ref])

  return { currentIndex };
}

export default useCheckCurrentIndex;