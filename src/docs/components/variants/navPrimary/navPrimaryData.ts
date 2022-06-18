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
        altLinkText: 'See all healthcare solutions',
        altTo: '#demo',
        children: [
          {
            text: 'Child item',
            slug: basePath + '/some-path'
          }
        ]
      },
      {
        text: 'Professional education',
        altLinkText: 'See all professional education',
        altTo: '#demo',
        children: [
          {
            text: 'Child item',
            slug: basePath + '/some-path'
          }
        ]
      },
      {
        text: 'Customer support',
        altLinkText: 'See all customer support',
        altTo: '#demo',
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
            altLinkText: 'See all airway & breathing',
            altTo: '#demo',
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
            altLinkText: 'See all cancer',
            altTo: '#demo',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: 'Digestion & nutrition',
            altLinkText: 'See all digestion & nutrition',
            altTo: '#demo',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: 'Heart & vascular',
            altLinkText: 'See all heart & vascular',
            altTo: '#demo',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: 'Kidneys',
            altLinkText: 'See all kidneys',
            altTo: '#demo',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: `Men's health`,
            altLinkText: 'See all men\'s health',
            altTo: '#demo',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: `Women's health`,
            altLinkText: 'See all women\'s health',
            altTo: '#demo',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: 'Neurological conditions',
            altLinkText: 'See all neurological conditions',
            altTo: '#demo',
            children: [
              {
                text: 'Last level',
                slug: basePath + '/some-path'
              }
            ]
          },
          {
            text: 'Pain management',
            altLinkText: 'See all pain management',
            altTo: '#demo',
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
        altLinkText: 'See all device support',
        altTo: '#demo',
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
        altLinkText: 'See all contact us',
        altTo: '#demo',
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
        altLinkText: 'See all citizenship',
        altTo: '#demo',
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
        altLinkText: 'See all careers',
        altTo: '#demo',
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
        altLinkText: 'See all news',
        altTo: '#demo',
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