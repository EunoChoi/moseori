import { Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { clearTimeout } from "timers";

type TransitionPhase = 'exited' | 'entered';

interface Props {
  defaultState?: 'mount' | 'unmount';
}

interface TransitionContainertProps {
  portalBody?: boolean;
  children?: ReactNode;

  isMount: boolean;
  setIsMount: Dispatch<SetStateAction<boolean>>;
  transitionPhase: TransitionPhase;

  duration?: number;
  zIndex?: number;
  exitedStyle?: string;
  enteredStyle?: string;
}

/** onOpen, onClose, onToggle 함수 이용해서 state 변경 필수! (transitionPhase 변경 필요 위함!!)  */
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
      if (isMount) {
        onClose();
      }
      else {
        onOpen();
      }
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
  portalBody,
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
      // console.log('init')
      isInitialRender.current = false;
      return;
    }
    if (transitionPhase === 'exited') {
      timer.current = setTimeout(() => {
        // console.log('unmount')
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

  if (portalBody && isMount) {
    return createPortal(<Wrapper
      className={transitionPhase}
      $portalBody={portalBody}
      $zIndex={zIndex}
      $duration={duration}
      $exitedStyle={exitedStyle}
      $enteredStyle={enteredStyle}
    >
      {children}
    </Wrapper>, document.body);
  }
  else if (!portalBody && isMount) {
    return <Wrapper
      className={transitionPhase}
      $zIndex={zIndex}
      $duration={duration}
      $exitedStyle={exitedStyle}
      $enteredStyle={enteredStyle}
    >
      {children}
    </Wrapper>;
  }
}




const Wrapper = styled.div<{ $portalBody?: boolean, $duration: number, $exitedStyle: string, $enteredStyle: string, $zIndex: number }>`
  position: ${props => props.$portalBody ? 'relative' : 'static'};

  width: auto;
  height: auto;
  z-index: ${props => props.$zIndex} !important;
  transition: all ease-in-out ${props => props.$duration + 'ms'};

  &.exited {
    ${props => props.$exitedStyle}
  }
  &.entered {
    ${props => props.$enteredStyle}
  }
`;

