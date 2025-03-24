'use client';

import { SearchQueryProvider } from "@/common/store/searchQuery/SearchQueryProvider";

interface RootLayoutProps {
  children: React.ReactNode;
}

/** root layout - client component */
const Layout = ({ children }: RootLayoutProps) => {

  return <SearchQueryProvider>
    {children}
  </SearchQueryProvider>
}

export default Layout;