import MainFooter from "@/common/components/MainFooter";
import MainHeader from "@/common/components/MainHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}

export default Layout;