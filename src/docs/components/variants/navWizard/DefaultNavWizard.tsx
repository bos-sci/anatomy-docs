import NavWizard from '../../../../library/components/navigation/navWizard/NavWizard';
import structure from './structure';

const DefaultNavWizard = (): JSX.Element => {
  return <div>
    <NavWizard firstTitle="First step title" navItems={structure} />
  </div>;
}

export default DefaultNavWizard;