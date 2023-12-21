import Example from 'shared/components/Example';
import { Footer } from '@boston-scientific/anatomy-react';
import { navItems, legalLinks, socialLinks } from './footerData';

const ComplexFooter = (): JSX.Element => {
  return (
    <Example isFlush>
      <Footer
        navItems={navItems}
        legalLinkItems={legalLinks}
        texts={{
          tagline:
            'Boston Scientific is dedicated to transforming lives through innovative medical solutions that improve the health of patients around the world.'
        }}
        socialMedia={socialLinks}
        customizeCookiesLink="docs-demo-link"
        complianceCode="123456789"
        corporateLink
      />
    </Example>
  );
};

export default ComplexFooter;
