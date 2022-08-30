import { DropdownItem } from "./DropdownMenu";

interface Props {
    item: DropdownItem;
    isHighlightAction?: boolean;
}

const DropdownMenuItem = (props: Props) => {
  return (
    <li className={`bsds-dropdown-item${props.isHighlightAction ? ' bsds-dropdown-menu-highlight' : ''}`} role="none">
      {props.item}
    </li> 
  );
}

export default DropdownMenuItem