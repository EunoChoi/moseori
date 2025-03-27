'use client';


interface RootLayoutProps {
  children: React.ReactNode;
}

/** root layout - client component */
const Layout = ({ children }: RootLayoutProps) => {

  return <>
    {children}
  </>
}

export default Layout;