import Example from '../../../shared/components/Example';
import ContentCard from '../../../../library/components/ContentCard';

const DefaultContentCard = (): JSX.Element => {
  return (
    <Example>
      <ContentCard
        texts={{
          cardTitle: 'Card title',
          cardDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
        }}
        linkTitle={false}
        headingLevel="h2"
      />
    </Example>
  );
};

export default DefaultContentCard;
