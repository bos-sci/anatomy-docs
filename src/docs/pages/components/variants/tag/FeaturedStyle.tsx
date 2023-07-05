import Tag from 'library/components/Tag';
import Example from 'docs/shared/components/Example';

const FeaturedStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <Tag variant="featured">Tag</Tag>
      </Example>
      <Example isDarkTheme>
        <Tag variant="featured" isGhost>
          Tag
        </Tag>
      </Example>
    </>
  );
};

export default FeaturedStyle;
