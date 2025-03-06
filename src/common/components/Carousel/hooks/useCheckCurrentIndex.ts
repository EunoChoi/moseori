import { RefObject, useEffect, useState } from "react";

interface Props {
  ref: RefObject<HTMLDivElement | null>;
}

const useCheckCurrentIndex = ({ ref }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentRef = ref.current;
    const scrollHandler = () => {
      if (currentRef) {
        const index = Math.round(currentRef?.scrollLeft / currentRef?.clientWidth);
        setCurrentIndex(index);
      }
    };
    if (currentRef) currentRef?.addEventListener('scroll', scrollHandler);
    return () => {
      if (currentRef) currentRef?.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  return { currentIndex };
}

export default useCheckCurrentIndex;