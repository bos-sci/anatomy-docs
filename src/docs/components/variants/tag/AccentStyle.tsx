import Tag from '../../../../library/components/Tag';
import Example from '../../../shared/components/Example';

const AccentStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <Tag variant="accent">Accent tag</Tag>
      </Example>
      <Example isDarkTheme>
        <Tag variant="accent" isGhost>
          Accent tag
        </Tag>
      </Example>
    </>
  );
};

export default AccentStyle;
