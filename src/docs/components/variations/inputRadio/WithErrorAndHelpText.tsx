// TODO: programmatically associate helpText with input (aria-describedby = uniqueHelpTextId)
// TODO: programmatically add aria-invalid="true" to fieldset / radio group when a radio group is in an invalid state

import Fieldset from '../../../../library/components/Fieldset';
import InputRadio from '../../../../library/components/InputRadio';

const WithErrorAndHelpText = () => {
  return <>
    <Fieldset legend="Legend" helpText="Radio group help text is programmatically associated with the fieldset." errorText="Error message" errorTextId="groupErrorHelpErrorMessage">
      <InputRadio label="Radio 1" name="groupErrorHelp" value="groupErrorHelpRadio1" aria-invalid="true" aria-describedby="groupErrorHelpErrorMessage" defaultChecked />
      <InputRadio label="Radio 2" name="groupErrorHelp" value="groupErrorHelpRadio2" aria-invalid="true" aria-describedby="groupErrorHelpErrorMessage" />
      <InputRadio label="Radio 3" name="groupErrorHelp" value="groupErrorHelpRadio3" aria-invalid="true" aria-describedby="groupErrorHelpErrorMessage" />
      <InputRadio label="Radio 4" name="groupErrorHelp" value="groupErrorHelpRadio4" aria-invalid="true" aria-describedby="groupErrorHelpErrorMessage" disabled />
    </Fieldset>
  </>;
}

export default WithErrorAndHelpText;