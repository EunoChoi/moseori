import { useState } from "react";

const useOpenState = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onToggle = () => {
    setIsOpen(c => !c);
  }
  const onOpen = () => {
    setIsOpen(true);
  }
  const onClose = () => {
    setIsOpen(false);
  }

  return {
    isOpen,
    setIsOpen,
    onToggle,
    onOpen,
    onClose
  }
}

export default useOpenState;