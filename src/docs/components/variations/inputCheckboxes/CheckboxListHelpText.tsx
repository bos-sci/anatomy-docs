import InputCheckbox from '../../../../library/components/InputCheckbox';

const CheckboxListHelpText = () => {
  return (
    <fieldset className="ads-fieldset" aria-describedby="listHelpText">
      <legend className="ads-legend">Legend</legend>
      <p id="listHelpText" className="ads-input-help-text">This is an example of help text. It can wrap to two lines, but try not to go longer than three.</p>
      <InputCheckbox label="Checkbox 1" checked/>
      <InputCheckbox label="Checkbox 2" />
      <InputCheckbox label="Checkbox 3" />
    </fieldset>
  );
}

export default CheckboxListHelpText;