import Dropdown from 'library/components/Dropdown';
import Link from 'library/components/Link';
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
                  <Link key={child.text + (child.to || child.href)} href={child.href} to={child.to}>
                    {child.text}
                  </Link>
                ))}
              </Dropdown>
            ) : (
              <Link to={utilityItem.to} href={utilityItem.href} className="bsds-nav-link">
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
