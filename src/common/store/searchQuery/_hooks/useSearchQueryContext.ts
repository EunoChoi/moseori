import { useContext } from "react";
import { SearchQueryContext } from "../SearchQueryProvider";


//useSearchQueryContext
export const useSearchQueryContext = () => {
  const context = useContext(SearchQueryContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};