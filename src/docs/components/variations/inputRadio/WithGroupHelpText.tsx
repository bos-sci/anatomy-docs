// TODO: programmatically associate helpText with input (aria-describedby = uniqueHelpTextId)

import InputRadio from '../../../../library/components/InputRadio';

const WithGroupHelpText = () => {
  return <>
    <fieldset className="ads-fieldset" aria-describedby="groupHelpHelpText">
      <legend className="ads-legend">Legend</legend>
      <p id="groupHelpHelpText" className="ads-input-help-text">Radio group help text is programmatically associated with the fieldset.</p>
      <InputRadio label="Radio 1" name="groupGroupHelp" value="groupHelpRadio1" checked />
      <InputRadio label="Radio 2" name="groupGroupHelp" value="groupHelpRadio2" />
      <InputRadio label="Radio 3" name="groupGroupHelp" value="groupHelpRadio3" />
      <InputRadio label="Radio 4" name="groupGroupHelp" value="groupHelpRadio4" disabled />
    </fieldset>
  </>;
}

export default WithGroupHelpText;