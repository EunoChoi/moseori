import { useState } from "react";

const useToggleListOption = () => {
  const [isOptionOpen, setIsOptionOpen] = useState<boolean>(false);
  const onToggleOption = () => {
    setIsOptionOpen(c => !c);
  }
  const onOpenOption = () => {
    setIsOptionOpen(true);
  }
  const onCloseOption = () => {
    setIsOptionOpen(false);
  }

  return {
    isOptionOpen,
    setIsOptionOpen,
    onToggleOption,
    onOpenOption,
    onCloseOption
  }
}

export default useToggleListOption;