import { RefObject, useCallback } from 'react';

interface Props {
  tabName: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive?: boolean;
  tabPanelId: string;
  tabRef: RefObject<HTMLButtonElement>;
}

const Tab = ({ tabName, setSelectedTab, index, isActive, tabPanelId, tabRef }: Props): JSX.Element => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <button
      ref={tabRef}
      id={`${tabPanelId}Tab`}
      className="bsds-tab"
      role="tab"
      aria-controls={tabPanelId}
      aria-selected={isActive}
      onClick={onClick}
      tabIndex={isActive ? 0 : -1}
    >
      { tabName }
    </button>
  )
}

export default Tab;