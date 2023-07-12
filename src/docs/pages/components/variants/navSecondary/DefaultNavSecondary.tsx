import Example from 'docs/shared/components/Example';
import NavSecondary, { NavItemSecondary } from 'library/components/navigation/navSecondary/NavSecondary';
import { useEffect } from 'react';

const DefaultNavSecondary = (): JSX.Element => {
  const navItems: NavItemSecondary[] = [
    {
      text: 'Page',
      to: '/page'
    },
    {
      text: 'Active page',
      to: '#'
    },
    {
      text: 'Page group',
      children: [
        {
          text: 'Child page 1',
          to: '/child-page'
        },
        {
          text: 'Child page 2',
          to: '/child-page'
        },
        {
          text: 'Nested page group',
          children: [
            {
              text: 'Nested child page 1',
              to: '/nested-child-page'
            },
            {
              text: 'Nested child page 2',
              to: '/nested-child-page'
            },
            {
              text: 'Nested child page 3',
              to: '/nested-child-page'
            }
          ]
        }
      ]
    }
  ];

  const navSecondaryTexts = {
    menuToggleText: 'Section menu'
  };

  useEffect(() => {
    setTimeout(() => {
      document
        .querySelectorAll('.docs-preview .nav-link')
        .forEach((link, i) => i !== 1 && link.classList.remove('is-active'));
    }, 0);
  }, []);

  return (
    <Example>
      <NavSecondary texts={navSecondaryTexts} navItems={navItems} />
    </Example>
  );
};

export default DefaultNavSecondary;
