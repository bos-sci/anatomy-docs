import { ReactNode } from 'react';

interface Props {
  // eslint-disable-next-line react/no-unused-prop-types
  tabName: string;
  children: ReactNode;
}

const TabPanel = ({ children }: Props): JSX.Element => {
  return <>{children}</>;
};

export default TabPanel;
