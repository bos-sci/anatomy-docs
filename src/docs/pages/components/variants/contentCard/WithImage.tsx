import Example from 'docs/shared/components/Example';
import ContentCard from 'library/components/ContentCard';
import Image from 'library/components/Image';
import image16to9 from 'docs/assets/images/16to9.jpg';

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
