import Tag from 'library/components/Tag';
import Example from 'docs/shared/components/Example';

const SubtleStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <Tag variant="subtle">Subtle tag</Tag>
      </Example>
      <Example isDarkTheme>
        <Tag variant="subtle" isGhost>
          Subtle tag
        </Tag>
      </Example>
    </>
  );
};

export default SubtleStyle;
