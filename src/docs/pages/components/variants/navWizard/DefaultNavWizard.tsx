import NavWizard from 'library/components/navigation/navWizard/NavWizard';
import Example from 'docs/shared/components/Example';
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
