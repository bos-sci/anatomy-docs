import { NavItemPrimary } from '../../../../library/components/navigation/navPrimary/NavPrimary';

const basePath = '';

const exampleData: NavItemPrimary[] = [
  {
    text: 'For healthcare professionals',
    description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
    altHref: '#demo',
    altLinkText: 'All healthcare professionals information',
    children: [
      {
        text: 'Medical specialties',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all treatments',
        altTo: basePath + '/some-path',
        children: [
          {
            text: 'Electrophysiology',
            slug: basePath + '/some-path'
          },
          {
            text: 'Female Pelvic Medicine',
            slug: basePath + '/some-path'
          },
          {
            text: 'Gastroenterology',
            slug: basePath + '/some-path'
          },
          {
            text: 'Gastrointestinal Surgery',
            slug: basePath + '/some-path'
          },
          {
            text: 'Gynecology',
            slug: basePath + '/some-path'
          },
          {
            text: 'Interventional Cardiology',
            slug: basePath + '/some-path'
          },
          {
            text: 'Interventional Radiology',
            slug: basePath + '/some-path'
          },
          {
            text: 'Neurological Surgery',
            slug: basePath + '/some-path'
          },
          {
            text: 'Orthopedic Surgery',
            slug: basePath + '/some-path'
          },
          {
            text: 'Pain Medicine',
            slug: basePath + '/some-path'
          },
          {
            text: 'Pulmonology',
            slug: basePath + '/some-path'
          },
          {
            text: 'Structural Heart Valve',
            slug: basePath + '/some-path'
          },
          {
            text: 'Urology',
            slug: basePath + '/some-path'
          },
          {
            text: 'Vascular Surgery',
            slug: basePath + '/some-path'
          }
        ]
      },
      {
        text: 'Healthcare solutions',
        children: [
          {
            text: 'Child item',
            slug: basePath + '/some-path'
          }
        ]
      },
      {
        text: 'Professional education',
        children: [
          {
            text: 'Child item',
            slug: basePath + '/some-path'
          }
        ]
      },
      {
        text: 'Customer support',
        children: [
          {
            text: 'Child item',
            slug: basePath + '/some-path'
          }
        ]
      }
    ]
  },
  // PTC
  {
    text: 'For patients & caregivers',
    description: `Find the information you need, whether you've been diagnosed with a health condition, have an implanted device, or need support.`,
    altTo: '#demo',
    altLinkText: 'All patients & caregivers information',
    children: [
      {
        text: 'Treatments',
        description: 'Devices, procedures, and therapies',
        altLinkText: 'See all treatments',
        altTo: basePath + '/some-path',
        children: [
          {
            text: 'Airway & breathing',
            children: [
              {
                text: 'Asthma',
                slug: basePath + '/' // Used to demo the active style
              },
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              },
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: 'Cancer',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: 'Digestion & nutrition',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: 'Heart & vascular',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: 'Kidneys',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: `Men's health`,
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: `Women's health`,
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: 'Neurological conditions',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: 'Pain management',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
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
            slug: basePath + '/some-path'
          }
        ]
      },
      {
        text: 'Contact us',
        description: 'Call one of our dedicated customer service centers or send us and email',
        children: [
          {
            text: 'Child item 2',
            slug: basePath + '/some-path'
          }
        ]
      }
    ]
  },
  // About BSC
  {
    text: 'About Boston Scientific',
    description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
    altHref: '#demo',
    altLinkText: 'All Boston Scientific information',
    children: [
      {
        text: 'About',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all',
        altTo: basePath + '/some-path',
        children: [
          {
            text: 'Businesses',
            slug: basePath + '/some-path'
          },
          {
            text: 'Leadership',
            slug: basePath + '/some-path'
          },
          {
            text: 'Locations',
            slug: basePath + '/some-path'
          },
          {
            text: 'Awards & recognition',
            slug: basePath + '/some-path'
          },
          {
            text: 'Ventures',
            slug: basePath + '/some-path'
          }
        ]
      },
      {
        text: 'Citizenship',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        children: [
          {
            text: 'Child item',
            slug: basePath + '/some-path'
          }
        ]
      },
      {
        text: 'Careers',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        children: [
          {
            text: 'Child item',
            slug: basePath + '/some-path'
          }
        ]
      },
      {
        text: 'News',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        children: [
          {
            text: 'Child item',
            slug: basePath + '/some-path'
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