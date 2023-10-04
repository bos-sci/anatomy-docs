import { Tag } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <Tag>Default tag</Tag>
      </Example>
      <Example isDarkTheme>
        <Tag isGhost>Default tag</Tag>
      </Example>
    </>
  );
};

export default DefaultStyle;
