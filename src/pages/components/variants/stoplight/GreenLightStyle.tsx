import { Stoplight } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const GreenLightStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <Stoplight lightColor="green" size="assertive">
          Assertive green light
        </Stoplight>
        <Stoplight lightColor="green">Default green light</Stoplight>
        <Stoplight lightColor="green" size="subtle">
          Subtle green light
        </Stoplight>
      </Example>
      <Example isDarkTheme>
        <Stoplight lightColor="green" textColor="ghost" size="assertive">
          Assertive green light
        </Stoplight>
        <Stoplight lightColor="green" textColor="ghost">
          Default green light
        </Stoplight>
        <Stoplight lightColor="green" textColor="ghost" size="subtle">
          Subtle green light
        </Stoplight>
      </Example>
    </>
  );
};

export default GreenLightStyle;
