import Example from 'shared/components/Example';
import { CardGroup } from '@boston-scientific/anatomy-react';

const TwoUp = (): JSX.Element => {
  return (
    <Example>
      <CardGroup cardLayout="twoUp">
        <div className="docs-wire-card">Card 1</div>
        <div className="docs-wire-card">Card 2</div>
      </CardGroup>
    </Example>
  );
};

export default TwoUp;
