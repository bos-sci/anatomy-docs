import { Tag } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

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
