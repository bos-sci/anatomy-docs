import InputRadio from '../../../../library/components/InputRadio';
import RadioGroup from '../../../../library/components/RadioGroup';
import Example from '../../../shared/components/Example';

const WithHelp = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <RadioGroup
          legend="Legend"
          helpText="This is an example help text. It can wrap to two lines, but try not to go longer than three.">
          <InputRadio label="Radio 1" name="groupHelp" value="helpRadio1" />
          <InputRadio
            label="Radio 2"
            name="groupHelp"
            value="helpRadio2"
            helpText="This is an example help text. It can wrap to two lines, but try not to go longer than three."
            defaultChecked />
          <InputRadio label="Radio 3" name="groupHelp" value="helpRadio3" />
        </RadioGroup>
      </div>
    </Example>
  );
}

export default WithHelp;