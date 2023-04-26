import Dropdown from '../../Dropdown';
import Link from '../../Link';
import { NavItemUtility } from './NavPrimary';

interface Props {
  utilityItems: NavItemUtility[];
  ariaLabel?: string;
}

const NavUtility = ({ utilityItems, ariaLabel }: Props): JSX.Element => {
  return (
    <nav className="bsds-nav-utility" aria-label={ariaLabel || 'Utility'}>
      <ul className="bsds-nav">
        {utilityItems.map((utilityItem) => (
          <li key={'utilityItem' + utilityItem.text} className="bsds-nav-item">
            {utilityItem.children ? (
              <Dropdown triggerText={utilityItem.text} className="bsds-nav-link" menuPosition="bottom-end">
                {utilityItem.children.map((child) => (
                  <Link key={child.text + child.slug} href={child.href} to={child.slug}>
                    {child.text}
                  </Link>
                ))}
              </Dropdown>
            ) : (
              <Link to={utilityItem.slug} href={utilityItem.href} className="bsds-nav-link">
                {utilityItem.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavUtility;
