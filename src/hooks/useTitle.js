import { useEffect } from "react";
const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-টিউশন`;
  }, [title]);
};
export default useTitle;
