import { NavItemWizard } from '../../../../library/components/navigation/navWizard/NavWizard';

const basePath = '';

const exampleData: NavItemWizard[] = [
  {
    text: 'Page group 1',
    description: 'Optional description for this step',
    title: 'Second step',
    children: [
      {
        text: 'Nested page group 1',
        title: 'Third step',
        overflowLinkText: 'See all pages',
        overflowTo: basePath + '/',
        children: [
          {
            text: 'Page',
            slug: basePath + '/'
          },
          {
            text: 'Page',
            slug: basePath + '/'
          },
          {
            text: 'Page',
            slug: basePath + '/'
          },
          {
            text: 'Page',
            slug: basePath + '/'
          },
          {
            text: 'Page',
            slug: basePath + '/'
          },
          {
            text: 'Page',
            slug: basePath + '/'
          },
          {
            text: 'Page',
            slug: basePath + '/'
          },
          {
            text: 'Page',
            slug: basePath + '/'
          },
          {
            text: 'Page',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Nested page group 2',
        title: 'Third step',
        children: [
          {
            text: 'Page',
            slug: basePath + '/'
          }
        ]
      }
    ]
  },
  {
    text: 'Page group 2',
    description: `Optional description for this step`,
    title: 'Second step',
    children: [
      {
        text: 'Nested page group 1',
        description: 'Optional description for this step',
        title: 'Third step',
        overflowTo: basePath + '/',
        children: [
          {
            text: 'Option',
            href: '#'
          }
        ]
      },
      {
        text: 'Nested page group 2',
        description: 'Device setup, user manuals, and troubleshooting',
        title: 'Third step',
        children: [
          {
            text: 'Page',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Nested page group 3',
        description: 'Optional description for this step',
        title: 'Third step',
        children: [
          {
            text: 'Page',
            slug: basePath + '/'
          }
        ]
      }
    ]
  },
  // About BSC
  {
    text: 'Page group 3',
    description: 'Optional description for this step',
    title: 'Second step',
    children: [
      {
        text: 'Nested page group 1',
        description: 'Optional description for this step',
        title: 'Third step',
        overflowTo: basePath + '/',
        children: [
          {
            text: 'Page',
            slug: basePath + '/'
          },
          {
            text: 'Page',
            slug: basePath + '/'
          },
          {
            text: 'Page',
            slug: basePath + '/'
          },
          {
            text: 'Page',
            slug: basePath + '/'
          },
          {
            text: 'Page',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Nested page group 2',
        description: 'Optional description for this step',
        title: 'Third step',
        children: [
          {
            text: 'Page',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Nested page group 3',
        description: 'Optional description for this step',
        title: 'Third step',
        children: [
          {
            text: 'Page',
            slug: basePath + '/'
          }
        ]
      }
    ]
  }
]

export default exampleData;