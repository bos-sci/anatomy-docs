import InputText from '../../../../library/components/InputText';

const Readonly = (): JSX.Element => {
  return <>
    <InputText label="Readonly text input" readOnly />
    <InputText label="Readonly text input" value="Value" readOnly />
  </>;
}

export default Readonly;