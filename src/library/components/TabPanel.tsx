import { ReactNode } from 'react';

interface Props {
  tabName: string;
  children: ReactNode;
}

const TabPanel = ({ children }: Props) => {
  return <>{children}</>;
}

export default TabPanel;