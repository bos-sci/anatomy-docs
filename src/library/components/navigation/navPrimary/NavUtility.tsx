import DropdownMenu from '../../DropdownMenu';
import Link from '../../Link';
import { NavItemUtility } from './NavPrimary';

interface Props {
  utilityItems: NavItemUtility[];
  ariaLabel?: string;
}

const NavUtility = ({utilityItems, ariaLabel}: Props): JSX.Element => {
  return (
    <nav className="bsds-nav-utility" aria-label={ariaLabel || 'Utility'}>
      <ul className="bsds-nav">
        {utilityItems.map((utilityItem, i) =>
          <li key={'utilityItem' + i} className="bsds-nav-item">
            {utilityItem.children ?
              <DropdownMenu triggerText={utilityItem.text} className="bsds-nav-link">
                {utilityItem.children.map((child, childI) => (
                  <Link key={child.text + childI} href={child.href} to={child.slug}>{child.text}</Link>
                ))}
              </DropdownMenu>
              : <Link to={utilityItem.slug} href={utilityItem.href} className="bsds-nav-link">{utilityItem.text}</Link>
            }
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavUtility;