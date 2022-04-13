import Example from '../../../shared/components/Example';
import NavWizard, { NavItemWizard } from '../../../../library/components/navigation/navWizard/NavWizard';
import structure from './structure';

const DefaultNavWizard = (): JSX.Element => {
  return (
    <Example>
      <NavWizard defaultTitle="How can we help you?" navItems={structure} />
    </Example>
  );
}

export default DefaultNavWizard;