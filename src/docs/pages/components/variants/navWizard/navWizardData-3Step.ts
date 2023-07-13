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
            to: '.'
          },
          {
            text: 'Page 2',
            to: 'docs-demo-link'
          },
          {
            text: 'Page 3',
            to: 'docs-demo-link'
          },
          {
            text: 'Page 4',
            to: 'docs-demo-link'
          },
          {
            text: 'Page 5',
            to: 'docs-demo-link'
          },
          {
            text: 'Page 6',
            to: 'docs-demo-link'
          },
          {
            text: 'Page 7',
            to: 'docs-demo-link'
          },
          {
            text: 'Page 8',
            to: 'docs-demo-link'
          },
          {
            text: 'Page 9',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Nested page group 2',
        title: 'Third step title',
        children: [
          {
            text: 'Page 1',
            to: 'docs-demo-link'
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
            to: 'docs-demo-link'
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
            to: 'docs-demo-link'
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
            to: 'docs-demo-link'
          },
          {
            text: 'Page 2',
            to: 'docs-demo-link'
          },
          {
            text: 'Page 3',
            to: 'docs-demo-link'
          },
          {
            text: 'Page 4',
            to: 'docs-demo-link'
          },
          {
            text: 'Page 5',
            to: 'docs-demo-link'
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
            to: 'docs-demo-link'
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
            to: 'docs-demo-link'
          }
        ]
      }
    ]
  }
];

export default exampleData;
