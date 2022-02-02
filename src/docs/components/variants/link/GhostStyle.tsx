import Link from '../../../../library/components/Link';
import Example from '../../../shared/components/Example';

const GhostStyle = (): JSX.Element => {
  return (
    <Example isDarkTheme={true}>
      <Link href="#" variant="ghost">Ghost link</Link>
    </Example>
  );
}

export default GhostStyle;