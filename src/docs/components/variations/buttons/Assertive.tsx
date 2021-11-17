// TODO:
// do we want to wrap button text in a span to help with text wrapping for text+icon buttons and icon sizing on icon-only buttons?

import Button from '../../../../library/components/Button';
import Icon from '../../../../library/components/icon/Icon';

const Assertive = () => {
  return <>
    <Button type="button" variant="assertive">Assertive button</Button>
    <Button type="button" variant="assertive" disabled>Disabled button</Button>
    <Button type="button" variant="assertive">
      Icon right
      <Icon name="chevronRight" className="u-icon-right" size="2x"/>
    </Button>
    <Button type="button" variant="assertive" icon="plus" aria-label="icon button"/>
    <Button type="button" variant="assertive" icon="plus" aria-label="icon button" disabled/>
  </>;
}

export default Assertive;