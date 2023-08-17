import { NavWizard } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';
import navWizardData from './navWizardData-3Step';

const DefaultNavWizard = (): JSX.Element => {
  return (
    <Example>
      <NavWizard
        texts={{
          firstTitle: 'First step title',
          wizardNavAriaLabel: 'wizard'
        }}
        navItems={navWizardData}
      />
    </Example>
  );
};

export default DefaultNavWizard;
