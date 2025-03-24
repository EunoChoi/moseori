import { OptionsType, OptionType } from "@/common/type/selectType";
import { Dispatch, SetStateAction } from "react";

interface IsSelectedProps {
  value: number[];
  optionListItem: OptionType;
}
interface SelectSingleProps {
  optionListItem: OptionType;
  setValue: Dispatch<SetStateAction<number[]>>;
}
interface SelectMultipleProps {
  optionListItem: OptionType;
  value: number[];
  setValue: Dispatch<SetStateAction<number[]>>;
}

interface SelectAllProps {
  options: OptionsType;
  setValue: Dispatch<SetStateAction<number[]>>;
}
interface ResetAllProps {
  setValue: Dispatch<SetStateAction<number[]>>;
}

export const isSelected = ({ value, optionListItem }: IsSelectedProps) => {
  return value.includes(optionListItem.value);
}
export const selectSingle = ({ optionListItem, setValue }: SelectSingleProps) => {
  setValue([optionListItem.value]);
}
export const selectMultiple = ({ optionListItem, value, setValue }: SelectMultipleProps) => {
  //이미 선택된 값인 경우 -> 선택 해제
  if (value.includes(optionListItem.value)) {
    const afterSelect = value.filter((value: number) => value !== optionListItem.value);
    setValue(afterSelect);
  }
  //선택되어 있지 않은 경우 -> 선택
  else {
    setValue([...value, optionListItem.value]);
  }
}
export const selectAll = ({ options, setValue }: SelectAllProps) => {
  setValue([...options.map((option: OptionType) => option.value)]);
}
export const resetAll = ({ setValue }: ResetAllProps) => {
  setValue([]);
}