'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Value = number | string;
type Values = number[] | string[];

const useQueryParams = () => {
  const router = useRouter();
  const pathname = usePathname(); //쿼리 파라미터 제외, 경로 url path
  const readOnlyParams = useSearchParams(); //쿼리 파라미터, 읽기전용
  const editableParams = new URLSearchParams(readOnlyParams); //read only urlSearchParams -> editable urlSearchParams

  const getQueryParams = ({ key }: { key: string }) => {
    return editableParams.getAll(key);
  }
  const setQueryParams = ({ key, value }: { key: string, value: Value }) => {
    editableParams.set(key, value.toString());
    router.replace(`${pathname}?${editableParams.toString()}`, { scroll: false });
  }
  const setQueryParamsByValueArray = ({ key, values }: { key: string, values: Values }) => {
    editableParams.delete(key);
    values.forEach(value => editableParams.append(key, value.toString()));
    router.replace(`${pathname}?${editableParams.toString()}`, { scroll: false });
  }
  const appendQueryParmas = ({ key, value }: { key: string, value: Value }) => {
    if (!editableParams.has(key, value.toString())) {
      editableParams.append(key, value.toString());
      router.replace(`${pathname}?${editableParams.toString()}`, { scroll: false });
    }
  }
  const deleteQueryParmas = ({ key, value }: { key: string, value?: Value }) => {
    editableParams.delete(key, value ? value.toString() : undefined);
    router.replace(`${pathname}?${editableParams.toString()}`, { scroll: false });
  }
  return {
    getQueryParams,
    setQueryParams,
    setQueryParamsByValueArray,
    appendQueryParmas,
    deleteQueryParmas
  };
}

export default useQueryParams;