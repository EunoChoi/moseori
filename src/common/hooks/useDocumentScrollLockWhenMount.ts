import { useEffect } from 'react';

const useDocumentScrollLockWhenMount = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, []);
};

export default useDocumentScrollLockWhenMount;