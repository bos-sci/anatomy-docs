import InputRadio from '../../../../library/components/InputRadio';
import RadioGroup from '../../../../library/components/RadioGroup';
import Example from '../../../shared/components/Example';

const Disabled = (): JSX.Element => {
  return (
    <>
      <Example>
        <div className="bsds-form-control">
          <RadioGroup legend="Disabled radio group" disabled>
            <InputRadio label="Radio 1" name="groupDisabled" value="defaultRadio1" defaultChecked />
            <InputRadio label="Radio 2" name="groupDisabled" value="defaultRadio2" />
            <InputRadio label="Radio 3" name="groupDisabled" value="defaultRadio3" />
          </RadioGroup>
        </div>
      </Example>
      <Example>
        <div className="bsds-form-control">
          <RadioGroup legend="Disabled button group" buttonGroup>
            <InputRadio
              label="Radio 1"
              name="buttonGroupRadioDisabledDisabled"
              value="buttonGroupRadioDisabled1"
              checked
              disabled
            />
            <InputRadio label="Radio 2" name="buttonGroupRadioDisabled" value="buttonGroupRadioDisabled2" disabled />
            <InputRadio label="Radio 3" name="buttonGroupRadioDisabled" value="buttonGroupRadioDisabled3" disabled />
          </RadioGroup>
        </div>
      </Example>
    </>
  );
};

export default Disabled;
