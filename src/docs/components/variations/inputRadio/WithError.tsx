// TODO: programmatically add aria-invalid="true" to fieldset / radio group when a radio group is in an invalid state

import Fieldset from '../../../../library/components/Fieldset';
import InputRadio from '../../../../library/components/InputRadio';

const WithError = () => {
  return <>
    <form>
      <Fieldset legend="Legend" errorText="Error message" errorTextId="groupErrorErrorMessage">
        <InputRadio label="Radio 1" name="groupError" value="errorRadio1" aria-invalid="true" aria-describedby="groupErrorErrorMessage" />
        <InputRadio label="Radio 2" name="groupError" value="errorRadio2" aria-invalid="true" aria-describedby="groupErrorErrorMessage" />
        <InputRadio label="Radio 3" name="groupError" value="errorRadio3" aria-invalid="true" aria-describedby="groupErrorErrorMessage" />
        <InputRadio label="Radio 4" name="groupError" value="errorRadio4" aria-invalid="true" aria-describedby="groupErrorErrorMessage" disabled />
      </Fieldset>
    </form>
  </>;
}

export default WithError;