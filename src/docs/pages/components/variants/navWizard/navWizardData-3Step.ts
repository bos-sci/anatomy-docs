import { NavItemWizard } from 'library/components/navigation/navWizard/NavWizard';

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
        overflowTo: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            slug: '.'
          },
          {
            text: 'Page 2',
            slug: 'docs-demo-link'
          },
          {
            text: 'Page 3',
            slug: 'docs-demo-link'
          },
          {
            text: 'Page 4',
            slug: 'docs-demo-link'
          },
          {
            text: 'Page 5',
            slug: 'docs-demo-link'
          },
          {
            text: 'Page 6',
            slug: 'docs-demo-link'
          },
          {
            text: 'Page 7',
            slug: 'docs-demo-link'
          },
          {
            text: 'Page 8',
            slug: 'docs-demo-link'
          },
          {
            text: 'Page 9',
            slug: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Nested page group 2',
        title: 'Third step title',
        children: [
          {
            text: 'Page 1',
            slug: 'docs-demo-link'
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
        overflowTo: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
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
            slug: 'docs-demo-link'
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
            slug: 'docs-demo-link'
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
        overflowTo: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            slug: 'docs-demo-link'
          },
          {
            text: 'Page 2',
            slug: 'docs-demo-link'
          },
          {
            text: 'Page 3',
            slug: 'docs-demo-link'
          },
          {
            text: 'Page 4',
            slug: 'docs-demo-link'
          },
          {
            text: 'Page 5',
            slug: 'docs-demo-link'
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
            slug: 'docs-demo-link'
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
            slug: 'docs-demo-link'
          }
        ]
      }
    ]
  }
];

export default exampleData;
