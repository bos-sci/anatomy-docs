import { useEffect } from 'react';

interface Props {
  title?: string;
  titlePrefix?: string;
}

const useTitle = ({title, titlePrefix}: Props): void => {
  useEffect(() => {
    if (title) {
      document.title = title;
    } else if (titlePrefix) {
      document.title = titlePrefix + ' - Anatomy';
    } else {
      document.title = 'Anatomy'
    }
  }, [title, titlePrefix]);
}

export default useTitle;