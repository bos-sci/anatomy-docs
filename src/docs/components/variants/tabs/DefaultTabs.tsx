import Tabs from '../../../../library/components/Tabs';
import TabPanel from '../../../../library/components/TabPanel';

const DefaultTabs = (): JSX.Element => {
  return (
    <Tabs>
      <TabPanel tabName="Tab 1">Tab panel 1</TabPanel>
      <TabPanel tabName="Tab 2">Tab panel 2</TabPanel>
      <TabPanel tabName="Tab 3">Tab panel 3</TabPanel>
    </Tabs>
  );
}

export default DefaultTabs;