import InputCheckbox from '../../../../library/components/InputCheckbox';

const Readonly = (): JSX.Element => {
  return <>
    <InputCheckbox label="Readonly checkbox" readOnly/>
    <InputCheckbox label="Readonly checked checkbox" readOnly defaultChecked />
  </>;
}

export default Readonly;