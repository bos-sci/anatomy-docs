import { Tabs } from '@boston-scientific/anatomy-react';
import { TabPanel } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultTabs = (): JSX.Element => {
  return (
    <Example>
      <Tabs tablistLabel="Demo tabs">
        <TabPanel tabName="Tab 1">Tab panel 1</TabPanel>
        <TabPanel tabName="Tab 2">Tab panel 2</TabPanel>
        <TabPanel tabName="Tab 3">Tab panel 3</TabPanel>
      </Tabs>
    </Example>
  );
};

export default DefaultTabs;
