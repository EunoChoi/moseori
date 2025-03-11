import { useSearchContext } from "@/common/store/useSearchContext";
import { useEffect } from "react";

/** url 쿼리 파라미터 동기화 - search filter, search input state */
const useSearchSync = () => {

  const { sortType, categoryType, searchKeyword } = useSearchContext();

  useEffect(() => {
    //sortType, categoryType, searchKeyword 조합 url 만들고 푸시
    // console.log(sortType, categoryType, searchKeyword)
  }, [sortType, categoryType, searchKeyword]);

  return null;
}

export default useSearchSync;