import { ContentCard } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithShadow = (): JSX.Element => {
  return (
    <Example>
      <ContentCard
        texts={{
          cardTitle: 'Card title',
          cardDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
        }}
        headingLevel="h4"
        actionLinkText="Call-to-action"
        linkHref="docs-demo-link"
        actionLink
        dropShadow
      />
    </Example>
  );
};

export default WithShadow;
