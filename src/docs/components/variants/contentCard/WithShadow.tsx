import ContentCard from '../../../../library/components/ContentCard';
import Example from '../../../shared/components/Example';

const WithShadow = (): JSX.Element => {
  return (
    <Example>
      <ContentCard
        texts={{
          cardTitle: 'Card title',
          cardDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.',
        }}
        headingLevel="h4"
        actionLink={true}
        actionLinkText="Call-to-action"
        linkHref="docs-demo-link"
        dropShadow={true}
      />
    </Example>
  );
};

export default WithShadow;
