import NavWizard from '../../../../library/components/navigation/navWizard/NavWizard';
import useTitle from '../../../shared/hooks/useTitle';
import navWizardData from './navWizardData-3Step';

const DefaultNavWizard = (): JSX.Element => {
  useTitle({titlePrefix: `Example Wizard Navigation - Components`});
  return (
    <div className="demo-standalone">
      <NavWizard firstTitle="First step title" navItems={navWizardData} />
    </div>
  );
}

export default DefaultNavWizard;