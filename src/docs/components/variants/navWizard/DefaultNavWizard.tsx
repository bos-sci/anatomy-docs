import NavWizard from '../../../../library/components/navigation/navWizard/NavWizard';
import Example from '../../../shared/components/Example';
import useTitle from '../../../shared/hooks/useTitle';
import navWizardData from './navWizardData-3Step';

const DefaultNavWizard = (): JSX.Element => {
  useTitle({titlePrefix: `Example Wizard Navigation - Components`});
  return (
    <Example>
      <NavWizard firstTitle="First step title" navItems={navWizardData} />
    </Example>
  );
}

export default DefaultNavWizard;