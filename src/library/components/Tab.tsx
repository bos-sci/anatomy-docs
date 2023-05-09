import { RefObject, useCallback, useState, useEffect } from 'react';

interface Props {
  tabName: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive?: boolean;
  tabPanelId: string;
  tabRef: RefObject<HTMLButtonElement>;
}

const Tab = ({ tabName, setSelectedTab, index, isActive, tabPanelId, tabRef }: Props): JSX.Element => {
  const [tabIndexNum, setTabIndexNum] = useState<number>();

  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  useEffect(() => {
    setTabIndexNum(isActive ? 0 : -1);
  }, [isActive]);

  return (
    <button
      ref={tabRef}
      id={`${tabPanelId}Tab`}
      className="bsds-tab"
      role="tab"
      aria-controls={tabPanelId}
      aria-selected={isActive}
      tabIndex={tabIndexNum}
      onClick={onClick}
    >
      {tabName}
    </button>
  );
};

export default Tab;
