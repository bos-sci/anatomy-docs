import Stoplight from '../../../../library/components/Stoplight';
import Example from '../../../shared/components/Example';

const YellowLightStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <Stoplight lightColor="yellow" size="assertive">Assertive yellow light</Stoplight>
        <Stoplight lightColor="yellow">Default yellow light</Stoplight>
        <Stoplight lightColor="yellow" size="subtle">Subtle yellow light</Stoplight>
      </Example>
      <Example isDarkTheme={true}>
        <Stoplight lightColor="yellow" textColor="ghost" size="assertive">Assertive yellow light</Stoplight>
        <Stoplight lightColor="yellow" textColor="ghost">Default yellow light</Stoplight>
        <Stoplight lightColor="yellow" textColor="ghost" size="subtle">Subtle yellow light</Stoplight>
      </Example>
    </>
  );
}

export default YellowLightStyle;