import Tag from '../../../../library/components/Tag';
import Example from '../../../shared/components/Example';

const DefaultStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <Tag>Default tag</Tag>
      </Example>
      <Example isDarkTheme={true}>
        <Tag isGhost>Default tag</Tag>
      </Example>
    </>
  );
}

export default DefaultStyle;