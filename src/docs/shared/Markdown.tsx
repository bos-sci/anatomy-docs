import DOMPurify from 'dompurify';
import marked from 'marked';
import { useEffect, useState } from 'react';

interface Props {
  markdown: string;
  headingOffset?: number;
  className?: string;
}

const Markdown = ({ markdown, headingOffset = 0, className }: Props) => {
  const [cleanMarkdown, setCleanMarkdown] = useState('');

  useEffect(() => {
    const md = markdown.replaceAll(/^#+/gm, match => match.padEnd(match.length + headingOffset, '#'));
    setCleanMarkdown(markdown ? DOMPurify.sanitize(marked(md)) : '');
  }, [markdown, headingOffset]);


  if (markdown) {
    return <div className={className} dangerouslySetInnerHTML={{__html: cleanMarkdown}} />;
  } else return null;
}

export default Markdown;