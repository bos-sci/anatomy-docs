import { NavItemWizard } from '../../../../library/components/navigation/navWizard/NavWizard';

const exampleData: NavItemWizard[] = [
  {
    title: 'Second step title',
    description: 'Optional description for this step',
    text: 'Page group 1',
    children: [
      {
        title: 'Third step title',
        text: 'Nested page group 1',
        overflowLinkText: 'See all pages',
        overflowTo: 'demo-link',
        children: [
          {
            text: 'Page 1',
            slug: '.'
          },
          {
            text: 'Page 2',
            slug: 'demo-link'
          },
          {
            text: 'Page 3',
            slug: 'demo-link'
          },
          {
            text: 'Page 4',
            slug: 'demo-link'
          },
          {
            text: 'Page 5',
            slug: 'demo-link'
          },
          {
            text: 'Page 6',
            slug: 'demo-link'
          },
          {
            text: 'Page 7',
            slug: 'demo-link'
          },
          {
            text: 'Page 8',
            slug: 'demo-link'
          },
          {
            text: 'Page 9',
            slug: 'demo-link'
          }
        ]
      },
      {
        text: 'Nested page group 2',
        title: 'Third step title',
        children: [
          {
            text: 'Page 1',
            slug: 'demo-link'
          }
        ]
      }
    ]
  },
  {
    title: 'Second step title',
    description: `Optional description for this step`,
    text: 'Page group 2',
    children: [
      {
        title: 'Third step title',
        description: 'Optional description for this step',
        text: 'Nested page group 1',
        overflowTo: 'demo-link',
        children: [
          {
            text: 'Page 1',
            href: '#'
          }
        ]
      },
      {
        title: 'Third step title',
        description: 'Optional description for this step',
        text: 'Nested page group 2',
        children: [
          {
            text: 'Page 1',
            slug: 'demo-link'
          }
        ]
      },
      {
        title: 'Third step title',
        description: 'Optional description for this step',
        text: 'Nested page group 3',
        children: [
          {
            text: 'Page 1',
            slug: 'demo-link'
          }
        ]
      }
    ]
  },
  {
    title: 'Second step title',
    description: 'Optional description for this step',
    text: 'Page group 3',
    children: [
      {
        title: 'Third step title',
        description: 'Optional description for this step',
        text: 'Nested page group 1',
        overflowTo: 'demo-link',
        children: [
          {
            text: 'Page 1',
            slug: 'demo-link'
          },
          {
            text: 'Page 2',
            slug: 'demo-link'
          },
          {
            text: 'Page 3',
            slug: 'demo-link'
          },
          {
            text: 'Page 4',
            slug: 'demo-link'
          },
          {
            text: 'Page 5',
            slug: 'demo-link'
          }
        ]
      },
      {
        title: 'Third step title',
        description: 'Optional description for this step',
        text: 'Nested page group 2',
        children: [
          {
            text: 'Page 1',
            slug: 'demo-link'
          }
        ]
      },
      {
        title: 'Third step title',
        description: 'Optional description for this step',
        text: 'Nested page group 3',
        children: [
          {
            text: 'Page 1',
            slug: 'demo-link'
          }
        ]
      }
    ]
  }
]

export default exampleData;