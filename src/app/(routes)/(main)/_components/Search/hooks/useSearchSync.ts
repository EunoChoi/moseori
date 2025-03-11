import { useSearchContext } from "@/common/store/useSearchContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  pathname: string;
  sortType: number[],
  categoryType: number[],
  searchKeyword: string;
}

const makeUrl = ({ pathname, sortType, categoryType, searchKeyword }: Props) => {
  const params = new URLSearchParams();

  if (searchKeyword) {
    params.set("search", searchKeyword);
  }
  if (sortType && sortType.length > 0) {
    params.set("sort", sortType[0].toString());
  }
  if (categoryType && categoryType.length > 0) {
    categoryType.forEach(cat => params.append("cat", cat.toString()));
  }

  const queryString = params.toString();
  return queryString ? `${pathname}?${queryString}` : pathname;
}

/** url 쿼리 파라미터 동기화 - search filter, search input state */
const useSearchSync = () => {

  const router = useRouter();
  const pathname = usePathname();
  const { sortType, categoryType, searchKeyword } = useSearchContext();

  useEffect(() => {
    const url = makeUrl({ pathname, sortType, categoryType, searchKeyword });
    router.replace(url, { scroll: false })
  }, [sortType, categoryType, searchKeyword]);
}

export default useSearchSync;