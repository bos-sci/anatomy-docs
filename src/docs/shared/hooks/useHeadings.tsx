import { useEffect, useState } from 'react';

/*
* @PARAM key: any - The value that triggers an update of the query selection when changed.
* @PARAM depth: int - The depth of heading levels to return starting at h2. Default is 1.
*/
const useHeadings = (key: any, depth = 1): Element[] => {
  const [headings, setHeadings] = useState<Element[]>([]);

  useEffect(() => {
    if (key) {
      setTimeout(() => {
        const selector = Array.from(Array(depth)).map((_val, i) => '.page-content h' + (i + 2)).join(', ');
        setHeadings(Array.from(document.querySelectorAll(selector)));
      }, 0);
    }
  }, [key, depth]);

  return headings;
}

export default useHeadings;