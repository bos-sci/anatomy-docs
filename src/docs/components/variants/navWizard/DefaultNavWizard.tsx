import NavWizard from '../../../../library/components/navigation/navWizard/NavWizard';
import structure from './structure';
import structureContextual from './structureContextual';

const DefaultNavWizard = (): JSX.Element => {
  return <div>
    <NavWizard firstTitle="First step title" navItems={structure} />
    <NavWizard firstTitle="How can we help you?" navItems={structureContextual} />
  </div>;
}

export default DefaultNavWizard;