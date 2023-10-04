import Example from 'shared/components/Example';
import { ContentCard } from '@boston-scientific/anatomy-react';
import { Image } from '@boston-scientific/anatomy-react';
import image16to9 from 'assets/images/16to9.jpg';

const WithImage = (): JSX.Element => {
  return (
    <Example>
      <ContentCard
        texts={{
          cardTitle: 'Card title',
          cardDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
        }}
        headingLevel="h4"
        image={<Image src={image16to9} isDecorative />}
      />
    </Example>
  );
};

export default WithImage;
