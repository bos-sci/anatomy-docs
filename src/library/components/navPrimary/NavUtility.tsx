import Button from '../Button';
import Dropdown from '../Dropdown';
import Link from '../Link';
import { NavItemUtility } from './NavPrimary';

interface Props {
  utilityItems: NavItemUtility[];
}

const NavUtility = ({utilityItems}: Props): JSX.Element => {
  return (
    <nav className="nav-utility" aria-label="utility">
      <ul className="nav">
        {utilityItems.map((utilityItem, i) =>
          <li key={utilityItem.text + i} className="nav-item">
            <Link to={utilityItem.slug} href={utilityItem.href} className="nav-link">{utilityItem.text}</Link>
          </li>
        )}
        <li className="nav-item">
          <Dropdown triggerText="Test" className="nav-link">
            <Button type="button">Button item</Button>
            <Link>Link item</Link>
          </Dropdown>
        </li>
      </ul>
    </nav>
  );
}

export default NavUtility;