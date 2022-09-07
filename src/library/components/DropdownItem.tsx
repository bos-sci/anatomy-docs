import { ReactElement } from 'react';
import { Props as ButtonProps } from './Button';
import { Props as LinkProps } from './Link';
import { Props as DropdownHeadingProps } from './DropdownHeading';

export type DropdownAction = ReactElement<ButtonProps | LinkProps | DropdownHeadingProps>;

interface Props {
    item: DropdownAction;
    isHighlightAction?: boolean;
}

const DropdownItem = (props: Props) => {
  return (
    <li className={`bsds-dropdown-item${props.isHighlightAction ? ' bsds-dropdown-menu-highlight' : ''}`} role="none">
      {props.item}
    </li>
  );
}

export default DropdownItem