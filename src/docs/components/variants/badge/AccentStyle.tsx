import Badge from '../../../../library/components/Badge';
import Example from '../../../shared/components/Example';

const AccentStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <Badge variant="accent">Accent badge</Badge>
      </Example>
      <Example isDarkTheme={true}>
        <Badge variant="accent-dark">Accent badge</Badge>
      </Example>
    </>
  );
}

export default AccentStyle;