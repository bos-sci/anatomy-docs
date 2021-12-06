import { useCallback } from 'react';

interface Props {
  tabName: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive?: boolean;
}

const Tab = ({ tabName, setSelectedTab, index, isActive }: Props) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <button 
      className="ads-tab" 
      role="tab" 
      aria-controls="tabPanel1"
      aria-selected={`${isActive ? 'true' : 'false'}`}
      onClick={onClick}
    >
      { tabName }
    </button>
  )
}

export default Tab;