import Example from '../../../shared/components/Example';
import ProductCard from '../../../../library/components/ProductCard';
import Tag from '../../../../library/components/Tag';

const WithTag = (): JSX.Element => {
  return (
    <Example>
      <ProductCard
        tag={<Tag variant="">Product family name</Tag>}
        texts={{
          title: 'Product card title',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
        }}
        linkTo="docs-demo-link"
        headingLevel="h4"
      />
    </Example>
  );
};

export default WithTag;
