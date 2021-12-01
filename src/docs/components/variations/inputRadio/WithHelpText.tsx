// TODO: programmatically associate helpText with input (aria-describedby = uniqueHelpTextId)

import InputRadio from '../../../../library/components/InputRadio';

const WithHelpText = () => {
  return <>
    <fieldset className="ads-fieldset">
      <legend className="ads-legend">Legend</legend>
      <InputRadio label="Radio 1" name="groupHelp" value="helpRadio1" disabled />
      <InputRadio label="Radio 2" name="groupHelp" value="helpRadio2" helpText="Radio button help text is programmatically associated with one radio button in a radio group. It can wrap to two lines, but try not to go longer than three." defaultChecked />
      <InputRadio label="Radio 3" name="groupHelp" value="helpRadio3" />
      <InputRadio label="Radio 4" name="groupHelp" value="helpRadio4" />
    </fieldset>
  </>;
}

export default WithHelpText;