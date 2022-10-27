import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { useEffect, useState } from 'react';
import { toCamelCase } from '../helpers';

interface Props {
  markdown: string;
  headingOffset?: number;
  className?: string;
}

const Markdown = ({ markdown, headingOffset = 0, className }: Props): JSX.Element | null => {
  const [cleanMarkdown, setCleanMarkdown] = useState('');

  useEffect(() => {
    // Offset heading levels based on prop
    const md = markdown.replaceAll(/^#+/gm, match => match.padEnd(match.length + headingOffset, '#'));

    // Convert md to DOM instance and make additional alterations
    const mdDom = new DOMParser().parseFromString(DOMPurify.sanitize(marked(md)), "text/html");
    mdDom.querySelectorAll('table').forEach(table => {
      const wrapperDiv = document.createElement('div');
      wrapperDiv.classList.add('docs-table-responsive');
      table.parentNode?.insertBefore(wrapperDiv, table);
      wrapperDiv.appendChild(table);
    });

    const headings = mdDom.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length > 0) {
      const getLevel = (heading: Element): Number => Number(heading.tagName.charAt(1));
      const trimText = (text: string): string => {
        const softMax = 10;
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
        h.id = Array.from(steps, s => toCamelCase(trimText(s.textContent || ''))).reverse().join('_');
      });
    }

    setCleanMarkdown(mdDom.body.innerHTML);
  }, [markdown, headingOffset]);


  if (markdown) {
    return <div className={className} dangerouslySetInnerHTML={{__html: cleanMarkdown}} />;
  } else return null;
}

export default Markdown;