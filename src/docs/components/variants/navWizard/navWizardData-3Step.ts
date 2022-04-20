import { NavItemWizard } from '../../../../library/components/navigation/navWizard/NavWizard';

const basePath = '';

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
        overflowTo: basePath + '/',
        children: [
          {
            text: 'Page 1',
            slug: basePath + '/'
          },
          {
            text: 'Page 2',
            slug: basePath + '/'
          },
          {
            text: 'Page 3',
            slug: basePath + '/'
          },
          {
            text: 'Page 4',
            slug: basePath + '/'
          },
          {
            text: 'Page 5',
            slug: basePath + '/'
          },
          {
            text: 'Page 6',
            slug: basePath + '/'
          },
          {
            text: 'Page 7',
            slug: basePath + '/'
          },
          {
            text: 'Page 8',
            slug: basePath + '/'
          },
          {
            text: 'Page 9',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Nested page group 2',
        title: 'Third step title',
        children: [
          {
            text: 'Page 1',
            slug: basePath + '/'
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
        overflowTo: basePath + '/',
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
            slug: basePath + '/'
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
            slug: basePath + '/'
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
        overflowTo: basePath + '/',
        children: [
          {
            text: 'Page 1',
            slug: basePath + '/'
          },
          {
            text: 'Page 2',
            slug: basePath + '/'
          },
          {
            text: 'Page 3',
            slug: basePath + '/'
          },
          {
            text: 'Page 4',
            slug: basePath + '/'
          },
          {
            text: 'Page 5',
            slug: basePath + '/'
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
            slug: basePath + '/'
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
            slug: basePath + '/'
          }
        ]
      }
    ]
  }
]

export default exampleData;