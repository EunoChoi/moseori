import { useEffect } from 'react';

const useDocumentScrollLockWhenMount = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  }, []);
};

export default useDocumentScrollLockWhenMount;