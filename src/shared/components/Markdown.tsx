import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { useEffect, useState } from 'react';
import { tokens } from 'shared/versions';

interface Props {
  markdown: string;
  headingOffset?: number;
  className?: string;
}

const Markdown = ({ markdown, headingOffset = 0, className }: Props): JSX.Element | null => {
  const [cleanMarkdown, setCleanMarkdown] = useState('');

  useEffect(() => {
    // Offset heading levels based on prop
    let md = markdown.replaceAll(/^#+/gm, (match) => match.padEnd(match.length + headingOffset, '#'));

    // Replace tokens version with latest
    md = md.replaceAll('anatomy-tokens@x.y.z', `anatomy-tokens@${tokens}`);

    // Convert md to DOM instance and make additional alterations
    const mdDom = new DOMParser().parseFromString(DOMPurify.sanitize(marked(md)), 'text/html');
    mdDom.querySelectorAll('table').forEach((table) => {
      const wrapperDiv = document.createElement('div');
      wrapperDiv.classList.add('docs-table-responsive');
      table.parentNode?.insertBefore(wrapperDiv, table);
      wrapperDiv.appendChild(table);
    });

    setCleanMarkdown(mdDom.body.innerHTML);
  }, [markdown, headingOffset]);

  if (markdown) {
    // eslint-disable-next-line react/no-danger
    return <div className={className} dangerouslySetInnerHTML={{ __html: cleanMarkdown }} />;
  } else {
    return null;
  }
};

export default Markdown;
