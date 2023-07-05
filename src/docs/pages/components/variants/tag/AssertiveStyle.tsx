import Tag from 'library/components/Tag';
import Example from 'docs/shared/components/Example';

const AssertiveStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <Tag variant="assertive">Assertive tag</Tag>
      </Example>
      <Example isDarkTheme>
        <Tag variant="assertive" isGhost>
          Assertive tag
        </Tag>
      </Example>
    </>
  );
};

export default AssertiveStyle;
