import Example from '../../../shared/components/Example';
import NavSecondary, { NavItemSecondary } from '../../../../library/components/navSecondary/NavSecondary';

const DefaultNavSecondary = (): JSX.Element => {
  const navItems: NavItemSecondary[] = [
    {
      text: 'Nav item 1',
      slug: '#'
    },
    {
      text: 'Nav item 2',
      slug: '#'
    },
    {
      text: 'Nav item 3',
      slug: '#'
    },
    {
      text: 'Nav item 4',
      slug: '#'
    },
  ];
  return (
    <Example>
      <NavSecondary navItems={navItems} />
    </Example>
  );
}

export default DefaultNavSecondary;