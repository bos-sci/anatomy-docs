import Example from 'shared/components/Example';
import { ContentCard } from '@boston-scientific/anatomy-react';
import { Tag } from '@boston-scientific/anatomy-react';

const WithTag = (): JSX.Element => {
  return (
    <Example>
      <ContentCard
        texts={{
          cardTitle: 'Card title',
          cardDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
        }}
        headingLevel="h4"
        tag={<Tag>Default Tag</Tag>}
      />
    </Example>
  );
};

export default WithTag;
