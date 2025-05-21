'use client';

import useDocumentScrollLockWhenWhenOpenVirtualKeyboard from "@/common/hooks/useDocumentScrollLockWhenWhenOpenVirtualKeyboard";


interface RootLayoutProps {
  children: React.ReactNode;
}

/** root layout - client component */
const Layout = ({ children }: RootLayoutProps) => {

  useDocumentScrollLockWhenWhenOpenVirtualKeyboard();

  return <>
    {children}
  </>
}

export default Layout;