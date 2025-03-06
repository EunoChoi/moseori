import { RefObject } from "react";

interface Props {
  ref: RefObject<HTMLDivElement | null>;
}

const carouselScroll = ({ ref }: Props) => {
  const scrollToLeft = () => {
    if (ref.current) {
      ref.current?.scrollBy({ left: -1 * ref.current.clientWidth, behavior: 'smooth' });
    }
  }
  const scrollToRight = () => {
    if (ref.current) {
      ref.current?.scrollBy({ left: ref.current.clientWidth, behavior: 'smooth' });
    }
  }
  return { scrollToLeft, scrollToRight };
}

export default carouselScroll;