import { useSearchParams } from "next/navigation";
import { createContext, ReactNode, useState } from "react";
import useSearchQuerySync from "./_hooks/useSearchQuerySync";

interface SearchContextProps {
  searchTextQuery: string;
  setSearchTextQuery: React.Dispatch<React.SetStateAction<string>>;
  sortQuery: number[];
  setSortQuery: React.Dispatch<React.SetStateAction<number[]>>;
  catQuery: number[];
  setCatQuery: React.Dispatch<React.SetStateAction<number[]>>;
}

export const SearchQueryContext = createContext<SearchContextProps | undefined>(undefined);

/** 검색시 필요한 search input text, search filter 제공 context */
export const SearchQueryProvider = ({ children }: { children: ReactNode }) => {
  const readOnlyParams = useSearchParams();

  const catQueryInit = readOnlyParams.getAll('cat').map(Number);
  const sortQueryInit = Number(readOnlyParams.get('sort'));
  const searchTextQueryInit = readOnlyParams.get('search');


  //새로고침 후 값 유지하기 위해 쿼리 파라미터로부터 초기값 설정
  const [catQuery, setCatQuery] = useState<number[]>(catQueryInit ? catQueryInit : []);
  const [sortQuery, setSortQuery] = useState<number[]>(sortQueryInit ? [sortQueryInit] : [0]);
  const [searchTextQuery, setSearchTextQuery] = useState<string>(searchTextQueryInit ? searchTextQueryInit : "");

  useSearchQuerySync({ sortType: sortQuery, categoryType: catQuery, searchKeyword: searchTextQuery });

  return (<SearchQueryContext.Provider
    value={{
      catQuery,
      setCatQuery,
      sortQuery,
      setSortQuery,
      searchTextQuery,
      setSearchTextQuery
    }}
  >
    {children}
  </SearchQueryContext.Provider>);
}