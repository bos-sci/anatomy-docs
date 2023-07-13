import { NavItemPrimary } from 'library/components/navigation/navPrimary/NavPrimary';

const basePath = '';

export const utilityData = [
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
    text: 'Dropdown',
    children: [
      {
        text: 'Action 1',
        to: 'docs-demo-link'
      },
      {
        text: 'Action 2',
        to: 'docs-demo-link'
      },
      {
        text: 'Action 3',
        to: 'docs-demo-link'
      },
      {
        text: 'Action 4',
        to: 'docs-demo-link'
      },
      {
        text: 'Action 5',
        to: 'docs-demo-link'
      },
      {
        text: 'Action 6',
        to: 'docs-demo-link'
      },
      {
        text: 'Action 7',
        to: 'docs-demo-link'
      }
    ]
  }
];

export const contextualUtility = [
  {
    text: 'News',
    to: 'docs-demo-link'
  },
  {
    text: 'Careers',
    to: 'docs-demo-link'
  },
  {
    text: 'Investors',
    to: 'docs-demo-link'
  },
  {
    text: 'Region Selector',
    children: [
      {
        text: 'Argentina',
        to: 'docs-demo-link'
      },
      {
        text: 'Brazil',
        to: 'docs-demo-link'
      },
      {
        text: 'Chile',
        to: 'docs-demo-link'
      },
      {
        text: 'China',
        to: 'docs-demo-link'
      },
      {
        text: 'Columbia',
        to: 'docs-demo-link'
      },
      {
        text: 'Deutschland',
        to: 'docs-demo-link'
      },
      {
        text: 'Europe',
        to: 'docs-demo-link'
      },
      {
        text: 'India',
        to: 'docs-demo-link'
      },
      {
        text: 'Japan',
        to: 'docs-demo-link'
      },
      {
        text: 'Korea',
        to: 'docs-demo-link'
      },
      {
        text: 'Malaysia',
        to: 'docs-demo-link'
      },
      {
        text: 'Mexico',
        to: 'docs-demo-link'
      },
      {
        text: 'Peru',
        to: 'docs-demo-link'
      },
      {
        text: 'Spain',
        to: 'docs-demo-link'
      },
      {
        text: 'United States',
        to: 'docs-demo-link'
      }
    ]
  }
];

export const simpleData: NavItemPrimary[] = [
  {
    text: 'Page 1',
    to: 'docs-demo-link'
  },
  {
    text: 'Page 2',
    to: 'docs-demo-link'
  },
  {
    text: 'Current page',
    to: '.'
  },
  {
    text: 'Page 4',
    to: 'docs-demo-link'
  }
];

export const intermediateData: NavItemPrimary[] = [
  {
    text: 'Page 1',
    to: 'docs-demo-link'
  },
  {
    text: 'Navigation section',
    description:
      'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
    altLinkText: 'See all pages',
    altTo: 'docs-demo-link',
    children: [
      {
        text: 'Child page 1',
        to: 'docs-demo-link'
      },
      {
        text: 'Current page',
        to: '.'
      },
      {
        text: 'Child page 3',
        to: 'docs-demo-link'
      },
      {
        text: 'Child page 4',
        to: 'docs-demo-link'
      },
      {
        text: 'Child page 5',
        to: 'docs-demo-link'
      },
      {
        text: 'Child page 6',
        to: 'docs-demo-link'
      },
      {
        text: 'Child page 7',
        to: 'docs-demo-link'
      },
      {
        text: 'Child page 8',
        to: 'docs-demo-link'
      },
      {
        text: 'Child page 9',
        to: 'docs-demo-link'
      },
      {
        text: 'Child page 10',
        to: 'docs-demo-link'
      },
      {
        text: 'Child page 11',
        to: 'docs-demo-link'
      },
      {
        text: 'Child page 12',
        to: 'docs-demo-link'
      },
      {
        text: 'Child page 13',
        to: 'docs-demo-link'
      },
      {
        text: 'Child page 14',
        to: 'docs-demo-link'
      },
      {
        text: 'Child page 15',
        to: 'docs-demo-link'
      },
      {
        text: 'Child page 16',
        to: 'docs-demo-link'
      }
    ]
  },
  {
    text: 'Page 2',
    to: 'docs-demo-link'
  },
  {
    text: 'Page 3',
    to: 'docs-demo-link'
  }
];

