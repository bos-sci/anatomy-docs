import Example from '../../../shared/components/Example';
import NavSecondary, { NavItemSecondary } from '../../../../library/components/navSecondary/NavSecondary';
import { useEffect } from 'react';

const DefaultNavSecondary = (): JSX.Element => {
  const navItems: NavItemSecondary[] = [
    {
      text: 'Page',
      slug: '#'
    },
    {
      text: 'Active Page',
      slug: '#'
    },
    {
      text: 'Page group',
      children: [
        {
          text: 'Child page',
          slug: '#'
        },
        {
          text: 'Child page',
          slug: '#'
        },
        {
          text: 'Nested page group',
          children: [
            {
              text: 'Nested child page',
              slug: '#'
            },
            {
              text: 'Nested child page',
              slug: '#'
            },
          ]
        },
      ]
    },
    {
      text: 'Page',
      slug: '#'
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll('.demo-example .nav-link')
        .forEach((link, i) => i !== 1 && link.classList.remove('active'));
    }, 0)
  }, []);

  return (
    <Example>
      <NavSecondary menuTriggerText="Section menu" navItems={navItems} />
    </Example>
  );
}

export default DefaultNavSecondary;