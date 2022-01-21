import InputCheckbox from '../../../../library/components/InputCheckbox';

const Disabled = (): JSX.Element => {
  return <>
    <InputCheckbox label="Disabled checkbox" disabled/>
    <InputCheckbox label="Disabled checked checkbox" disabled defaultChecked />
  </>;
}

export default Disabled;