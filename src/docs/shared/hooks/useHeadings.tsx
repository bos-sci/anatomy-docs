import { useEffect, useState } from 'react';
import { NavItemTertiary } from '../../../library/components/navigation/navTertiary/NavTertiary';

/*
* @PARAM key: any - The value that triggers an update of the query selection when changed.
* @PARAM depth: int - The depth of heading levels to return starting at h2. Default is 1.
*/
const useHeadings = (depth = 1): NavItemTertiary[] => {
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);

  const targetNode = document.querySelector('.page-content');

  useEffect(() => {
    if (targetNode) {
      const getHeadings = () => {
        const selector = Array.from(Array(depth)).map((_val, i) => '.page-content h' + (i + 2) + ':not(.nav-tertiary-title)').join(', ');
        setHeadings(
          Array.from(document.querySelectorAll(selector)).map(heading => {
            return {
              id: heading.id as string,
              text: heading.textContent as string
            };
          })
        );
      }

      const config = { attributes: true, childList: true, subtree: true };
      const observer = new MutationObserver(getHeadings);
      observer.observe(targetNode, config);
    }
  }, [targetNode, depth]);

  return headings;
}

export default useHeadings;