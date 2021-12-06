import { ReactNode } from 'react';

interface Props {
  tabName: string;
  children: ReactNode;
}

const TabPanel = ({ children }: Props) => {
  return (
    <div 
      id="tabPanel1"
      className="ads-tab-panel" 
      role="tabpanel" 
      aria-labelledby="tab1" 
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export default TabPanel;