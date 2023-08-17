import Example from 'shared/components/Example';
import { ContentCard } from '@boston-scientific/anatomy-react';

const WithLink = (): JSX.Element => {
  return (
    <Example>
      <ContentCard
        texts={{
          cardTitle: 'Card title',
          cardDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
        }}
        headingLevel="h4"
        linkHref="docs-demo-link"
        actionLinkText="Call-to-action"
        actionLink
      />
    </Example>
  );
};

export default WithLink;
