// TODO: programmatically add aria-invalid="true" to fieldset / radio group when a radio group is in an invalid state

import InputRadio from '../../../../library/components/InputRadio';

const WithError = () => {
  return <>
    <form>
      <fieldset className="ads-fieldset" aria-describedby="groupErrorErrorMessage" aria-invalid="true">
        <legend className="ads-legend">Legend</legend>
        <p id="groupErrorErrorMessage" className="ads-input-error">Error message</p>
        <InputRadio label="Radio 1" name="groupError" value="errorRadio1" />
        <InputRadio label="Radio 2" name="groupError" value="errorRadio2" />
        <InputRadio label="Radio 3" name="groupError" value="errorRadio3" />
        <InputRadio label="Radio 4" name="groupError" value="errorRadio4" disabled />
      </fieldset>
    </form>
  </>;
}

export default WithError;