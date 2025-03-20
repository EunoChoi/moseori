import { useEffect } from 'react';

const useDocumentScrollLockWhenMount = () => {
  useEffect(() => {
    document.body.style.overflow = 'clip';
    document.documentElement.style.overflow = 'clip';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, []);
};

export default useDocumentScrollLockWhenMount;