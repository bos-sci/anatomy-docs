import Fieldset from '../../../../library/components/Fieldset';
import InputRadio from '../../../../library/components/InputRadio';

const WithErrorAndHelpText = () => {
  return (
    <Fieldset legend="Legend" helpText="Radio group help text is programmatically associated with the fieldset." errorText="Error message">
      <InputRadio label="Radio 1" name="groupErrorHelp" value="groupErrorHelpRadio1" defaultChecked />
      <InputRadio label="Radio 2" name="groupErrorHelp" value="groupErrorHelpRadio2" />
      <InputRadio label="Radio 3" name="groupErrorHelp" value="groupErrorHelpRadio3" />
      <InputRadio label="Radio 4" name="groupErrorHelp" value="groupErrorHelpRadio4" disabled />
    </Fieldset>
  );
}

export default WithErrorAndHelpText;