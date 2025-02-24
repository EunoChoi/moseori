import useQueryParams from "@/common/hooks/useQueryParams";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Option {
  label: string;
  value: number;
}

interface SelectStateProps {
  key: string;
  type: 'multiple' | 'single',
  options: Option[];
}

//select state for query params binding
const useQueryState = <T extends 'multiple' | 'single'>({ key, type, options }: SelectStateProps) => {
  const queryParams = useQueryParams();

  const getSelectedOptionsByQueryParams = ({ key, type, options }: SelectStateProps) => {
    const optionsByQueryKey = queryParams
      .getQueryParams({ key })
      .map(cat => options.find(option => option.value.toString() === cat))
      .filter((e) => e !== undefined);

    if (type === 'multiple') return optionsByQueryKey as Option[]; //key값에 해당하는 쿼리 파라미터가 존재하지 않는 경우 빈 배열 리턴
    else return optionsByQueryKey.length === 0 ? options[0] as Option : optionsByQueryKey[0] as Option;
  }

  const [selectState, setSelectState] = useState<Option | Option[]>(() => getSelectedOptionsByQueryParams({ options, type, key }))


  useEffect(() => {
    if (Array.isArray(selectState)) {
      const values = selectState.map(category => category.value);
      queryParams.setQueryParamsByValueArray({ key, values });
    }
    else if (!Array.isArray(selectState)) {
      queryParams.setQueryParams({ key, value: selectState.value });
    }
  }, [selectState])

  return {
    selectState: selectState as (T extends 'multiple' ? Option[] : Option),
    setSelectState: setSelectState as (T extends 'multiple' ? Dispatch<SetStateAction<Option[]>> : Dispatch<SetStateAction<Option>>)
  }
}

export default useQueryState;