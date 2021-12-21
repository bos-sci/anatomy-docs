// TODO: programmatically associate helpText with input (aria-describedby = uniqueHelpTextId)

import InputRadio from '../../../../library/components/InputRadio';
import RadioGroup from '../../../../library/components/RadioGroup';

const WithHelpText = (): JSX.Element => {
  return (
    <RadioGroup legend="Legend">
      <InputRadio label="Radio 1" name="groupHelp" value="helpRadio1" disabled />
      <InputRadio label="Radio 2" name="groupHelp" value="helpRadio2" helpText="Radio button help text is programmatically associated with one radio button in a radio group. It can wrap to two lines, but try not to go longer than three." defaultChecked />
      <InputRadio label="Radio 3" name="groupHelp" value="helpRadio3" />
      <InputRadio label="Radio 4" name="groupHelp" value="helpRadio4" />
    </RadioGroup>
  );
}

export default WithHelpText;