import { ChangeEvent, useCallback, useState } from "react";

interface UseInputProps {
  initialValue: string;
  validator?: (value: string) => boolean;
}

const useInput = ({ initialValue, validator }: UseInputProps) => {
  const [value, setValue] = useState<string>(initialValue);

  const onChangeString = useCallback((value: string) => {
    const isUpdate = validator ? validator(value) : true;

    if (isUpdate === true) {
      setValue(value);
    }
  }, [validator])

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isUpdate = validator ? validator(value) : true;

    if (isUpdate === true) {
      setValue(value);
    }
  }, [validator])

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue])

  return {
    value,
    setValue,
    onChangeString,
    onChange,
    reset
  }
}

export default useInput;