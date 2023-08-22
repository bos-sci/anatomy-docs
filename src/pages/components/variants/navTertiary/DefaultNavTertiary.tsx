import Example from 'shared/components/Example';
import { NavTertiary, NavItemTertiary } from '@boston-scientific/anatomy-react';

const DefaultNavTertiary = (): JSX.Element => {
  const navTertiaryItems: NavItemTertiary[] = [
    {
      id: 'section1',
      text: 'First section heading'
    },
    {
      id: 'section2',
      text: 'Second section heading'
    },
    {
      id: 'section3',
      text: 'Third section heading'
    }
  ];

  return (
    <Example>
      <NavTertiary navTertiaryItems={navTertiaryItems} />
    </Example>
  );
};

export default DefaultNavTertiary;
