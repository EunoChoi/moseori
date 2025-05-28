import { useEffect } from "react";

const useDocumentScrollLockWhenOpenVirtualKeyboard = () => {
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      if (document.activeElement && document.activeElement.tagName === 'INPUT') {
        e.preventDefault();
      }
      if (document.activeElement && document.activeElement.tagName === 'TEXTAREA') {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventScroll, { passive: false });
    return () => document.removeEventListener('touchmove', preventScroll);
  }, []);
}

export default useDocumentScrollLockWhenOpenVirtualKeyboard;