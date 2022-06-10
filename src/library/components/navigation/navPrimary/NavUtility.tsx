import Dropdown from '../../Dropdown';
import Link from '../../Link';
import { NavItemUtility } from './NavPrimary';

interface Props {
  utilityItems: NavItemUtility[];
  ariaLabel?: string;
}

const NavUtility = ({utilityItems, ariaLabel}: Props): JSX.Element => {
  return (
    <nav className="ads-nav-utility" aria-label={ariaLabel || 'Utility'}>
      <ul className="ads-nav">
        {utilityItems.map((utilityItem, i) =>
          // TODO: Should this be a select instead of a dropdown?
          <li key={'utilityItem' + i} className="ads-nav-item">
            {utilityItem.children ?
              <Dropdown triggerText={utilityItem.text} className="ads-nav-link">
                {utilityItem.children.map((child, childI) => (
                  <Link key={child.text + childI} href={child.href} to={child.slug}>{child.text}</Link>
                ))}
              </Dropdown>
              : <Link to={utilityItem.slug} href={utilityItem.href} className="ads-nav-link">{utilityItem.text}</Link>
            }
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavUtility;