// prevent body scroll hook
import { useEffect } from "react";

const usePreventScroll = (openModal: boolean) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openModal]);
};

export default usePreventScroll;
