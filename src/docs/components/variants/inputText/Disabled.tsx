import InputText from '../../../../library/components/InputText';

const Disabled = (): JSX.Element => {
  return<>
    <InputText label="Disabled text input" disabled />
    <InputText label="Disabled text input" value="Value" disabled />
  </>;
}

export default Disabled;