import { createContext, ReactNode, useState } from "react";

interface Option {
  label: string;
  value: number;
}

interface SearchContextProps {
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  sortType: number[];
  setSortType: React.Dispatch<React.SetStateAction<number[]>>;
  categoryType: number[];
  setCategoryType: React.Dispatch<React.SetStateAction<number[]>>;
}

export const SearchContext = createContext<SearchContextProps | undefined>(undefined);

/** 검색시 필요한 search input text, search filter 제공 context */
export const SearchProvider = ({ children }: { children: ReactNode }) => {

  //새로고침 후 값 유지하기 위해 쿼리 파라미터로부터 초기값을 가져온다.
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [sortType, setSortType] = useState<number[]>([0]);
  const [categoryType, setCategoryType] = useState<number[]>([]);

  return (<SearchContext.Provider
    value={{
      searchKeyword,
      setSearchKeyword,
      sortType,
      setSortType,
      categoryType,
      setCategoryType
    }}
  >
    {children}
  </SearchContext.Provider>);
}