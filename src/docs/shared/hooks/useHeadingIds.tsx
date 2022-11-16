import { useState, useEffect, useCallback } from 'react';
import { toCamelCase } from '../helpers';

const useHeadingIds = () => {
  const [observer, setObserver] = useState<MutationObserver | null>(null);
  const [targetNode, setTargetNode] = useState<Element | null>(null);

  useEffect(() => {
    setTargetNode(document.querySelector('.docs-page-content'));
  }, []);

  const setIds = useCallback(() => {
    const headings = document.querySelectorAll('h2, h3, h4, h5, h6');
    if (headings.length > 0) {
      const getLevel = (heading: Element): Number => Number(heading.tagName.charAt(1));
      const trimText = (text: string): string => {
        const softMax = 20;
        const words = text.split(' ');
        let charSum = 0;
        let lastIndex = 0;
        for (let i = 0; i < words.length; i++) {
          if (charSum >= softMax) {
            lastIndex = i;
            break;
          } else if (i === words.length - 1) {
            lastIndex = words.length;
          }
          charSum += words[i].length;
        }
        return words.slice(0, lastIndex).join(' ');
      }
      headings.forEach((h, index) => {
        let steps = [h];
        for (let i = index; i >= 0; i--) {
          if (getLevel(headings[i]) < getLevel(steps[steps.length - 1])) {
            steps.push(headings[i]);
          }
        }
        if (!h.id.includes(':')) {
          h.id = Array.from(steps, s => toCamelCase(trimText(s.textContent || ''))).reverse().join('_');
        }
      });
    }
  }, []);

  useEffect(() => {
    const obs = new MutationObserver(setIds);
    setObserver(obs);
  }, [setIds, setObserver]);

  useEffect(() => {
    const config = { attributes: false, childList: true, subtree: true };
    if (targetNode && observer) {
      observer.observe(targetNode, config);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    }
  }, [targetNode, observer]);
}

export default useHeadingIds;