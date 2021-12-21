import { ReactNode } from 'react';

interface Props {
  tabName: string;
  children: ReactNode;
}

const TabPanel = ({ children }: Props): JSX.Element => {
  return <>{children}</>;
}

export default TabPanel;