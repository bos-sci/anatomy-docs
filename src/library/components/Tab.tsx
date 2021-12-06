import { useCallback } from 'react';

interface Props {
  tabName: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive?: boolean;
  tabPanelId: string;
}

const Tab = ({ tabName, setSelectedTab, index, isActive, tabPanelId }: Props) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <button
      id={`${tabPanelId}Tab`}
      className="ads-tab"
      role="tab"
      aria-controls={tabPanelId}
      aria-selected={isActive}
      onClick={onClick}
    >
      { tabName }
    </button>
  )
}

export default Tab;