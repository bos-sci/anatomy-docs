import { NavItemWizard } from '../../../../library/components/navigation/navWizard/NavWizard';

const basePath = '';

const exampleData: NavItemWizard[] = [
  {
    text: 'For healthcare professionals',
    description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
    title: 'You\'ve come to the right place',
    children: [
      {
        text: 'Medical specialties',
        title: 'What treatments are you considering?',
        overflowLinkText: 'See all treatments',
        overflowTo: basePath + '/',
        children: [
          {
            text: 'Electrophysiology',
            slug: basePath + '/'
          },
          {
            text: 'Female Pelvic Medicine',
            slug: basePath + '/'
          },
          {
            text: 'Gastroenterology',
            slug: basePath + '/'
          },
          {
            text: 'Gastrointestinal Surgery',
            slug: basePath + '/'
          },
          {
            text: 'Gynecology',
            slug: basePath + '/'
          },
          {
            text: 'Interventional Cardiology',
            slug: basePath + '/'
          },
          {
            text: 'Interventional Radiology',
            slug: basePath + '/'
          },
          {
            text: 'Neurological Surgery',
            slug: basePath + '/'
          },
          {
            text: 'Orthopedic Surgery',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Healthcare solutions',
        children: [
          {
            text: 'Child item',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Professional education',
        children: [
          {
            text: 'Child item',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Customer support',
        children: [
          {
            text: 'Child item',
            slug: basePath + '/'
          }
        ]
      }
    ]
  },
  // PTC
  {
    text: 'For patients & caregivers',
    description: `Find the information you need, whether you've been diagnosed with a health condition, have an implated device, or need support.`,
    children: [
      {
        text: 'Treatments',
        description: 'Devices, procedures, and therapies',
        overflowLinkText: 'See all treatments',
        overflowTo: basePath + '/',
        children: [
          {
            text: 'Airway & breathing',
            children: [
              {
                text: 'Asthma',
                slug: basePath + '/'
              },
              {
                text: 'Last level',
                slug: basePath + '/'
              },
              {
                text: 'Last level',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: 'Cancer',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: 'Digestion & nutrition',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: 'Heart & vascular',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: 'Kidneys',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: `Men's health`,
            children: [
              {
                text: 'Last level',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: `Women's health`,
            children: [
              {
                text: 'Last level',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: 'Neurological conditions',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: 'Pain management',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/'
              }
            ]
          }
        ]
      },
      {
        text: 'Device support',
        description: 'Device setup, user manuals, and troubleshooting',
        children: [
          {
            text: 'Child item 1',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Contact us',
        description: 'Call one of our dedicated customer service centers or send us and email',
        children: [
          {
            text: 'Child item 2',
            slug: basePath + '/'
          }
        ]
      }
    ]
  },
  // About BSC
  {
    text: 'About Boston Scientific',
    description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
    children: [
      {
        text: 'About',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        overflowLinkText: 'See all',
        overflowTo: basePath + '/',
        children: [
          {
            text: 'Businesses',
            slug: basePath + '/'
          },
          {
            text: 'Leadership',
            slug: basePath + '/'
          },
          {
            text: 'Locations',
            slug: basePath + '/'
          },
          {
            text: 'Awards & recgonition',
            slug: basePath + '/'
          },
          {
            text: 'Ventures',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Citizenship',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        children: [
          {
            text: 'Child item',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Careers',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        children: [
          {
            text: 'Child item',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'News',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        children: [
          {
            text: 'Child item',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Investors',
        href: 'external-url-here'
      }
    ]
  }
]

export default exampleData;