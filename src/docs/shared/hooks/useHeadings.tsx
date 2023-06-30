import { useCallback, useEffect, useState } from 'react';
import { NavItemTertiary } from '../../../library/components/navigation/NavTertiary';

/*
 * @PARAM key: any - The value that triggers an update of the query selection when changed.
 * @PARAM depth: int - The depth of heading levels to return starting at h2. Default is 1.
 */
const useHeadings = (depth = 1): NavItemTertiary[] => {
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);
  const [observer, setObserver] = useState<MutationObserver | null>(null);
  const [targetNode, setTargetNode] = useState<Element | null>(null);

  useEffect(() => {
    setTargetNode(document.querySelector('.docs-page-content'));
  }, []);

  const getHeadings = useCallback(() => {
    const selector = Array.from(Array(depth))
      .map((_val, i) => '.docs-page-content h' + (i + 2) + ':not(.docs-preview h2 )')
      .join(', ');
    setHeadings(
      Array.from(document.querySelectorAll(selector)).map((heading) => {
        return {
          id: heading.id as string,
          text: heading.textContent as string
        };
      })
    );
  }, [depth]);

  useEffect(() => {
    const obs = new MutationObserver(getHeadings);
    setObserver(obs);
  }, [getHeadings, setObserver]);

  useEffect(() => {
    const config = { attributes: false, childList: true, subtree: true };
    if (targetNode && observer) {
      observer.observe(targetNode, config);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [targetNode, depth, observer]);

  return headings;
};

export default useHeadings;
