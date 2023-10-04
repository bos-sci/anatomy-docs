import { Tag } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

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
