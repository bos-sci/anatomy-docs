import Example from 'shared/components/Example';
import { ProductCard } from '@boston-scientific/anatomy-react';
import { Image } from '@boston-scientific/anatomy-react';
import image5050 from 'assets/images/50-50-split.jpg';

const WithImage = (): JSX.Element => {
  return (
    <>
      <Example>
        <ProductCard
          texts={{
            title: 'Product card title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
          }}
          headingLevel="h4"
          linkTo="docs-demo-link"
          image={<Image ratio="50:50" src={image5050} alt="Demo placeholder for a product image." />}
        />
      </Example>
      <Example>
        <ProductCard
          texts={{
            title: 'Product card title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
          }}
          headingLevel="h4"
          linkTo="docs-demo-link"
          image={<Image ratio="1:1" src={image5050} alt="Demo placeholder for a product image." />}
        />
      </Example>
    </>
  );
};

export default WithImage;
