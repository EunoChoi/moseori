import { OptionsType, OptionType } from "@/common/type/selectType";

interface Props {
  value: number;
  options: OptionsType;
}

const getOptionByValue = ({ value, options }: Props) => {
  return options.find((option: OptionType) => option.value === value);
}

export default getOptionByValue;