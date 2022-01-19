import DOMPurify from 'dompurify';
import marked from 'marked';
import { useEffect, useState } from 'react';

interface Props {
  markdown: string;
  headingOffset?: number;
  className?: string;
}

const Markdown = ({ markdown, headingOffset = 0, className }: Props): JSX.Element | null => {
  const [cleanMarkdown, setCleanMarkdown] = useState('');

  useEffect(() => {
    // Offest heading levels based on prop
    const md = markdown.replaceAll(/^#+/gm, match => match.padEnd(match.length + headingOffset, '#'));

    const mdDom = new DOMParser().parseFromString(DOMPurify.sanitize(marked(md)), "text/html");
    mdDom.querySelectorAll('table').forEach(table => table.classList.add('table-responsive'));

    setCleanMarkdown(mdDom.body.innerHTML);
  }, [markdown, headingOffset]);


  if (markdown) {
    return <div className={className} dangerouslySetInnerHTML={{__html: cleanMarkdown}} />;
  } else return null;
}

export default Markdown;