import NavWizard from '../../../../library/components/navigation/navWizard/NavWizard';
import Example from '../../../shared/components/Example';
import navWizardData from './navWizardData-3Step';

const DefaultNavWizard = (): JSX.Element => {
  return (
    <Example>
      <NavWizard firstTitle="First step title" navItems={navWizardData} />
    </Example>
  );
}

export default DefaultNavWizard;