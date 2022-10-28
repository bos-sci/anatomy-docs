import Tag from '../../../../library/components/Tag';
import Example from '../../../shared/components/Example';

const FeaturedStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <Tag variant="featured">Featured tag</Tag>
      </Example>
      <Example isDarkTheme={true}>
        <Tag variant="featured" isGhost>Featured tag</Tag>
      </Example>
    </>
  );
}

export default FeaturedStyle;