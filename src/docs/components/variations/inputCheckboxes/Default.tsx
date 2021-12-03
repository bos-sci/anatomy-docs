import InputCheckbox from '../../../../library/components/InputCheckbox';

const Default = () => {
  return <>
    <InputCheckbox label="Default checkbox" />
    <InputCheckbox label="Disabled checkbox" disabled />
    <InputCheckbox label="Disabled checked" defaultChecked disabled />
  </>;
}

export default Default;