import { useEffect } from "react";

const useDocumentScrollLockWhenWhenOpenVirtualKeyboard = () => {
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      if (document.activeElement && document.activeElement.tagName === 'INPUT') {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventScroll, { passive: false });
    return () => document.removeEventListener('touchmove', preventScroll);
  }, []);
}

export default useDocumentScrollLockWhenWhenOpenVirtualKeyboard;