export const complexData: NavItemPrimary[] = [
  {
    text: 'Navigation section 1',
    description:
      'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
    altHref: 'docs-demo-link',
    altLinkText: 'All pages',
    children: [
      {
        text: 'Page group 1',
        description:
          'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            to: 'docs-demo-link'
          },
          {
            text: 'Current page',
            to: '.'
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
          },
          {
            text: 'Page 10',
            to: 'docs-demo-link'
          },
          {
            text: 'Page 11',
            to: 'docs-demo-link'
          },
          {
            text: 'Page 12',
            to: 'docs-demo-link'
          },
          {
            text: 'Page 13',
            to: 'docs-demo-link'
          },
          {
            text: 'Page 14',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page group 2',
        altLinkText: 'See all pages',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page group 3',
        altLinkText: 'See all pages',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page group 4',
        altLinkText: 'See all pages',
        altTo: 'docs-demo-link',
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
    text: 'Navigation section 2',
    description: `Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.`,
    altTo: 'docs-demo-link',
    altLinkText: 'All pages',
    children: [
      {
        text: 'Page group 1',
        description:
          'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Nested page group 1',
            altLinkText: 'See all pages',
            altTo: 'docs-demo-link',
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
              }
            ]
          },
          {
            text: 'Nested page group 2',
            altLinkText: 'See all pages',
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Nested page group 3',
            altLinkText: 'See all pages',
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Nested page group 4',
            altLinkText: 'See all pages',
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Nested page group 5',
            altLinkText: 'See all pages',
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: `Nested page group 6`,
            altLinkText: 'See all pages',
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: `Nested page group 7`,
            altLinkText: 'See all pages',
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Nested page group 8',
            altLinkText: 'See all pages',
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Nested page group 9',
            altLinkText: 'See all pages',
            altTo: 'docs-demo-link',
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
        text: 'Page group 2',
        description:
          'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page group 3',
        description:
          'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altTo: 'docs-demo-link',
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
    text: 'Navigation section 3',
    description:
      'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
    altHref: 'docs-demo-link',
    altLinkText: 'All pages',
    children: [
      {
        text: 'Page group 1',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altTo: 'docs-demo-link',
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
        text: 'Page group 2',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page group 3',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page group 4',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page 1',
        href: 'external-url-here'
      }
    ]
  }
];

export const contextualComplex: NavItemPrimary[] = [
  {
    text: 'For healthcare professionals',
    description:
      'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
    altHref: 'docs-demo-link',
    altLinkText: 'All healthcare professionals information',
    children: [
      {
        text: 'Medical specialties',
        description:
          'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all treatments',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Electrophysiology',
            to: 'docs-demo-link'
          },
          {
            text: 'Female Pelvic Medicine',
            to: 'docs-demo-link'
          },
          {
            text: 'Gastroenterology',
            to: 'docs-demo-link'
          },
          {
            text: 'Gastrointestinal Surgery',
            to: 'docs-demo-link'
          },
          {
            text: 'Gynecology',
            to: 'docs-demo-link'
          },
          {
            text: 'Interventional Cardiology',
            to: 'docs-demo-link'
          },
          {
            text: 'Interventional Radiology',
            to: 'docs-demo-link'
          },
          {
            text: 'Neurological Surgery',
            to: 'docs-demo-link'
          },
          {
            text: 'Orthopedic Surgery',
            to: 'docs-demo-link'
          },
          {
            text: 'Pain Medicine',
            to: 'docs-demo-link'
          },
          {
            text: 'Pulmonology',
            to: 'docs-demo-link'
          },
          {
            text: 'Structural Heart Valve',
            to: 'docs-demo-link'
          },
          {
            text: 'Urology',
            to: 'docs-demo-link'
          },
          {
            text: 'Vascular Surgery',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Healthcare solutions',
        altLinkText: 'See all healthcare solutions',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Child item',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Professional education',
        altLinkText: 'See all professional education',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Child item',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Customer support',
        altLinkText: 'See all customer support',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Child item',
            to: 'docs-demo-link'
          }
        ]
      }
    ]
  },
  // PTC
  {
    text: 'For patients & caregivers',
    description: `Find the information you need, whether you've been diagnosed with a health condition, have an implanted device, or need support.`,
    altTo: 'docs-demo-link',
    altLinkText: 'All patients & caregivers information',
    children: [
      {
        text: 'Treatments',
        description: 'Devices, procedures, and therapies',
        altLinkText: 'See all treatments',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Airway & breathing',
            altLinkText: 'See all airway & breathing',
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Asthma',
                to: basePath + 'docs-demo-link' // Used to demo the active style
              },
              {
                text: 'Last level',
                to: 'docs-demo-link'
              },
              {
                text: 'Last level',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Cancer',
            altLinkText: 'See all cancer',
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Digestion & nutrition',
            altLinkText: 'See all digestion & nutrition',
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Heart & vascular',
            altLinkText: 'See all heart & vascular',
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Kidneys',
            altLinkText: 'See all kidneys',
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: `Men's health`,
            altLinkText: "See all men's health",
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: `Women's health`,
            altLinkText: "See all women's health",
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Neurological conditions',
            altLinkText: 'See all neurological conditions',
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                to: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Pain management',
            altLinkText: 'See all pain management',
            altTo: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                to: 'docs-demo-link'
              }
            ]
          }
        ]
      },
      {
        text: 'Device support',
        description: 'Device setup, user manuals, and troubleshooting',
        altLinkText: 'See all device support',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Child item 1',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Contact us',
        description: 'Call one of our dedicated customer service centers or send us and email',
        altLinkText: 'See all contact us',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Child item 2',
            to: 'docs-demo-link'
          }
        ]
      }
    ]
  },
  // About BSC
  {
    text: 'About Boston Scientific',
    description:
      'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
    altHref: 'docs-demo-link',
    altLinkText: 'All Boston Scientific information',
    children: [
      {
        text: 'About',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Businesses',
            to: 'docs-demo-link'
          },
          {
            text: 'Leadership',
            to: 'docs-demo-link'
          },
          {
            text: 'Locations',
            to: 'docs-demo-link'
          },
          {
            text: 'Awards & recognition',
            to: 'docs-demo-link'
          },
          {
            text: 'Ventures',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Citizenship',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all citizenship',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Child item',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Careers',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all careers',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Child item',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'News',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all news',
        altTo: 'docs-demo-link',
        children: [
          {
            text: 'Child item',
            to: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Investors',
        href: 'external-url-here'
      }
    ]
  }
];
