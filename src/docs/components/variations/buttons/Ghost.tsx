import Button from '../../../../library/components/Button';
import Icon from '../../../../library/components/icon/Icon';

const Ghost = () => {
  return <>
    <Button type="button" variant="ghost">Ghost button</Button>
    <Button type="button" variant="ghost" disabled>Disabled button</Button>
    <Button type="button" variant="ghost"><Icon name="plus" className="u-icon-left" /> Icon on left</Button>
    <Button type="button" variant="ghost" icon="plus" aria-label="icon button" />
  </>;
}

export default Ghost;