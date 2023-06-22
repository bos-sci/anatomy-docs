import Select from '../../../../library/components/Select';
import Option from '../../../../library/components/Option';
import Example from '../../../shared/components/Example';

const Disabled = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <Select id="selectDisabled" label="Select" disabled>
          <Option label="" value="" />
          <Option label="Option 1" value="Option 1" />
          <Option label="Option 2" value="Option 2" />
          <Option label="Option 3" value="Option 3" />
        </Select>
      </div>
    </Example>
  );
};

export default Disabled;
