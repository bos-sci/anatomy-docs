import Dropdown from '../../Dropdown';
import Link from '../../Link';
import { NavItemUtility } from './NavPrimary';

interface Props {
  utilityItems: NavItemUtility[];
  ariaLabel?: string;
}

const NavUtility = ({utilityItems, ariaLabel}: Props): JSX.Element => {
  return (
    <nav className="lib-nav-utility" aria-label={ariaLabel || 'Utility'}>
      <ul className="lib-nav">
        {utilityItems.map((utilityItem, i) =>
          <li key={'utilityItem' + i} className="lib-nav-item">
            {utilityItem.children ?
              <Dropdown triggerText={utilityItem.text} className="lib-nav-link">
                {utilityItem.children.map((child, childI) => (
                  <Link key={child.text + childI} href={child.href} to={child.slug}>{child.text}</Link>
                ))}
              </Dropdown>
              : <Link to={utilityItem.slug} href={utilityItem.href} className="lib-nav-link">{utilityItem.text}</Link>
            }
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavUtility;