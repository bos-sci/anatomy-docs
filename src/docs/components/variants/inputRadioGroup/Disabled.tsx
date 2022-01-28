import InputRadio from '../../../../library/components/InputRadio';
import RadioGroup from '../../../../library/components/RadioGroup';
import Example from '../../../shared/components/Example';

const Disabled = (): JSX.Element => {
  return (
    <Example>
      <RadioGroup legend="Disabled radio group" disabled>
        <InputRadio label="Radio 1" name="groupDisabled" value="defaultRadio1" defaultChecked />
        <InputRadio label="Radio 2" name="groupDisabled" value="defaultRadio2" />
        <InputRadio label="Radio 3" name="groupDisabled" value="defaultRadio3" />
      </RadioGroup>
    </Example>
  );
}

export default Disabled;