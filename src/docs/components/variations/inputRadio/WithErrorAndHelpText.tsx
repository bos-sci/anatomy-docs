// TODO: programmatically associate helpText with input (aria-describedby = uniqueHelpTextId)
// TODO: programmatically add aria-invalid="true" to fieldset / radio group when a radio group is in an invalid state

import InputRadio from '../../../../library/components/InputRadio';

const WithErrorAndHelpText = () => {
  return <>
    <fieldset className="ads-fieldset" aria-describedby="groupErrorHelpHelpText groupErrorHelpErrorMessage" aria-invalid="true">
      <legend className="ads-legend">Legend</legend>
      <p id="groupErrorHelpErrorMessage" className="ads-input-error">Error message</p>
      <p id="groupErrorHelpHelpText" className="ads-input-help-text">Radio group help text is programmatically associated with the fieldset.</p>
      <InputRadio label="Radio 1" name="groupErrorHelp" value="groupErrorHelpRadio1" defaultChecked />
      <InputRadio label="Radio 2" name="groupErrorHelp" value="groupErrorHelpRadio2" />
      <InputRadio label="Radio 3" name="groupErrorHelp" value="groupErrorHelpRadio3" />
      <InputRadio label="Radio 4" name="groupErrorHelp" value="groupErrorHelpRadio4" disabled />
    </fieldset>
  </>;
}

export default WithErrorAndHelpText;