import { useEffect, useState } from 'react';

/*
* @PARAM key: any - The value that triggers an update of the query selection when changed.
* @PARAM depth: int - The depth of heading levels to return starting at h2. Default is 1.
*/
const useHeadings = (depth = 1): Element[] => {
  const [headings, setHeadings] = useState<Element[]>([]);

  const targetNode = document.querySelector('.page-content');

  useEffect(() => {
    if (targetNode) {
      const getHeadings = () => {
        const selector = Array.from(Array(depth)).map((_val, i) => '.page-content h' + (i + 2) + ':not(.nav-tertiary-title)').join(', ');
        setHeadings(Array.from(document.querySelectorAll(selector)));
      }

      const config = { attributes: true, childList: true, subtree: true };
      const observer = new MutationObserver(getHeadings);
      observer.observe(targetNode, config);
    }
  }, [targetNode, depth]);

  return headings;
}

export default useHeadings;