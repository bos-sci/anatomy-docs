import Stoplight from '../../../../library/components/Stoplight';
import Example from '../../../shared/components/Example';

const DefaultStoplight = (): JSX.Element => {
  return (
    <Example>
      <Stoplight lightColor="red">Red light</Stoplight>
      <Stoplight lightColor="yellow">Yellow light</Stoplight>
      <Stoplight lightColor="green">Green light</Stoplight>
    </Example>
  );
}

export default DefaultStoplight;