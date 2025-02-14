import { RefObject, useEffect, useState } from "react";

interface Props {
  scrollWrapperRef: RefObject<HTMLDivElement | null>;
  cardWidth: number;
}

const useInteraction = ({ scrollWrapperRef, cardWidth }: Props) => {
  const [translateX, setTranslateX] = useState<number>(0);
  const [isInteracting, setInteracting] = useState<boolean>(false);

  //touch drag
  useEffect(() => {
    let startX: number;
    let currentX: number;
    let isDragging = false;
    let dx: number;

    const touchStart = (e: TouchEvent) => {
      e.preventDefault();
      setInteracting(true);

      startX = e.touches[0].clientX;
      isDragging = true;
      if (scrollWrapperRef.current) scrollWrapperRef.current.style.transition = 'none';
    }
    const touchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (!isDragging) return;

      currentX = e.touches[0].clientX;
      dx = currentX - startX;
      startX = currentX;

      if (scrollWrapperRef.current) {
        setTranslateX(c => c + dx);
      }
    }
    const touchEnd = (e: TouchEvent) => {
      e.preventDefault();
      setInteracting(false);

      isDragging = false;
      if (scrollWrapperRef.current) {
        scrollWrapperRef.current.style.transition = 'transform 500ms ease-out';
        setTranslateX(c => Math.round(c / cardWidth) * cardWidth);
      }
    }

    scrollWrapperRef.current?.addEventListener('touchstart', touchStart);
    scrollWrapperRef.current?.addEventListener('touchmove', touchMove);
    scrollWrapperRef.current?.addEventListener('touchend', touchEnd);
    return () => {
      scrollWrapperRef.current?.removeEventListener('touchstart', touchStart);
      scrollWrapperRef.current?.removeEventListener('touchmove', touchMove);
      scrollWrapperRef.current?.removeEventListener('touchend', touchEnd);
    };
  }, [cardWidth])

  //mouse drag for pc
  useEffect(() => {
    let startX: number;
    let currentX: number;
    let isDragging = false;
    let dx: number;

    const mouseStart = (e: MouseEvent) => {
      e.preventDefault();
      setInteracting(true);

      startX = e.clientX;
      isDragging = true;
      if (scrollWrapperRef.current) scrollWrapperRef.current.style.transition = 'none';
    }
    const mouseMove = (e: MouseEvent) => {
      e.preventDefault();
      if (!isDragging) return;

      currentX = e.clientX;
      dx = currentX - startX;
      startX = currentX;

      if (scrollWrapperRef.current) {
        setTranslateX(c => c + dx);
      }
    }
    const mouseEnd = (e: MouseEvent) => {
      e.preventDefault();
      setInteracting(false);

      isDragging = false;
      if (scrollWrapperRef.current) {
        scrollWrapperRef.current.style.transition = 'transform 500ms ease-out';
        setTranslateX(c => Math.round(c / cardWidth) * cardWidth);
      }
    }

    scrollWrapperRef.current?.addEventListener('mousedown', mouseStart);
    scrollWrapperRef.current?.addEventListener('mousemove', mouseMove);
    scrollWrapperRef.current?.addEventListener('mouseup', mouseEnd);
    return () => {
      scrollWrapperRef.current?.removeEventListener('mousedown', mouseStart);
      scrollWrapperRef.current?.removeEventListener('mousemove', mouseMove);
      scrollWrapperRef.current?.removeEventListener('mouseup', mouseEnd);
    };
  }, [cardWidth]);

  return {
    translateX,
    setTranslateX,
    isInteracting,
    setInteracting
  };
}

export default useInteraction;