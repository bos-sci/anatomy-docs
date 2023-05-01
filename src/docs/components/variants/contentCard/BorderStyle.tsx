import Example from '../../../shared/components/Example';
import ContentCard from '../../../../library/components/ContentCard';

const BorderStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <ContentCard
          texts={{
            cardTitle: 'Card title',
            cardDescription:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
          }}
          linkTitle={false}
          variant="border-light"
          headingLevel="h4"
        />
      </Example>

      <Example isDarkTheme={true}>
        <ContentCard
          texts={{
            cardTitle: 'Card title',
            cardDescription:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
          }}
          variant="border-ghost"
          linkTitle={false}
          headingLevel="h4"
        />
      </Example>
    </>
  );
};

export default BorderStyle;
