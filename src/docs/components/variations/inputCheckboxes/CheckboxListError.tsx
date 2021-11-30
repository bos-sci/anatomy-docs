import InputCheckbox from '../../../../library/components/InputCheckbox';

const CheckboxListError = () => {
  return (
    <fieldset className="ads-fieldset" aria-describedby="listErrorMessage" aria-invalid="true">
      <legend className="ads-legend">Legend</legend>
      <p id="listErrorMessage" className="ads-input-error">Error Message</p>
      <InputCheckbox label="Checkbox 1" checked/>
      <InputCheckbox label="Checkbox 2" />
      <InputCheckbox label="Checkbox 3" />
    </fieldset>
  );
}

export default CheckboxListError;