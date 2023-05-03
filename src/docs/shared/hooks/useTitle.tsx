import { useEffect } from 'react';

interface Props {
  title?: string;
  titlePrefix?: string;
}

const useTitle = ({ title, titlePrefix }: Props): void => {
  useEffect(() => {
    let pageTitle = '';

    if (title) {
      pageTitle = title;
    } else if (titlePrefix) {
      pageTitle = titlePrefix + ' - Anatomy - Boston Scientific';
    } else {
      pageTitle = 'Anatomy - Boston Scientific';
    }

    if (pageTitle.length > 70) {
      document.title = pageTitle.substring(0, 70);
      console.warn('Page title exceeds 70 character limit!');
    } else {
      document.title = pageTitle;
    }
  }, [title, titlePrefix]);
};

export default useTitle;
