import Example from 'shared/components/Example';
import { CardGroup } from '@boston-scientific/anatomy-react';

const ThreeUp = (): JSX.Element => {
  return (
    <Example>
      <CardGroup cardLayout="threeUp">
        <div className="docs-wire-card">Card 1</div>
        <div className="docs-wire-card">Card 2</div>
        <div className="docs-wire-card">Card 3</div>
      </CardGroup>
    </Example>
  );
};

export default ThreeUp;
