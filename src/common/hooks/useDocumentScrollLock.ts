import { useEffect } from 'react';

const useDocumentScrollLock = ({ isStop }: { isStop: boolean }) => {
  useEffect(() => {
    if (isStop) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  }, [isStop]);
};

export default useDocumentScrollLock;