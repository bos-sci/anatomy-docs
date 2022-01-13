import InputCheckbox from '../../../../library/components/InputCheckbox';

const Default = (): JSX.Element => {
  return <>
    <InputCheckbox label="Default checkbox" />
    <InputCheckbox label="Disabled checkbox" disabled />
    <InputCheckbox label="Disabled checked" defaultChecked disabled />
  </>;
}

export default Default;