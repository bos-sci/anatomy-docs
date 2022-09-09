import { VariantProps } from '../Preview';
import AssertiveDropdown from './AssertiveDropdown';
import DefaultDropdown from './DefaultDropdown';
import DefaultStyleDropdown from './DefaultStyleDropdown';
import GhostDropdown from './GhostDropdown';
import GroupDropdown from './GroupDropdown';
import HighlightDropdown from './HighlightDropdown';
import IconDropdown from './IconDropdown';
import SubtleDropdown from './SubtleDropdown';

const DropdownController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'dropdownGroup':
      return <GroupDropdown />;
    case 'dropdownHighlight':
      return <HighlightDropdown />;
    case 'dropdownIcon':
      return <IconDropdown />;
    // Styles
    case 'dropdownDefault':
      return <DefaultStyleDropdown />;
    case 'dropdownAssertive':
      return <AssertiveDropdown />;
    case 'dropdownSubtle':
      return <SubtleDropdown />;
    case 'dropdownGhost':
      return <GhostDropdown />;

    default:
      return <DefaultDropdown />;
  }
}

export default DropdownController;