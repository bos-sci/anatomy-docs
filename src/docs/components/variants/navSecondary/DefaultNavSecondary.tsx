import Example from '../../../shared/components/Example';
import NavSecondary, { NavItemSecondary } from '../../../../library/components/navigation/navSecondary/NavSecondary';
import { useEffect } from 'react';

const DefaultNavSecondary = (): JSX.Element => {
  const navItems: NavItemSecondary[] = [
    {
      text: 'Page',
      slug: '/page'
    },
    {
      text: 'Active page',
      slug: '#'
    },
    {
      text: 'Page group',
      children: [
        {
          text: 'Child page',
          slug: '/child-page'
        },
        {
          text: 'Child page',
          slug: '/child-page'
        },
        {
          text: 'Nested page group',
          children: [
            {
              text: 'Nested child page',
              slug: '/nested-child-page'
            },
            {
              text: 'Nested child page',
              slug: '/nested-child-page'
            },
            {
              text: 'Nested child page',
              slug: '/nested-child-page'
            },
          ]
        },
      ]
    }
  ];

  const navSecondaryTexts = {
    menuToggleText: 'Section menu'
  };

  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll('.docs-preview .nav-link')
        .forEach((link, i) => i !== 1 && link.classList.remove('active'));
    }, 0)
  }, []);

  return (
    <Example>
      <NavSecondary texts={navSecondaryTexts} navItems={navItems} />
    </Example>
  );
}

export default DefaultNavSecondary;