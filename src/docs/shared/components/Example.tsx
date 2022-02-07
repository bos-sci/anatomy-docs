import { ReactNode } from 'react';

interface Props {
  isDarkTheme?: boolean;
  isFlex?: boolean;
  children: ReactNode;
}

const Example = ({ isDarkTheme = false, isFlex = false, children }: Props) => {
  return (
    <div className={`demo-example${isDarkTheme ? ' dark' : ''}${isFlex ? ' demo-example-flex' : ''}`}>
      { children }
    </div>
  );
}

export default Example;