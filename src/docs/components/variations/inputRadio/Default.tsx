import InputRadio from '../../../../library/components/InputRadio';

const Default = () => {
  return <>
    <form>
      <fieldset className="ads-fieldset">
        <legend className="ads-legend">Legend</legend>
        <InputRadio label="Radio 1" name="groupDefault" value="defaultRadio1" checked />
        <InputRadio label="Radio 2" name="groupDefault" value="defaultRadio2" />
        <InputRadio label="Radio 3" name="groupDefault" value="defaultRadio3" />
        <InputRadio label="Radio 4" name="groupDefault" value="defaultRadio4" />
      </fieldset>
    </form>
  </>;
}

export default Default;