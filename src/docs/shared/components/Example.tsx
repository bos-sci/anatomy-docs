import { ReactNode } from 'react';

interface Props {
  isDarkTheme?: boolean;
  children: ReactNode;
}

const Example = ({ isDarkTheme = false, children }: Props) => {
  return (
    <div className={`demo-example${isDarkTheme ? ' dark' : ''}`}>
      { children }
    </div>
  );
}

export default Example;