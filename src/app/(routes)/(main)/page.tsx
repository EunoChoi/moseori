//components
import MainFooter from "@/common/components/MainFooter";
import MainHeader from "@/common/components/MainHeader";
import MainPage from "./_components/MainPage";

/**server components for data prefetch, main page route*/
const Page = () => {
  return (<>
    <MainHeader />
    <MainPage />
    <MainFooter />
  </>)
}

export default Page;