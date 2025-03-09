import { Dispatch, ReactNode, SetStateAction, useCallback, useState } from "react";
import styled from "styled-components";

type TransitionPhase = 'exited' | 'entered';

interface Props {
  defaultState?: 'mount' | 'unmount';
}
interface TransitionElementProps {
  children?: ReactNode;
  setIsMount: Dispatch<SetStateAction<boolean>>;
  isMount: boolean;
  transitionPhase: TransitionPhase;
  duration?: number
}

export const useMountTransition = ({ defaultState = 'unmount' }: Props) => {

  const [isMount, setIsMount] = useState(defaultState === 'mount' ? true : false);
  const [transitionPhase, setTransitionPhase] = useState<TransitionPhase>(defaultState === 'mount' ? 'entered' : 'exited');

  const functions = useCallback(() => {
    const onOpen = () => {
      if (!isMount) {
        setIsMount(true);
        requestAnimationFrame(() => setTransitionPhase('entered'));
      }
    };
    const onClose = () => {
      if (isMount) {
        setTransitionPhase('exited');
      }
    };
    const onToggle = () => {
      isMount ? onClose() : onOpen();
    };
    return { onOpen, onClose, onToggle };
  }, [isMount])



  return {
    isMount,
    setIsMount,
    transitionPhase,
    ...functions()
  };
};

/** duration : n * ms(default : 1000ms), transitionPhase : 'exited' | 'entered' */
export const TransitionContainer = ({ children, isMount, setIsMount, transitionPhase, duration = 1000 }: TransitionElementProps) => {
  const transitionHandle = useCallback(() => {
    if (transitionPhase === 'exited') {
      setIsMount(false);
    }
  }, [transitionPhase]);

  return (isMount &&
    <Wrapper
      onTransitionEnd={transitionHandle}
      className={transitionPhase}
      $duration={duration}>
      {children}
    </Wrapper>);
}

const Wrapper = styled.div<{ $duration: number }>`
  width: auto;
  height: auto;

  overflow-y: hidden;
  transition: all ease-in-out ${props => props.$duration + 'ms'};

  &.exited {
    opacity: 0;
    /* max-height: 0; */
  }
  &.entered {
    opacity: 1;
    /* max-height: 1080px; */
  }
`;