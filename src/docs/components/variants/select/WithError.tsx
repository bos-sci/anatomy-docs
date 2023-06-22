import Select from '../../../../library/components/Select';
import SelectOption from '../../../../library/components/SelectOption';
import Example from '../../../shared/components/Example';

const WithError = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <Select id="selectWithError" label="Select" placeholder="Placeholder text" forceValidation>
          <SelectOption label="Option 1" value="Option 1" />
          <SelectOption label="Option 2" value="Option 2" />
          <SelectOption label="Option 3" value="Option 3" />
        </Select>
      </div>
    </Example>
  );
};

export default WithError;
