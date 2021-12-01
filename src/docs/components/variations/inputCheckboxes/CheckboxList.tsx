import InputCheckbox from '../../../../library/components/InputCheckbox';

const CheckboxList = () => {
  return (
    <fieldset className="ads-fieldset">
      <legend className="ads-legend">Legend</legend>
      <InputCheckbox label="Checkbox 1" />
      <InputCheckbox label="Checkbox 2" />
      <InputCheckbox label="Checkbox 3" />
    </fieldset>
  );
}

export default CheckboxList;