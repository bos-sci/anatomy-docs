import { useEffect } from 'react';

interface Props {
  title?: string;
  titlePrefix?: string;
}

const useTitle = ({title, titlePrefix}: Props) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    } else if (titlePrefix) {
      document.title = titlePrefix + ' - Anatomy - Boston Scientific';
    } else {
      document.title = 'Anatomy - Boston Scientific'
    }
  }, [title, titlePrefix]);
}

export default useTitle;