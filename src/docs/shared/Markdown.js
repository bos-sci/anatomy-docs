import DOMPurify from 'dompurify';
import marked from 'marked';
import { useEffect, useState } from 'react';

const Markdown = props => {
  const [markdown, setMarkdown] = useState(null);
  const [isClean, setIsClean] = useState(false);

  useEffect(() => {
    if (!isClean) {
      const md = props.markdown.replaceAll(/^#+/gm, match => match.padEnd(match.length + props.headingOffset, '#'));
      setMarkdown(props.markdown ? DOMPurify.sanitize(marked(md)) : '');
      setIsClean(true);
    }
  }, [props.markdown, props.headingOffset, isClean]);


  if (markdown) {
    return <div dangerouslySetInnerHTML={{__html:markdown}} />;
  } else return null;
}

export default Markdown;