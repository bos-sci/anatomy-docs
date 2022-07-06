import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { useEffect, useState } from 'react';
import { slugify } from '../../helpers';

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
      wrapperDiv.classList.add('table-responsive');
      table.parentNode?.insertBefore(wrapperDiv, table);
      wrapperDiv.appendChild(table);
    });
    mdDom.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
      if (!heading.id) {
        heading.id = slugify(heading.textContent || '');
      }
    });

    setCleanMarkdown(mdDom.body.innerHTML);
  }, [markdown, headingOffset]);


  if (markdown) {
    return <div className={className} dangerouslySetInnerHTML={{__html: cleanMarkdown}} />;
  } else return null;
}

export default Markdown;