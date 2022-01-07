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

    // Convert md to an html string and wrap tables in div.table-responsive
    const HTMLString = DOMPurify.sanitize(marked(md))
      .replaceAll(/<table/gm, () => '<div class="table-responsive"><table')
      .replaceAll(/<\/table>/gm, () => '</table></div>');

    setCleanMarkdown(HTMLString ? HTMLString : '');
  }, [markdown, headingOffset]);


  if (markdown) {
    return <div className={className} dangerouslySetInnerHTML={{__html: cleanMarkdown}} />;
  } else return null;
}

export default Markdown;