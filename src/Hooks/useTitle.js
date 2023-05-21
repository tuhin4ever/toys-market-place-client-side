
import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Paly Go`;
  }, [title]);
};
export default useTitle;