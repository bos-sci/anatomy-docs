import { ReactElement } from 'react';
import { Props as ButtonProps } from 'library/components/Button';
import { Props as LinkProps } from 'library/components/Link';
import { Props as DropdownGroupNameProps } from 'library/components/DropdownGroupName';

export type DropdownItemElements = ReactElement<ButtonProps | LinkProps | DropdownGroupNameProps>;

interface Props {
  item: DropdownItemElements;
  isHighlightedAction?: boolean;
}

const DropdownItem = (props: Props) => {
  return (
    <li
      className={`bsds-dropdown-item${props.isHighlightedAction ? ' bsds-dropdown-item-highlighted' : ''}`}
      role="none"
    >
      {props.item}
    </li>
  );
};

export default DropdownItem;
