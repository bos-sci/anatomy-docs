import Badge from '../../../../library/components/Badge';
import Example from '../../../shared/components/Example';

const DefaultStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <Badge>Default badge</Badge>
      </Example>
      <Example isDarkTheme={true}>
        <Badge variant="dark">Default badge</Badge>
      </Example>
    </>
  );
}

export default DefaultStyle;