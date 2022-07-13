import { ReactNode } from 'react';
import { useLocation } from 'react-router';

interface Props {
  isDarkTheme?: boolean;
  isFlush?: boolean;
  isFlex?: boolean;
  children: ReactNode;
}

const Example = (props: Props): JSX.Element => {

  // TODO: Should we determine if example is in external page via location or through setting context in App routing?
  const location = useLocation();
  const pathArray = location.pathname.split('/');
  const isExternal = pathArray[pathArray.length - 2] === 'example';

  if (isExternal) {
    if (props.isFlush) {
      return <>{props.children}</>
    } else {
      return <div className="demo-standalone">{props.children}</div>;
    }
  } else {
    return (
      <div className={`demo-example${props.isDarkTheme ? ' dark' : ''}${props.isFlex ? ' demo-example-flex' : ''}`}>
        { props.children }
      </div>
    );
  }
}

export default Example;