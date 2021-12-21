import InputText from '../../../../library/components/InputText';

const WithHelpText = (): JSX.Element => {
  return <InputText label="Input with help text" placeholder="Placeholder text" helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three." />;
}

export default WithHelpText;