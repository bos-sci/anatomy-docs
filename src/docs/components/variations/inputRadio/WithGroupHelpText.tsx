import InputRadio from '../../../../library/components/InputRadio';
import InputRadioGroup from '../../../../library/components/InputRadioGroup';

const WithGroupHelpText = () => {
  return (
    <InputRadioGroup legend="Legend" helpText="Radio group help text is programmatically associated with the fieldset.">
      <InputRadio label="Radio 1" name="groupGroupHelp" value="groupHelpRadio1" defaultChecked />
      <InputRadio label="Radio 2" name="groupGroupHelp" value="groupHelpRadio2" />
      <InputRadio label="Radio 3" name="groupGroupHelp" value="groupHelpRadio3" />
      <InputRadio label="Radio 4" name="groupGroupHelp" value="groupHelpRadio4" disabled />
    </InputRadioGroup>
  );
}

export default WithGroupHelpText;