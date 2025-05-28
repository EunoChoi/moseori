'use client';

import useDocumentScrollLockWhenOpenVirtualKeyboard from "@/common/hooks/useDocumentScrollLockWhenWhenOpenVirtualKeyboard";


interface RootLayoutProps {
  children: React.ReactNode;
}

/** root layout - client component */
const Layout = ({ children }: RootLayoutProps) => {

  useDocumentScrollLockWhenOpenVirtualKeyboard();

  return <>
    {children}
  </>
}

export default Layout;