import InputRadio from 'library/components/InputRadio';
import RadioGroup from 'library/components/RadioGroup';
import Example from 'docs/shared/components/Example';

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
          <RadioGroup legend="Disabled button style radio group" buttonGroup disabled>
            <InputRadio label="Radio 1" name="groupButtonStyleDisabled" value="groupButtonStyleDisabled1" checked />
            <InputRadio label="Radio 2" name="groupButtonStyleDisabled" value="groupButtonStyleDisabled2" />
            <InputRadio
              label="Radio 3"
              name="groupButtonStyleDisabled"
              value="groupButtonStyleDisabled3"
              inputUnavailable
            />
          </RadioGroup>
        </div>
      </Example>
    </>
  );
};

export default Disabled;
