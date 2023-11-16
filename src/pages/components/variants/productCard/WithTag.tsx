import Example from 'shared/components/Example';
import { ProductCard } from '@boston-scientific/anatomy-react';
import { Tag } from '@boston-scientific/anatomy-react';

const WithTag = (): JSX.Element => {
  return (
    <Example>
      <ProductCard
        tag={<Tag>Product family name</Tag>}
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
