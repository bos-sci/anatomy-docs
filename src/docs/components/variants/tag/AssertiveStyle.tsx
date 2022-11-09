import Tag from '../../../../library/components/Tag';
import Example from '../../../shared/components/Example';

const AssertiveStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <Tag variant="assertive">Assertive tag</Tag>
      </Example>
      <Example isDarkTheme={true}>
        <Tag variant="assertive" isGhost>Assertive tag</Tag>
      </Example>
    </>
  );
}

export default AssertiveStyle;