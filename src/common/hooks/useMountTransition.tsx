import { Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { clearTimeout } from "timers";

type TransitionPhase = 'exited' | 'entered';

interface Props {
  defaultState?: 'mount' | 'unmount';
}

interface TransitionContainertProps {
  children?: ReactNode;

  isMount: boolean;
  setIsMount: Dispatch<SetStateAction<boolean>>;
  transitionPhase: TransitionPhase;

  duration?: number;
  zIndex?: number;
  exitedStyle?: string;
  enteredStyle?: string;
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

/** duration : n * ms(default : 500ms), transitionPhase : 'exited' | 'entered' */
export const TransitionContainer = ({
  children,
  isMount,
  setIsMount,
  transitionPhase,
  duration = 500,
  zIndex = 99,
  exitedStyle = 'opacity: 0;',
  enteredStyle = 'opacity: 1;',
}: TransitionContainertProps) => {

  const isInitialRender = useRef(true);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isInitialRender.current === true) {
      console.log('init')
      isInitialRender.current = false;
      return;
    }
    if (transitionPhase === 'exited') {
      timer.current = setTimeout(() => {
        console.log('unmount')
        setIsMount(false);
        timer.current = null;
      }, duration);
      return () => {
        if (timer.current) {
          clearTimeout(timer.current);
          timer.current = null;
        }
      };
    }
  }, [transitionPhase])


  return isMount && <Wrapper
    className={transitionPhase}
    $zIndex={zIndex}
    $duration={duration}
    $exitedStyle={exitedStyle}
    $enteredStyle={enteredStyle}
  >
    {children}
  </Wrapper>;

}




const Wrapper = styled.div<{ $duration: number, $exitedStyle: string, $enteredStyle: string, $zIndex: number }>`
  /* display: contents; */
  /* position: static; */
  /* static 때문에 위치 어긋나던게 아니라 포탈때문에 어긋나던거였음 */

  width: auto;
  height: auto;
  z-index: ${props => props.$zIndex};
  transition: all ease-in-out ${props => props.$duration + 'ms'};

  &.exited {
    ${props => props.$exitedStyle}
  }
  &.entered {
    ${props => props.$enteredStyle}
  }
`;

