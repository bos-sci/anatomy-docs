import Example from 'docs/shared/components/Example';
import ProductCard from 'library/components/ProductCard';

const SemanticCardTitle = (): JSX.Element => {
  return (
    <Example>
      <ProductCard
        texts={{
          title: 'Product card title',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
        }}
        headingLevel="h4"
        linkTo="docs-demo-link"
      />
    </Example>
  );
};

export default SemanticCardTitle;
