import Badge from '../../../../library/components/Badge';
import Example from '../../../shared/components/Example';

const AssertiveStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <Badge variant="assertive">Assertive badge</Badge>
      </Example>
      <Example isDarkTheme={true}>
        <Badge variant="assertive-dark">Assertive badge</Badge>
      </Example>
    </>
  );
}

export default AssertiveStyle;