import NavWizard from '../../../../library/components/navigation/navWizard/NavWizard';
import structure from './structure';
import structureContextual from './structureContextual';

const DefaultNavWizard = (): JSX.Element => {
  return <div>
    <NavWizard defaultTitle="First step title" navItems={structure} />
    <NavWizard defaultTitle="How can we help you?" navItems={structureContextual} />
  </div>;
}

export default DefaultNavWizard;