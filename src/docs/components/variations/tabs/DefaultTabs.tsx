import Tabs from '../../../../library/components/Tabs';
import TabPanel from '../../../../library/components/TabPanel';

const DefaultTabs = () => {
  return (
    <Tabs>
      <TabPanel tabName="Product details">Tab panel 1</TabPanel>
      <TabPanel tabName="Ordering information">Tab panel 2</TabPanel>
      <TabPanel tabName="Reimbursement">Tab panel 3</TabPanel>
    </Tabs>
  );
}

export default DefaultTabs;