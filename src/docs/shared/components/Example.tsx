import { ReactNode } from 'react';
import { useLocation } from 'react-router';

interface Props {
  isDarkTheme?: boolean;
  isFlush?: boolean;
  isFlex?: boolean;
  children: ReactNode;
}

const Example = (props: Props): JSX.Element => {
  const location = useLocation();
  const pathArray = location.pathname.split('/');
  const isExternal = pathArray[pathArray.length - 2] === 'example';

  if (isExternal) {
    if (props.isFlush) {
      return <>{props.children}</>;
    } else {
      return <div className="docs-preview-external">{props.children}</div>;
    }
  } else {
    return (
      <div className={`docs-preview${props.isDarkTheme ? ' dark' : ''}${props.isFlex ? ' docs-preview-flex' : ''}`}>
        {props.children}
      </div>
    );
  }
};

export default Example;
