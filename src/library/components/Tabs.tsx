// TODO:
// - figure out if we want to add aria-label or aria-labelledby on the tablist
// - Hook up keyboard arrow navigation for tab buttons

// resources
// https://www.w3.org/TR/wai-aria-practices/#tabpanel
// https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html
// https://www.w3.org/TR/wai-aria-practices/#kbd_selection_follows_focus
// https://dev.to/eevajonnapanula/keyboard-accessible-tabs-with-react-5ch4
// https://accessible-react.eevis.codes/components/tabs#source-code

import { FC, ReactElement, useEffect, useState } from 'react';
import Tab from './Tab';

type Props = {
  children: ReactElement[] | ReactElement;
}

let tabsId = 0;

const Tabs: FC<Props> = ({ children }) => {

  const [selectedTab, setSelectedTab] = useState(0);
  const [tabPanelId, setTabPanelId] = useState('');
  const [tabPanels, setTabPanels] = useState<ReactElement[]>([]);

  useEffect(() => {
    const idNum = ++tabsId;
    setTabPanelId('tabPanel' + idNum);
  }, []);

  useEffect(() => {
    if (Array.isArray(children)) {
      setTabPanels(children);
    } else {
      setTabPanels([children]);
    }
  }, [children]);

  return (
    <div className="ads-tabs">
      <div className="ads-tab-list" role="tablist">
        {tabPanels.map((tabPanel, index) => (
          <Tab
            key={`${tabPanelId + index}Tab`}
            tabName={tabPanel.props.tabName}
            index={index}
            setSelectedTab={setSelectedTab}
            isActive={index === selectedTab}
            tabPanelId={tabPanelId + index}
          />
        ))}
      </div>
      <div className="ads-tab-panels">
        {tabPanels.map((tabPanel, index) => (
          <div
            key={tabPanelId + index}
            id={tabPanelId + index}
            className="ads-tab-panel"
            role="tabpanel"
            aria-labelledby={`${tabPanelId + index}Tab`}
            tabIndex={0}
            hidden={index !== selectedTab}>
            { tabPanel }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs;

// <div className="ads-tabs">
//   <div className="ads-tab-list" role="tablist">
//     <button
//     id="tab1"
//     className="ads-tab"
//     role="tab"
//     aria-controls="tabPanel1"
//     aria-selected="true"
//     >
//       Product details
//     </button>
//     <button
//       id="tab2"
//       className="ads-tab"
//       aria-controls="tabPanel2"
//       aria-selected="false"
//       tabIndex={-1}
//     >
//       Ordering information
//     </button>
//     <button
//       id="tab3"
//       className="ads-tab"
//       aria-controls="tabPanel3"
//       aria-selected="false"
//       tabIndex={-1}
//     >
//       Reimbursement
//     </button>
//   </div>
//   <div className="ads-tab-panels">
//     <div
//       id="tabPanel1"
//       className="ads-tab-panel"
//       role="tabpanel"
//       aria-labelledby="tab1"
//       tabIndex={0}
//     >
//       tab panel content
//     </div>
//     <div
//       id="tabPanel2"
//       className="ads-tab-panel"
//       role="tabpanel"
//       aria-labelledby="tab2"
//       tabIndex={0}
//       hidden
//     >
//       Tab panel 2
//     </div>
//     <div
//       id="tabPanel3"
//       className="ads-tab-panel"
//       role="tabpanel"
//       aria-labelledby="tab3"
//       tabIndex={0}
//       hidden
//     >
//       Tab panel 3
//     </div>
//   </div>
// </div>