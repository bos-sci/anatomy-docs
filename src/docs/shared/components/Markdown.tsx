import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { useEffect, useState } from 'react';
import { slugify } from '../helpers';

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
      headings.forEach((h, index) => {
        let steps = [h];
        for (let i = index; i >= 0; i--) {
          if (getLevel(headings[i]) < getLevel(steps[steps.length - 1])) {
            steps.push(headings[i]);
          }
        }
        h.id = slugify(Array.from(steps, s => s.textContent).join('_'));
      });
    }

    setCleanMarkdown(mdDom.body.innerHTML);
  }, [markdown, headingOffset]);


  if (markdown) {
    return <div className={className} dangerouslySetInnerHTML={{__html: cleanMarkdown}} />;
  } else return null;
}

export default Markdown;